import { Car, User } from "@prisma/client";

export type SafeCar = Omit<Car, "createdAt"> & {
  createdAt: string
};

export type SafeUser = Omit<
  User,
  "createdAt" | "updatedAt" | "emailVerified"
> & {
  createdAt: string;
  updatedAt: string;
  emailVerified: string | null;
};