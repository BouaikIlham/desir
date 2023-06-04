import Navbar from "./components/navbar/Navbar";
import getCurrentUser from './actions/getCurrentUser'

export default async function  Home() {
  const currentUser = await getCurrentUser();

  return (
    <>
       <Navbar currentUser={currentUser} />
        <div>
          Cars
        </div>
    </>
   
  )
}
