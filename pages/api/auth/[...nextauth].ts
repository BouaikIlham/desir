import { AuthOptions } from "next-auth";
import { PrismaClient } from "@prisma/client";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt"
import NextAuth from "next-auth/next";
const prisma = new PrismaClient();

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
  ],
};



export default NextAuth(authOptions)