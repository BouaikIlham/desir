'use client'

import Image from "next/image"
import HeartButton from "../HeartButton"
const CarHead = () => {
  return (
    <>
        <Heading
            title={}
            subtitle={}
        />



        <div className="w-full
                        h-[60vh]
                        overflow-hidden
                        rounded-xl
                        relative">
            <Image
                alt="Image"
                src={}
                fill
                className="object-cover w-full"
            />

            <div className="absolute top-5 right-5">
                <HeartButton
                 
                />
            </div>
        </div>
    </>
  )
}

export default CarHead