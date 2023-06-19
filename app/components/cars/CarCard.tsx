"use client";
import Image from "next/image";
import HeartButton from "../HeartButton";
import { useRouter } from "next/navigation";
import { SafeCar, SafeReservation, SafeUser } from "@/app/types";
import Button from "../Button";
import { useCallback, useMemo } from "react";
import { format } from "date-fns";

interface CarCardProps {
  currentUser?: SafeUser | null;
  data: SafeCar;
  reservation?: SafeReservation;
  actionLabel?: string;
  actionId?: string;
  onAction?: (id: string) => void;
  disabled?: boolean;
}
const CarCard: React.FC<CarCardProps> = ({
  currentUser,
  data,
  actionLabel,
  actionId = "",
  onAction,
  disabled,
  reservation,
}) => {
  const router = useRouter();
  const handleCancel = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();
      if (disabled) {
        return;
      }
      onAction?.(actionId);
    },
    [onAction, disabled, actionId]
  );

  const price = useMemo(() => {
    if (reservation) {
      return reservation.totalPrice;
    }
    return data.price;
  }, [reservation, data.price]);

  const reservationDate = useMemo(() => {
    if (!reservation) {
      return null;
    }

    const start = new Date(reservation.startDate);
    const end = new Date(reservation.endDate);
    return `${format(start, "PP")} ${format(end, "PP")}`;
  }, [reservation]);
  return (
    <>
      <div className="col-span-1 cursor-pointer group">
        <div className="flex flex-col gap- w-full">
          <div
            onClick={() => router.push(`/cars/${data.id}`)}
            className="aspect-square w-full relative overflow-hidden rounded-xl"
          >
            <Image
              alt="car"
              src={data.imageSrc}
              fill
              className="object-cover
                               h-full
                               w-full
                               group-hover:scale-100
                               transition"
            />
            <div className="absolute top-3 right-3">
              <HeartButton carId={data.id} currentUser={currentUser} />
            </div>
          </div>
          <div className="font-semibold text-lg">{data.title}</div>
          <div className="font-light text-neutral-500">
            {reservationDate || data.category}
          </div>
          <div className="flex flex-row items-center gap-1">
            <div className="font-semibold">
              $ {price}
              {!reservation && <span className="font-light">/ night</span>}
            </div>
            {onAction && actionLabel && (
              <Button
                label={actionLabel}
                onClick={handleCancel}
                small
                disabled={disabled}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default CarCard;
