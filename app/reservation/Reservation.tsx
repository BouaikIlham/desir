'use client'

import Container from "../components/Container"
import { SafeReservation } from "../types"
import Heading from "../components/Heading"
interface ReservationProps {
    reservations: SafeReservation[]
}
const Reservation: React.FC<ReservationProps> = ({
    reservations
}) => {
  return (
    <Container>
        <Heading
            title="Reservations"
            subtitle="reservtaion for users"
        />
    </Container>
  )
}

export default Reservation