import Navbar from "./components/navbar/Navbar";
import getCurrentUser from './actions/getCurrentUser'
import Container from "./components/Container";
import EmptyState from "./components/EmptyState";
import getCars from "./actions/getCars";
import CarCard from "./components/cars/CarCard";

export default async function  Home() {
  const currentUser = await getCurrentUser();
  const cars  = await getCars();
  console.log(cars)
  const isEmpty = false

  if (isEmpty) {
    return (
      <>
         <Navbar currentUser={currentUser} />
         <EmptyState showReset />
      </>
     
    )
  }
  return (
    <>
       <Navbar currentUser={currentUser} />
       <Container>
          <div className="pt-24
                          grid
                          grid-cols-1
                          sm:grid-cols-2
                          md:grid-cols-3
                          lg:grid-cols-4
                          xl:grid-cols-5
                          2xl:grid-cols-6
                          gap-8">
          {cars.map((car: any) => {
            return (
              <CarCard
                currentUser={currentUser}
                key={car.id}
                data={car}
              />
            )
          })}
          </div>
        </Container>
    </>
   
  )
}
