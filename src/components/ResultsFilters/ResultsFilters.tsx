import { SetStateAction, useEffect, useState } from "react"
import { Product } from "../SearchResults/SearchResults"
import styles from "./ResultsFilters.module.css"

export default function ResultsFilters(
    {
        products, 
        setSortedResults,
        sortedResults
    } 
    : 
    {
        products? : Product[] | null, 
        setSortedResults: React.Dispatch<SetStateAction<Product[] | null>>,
        sortedResults: Product[] | null
    }) {
    const options = ["-", "Ascending", "Descending"]
    const [selectedPrice, setSelectedPrice] = useState(options[0])
    const renderOptions = options.map((option) =>
        <option key={option} value={option}>{option}</option>
        )

    function sortResults({products, selectedPrice} : {products: Product[] | null | undefined, selectedPrice : string}) {
        let sortedProducts : Product[] | null | undefined= null
        console.log("SORTED PRODUCTS", sortedProducts)
        if(selectedPrice === "Ascending") {
            sortedProducts = products?.sort((a, b) => a.price - b.price)
        } else if(selectedPrice === "Descending") {
            sortedProducts = products?.sort((a, b) => b.price - a.price)
        } else {
            sortedProducts = products?.sort((a, b) => parseInt(a.id) - parseInt(b.id))
        }
        return sortedProducts
    }
    
    useEffect(() => {
        const sorted = sortResults({products: products, selectedPrice: selectedPrice})
        setSortedResults(sorted ? [...sorted] : null)
        console.log("USE EFFEECT SORTED", sortedResults)
    }, [selectedPrice])
        

    return(
        <div className={styles.filtersContainer}>
            <label htmlFor="sortByPrice">Sort by price</label>
            <select id="sortByPrice" value={selectedPrice} onChange={(event) => setSelectedPrice(event.target.value)}>
                {renderOptions}
            </select>
        </div>
    )
}