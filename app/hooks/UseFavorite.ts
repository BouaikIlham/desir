import { SafeUser } from "../types";
import { useCallback, useMemo } from "react";

interface IUseFavorite {
    carId: string;
    currentUser?: SafeUser | null
}

const useFavorite = ({carId, currentUser}: IUseFavorite) => {
    const hasFavorited = useMemo(() => {
        const list = currentUser?.favoriteIds || []
            return list.includes(carId)
    }, [currentUser, carId])

const toggleFavorite = useCallback(async (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
}, [])

    return {hasFavorited,
            toggleFavorite
            }
}

export default useFavorite