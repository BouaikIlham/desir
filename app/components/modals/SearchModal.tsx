'use client';
import useSearchModal from "@/app/hooks/useSearchModal";
import Modal from "./Modal";
import {useCallback, useState, useMemo} from "react";
import Heading from "../Heading";
import Calendar from "../inputs/Calendar";
import { Range } from 'react-date-range';
import { useSearchParams, useRouter } from "next/navigation";
import qs from 'query-string';
import { formatISO } from 'date-fns';



  enum STEPS {
    CATEGORY = 0,
    DATE = 1,
    INFO = 2,
  }
const SearchModal = () => {
    const searchModal = useSearchModal()
    const params = useSearchParams()
    const router = useRouter()
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
        if (step !== STEPS.INFO) {
          return onNext()
        }

        let currentQuery = {};

    if (params) {
      currentQuery = qs.parse(params.toString())
    }

    const updatedQuery: any = {
      ...currentQuery,  
    };

    if (dateRange.startDate) {
      updatedQuery.startDate = formatISO(dateRange.startDate);
    }

    if (dateRange.endDate) {
      updatedQuery.endDate = formatISO(dateRange.endDate);
    }

    const url = qs.stringifyUrl({
      url: '/',
      query: updatedQuery,
    }, { skipNull: true });

    setStep(STEPS.INFO);

    searchModal.onClose()
    router.push(url)
    }, [step, searchModal, onNext, dateRange, router, params])

    const actionLabel = useMemo(() => {
      if (step === STEPS.INFO) {
        return 'Search'
      }
      return 'Next'
    }, [step])

    const secondaryActionLabel = useMemo(() => {
      if (step === STEPS.CATEGORY) {
        return undefined
      }
  
      return 'Back'
    }, [step]);

    let bodyContent = (
      <div className="flex flex-col gap-8">
        <Heading
          title="When do you plan to go?"
          subtitle="Make sure everyone is free!"
        />
        {/* <Calendar
          onChange={(value) => setDateRange(value.selection)}
          value={dateRange}
        /> */}
        <p>Category</p>
      </div>
    )


    if (step === STEPS.DATE) {
      bodyContent = (
        <div className="flex flex-col gap-8">
          <Heading
            title="When do you plan to go?"
            subtitle="Make sure everyone is free!"
          />
          <p>Date</p>
        </div>
      )
    }

    if (step === STEPS.INFO) {
      bodyContent = (
        <div className="flex flex-col gap-8">
          <Heading
            title="When do you plan to go?"
            subtitle="Make sure everyone is free!"
          />
          <p>Info</p>
        </div>
      )
    }
   
  return (
    <Modal
        isOpen={searchModal.isOpen}
        title="Filters"
        actionLabel={actionLabel}
        secondaryActionLabel={secondaryActionLabel}
        secondaryAction={step === STEPS.CATEGORY ? undefined : onBack}
        onClose={searchModal.onClose}
        onSubmit={onSubmit}
        body={bodyContent}

    />
  )
}

export default SearchModal