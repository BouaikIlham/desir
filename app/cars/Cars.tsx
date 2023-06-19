'use client'
import axios from "axios";
import UseRentalModal from "../hooks/UseRentalModal"
import { useCallback, useState } from "react";
import CarCard from "../components/cars/CarCard";
import { useRouter } from "next/navigation";
import { SafeCar, SafeUser } from "../types";
import { toast } from "react-hot-toast";


interface CarsProps {
    cars: SafeCar[],
    currentUser: SafeUser | null
}
const Cars: React.FC<CarsProps> = ({
    cars,
    currentUser
}) => {
    const rentalModal = UseRentalModal()
    const onRent = useCallback(() => {
        rentalModal.onOpen()
    }, [rentalModal])

   const router = useRouter()
  const [deletingId, setDeletingId] = useState('')
  const onCancel = useCallback((id: string) => {
    axios.delete(`/api/cars/${id}`)
    .then(() => {
        toast.success('Car deleted')
        router.refresh();
    })
    .catch(() => {
        toast.error("Something went wrong!")
    })
    .finally(() => {
        setDeletingId('')
    })
  }, [router])
  return (
        <>
            <button onClick={onRent}
                    className="bg-blue-900 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
                Add Car
            </button>

            <div
        className="pt-24
                          grid
                          grid-cols-1
                          sm:grid-cols-2
                          md:grid-cols-3
                          lg:grid-cols-4
                          xl:grid-cols-5
                          2xl:grid-cols-6
                          gap-8"
      >
        {cars.map((car: any) => {
          return (
            <CarCard
              currentUser={currentUser}
              key={car.id}
              data={car}
              actionLabel="Delete car"
              onAction={onCancel}
              actionId={car.id}
              disabled={deletingId === car.id}
            />
          );
        })}
      </div>

      </>
    )
}

export default Cars