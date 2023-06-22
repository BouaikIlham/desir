'use client'

import Container from "../components/Container"
import { SafeReservation, SafeUser } from "../types"
import Heading from "../components/Heading"
import CarCard from "../components/cars/CarCard"
import { useCallback, useState } from "react"
import axios from "axios"
import { toast } from "react-hot-toast"
import { useRouter } from "next/navigation"

interface ReservationProps {
    reservations: SafeReservation[]
    currentUser: SafeUser | null
}
const Reservation: React.FC<ReservationProps> = ({
    reservations,
    currentUser
}) => {
    const [deletingId, setDeleteingId] = useState('')
    const router = useRouter()
    const onCancel = useCallback((id: string) => {
        setDeleteingId(id)
        axios.delete(`/api/reservations/${id}`)
        .then(() => {
            toast.success("reservation cancled")
            router.refresh()
        })
        .catch(() => {
            toast.error("something went wrong")
        })
        .finally(() => {
            setDeleteingId('')
        })
    }, [router])
  return (
    <Container>
        <Heading
            title="Reservations"
            subtitle="reservtaion for admin"
        />
        <div className="
                       mt-10
                       grid
                       grid-cols-1
                       sm:grid-cols-2
                       md:grid-cols-3
                       lg:grid-cols-4
                       xl:grid-cols-5
                       2xl:grid-cols-6
                       gap-8
        ">
            {reservations.map((reservation) => (
                <CarCard
                    key={reservation.id}
                    data={reservation.car}
                    actionLabel="Cancel guest reservation"
                    actionId={reservation.id}
                    onAction={onCancel}
                    disabled={deletingId === reservation.id}
                    currentUser={currentUser}
                />
            ))}
        </div>
    </Container>
  )
}

export default Reservation