import { useState } from "react";

interface PaginationProps {
    arr : any[] | JSX.Element [],
    itemsPerPage : number
}


export default function usePagination({arr, itemsPerPage = 1} : PaginationProps) {
    const [currentIndex, setCurrentIndex] = useState(0)
    const firstPage = currentIndex < 1
    const nextPage = () => setCurrentIndex(prevCurrentIndex => prevCurrentIndex += 1)
    const prevPage = () => setCurrentIndex(prevCurrentIndex => prevCurrentIndex -= 1)
    const totalPages = () => Math.ceil(arr.length / itemsPerPage)
    const lastPage = currentIndex === totalPages() - 1 
    const isOnlyOnePage = totalPages() <= 1
    const renderPage = () => {
        let render = []
        for( let i=currentIndex*itemsPerPage; i < itemsPerPage*(currentIndex+1); i++){
            render.push(arr[i])
        } 
        return render
    }
    return {
        currentIndex,
        setCurrentIndex,
        nextPage,
        prevPage,
        firstPage,
        lastPage,
        isOnlyOnePage,
        renderPage,
        totalPages
    }
}
