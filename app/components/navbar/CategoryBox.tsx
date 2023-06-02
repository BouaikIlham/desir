"use client";

import { IconType } from "react-icons";

interface CategoryBoxProps {
  label: string;
  icon: IconType;
}
const CategoryBox: React.FC<CategoryBoxProps> = ({ label, icon: Icon }) => {
  return (
    <div
      onClick={() => {}}
      className={`flex
                         flex-col
                         items-center
                         justify--center
                         gap-2
                         p-3
                         border-b-2
                         hover:text-neutral-800
                         transition
                         cursor-pointer
                         
                         
                         `}
    >
      <Icon size={26} />
      <div className="font-medium text-sm">{label}</div>
    </div>
  );
};

export default CategoryBox;
