'use client'
import { IconType } from "react-icons"
import Avatar from "../Avatar"
import CarCategory from "./CarCategory"
import { SafeUser } from "@/app/types"
interface CarInfo  {
    user: SafeUser | null 
    category: 
      | {
        icon: IconType;
        label: string;
      }
      | undefined
    description: string
}

const CarInfo: React.FC<CarInfo> = ({
  user,
  category,
  description
}) => {
  return (
    <div className="col-span-4 flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <div className="text-xl
                        font-semibold
                        flex
                        flex-row
                        items-center
                        gap-2">
          <div>Hosted By {user?.name}</div>
          <Avatar src={user?.image} />
        </div>
        <div className="flex flex-row items-center gap-4 font-light text-neutral-500">
            <div>guests</div>
            <div>guests</div>
            <div>guests</div>
        </div>
      </div>
      <hr />
      {category && (
        <CarCategory
         icon={category.icon}
         label={category.label}
        />
      )}
      <div className="text-lg font-light text-neutral-500">
          {description}
      </div>
    </div>
  )
}

export default CarInfo