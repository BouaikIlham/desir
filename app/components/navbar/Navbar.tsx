'use client'
import Container from "../Container"
import Search from "./Search"
import Logo from "./Logo"
import UserMenu from "./UserMenu"
import { User } from "@prisma/client"
import { useRouter } from "next/navigation"
import Categories from "./Categories"
interface NavbarProps {
  currentUser?: User | null
}
const Navbar: React.FC<NavbarProps> = ({
  currentUser
}) => {
  const route = useRouter()
  return (
    <div className="fised w-full bg-white z-10 shadow-sm"> 
        <div className="py-4 border-b-[1px]">
            <Container>
                <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
                    <Logo />
                    <button className="cursor pointer"
                       onClick={() => route.push("/dashboard")}>Dashboard
                    </button>
                    <Search />
                    <p>{currentUser?.email}</p>
                    <UserMenu currentUser={currentUser}  />
                </div>
            </Container>
            <Categories />
        </div>
    </div>
  )
}

export default Navbar