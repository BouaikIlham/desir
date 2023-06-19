import prisma from "../libs/prismadb"

export default async function getCars() {
    try {
        const reservations = await prisma.reservation.findMany({
            orderBy: {
                createdAt: 'desc'
            }
        });

        const safeReservations = reservations.map((reservation) => ({
            ...reservation,
            createdAt: reservation.createdAt.toISOString(),
        }))

        return safeReservations

    } catch (error:any) {
        throw new Error(error)
    }
}