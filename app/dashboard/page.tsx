import getCurrentUser from "../actions/getCurrentUser"
import Admin from "./Admin"

const page = async () => {
    const currentUser = await getCurrentUser()
    console.log(currentUser?.role)
    if(currentUser?.role !== "ADMIN") {
      return <Admin/>
    }
    return (
      <>
        <div>An admin only page</div>
        <p>Add cars</p>
      </>
    )
}

export default page