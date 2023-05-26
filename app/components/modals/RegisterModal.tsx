'use client'
import Modal from "./Modal"
import useRegisterModal from "../../hooks/UseRegisterModals"
import Heading from "../Heading"
import Input from "../inputs/Input"
import Button from "../Button"
import { useState } from "react"
import { useForm, FieldValues, SubmitHandler} from "react-hook-form"
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
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
    <div className="flex flex-col gap-4 mt-3">
      <div className="inline-flex items-center justify-center w-full">
        <hr className="w-full h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
        <span className="absolute px-3 font-medium text-gray-900 -translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-gray-900">
          or
        </span>
      </div>
        <Button
          outline
          label="Contine with Google"
          icon={FcGoogle}
          onClick={() => {}}
        />
        <Button
          outline
          label="Contine with Github"
          icon={AiFillGithub}
          onClick={() => {}}
        />
      <div className="text-neutral-500 text-center mt-4 font-light">
        <div className="flex flex-row justify-center items-center gap-2">
          <div>
            Aleardy have an account
          </div>
          <div className="text-neutral-900 font-bold  cursor-pointer hover:underline"
               onClick={() => {}}>
            Log in
          </div>
        </div>
      </div>
    </div>
  );
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