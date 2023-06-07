"use client";
import Modal from "./Modal";
import UseRentalModal from "@/app/hooks/UseRentalModal";
import { useMemo, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Heading from "../Heading";
import CategoryInput from "../inputs/CategoryInput";
import { categories } from "../navbar/Categories";
enum STEPS {
  CATEGORY = 0,
  LOCATION = 1,
  INFO = 2,
  IMAGES = 3,
  DESCRIPTION = 4,
  PRICE = 5,
}
const RentModal = () => {
  const [step, setStep] = useState(STEPS.CATEGORY);
  const [isLoading, setIsLoading] = useState(false);
  const rentalModal = UseRentalModal();

  const {
    register,
    watch,
    formState: { errors },
    handleSubmit,
    setValue,
  } = useForm<FieldValues>({
    defaultValues: {
      category: "",
      location: null,
      imageSrc: "",
      price: 1,
      title: "",
      description: "",
    },
  });
  const category = watch("category");
  const location = watch("location");
  const imageSrc = watch("imageSrc");

  const onBack = () => {
    setStep((value) => value - 1);
  };

  const onNext = () => {
    setStep((value) => value + 1);
  };

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    if (step !== STEPS.PRICE) {
      return onNext();
    }

    setIsLoading(true);
    console.log(data);
  };

  const actionLabel = useMemo(() => {
    if (step === STEPS.PRICE) {
      return "Create";
    }

    return "Next";
  }, [step]);

  const secondaryActionLabel = useMemo(() => {
    if (step === STEPS.CATEGORY) {
      return undefined;
    }

    return "Back";
  }, [step]);
  const bodyContent = (
    <div className="flex flex-col gap-8">
      <Heading
        title="what of these describes your car ?"
        subtitle="pick a category"
      />
      <div className="grid grid-col-1 md:grid-cols-2 gap-3 max-h-[50vh] overflow-y-auto">
        {categories.map((category) => (
          <div key={category.label} className="col-span-1">
            <CategoryInput
              label={category.label}
              icon={category.icon}
              onClick={() => {}}
              selected
            />
          </div>
        ))}
      </div>
    </div>
  );
  const footerContent = (
    <div>
      <h2>footerContent</h2>
    </div>
  );
  return (
    <Modal
      isOpen={rentalModal.isOpen}
      onClose={rentalModal.onClose}
      onSubmit={() => {}}
      title="hello"
      body={bodyContent}
      footer={footerContent}
      actionLabel={actionLabel}
      secondaryActionLabel={secondaryActionLabel}
      secondaryAction={step === STEPS.CATEGORY ? undefined : onBack}
    />
  );
};

export default RentModal;
