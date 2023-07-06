'use client';
import useSearchModal from "@/app/hooks/useSearchModal";
import Modal from "./Modal";
import {useCallback } from "react";

  enum STEPS {
    MODEL = 0,
    DATE = 1,
    CATEGORY = 2,
  }
const SearchModal = () => {
    const searchModal = useSearchModal()

    const onSubmit = useCallback(() => {
        console.log("submit")
    }, [])
  return (
    <Modal
        isOpen={searchModal.isOpen}
        title="Filters"
        actionLabel="Search"
        secondaryActionLabel="Back"
        // secondaryAction
        onClose={searchModal.onClose}
        onSubmit={onSubmit}

    />
  )
}

export default SearchModal