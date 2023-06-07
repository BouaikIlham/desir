"use client";
import Modal from "./Modal";
import UseRentalModal from "@/app/hooks/UseRentalModal";
import { useMemo, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Heading from "../Heading";
import CategoryInput from "../inputs/CategoryInput";
import Input from "../inputs/Input";
import { categories } from "../navbar/Categories";
import ImageUpload from "../inputs/ImageUpload";

enum STEPS {
  CATEGORY = 0,
  INFO = 1,
  IMAGES = 2,
  DESCRIPTION = 3,
  PRICE = 4,
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
      model: ""
    },
  });


  const category = watch("category");
  const imageSrc = watch("imageSrc");

  console.log(imageSrc)

  const setCustomValue = (id: string, value: any) => {
    setValue(id, value, {
      shouldValidate: true,
      shouldDirty: true,
      shouldTouch: true,
    })
  }

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
    // console.log(data);
  };

  const actionLabel = useMemo(() => {
    if (step === STEPS.PRICE) {
      return "Create";
    }

    return "Next";
  }, [step]);

  const secondaryActionLabel = useMemo(() => {
    if (step === STEPS.CATEGORY) {
      return  undefined;
    }
    return "Back";
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
              selected
            />
          </div>
        ))}
      </div>
    </div>
  );

  if (step === STEPS.INFO) {
    bodyContent = (
        <div className="flex flex-col gap-8">
            <Heading
                title="Share some basics about your car"
                subtitle="what amenities do you have"
            />
            <Input
                id="model"
                label='model'
                disabled={isLoading}
                register={register}
                errors={errors}
                required
            />
        </div>
    )
  }

  if (step === STEPS.IMAGES) {
    bodyContent = (
        <div className="flex flex-col gap-8">
            <ImageUpload
              value={imageSrc}
              onChange={(value) => setCustomValue("imageSrc", value)}
            />
        </div>
    )
  }

  if (step === STEPS.DESCRIPTION) {
    bodyContent = (
      <div className="flex flex-col gap-8">
      <Heading
         title="How would you describe your car?"
         subtitle="Short and sweet works best!"
       />
       <Input
          id="title"
          label='Title'
          disabled={isLoading}
          register={register}
          errors={errors}
          required
        />
        <hr />

        <Input
          id="description"
          label='Description'
          disabled={isLoading}
          register={register}
          errors={errors}
          required
        />
    </div>
    )
  }

  if(step === STEPS.PRICE) {
    bodyContent = (
      <div className="flex flex-col gap-8">
        <Heading
          title="Now set your price"
          subtitle="How much do you charge per night?"
        />
        <Input
          id="price"
          label="Price"
          formatPrice={true}
          type="number"
          disabled={isLoading}
          register={register}
          errors={errors}
          required
        />
      </div>
    )
  }

  return (
    <Modal
      isOpen={rentalModal.isOpen}
      onClose={rentalModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      title="Add Car"
      body={bodyContent}
      actionLabel={actionLabel}
      secondaryActionLabel={secondaryActionLabel}
      secondaryAction={step === STEPS.CATEGORY ? undefined : onBack}
    />
  );
};

export default RentModal;
