'use client'

interface MenuItemProps {
    label: string
    onClick: () => void;
}
const MenuItem: React.FC<MenuItemProps> = ({
    label,
    onClick
}) => {
  return (
    <div
        onClick={onClick}
        className="px-4 
                    py-3 
                    transition 
                    font-semibold
                    hover:bg-neutral-100">
        {label}
    </div>
  )
}

export default MenuItem