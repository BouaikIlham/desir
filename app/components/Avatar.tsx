'use client'

import Image from "next/image"
import placeholder from "../../public/images/placeholder.jpg"
const Avatar = () => {
  return (
    <Image
      src={placeholder}
      height={30}
      width={30}
      alt="placeholder"
      className="rounded-full"
    />
  )
}

export default Avatar