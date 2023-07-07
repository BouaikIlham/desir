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
import { categories } from "../navbar/Categories";
import CategoryInput from "../inputs/CategoryInput";



  enum STEPS {
    CATEGORY = 0,
    DATE = 1,
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
        if (step !== STEPS.DATE) {
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

    setStep(STEPS.DATE);

    searchModal.onClose()
    router.push(url)
    }, [step, searchModal, onNext, dateRange, router, params])

    const actionLabel = useMemo(() => {
      if (step === STEPS.DATE) {
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
        title="what of these describes your car ?"
        subtitle="pick a category"
      />
      <div className="grid grid-col-1 md:grid-cols-2 gap-3 max-h-[50vh] overflow-y-auto">
        {categories.map((item) => (
          <div key={item.label} className="col-span-1">
            <CategoryInput
              label={item.label}
              icon={item.icon}
              onClick={() => {}}
              selected={true}
            />
          </div>
        ))}
      </div>
    </div>
    )


    if (step === STEPS.DATE) {
      bodyContent = (
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