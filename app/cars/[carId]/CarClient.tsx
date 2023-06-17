'use client'
import CarHead from "@/app/components/cars/CarHead"
import Container from "@/app/components/Container"
import { SafeCar, SafeUser } from "@/app/types"
import CarInfo from "@/app/components/cars/CarInfo"
import { useMemo } from "react"
import { categories } from "@/app/components/navbar/Categories"
import CarReservation from "@/app/components/cars/CarReservation"

const initialDateRange = {
  startDate: new Date(),
  endDate: new Date(),
  key: 'selection'
}
interface CarClientProps {
  car: SafeCar & {
    user: SafeUser;
  } 

  currentUser?: SafeUser | null
}
const CarClient: React.FC<CarClientProps> = ({
  car,
  currentUser
}) => {

  const category = useMemo(() => {
    return categories.find((item) => item.label === car.category)
  }, [car.category])


  return (
    <Container>
      <div className="max-w-screen-lg mx-auto">
        <div className="flex flex-col gap-6">
          <CarHead
            title={car.title}
            imageSrc={car.imageSrc}
            id={car.id}
            description={car.description}
            currentUser={currentUser}
          />
          <div className="grid
                          grid-cols-1
                          md:grid-cols-7
                          md:gap-10
                          mt-6">
              <CarInfo
                user={car.user}
                category={category}
                description={car.description}
              />
              <div className="order-first mb-10 md:order-last md:col-span-3">
                <CarReservation
                  price={car.price}
                  // totalPrice={}
                />
              </div>

          </div>
        </div>
      </div>
    </Container>
  )
}

export default CarClient