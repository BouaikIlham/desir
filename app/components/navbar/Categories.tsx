'use client'
import Container from '../Container'
import CategoryBox from './CategoryBox'
import {AiFillCar} from 'react-icons/ai'
import { useSearchParams } from 'next/navigation'
import { usePathname } from 'next/dist/client/components/navigation';

export const categories = [
    {
      label: 'Ford',
      icon: AiFillCar
    },
    {
      label: 'GMC',
      icon: AiFillCar
    },
    {
      label: 'Toyota',
      icon: AiFillCar
    },
    {
      label: 'BMW',
      icon: AiFillCar
    },
    {
      label: 'Mercedes-Benz"',
      icon: AiFillCar
    },
    {
      label: 'Nissan',
      icon: AiFillCar
    },
    {
      label: 'Volkswagen',
      icon: AiFillCar
    },
    {
      label: 'Mitsubishi',
      icon: AiFillCar    
    },
    {
      label: 'Porsche',
      icon: AiFillCar
    },
    {
      label: 'Mazda',
      icon: AiFillCar
    },
    {
      label: 'Honda',
      icon: AiFillCar
    },
    {
      label: 'Audi',
      icon: AiFillCar
    },
    {
      label: 'Jeep',
      icon: AiFillCar
    },
    {
      label: 'Hyundai',
      icon: AiFillCar
    },
    {
      label: 'Suzuki',
      icon: AiFillCar
    }
  ]
  
const Categories = () => {
  const params = useSearchParams()
  const category = params?.get('category')
  const pathname = usePathname()

  const isMainPage = pathname ===  '/'

  if(!isMainPage) {
    return null
  }
  return (
    <Container>
        <div className="pt-4
                        flex
                        flex-row
                        items-center
                        justify-between
                        overflow-x-auto">
            {categories.map((item) => (
               <CategoryBox
                key={item.label}
                label={item.label}
                icon={item.icon}
                selected={category === item.label}
               />
            ))}
        </div>
    </Container>
  )
}

export default Categories