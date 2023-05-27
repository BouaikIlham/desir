'use client'
import Modal from "./Modal"
import useLoginModal from "@/app/hooks/UseLoginModals"
import useRegisterModal from "@/app/hooks/UseRegisterModals"
import Heading from "../Heading"
import Input from "../inputs/Input"
import Button from "../Button"
import { useState, useCallback } from "react"
import { useForm, FieldValues, SubmitHandler} from "react-hook-form"
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import {signIn} from 'next-auth/react'
import { toast } from "react-hot-toast"
const LoginModal = () => {
  const loginModal = useLoginModal()
  const registerModal = useRegisterModal()
  const [isLoading, setIsLoading] = useState(false)

  const toggle = useCallback(() => {
    loginModal.onClose();
    registerModal.onOpen()
  }, [loginModal, registerModal])

  const {register, handleSubmit, formState: { errors },} = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    }
  });
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
      setIsLoading(true)
       signIn('credentials', {
        ...data,
        redirect: false
       })
      .then((callback) => {
        setIsLoading(false)
        if(callback?.ok) {
            toast.success("Logged in")
            loginModal.onClose()
        }
        if (callback?.error) {
            toast.error(callback.error)
        }
      })
  }
  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Heading
        title="Welcome back to Desir"
        subtitle="Login to you account"
        center={false}
      />
       <Input
        id="email"
        label="Email"
        disabled={isLoading}
        register={register}
        errors={errors}
        type="email"
      />
       <Input
        id="password"
        label="Password"
        disabled={isLoading}
        register={register}
        errors={errors}
        type="password"
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
            First time using Desir ?
          </div>
          <div className="text-neutral-900 font-bold  cursor-pointer hover:underline"
               onClick={toggle}>
            Register
          </div>
        </div>
      </div>
    </div>
  );
  return (
    <Modal
      title="Login"
      isOpen={loginModal.isOpen}
      disabled={isLoading}
      onClose={loginModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      actionLabel="Continue"
      body={bodyContent}
      footer={footerContent}
    />
  )
}

export default LoginModal;