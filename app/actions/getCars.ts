import prisma from "../libs/prismadb"


export interface IListingParams {
    userId?: string;
    category?: string;
    startDate?: string;
    endDate?: string;
}
export default async function getCars(params: IListingParams) {

    const {userId, category, startDate, endDate} = params

    let query: any = {}

    if (userId) {
      query.userId = userId
    }
    if (category) {
      query.category = category
    }

    if (startDate && endDate) {
        query.NOT = {
            reservations: {
                some: {
                    OR: [
                        {
                            endDate: {gte: startDate},
                            startDate: {lte: startDate}
                        },
                        {
                            startDate: {lte: endDate},
                            endDate: {gte: endDate}
                        }
                    ]
                }
            }
        }
    }
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