import { useState } from "react";

interface PaginationProps {
    arr? : any[] | JSX.Element [],
    itemsPerPage? : number
}


export default function usePagination({arr = [], itemsPerPage = 1} : PaginationProps = {}) {
    const [currentIndex, setCurrentIndex] = useState(0)
    const currentPage = arr[currentIndex]
    const firstPage = currentIndex < 1
    const lastPage = currentIndex >= arr.length - 1
    const isOnlyOnePage = arr.length <= itemsPerPage
    const nextPage = () => setCurrentIndex(prevCurrentIndex => prevCurrentIndex += 1)
    const prevPage = () => setCurrentIndex(prevCurrentIndex => prevCurrentIndex -= 1)
    return {
        currentIndex,
        setCurrentIndex,
        currentPage,
        nextPage,
        prevPage,
        firstPage,
        lastPage,
        isOnlyOnePage
    }
}
