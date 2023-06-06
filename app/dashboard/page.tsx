import getCurrentUser from "../actions/getCurrentUser"
import User from "./User"
import Admin from "./Admin"
const page = async () => {
    const currentUser = await getCurrentUser()
    if(currentUser?.role !== "ADMIN") {
      return <User/>
    }
    return (
        <Admin>
          Welcome back!! {currentUser.name}
        </Admin>
    )
}

export default page