import getCarById from "@/app/actions/getCarById"

interface IParams {
    carId?: string;
}
const page = async ({params} : {params: IParams}) => {
    const car = await getCarById(params)
  return (
    <div>car id</div>
  )
}

export default page