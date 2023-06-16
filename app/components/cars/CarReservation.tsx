'use client'

interface CarReservationProps {
    price: number
}
const CarReservation: React.FC<CarReservationProps> = ({
    price
}) => {
  return (
    <div className="bg-white rounded-xl border-[1px] border-neutral-200 overflow-hidden">
        <div className="flex flex-row items-center gap-1 p-4">
            <div className="text-2xl font-semibold">
                $ {price}
            </div>
            <div className="font-light text-neutral-600">
                night
            </div>
        </div>
        <hr />
    </div>
  )
}

export default CarReservation