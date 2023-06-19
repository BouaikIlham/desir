
import getCurrentUser from "../actions/getCurrentUser"
import getReservations from "../actions/getReservations"
import Navbar from "../components/navbar/Navbar"
import MyCarsClient from "./MyCarsClient"

const page = async () => {
  const reservations = await getReservations()
  const currentUser = await getCurrentUser()
  return (
    <>
      <Navbar currentUser={currentUser} />
      <MyCarsClient
        reservations={reservations}
        currentUser={currentUser}
      />
    </>
  )
}

export default page