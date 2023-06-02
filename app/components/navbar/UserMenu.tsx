'use client'
import Avatar from '../../components/Avatar'
import MenuItem from './MenuItem'
import {AiOutlineMenu} from 'react-icons/ai'
import { useState, useCallback } from 'react'
import useRegisterModal from '@/app/hooks/UseRegisterModals'
import useLoginModal from '@/app/hooks/UseLoginModals'
import { User } from '@prisma/client'
import {signOut} from 'next-auth/react'
import { useRouter } from 'next/navigation'

interface UserMenuProps {
  currentUser?: User | null
}
const UserMenu: React.FC<UserMenuProps> = ({
  currentUser
}) => {
  const registerModal = useRegisterModal()
  const loginModal = useLoginModal()
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()
  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value)
  }, [])
  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-">
        <div onClick={() => {}}
            className="hidden md:block
                        text-sm font-medium py-3 px-4 rounded-full">
          Airbnb your home
        </div>
        <div
         onClick={toggleOpen}
         className="p-4 
                    md:py-1 
                    md:px-2 
                    border-[1px] 
                    border-neutral-200 
                    flex 
                    flex-row 
                    items-center 
                    gap-3 
                    rounded-full 
                    cursor-pointer 
                    hover:shadow-md 
                    transition">
            <AiOutlineMenu />
            <div className="hidden md:block">
              <Avatar />
            </div>
        </div>
      </div>
      {isOpen && (
          <div className="absolute
            rounded-xl
            shadow-md
            w-[40vw]
            md:w-3/4
            bg-white
            overflow-hidden
            right-0
            top-12
            text-sm">
              <div className="flex flex-col cursor-pointer">
              {currentUser ? (
                <>
                   <MenuItem
                    onClick={() => {}}
                    label="My reservations"
                  />
                  <MenuItem
                    onClick={() => {signOut()}}         
                    label="Logout"
                  />
                  <MenuItem
                    onClick={() => router.push("/user")}         
                    label="My profile"
                  />
                </>
              ) : 
              (
                <>
                 <MenuItem
                  onClick={registerModal.onOpen}
                  label="Sign up"
                />
                <MenuItem
                  onClick={loginModal.onOpen}         
                  label="Login"
                />
                </>
              )
              }
              </div>
          </div>
      )}
      
    </div>
  )
}

export default UserMenu