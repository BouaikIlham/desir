'use client'
import CarHead from "@/app/components/cars/CarHead"
import Container from "@/app/components/Container"
import { Car, User } from "@prisma/client"


interface CarClientProps {
  car: Car & {
    user: User;
  };

  currentUser?: User | null
}
const CarClient: React.FC<CarClientProps> = ({
  car,
  currentUser
}) => {
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
        </div>
      </div>
    </Container>
  )
}

export default CarClient