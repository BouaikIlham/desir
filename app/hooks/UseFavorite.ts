import { SafeUser } from "../types";
import { useCallback, useMemo } from "react";
import useLoginModal from "./UseLoginModals";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-hot-toast";

interface IUseFavorite {
    carId: string;
    currentUser?: SafeUser | null
}

const useFavorite = ({carId, currentUser}: IUseFavorite) => {
    const loginModal = useLoginModal()
    const router = useRouter()
    const hasFavorited = useMemo(() => {
        const list = currentUser?.favoriteIds || []
            return list.includes(carId)
    }, [currentUser, carId])

const toggleFavorite = useCallback(async (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();

    if (!currentUser) {
        return loginModal.onOpen()
    }

    try {
        let request;

        if (hasFavorited) {
            request = () => axios.delete(`/api/favorites/${carId}`)
        } else {
            request = () => axios.post(`/api/favorites/${carId}`)
        }

        await request();
        router.refresh();
        toast.success('Success');
    } catch {
        toast.error('Something went wrong')
    }
}, [
    currentUser,
    hasFavorited,
    carId,
    loginModal,
    router
])

    return {hasFavorited,
            toggleFavorite
            }
}

export default useFavorite