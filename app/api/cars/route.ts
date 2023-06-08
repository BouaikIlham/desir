import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import getCurrentUser from "@/app/actions/getCurrentUser";

const prisma = new PrismaClient()
export async function POST(request: Request) {
    const currentUser = await getCurrentUser();

    if (!currentUser) {
        return NextResponse.error()
    }

    const body = await request.json()
    const {
        title,
        description,
        imageSrc,
        category,
        price,
        model
    } = body;

    Object.keys(body).forEach((value:any) => {
        if(!body[value]) {
            NextResponse.error();
        }
    });

    const car = await prisma.car.create({
        data: {
            title,
            description,
            imageSrc,
            category,
            model,
            price: parseInt(price, 10),
            userId: currentUser.id
        }
    });
    return NextResponse.json(car)
 
}