import { useEffect, useState } from "react"
import styles from "./SearchResults.module.css"
import { getProductByCategory, searchProduct } from "../../api"
import SearchEl from "../SearchEl/SearchEl"
import ResultsFilters from "../ResultsFilters/ResultsFilters"
import usePagination from "../../hooks/usePagination"
import CategoriesList from "../CategoriesList/CategoriesList"

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
    category? : string | null,
    itemsData?: Product[]
}

export default function SearchResults({searchFor, category, itemsData} : SearchResultsProps) {
    const [result, setResult] = useState<SearchResults | null>(null)
    const [sortedResults, setSortedResults] = useState<null | Product[]>(null)
    // const [isCategoriesDropdownActive, setIsCategoriesDropdownActive] = useState(false)

    useEffect(() => {
        async function loadResults() {
            const search = await searchProduct(searchFor)
            const categorySearch = await getProductByCategory(category)

            if(searchFor) {
                setResult(search)
            } else if(category) {
                setResult(categorySearch)
            } else {
                setResult(null)
            }
        }
    loadResults()
    }, [searchFor, category])

    const renderElements : JSX.Element [] | JSX.Element = sortedResults ? 
        sortedResults.map((el) => (
            <SearchEl key={el.id} el={el} />
            )) 
            :  
            result?.products && result.products?.length > 0 ? 
                result.products.map((el) => (
                    <SearchEl key={el.id} el={el} />
            ))
        // : <p>Loading...</p> 
            : itemsData ? itemsData.map((itemData) => 
                <SearchEl key={itemData.id} el={itemData}/>)
                : <p>No results match this search. Try again or contact with our support.</p>

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






/* {isCategoriesDropdownActive && <CategoriesList />} */
/* {
    isCategoriesDropdownActive && 
    <ResultsFilters
        products = {result?.products} 
        setSortedResults={setSortedResults}
        sortedResults={sortedResults}
    />
} */
/* <button 
    onClick={() => setIsCategoriesDropdownActive(!isCategoriesDropdownActive)}
>
    {
        isCategoriesDropdownActive ? "Hide filters" : "Show filters"
    }
</button> */
