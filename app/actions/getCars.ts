import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()
export default async function getCars() {
    try {
        const cars = await prisma.car.findMany({
            orderBy: {
                createdAt: 'desc'
            }
        });

        const safeCars = cars.map((car) => ({
            ...car,
            createdAt: car.createdAt.toISOString(),
        }))

        return safeCars

    } catch (error:any) {
        throw new Error(error)
    }
}