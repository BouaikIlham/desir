
import Nav from "../components/dashboard/Nav"
import Cars from "../components/dashboard/Cars"
const Admin =  () => {

  return (
    <div className="bg-blue-900 min-h-screen flex">
      <Nav />
      <div className="bg-white flex-grow mt-2 mr-2 mb-2 rounded-lg p-4">
        <Cars />
      </div>
    </div>
  )
}

 

export default Admin