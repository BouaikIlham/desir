import primsa from "../../app/libs/prismadb"
import getCurrentUser from "./getCurrentUser"

export default async function getFavoriteCars() {
    try {
        const currentUser = await getCurrentUser()

        if (!currentUser) {
            return []
        }
        const favorites = await primsa.car.findMany({
            where: {
                id: {
                    in: [...(currentUser.favoriteIds || [])]
                }
            }
        })

        const safeFavrites = favorites.map((favorite) => ({
            ...favorite,
            createdAt: favorite.createdAt.toISOString()
        }))


        return safeFavrites
    } catch (error: any) {
        throw new Error(error)

    }
}