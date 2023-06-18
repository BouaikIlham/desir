import { NextResponse } from "next/server";
import getCurrentUser from "@/app/actions/getCurrentUser";
import prisma from "../../../libs/prismadb"

interface IParams {
    carId?: string;
}


export async function POST(
    request: Request,
    { params } : {params: IParams}
) {
    const currentUser = await getCurrentUser();

    if (!currentUser) {
        return NextResponse.error();
    }

    const { carId } = params;
    if (!carId || typeof carId !== 'string') {
        throw new Error('Invalid ID')
    }

    let favoriteIds = [...(currentUser.favoriteIds || [])] 
    favoriteIds = favoriteIds.filter((id) => id !== carId)
    const user = await prisma.user.update({
        where: {
            id: currentUser.id
        },
        data: {
            favoriteIds
        }
    })

    return NextResponse.json(user)

}