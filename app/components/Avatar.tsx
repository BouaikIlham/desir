'use client'

interface AvatarProps {
  src?: string | null | undefined
}

import Image from "next/image"
import placeholder from "../../public/images/placeholder.jpg"
const Avatar: React.FC<AvatarProps> = ({
  src
}) => {
  return (
    <Image
      src={src || placeholder}
      height={30}
      width={30}
      alt="placeholder"
      className="rounded-full"
    />
  )
}

export default Avatar