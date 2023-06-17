'use client'
import Container from "../Container"
import Search from "./Search"
import Logo from "./Logo"
import UserMenu from "./UserMenu"
import { useRouter } from "next/navigation"
import Categories from "./Categories"
import { SafeUser } from "@/app/types"
interface NavbarProps {
  currentUser?: SafeUser | null
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
                    <UserMenu currentUser={currentUser}  />
                </div>
            </Container>
            <Categories />
        </div>
    </div>
  )
}

export default Navbar