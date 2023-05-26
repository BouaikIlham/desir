'use client'
import Modal from "./Modal"
import useRegisterModal from "../../hooks/UseRegisterModals"
import Heading from "../Heading"
import Input from "../inputs/Input"
import { useState } from "react"
import { useForm, FieldValues, SubmitHandler} from "react-hook-form"
const RegisterModal = () => {
  const registerModal = useRegisterModal()
  const [isLoading, setIsLoading] = useState(false)

  const {register, handleSubmit, formState: { errors },} = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    }
  });
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true)
      // Post method
  }
  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Heading
        title="Welcome to Desir"
        subtitle="Create an account"
        center={false}
      />
      <Input
        id="name"
        label="Name"
        disabled={isLoading}
        register={register}
        errors={errors}
      />
       <Input
        id="email"
        label="Email"
        disabled={isLoading}
        register={register}
        errors={errors}
      />
       <Input
        id="password"
        label="Password"
        disabled={isLoading}
        register={register}
        errors={errors}
      />
    </div>
  )

  const footerContent = (
    <div>
      {/* Providers */}
    </div>
  )
  return (
    <Modal
      title="Register"
      isOpen={registerModal.isOpen}
      disabled={isLoading}
      onClose={registerModal.onClose}
      onSubmit={() => handleSubmit(onSubmit)}
      actionLabel="Continue"
      body={bodyContent}
      footer={footerContent}
    />
  )
}

export default RegisterModal