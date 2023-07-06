'use client';
import useSearchModal from "@/app/hooks/useSearchModal";
import Modal from "./Modal";
import {useCallback, useState, useMemo} from "react";
import Heading from "../Heading";
import Calendar from "../inputs/Calendar";
import { Range } from 'react-date-range';

  enum STEPS {
    INFO = 0,
    DATE = 1,
    CATEGORY = 2,
  }
const SearchModal = () => {
    const searchModal = useSearchModal()
    const [step, setStep] = useState(STEPS.CATEGORY)
    const [dateRange, setDateRange] = useState<Range>({
      startDate: new Date(),
      endDate: new Date(),
    })

    const onBack = useCallback(() => {
      setStep((value) => value - 1)
    }, [])

    const onNext = useCallback(() => {
      setStep((value) => value + 1)
    }, [])
    const onSubmit = useCallback(async () => {
        if (step !== STEPS.CATEGORY) {
          return onNext()
        }
    }, [step])

    const actionLabel = useMemo(() => {
      if (step === STEPS.CATEGORY) {
        return 'Search'
      }
      return 'Next'
    }, [step])

    const secondaryActionLabel = useMemo(() => {
      if (step === STEPS.INFO) {
        return undefined
      }
      return 'Back'
    }, [step])


    let bodyContent = (
      <div className="flex flex-col gap-8">
        <Heading
          title="When do you plan to go?"
          subtitle="Make sure everyone is free!"
        />
        <Calendar
          onChange={(value) => setDateRange(value.selection)}
          value={dateRange}
        />
      </div>
    )
   
  return (
    <Modal
        isOpen={searchModal.isOpen}
        title="Filters"
        actionLabel={actionLabel}
        secondaryActionLabel={secondaryActionLabel}
        secondaryAction={step === STEPS.INFO ? undefined : onBack}
        onClose={searchModal.onClose}
        onSubmit={onSubmit}
        body={bodyContent}

    />
  )
}

export default SearchModal