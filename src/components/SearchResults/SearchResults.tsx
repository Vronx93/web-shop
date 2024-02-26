import { useEffect, useState } from "react"
import styles from "./SearchResults.module.css"
import { searchProduct } from "../../api"
import SearchEl from "../SearchEl/SearchEl"
import ResultsFilters from "../ResultsFilters/ResultsFilters"
import usePagination from "../../hooks/usePagination"

export type Product = {
    id: number,
    title: string,
    description: string,
    price: number,
    discountPercentage: number,
    rating: number,
    stock: number,
    brand: string,
    category: string,
    thumbnail: string,
    images: string []
}

export type SearchResults = {
    limit: number,
    products: Product [],
    skip: number;
    total: number[]
}

export default function SearchResults({searchFor} : {searchFor: string | null}) {
    const [result, setResult] = useState<SearchResults | null>(null)
    const [sortedResults, setSortedResults] = useState<undefined | Product[]>(undefined)

    useEffect(() => {
        async function loadResults() {
            const search = await searchProduct(searchFor)
            setResult(search)
        }
        loadResults()
    }, [searchFor])

    const renderElements = sortedResults ? 
        sortedResults.map((el) => (
        <SearchEl key={el.id} el={el} />
        )) 
        :  
        result?.products && result.products?.length > 0 ? 
        result.products.map((el) => (
        <SearchEl key={el.id} el={el} />
        ))
        : <p>Loading...</p> 

    const {        
        currentIndex,
        nextPage,
        prevPage,
        firstPage,
        lastPage,
        isOnlyOnePage,
        renderPage,
        totalPages} = usePagination({arr: renderElements, itemsPerPage: 10})

    useEffect(()=>{
        window.scrollTo({top: 0})
    },[currentIndex])

    return(
        <div className={styles.listContainer}>
            <ResultsFilters
                products = {result?.products} 
                setSortedResults={setSortedResults}
                sortedResults={sortedResults}
            />
            <ul className={styles.resultsList}>
                {renderPage()}
            </ul>
            <div className={styles.pageCounterContainer}>
                {!firstPage && <button onClick={prevPage}>Back</button>}
                <p>{`${currentIndex + 1}/${totalPages()}`}</p>
                {!isOnlyOnePage && !lastPage && <button onClick={nextPage}>Next</button>}
            </div>
        </div>
    )
}