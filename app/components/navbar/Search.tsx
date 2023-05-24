'use client'

import {BiSearch} from 'react-icons/bi';
const Search = () => {
  return (
    <div className="border-[1px]
                    w-fullmd:w-auto
                    py-2
                    rounded-full
                    shadow-sm
                    hover:shadow-md
                    transition
                    cursor-pointer">
      <div className="flex 
                      flex-row
                      items center 
                      justify-between">
        <div className="text-sm font-medium px-6">
          Anywhere
        </div>
        <div
          className="hidden
                        sm:block
                        font-medium
                        px-6
                        text-sm
                        text-center
                        border-x-[1px]
                        flex-1"
        >
          Any week
        </div>
        <div
          className="text-sm
                        pl-6
                        pr-2
                        text-gray-600
                        flex
                        flex-row
                        items-center
                        gap-3"
        ></div>
        <div className="hidden sm:block ">Add guests</div>
        <div
          className="p-2
            ml-5
            bg-rose-500
            rounded-full
            text-white"
        >
          <BiSearch size={18} />
        </div>
      </div>
    </div>
  )
}

export default Search