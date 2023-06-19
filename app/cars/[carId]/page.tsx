import getCarById from "@/app/actions/getCarById"
import getCurrentUser from "@/app/actions/getCurrentUser";
import EmptyState from "@/app/components/EmptyState";
import CarClient from "./CarClient";
import Navbar from "@/app/components/navbar/Navbar";

interface IParams {
    carId?: string;
}
const page = async ({params} : {params: IParams}) => {
    const car = await getCarById(params)
    const currentUser = await getCurrentUser()
    if (!car) {
      return (
        <EmptyState />
       )
    }

      return (
        <>
            <Navbar currentUser={currentUser} />
            <CarClient
              car={car}
              currentUser={currentUser}
            />
        </>
      )
}

export default page