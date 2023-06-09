"use client";
import { User } from "@prisma/client";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
interface HeartButtonProps {
  carId: string;
  currentUser?: User | null;
}

const HeartButton: React.FC<HeartButtonProps> = ({
  carId,
  currentUser,
}) => {
  
  return (
    <div
      onClick={() => {}}
      className="relative
                        hover:opacity-80
                        transition
                        cursor-pointer"
    >
      <AiOutlineHeart
        size={28}
        className="fill-white
                            absolute
                           -top[2px]
                           -right-[2px]"
      />
      <AiFillHeart
        size={24}
      />
    </div>
  );
};

export default HeartButton;
