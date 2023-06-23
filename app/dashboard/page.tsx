import getCurrentUser from "../actions/getCurrentUser"
import User from "./User"
import Admin from "./Admin"
import getAllUsers from "../actions/getAllUsers"
const page = async () => {
    const currentUser = await getCurrentUser()
    const users = await getAllUsers()
    if(currentUser?.role !== "ADMIN") {
      return <User/>
    }
    return (
        <Admin>
          {/* Welcome back!! {currentUser.name} */}
        </Admin>
    )
}

export default page