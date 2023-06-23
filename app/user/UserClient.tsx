'use client'
import Container from "../components/Container";
import Heading from "../components/Heading";
import CarCard from "../components/cars/CarCard";
import { SafeCar, SafeUser } from "../types"

interface UserClientProps {
  currentUser: SafeUser | null;
  cars: SafeCar[];
}
const UserClient: React.FC<UserClientProps> = ({
  currentUser,
  cars
}) => {
  return (
    <Container>
       <Heading
        title="Favorites"
        subtitle="List of cars you have favorited!"
      />
      <div className="mt-10
                      grid
                      gap-4
                      grid-cols-1
                      sm:grid-cols-2
                      md:grid-cols-3
                      lg:grid-cols-4
                      xl:grid-cols-5
                      2xl:grid-cols-6
                    ">
        {cars.map((car) => (
          <CarCard
            key={car.id}
            data={car}
            currentUser={currentUser}

          />
        ))}
      </div>
    </Container>
  )
}

export default UserClient