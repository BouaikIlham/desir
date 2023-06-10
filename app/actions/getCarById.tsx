import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

interface IParams {
  carId?: string;
}

export default async function getCarById(params: IParams) {
  try {
    const { carId } = params;
    const car = await prisma.car.findUnique({
      where: {
        id: carId,
      },
      include: {
        user: true,
      },
    });

    if (!car) {
        return null;
    }

    return {
        ...car,
        createdAt: car.createdAt.toString(),
        user: {
          ...car.user,
          createdAt: car.user.createdAt.toString(),
          updatedAt: car.user.updatedAt.toString(),
          emailVerified: 
            car.user.emailVerified?.toString() || null,
        }
    }
  } catch(error: any) {
    throw new Error(error)
  }
}
