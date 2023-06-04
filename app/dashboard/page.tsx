import getCurrentUser from "../actions/getCurrentUser"
import Admin from "./Admin"
import User from "./User"

const page = async () => {
    const currentUser = await getCurrentUser()
    console.log(currentUser?.role)
    if(currentUser?.role !== "ADMIN") {
      return <User/>
    }
    return (
     <Admin />
    )
}

export default page