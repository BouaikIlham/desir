import { SafeUser } from "../types";
import { useMemo } from "react";

interface IUseFavorite {
    carId: string;
    currentUser?: SafeUser | null
}

const useFavorite = ({carId, currentUser}: IUseFavorite) => {
    const hasFavorited = useMemo(() => {
        const list = currentUser?.favoriteIds
    }, [])
}