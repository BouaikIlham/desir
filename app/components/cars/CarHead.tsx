'use client'

import Image from "next/image"
import HeartButton from "../HeartButton"
import Heading from "../Heading"
import { SafeUser } from "@/app/types"

interface CarHead {
    title: string
    id: string
    imageSrc: string
    description: string
    currentUser?: SafeUser | null
}
const CarHead: React.FC<CarHead> = ({
    title,
    id,
    imageSrc,
    currentUser,
    description
}) => {
  return (
    <>
        <Heading
            title={title}
            subtitle={description}
        />



        <div className="w-full
                        h-[60vh]
                        overflow-hidden
                        rounded-xl
                        relative">
            <Image
                alt="Image"
                src={imageSrc}
                fill
                className="object-cover w-full"
            />

            <div className="absolute top-5 right-5">
                <HeartButton
                    carId={id}
                    currentUser={currentUser}
                />
            </div>
        </div>
    </>
  )
}

export default CarHead