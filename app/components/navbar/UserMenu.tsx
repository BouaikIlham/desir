'use client'
import Avatar from '../../components/Avatar'
import MenuItem from './MenuItem'
import {AiOutlineMenu} from 'react-icons/ai'
import { useState, useCallback } from 'react'
import useRegisterModal from '@/app/hooks/UseRegisterModals'
import useLoginModal from '@/app/hooks/UseLoginModals'
import {signOut} from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { SafeUser } from '@/app/types'

interface UserMenuProps {
  currentUser?: SafeUser | null
}
const UserMenu: React.FC<UserMenuProps> = ({
  currentUser
}) => {
  const registerModal = useRegisterModal()
  const router = useRouter()
  const loginModal = useLoginModal()
  const [isOpen, setIsOpen] = useState(false)
  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value)
  }, [])
  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-">
        <div
            className="hidden md:block
                        text-sm font-medium py-3 px-4 rounded-full">  
     
     <button className="cursor pointer"
                  onClick={() => router.push("/dashboard")}>Admin
                </button>    
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
                    onClick={() => router.push("/myCars")}
                    label="My cars"
                  />
                  <MenuItem
                    onClick={() => router.push("/user")}         
                    label="My profile"
                  />
                  <MenuItem
                    onClick={() => {signOut()}}         
                    label="Logout"
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