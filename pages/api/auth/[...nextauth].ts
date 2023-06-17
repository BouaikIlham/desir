import { AuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt"
import NextAuth from "next-auth/next";
import prisma from "../../../app/libs/prismadb"

export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Invalid credentials");
        }
        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email,
          },
        });

        if (!user || !user.hashedPassword) {
            throw new Error("Invalid credentials");
        }

        const isCorrectPassword = await bcrypt.compare(
            credentials.password,
            user.hashedPassword
        )

        if (!isCorrectPassword) {
            throw new Error("Invalid credentials");
        }

        return user
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
    })
  ],

  pages: {
    signIn: '/'
  },
  debug: process.env.NODE_ENV === 'development',
  session: {
    strategy: "jwt"
  },
  secret: process.env.NEXTAUTH_SECRET
};



export default NextAuth(authOptions)