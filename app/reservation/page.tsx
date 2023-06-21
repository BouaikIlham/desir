import Admin from "../dashboard/Admin"
import getCurrentUser from "../actions/getCurrentUser"
import getReservations from "../actions/getReservations"
import Reservation from "./Reservation"
import EmptyState from "../components/EmptyState"
import User from "../dashboard/User"
const page = async () => {
  const currentUser = await getCurrentUser()

  if(currentUser?.role !== "ADMIN") {
    return (
            <User />
    )
}
  const reservations = await getReservations({
    authorId: currentUser.id
  })
    return (
      <Admin>      

        <Reservation
          reservations = {reservations}
        />
      </Admin>  
    )
}

export default page