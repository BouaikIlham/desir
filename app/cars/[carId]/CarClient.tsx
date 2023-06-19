'use client'
import { toast } from "react-hot-toast"
import CarHead from "@/app/components/cars/CarHead"
import Container from "@/app/components/Container"
import { SafeCar, SafeUser } from "@/app/types"
import CarInfo from "@/app/components/cars/CarInfo"
import { useCallback, useEffect, useMemo, useState } from "react"
import { categories } from "@/app/components/navbar/Categories"
import CarReservation from "@/app/components/cars/CarReservation"
import { Reservation } from "@prisma/client"
import useLoginModal from "@/app/hooks/UseLoginModals"
import { useRouter } from "next/navigation"
import { differenceInCalendarDays, eachDayOfInterval } from "date-fns"
import axios from "axios"
import { Range } from "react-date-range"

const initialDateRange = {
  startDate: new Date(),
  endDate: new Date(),
  key: 'selection'
}
interface CarClientProps {
  reservations?: Reservation[]
  car: SafeCar & {
    user: SafeUser;
  } 

  currentUser?: SafeUser | null
}
const CarClient: React.FC<CarClientProps> = ({
  car,
  currentUser,
  reservations = []
}) => {
  const loginModal = useLoginModal();
  const router = useRouter()

  const disabledDates = useMemo(() => {
    let dates: Date[] = []

    reservations.forEach((reservation: any) => {
      const range = eachDayOfInterval({
        start: new Date(reservation.startDate),
        end: new Date(reservation.endDate)
      });

      dates = [...dates, ...range]
    });

    return dates
  }, [reservations])

  const [isLoading, setIsLoading] = useState(false)
  const [totalPrice, setTotalPrice] = useState(car.price)
  const [dateRange, setDateRange] = useState<Range>(initialDateRange)

  const onCreateReservation = useCallback(() => {
    if(!currentUser) {
      return loginModal.onOpen()
    }

    setIsLoading(true);

    axios.post('/api/reservations', {
      totalPrice,
      startDate: dateRange.startDate,
      endDate: dateRange.endDate,
      carId: car?.id
    })
    .then(() => {
      toast.success('Car reserved!')
      setDateRange(initialDateRange)
        /// rediredt to trips

        router.refresh();
    })
    .catch(() => {
      toast.error('something went wrong.')
    })
    .finally(() => {
      setIsLoading(false)
    })
  }, [
    totalPrice,
    dateRange,
    router,
    currentUser,
    loginModal
  ])
  useEffect(() => {
    if (dateRange.startDate && dateRange.endDate) {
      const dayCount = differenceInCalendarDays(
        dateRange.endDate,
        dateRange.startDate
        
      );

      if (dayCount && car.price) {
        setTotalPrice(dayCount * car.price)
      } else {
        setTotalPrice(car.price)
      }
    }
  }, [dateRange, car.price])
  const category = useMemo(() => {
    return categories.find((item) => item.label === car.category)
  }, [car.category])


  return (
    <Container>
      <div className="max-w-screen-lg mx-auto">
        <div className="flex flex-col gap-6">
          <CarHead
            title={car.title}
            imageSrc={car.imageSrc}
            id={car.id}
            description={car.description}
            currentUser={currentUser}
          />
          <div className="grid
                          grid-cols-1
                          md:grid-cols-7
                          md:gap-10
                          mt-6">
              <CarInfo
                user={car.user}
                category={category}
                description={car.description}
              />
              <div className="order-first mb-10 md:order-last md:col-span-3">
                <CarReservation
                 price={car.price}
                 totalPrice={totalPrice}
                 onChangeDate={(value) => setDateRange(value)}
                 onSubmit={onCreateReservation}
                 dateRange={dateRange}
                 disabled={isLoading}
                 disabledDates={disabledDates}
                />
              </div>

          </div>
        </div>
      </div>
    </Container>
  )
}

export default CarClient