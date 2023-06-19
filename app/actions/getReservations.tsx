import prisma from "../libs/prismadb";

export default async function getReservations() {
  try {
    const reservations = await prisma.reservation.findMany({
      include: {
        car: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    const safeReservations = reservations.map((reservation) => ({
      ...reservation,
      createdAt: reservation.createdAt.toDateString(),
      startDate: reservation.startDate.toISOString(),
      endDate: reservation.endDate.toISOString(),
      car: {
        ...reservation.car,
        createdAt: reservation.car.createdAt.toISOString(),
      },
    }));

    return safeReservations;
  } catch (error: any) {
    throw new Error(error);
  }
}
