
import getCurrentUser from "../actions/getCurrentUser"
import getReservations from "../actions/getReservations"
import EmptyState from "../components/EmptyState"
import Navbar from "../components/navbar/Navbar"
import MyCarsClient from "./MyCarsClient"

const page = async () => {
  const currentUser = await getCurrentUser()

  if (!currentUser) {
    return (
      <>
           <Navbar currentUser={currentUser} />
           <EmptyState
              title="Unauthorized"
              subtitle="Please Login"
            />
      </>
    )
  }

  const reservations = await getReservations({
    userId: currentUser.id
  })



  if (reservations.length === 0) {
    return (
      <>
           <Navbar currentUser={currentUser} />
           <EmptyState
              title="No reservation found "
              subtitle="Add some cars"
            />
      </>
    )
  }
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