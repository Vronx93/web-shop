import { useEffect, useLayoutEffect, useState } from "react"
import styles from "./SearchResults.module.css"
import { getProductByCategory, searchProduct } from "../../api"
import SearchEl from "../SearchEl/SearchEl"
import usePagination from "../../hooks/usePagination"

export type Product = {
    id: number,
    title: string,
    description?: string,
    price: number,
    discountPercentage?: number,
    rating?: number,
    stock?: number,
    brand?: string,
    category?: string,
    thumbnail: string,
    images: string [],
    quantity: number
}

export type SearchResults = {
    limit: number,
    products: Product [],
    skip: number;
    total: number[]
}

interface SearchResultsProps {
    searchFor : string | null,
<<<<<<< Updated upstream
    category? : string | null,
    itemsData?: Product[]
=======
    category : string | null,
    itemsData?: Product[] | []
>>>>>>> Stashed changes
}

export default function SearchResults({searchFor, category, itemsData} : SearchResultsProps) {
    const [result, setResult] = useState<SearchResults | null>(null)

    useLayoutEffect(() => {
        async function loadResults() {
            if(searchFor) {
                const search = await searchProduct(searchFor)
                setResult(search)
            } else if(category) {
                const categorySearch = await getProductByCategory(category)
                setResult(categorySearch)
            } else {
                setResult(null)
            }
        }
    loadResults()
    }, [searchFor, category])

    const renderElements : JSX.Element [] | JSX.Element = result?.products && result.products?.length > 0 
        ? 
            result.products.map((el) => (
                <SearchEl key={el.id} el={el} />
        ))
        : itemsData ? itemsData.map((itemData) => 
            <SearchEl key={itemData.id} el={itemData}/>)
            : [<p>No results match this search. Try again or contact with our support.</p>]

    const {        
        currentIndex,
        nextPage,
        prevPage,
        firstPage,
        lastPage,
        isOnlyOnePage,
        renderPage,
        allPages} = usePagination({arr: renderElements, itemsPerPage: 10})

    useEffect(()=>{
        window.scrollTo({top: 0})
    },[currentIndex, searchFor, category])

    return(
        <div className={styles.listContainer}>
            <ul className={styles.resultsList}>
                {result ? renderPage() : <p>Loading...</p> }
            </ul>
            <div className={styles.pageCounterContainer}>
                {!firstPage && <button onClick={prevPage}>Back</button>}
                <p>{`Page: ${currentIndex + 1}`}{!isOnlyOnePage && <span>/{allPages}</span>}</p>
                {!isOnlyOnePage && !lastPage && <button onClick={nextPage}>Next</button>}
            </div>
        </div>
        )
}
