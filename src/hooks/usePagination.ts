import { useState } from "react";

export default function usePagination(arr : any[], itemsPerPage: number) {
    const [currentIndex, setCurrentIndex] = useState(0)
    const currentPage = arr[currentIndex]
    const firstPage = currentIndex < 1
    const lastPage = currentIndex >= arr.length - 1
    const isOnlyOnePage = arr.length <= itemsPerPage
    const nextPage = () => setCurrentIndex(prevCurrentIndex => prevCurrentIndex += 1)
    const prevPage = () => setCurrentIndex(prevCurrentIndex => prevCurrentIndex -= 1)
    return {
        currentIndex,
        currentPage,
        nextPage,
        prevPage,
        firstPage,
        lastPage,
        isOnlyOnePage
    }
}