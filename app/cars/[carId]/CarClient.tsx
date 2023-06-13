'use client'
import CarHead from "@/app/components/cars/CarHead"
import Container from "@/app/components/Container"

const CarClient = () => {
  return (
    <Container>
      <div className="max-w-screen-lg mx-auto">
        <div className="flex flex-col gap-6">
          <CarHead />
        </div>
      </div>
    </Container>
  )
}

export default CarClient