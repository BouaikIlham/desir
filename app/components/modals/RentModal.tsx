"use client";
import Modal from "./Modal";
import UseRentalModal from "@/app/hooks/UseRentalModal";
const RentModal = () => {
    const rentalModal = UseRentalModal()

    const bodyContent = (
        <div>
            <h1>bodyContent</h1>
        </div>
    )
    const footerContent = (
        <div>
            <h2>footerContent</h2>
        </div>
    )
  return (
    <Modal
        isOpen={rentalModal.isOpen}
        onClose={rentalModal.onClose}
        onSubmit={() => {}}
        title="hello"
        body={bodyContent}
        footer={footerContent}
        actionLabel={"Next"}
    />
  )
}

export default RentModal