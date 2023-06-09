'use client'

import { useCallback } from "react"
import UseRentalModal from "../hooks/UseRentalModal"
const Cars = () => {
    const rentalModal = UseRentalModal()
    const onRent = useCallback(() => {
        rentalModal.onOpen()
    }, [rentalModal])
  return (
        <div>
            <button onClick={onRent}
                    className="bg-blue-900 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
                Add Car
            </button>

        </div>
    )
}

export default Cars