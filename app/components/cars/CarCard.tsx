'use client'
import Image from "next/image";
import HeartButton from "../HeartButton";
import { useRouter } from "next/navigation";
import { SafeCar, SafeUser } from "@/app/types";
interface CarCardProps {
    currentUser?: SafeUser | null;
    data: SafeCar;
}
const CarCard: React.FC<CarCardProps> = ({
    currentUser,
    data
}) => {
    const router = useRouter()
  return (
    <div onClick={() => router.push(`/cars/${data.id}`)}
         className="col-span-1 cursor-pointer group">
        <div className="flex flex-col gap- w-full">
            <div className="aspect-square w-full relative overflow-hidden rounded-xl">
                <Image
                    alt="car"
                    src={data.imageSrc}
                    fill
                    className="object-cover
                               h-full
                               w-full
                               group-hover:scale-100
                               transition"
                />
                <div className="absolute top-3 right-3">
                    <HeartButton
                        carId={data.id}
                        currentUser={currentUser}
                    />
                </div>
            </div>
            <div className="font-semibold text-lg">
                {data.title}
            </div>
            <div className="font-light text-neutral-500">
                {data.category}
            </div>
            <div className="flex flex-row items-center gap-1">
                <div className="font-semibold">
                    $ {data.price} <span className="font-light">/ night</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CarCard