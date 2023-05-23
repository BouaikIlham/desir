'use client'
import Image from "next/image"
import logo from "../../../public/images/logo.png"
import {useRouter} from "next/navigation"
const Logo = () => {
    const router = useRouter()
  return (
    <Image
        className="cursor-pointer hidden md:block"
        onClick={() => router.push('/')}
        src={logo}
        alt="logo"
        width="100"
        height="100"
        />
  )
}

export default Logo