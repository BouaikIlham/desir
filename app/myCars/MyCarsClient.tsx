'use client'

import { useCallback } from "react";
import Container from "../components/Container";
import Heading from "../components/Heading";
import CarCard from "../components/cars/CarCard";
import { SafeReservation, SafeUser } from "../types";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

interface MyCarsClientProps {
  reservations: SafeReservation[]
  currentUser: SafeUser | null
}
const MyCarsClient: React.FC<MyCarsClientProps>= ({
  reservations,
  currentUser
}) => {
  const router = useRouter()
  const onCancel = useCallback((id: string) => {
    axios.delete(`/api/reservations/${id}`)
    .then(() => {
      toast.success("reservation cancled")
      router.refresh()
    }).catch(() => {
      toast.error("something went wrong")
    })
  }, [])
  return (
    <Container>
      <Heading
        title="My reservations "
        subtitle="My cars as a client"
      />
      <div className="mt-10
                      grid
                      grid-cols-1
                      sm:grid-cols-2
                      md:grid-cols-3
                      lg:grid-cols-4
                      xl:grid-cols-5
                      2xl:grid-cols-6
                      gap-8">
        {reservations.map((reservation) => (
            <CarCard
              key={reservation.id}
              data={reservation.car}
              reservation={reservation}
              actionId={reservation.id}
              actionLabel="Cancel reservation"
              onAction={onCancel}
              disabled={false}
            />
        ))}
      </div>
      
      </Container>
  )
}

export default MyCarsClient