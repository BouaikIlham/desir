
import getCurrentUser from "../actions/getCurrentUser"
import Nav from "../components/dashboard/Nav"
const Admin = async () => {

  const currentUser = await getCurrentUser()

  return (
    <div className="bg-blue-900 min-h-screen flex">
      <Nav />
      <div className="bg-white flex-grow mt-2 mr-2 mb-2 rounded-lg p-4">
        {currentUser?.email}
      </div>
    </div>
  )
}

export default Admin