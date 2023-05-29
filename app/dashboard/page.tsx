import getCurrentUser from "../actions/getCurrentUser"


const page = async () => {
    const currentUser = await getCurrentUser()
    if(currentUser?.role !== "ADMIN") {
      throw new Error('You need to be an admin')
    }
  return (
    <div>An admin only page</div>
  )
}

export default page