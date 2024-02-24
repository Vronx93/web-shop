import { useState } from "react"
import { Product } from "../SearchResults/SearchResults"
import styles from "./ResultsFilters.module.css"

export default function ResultsFilters(products : Product[]) {
    const options = ["-", "Ascending", "Descending"]
    const [selectedPrice, setSelectedPrice] = useState(options[0])

    const renderOptions = options.map((option) =>
        <option value={option}>{option}</option>
        )
    return(
        <div className={styles.filtersContainer}>
            <label htmlFor="sortByPrice">Sort by:</label>
            <select id="sortByPrice" defaultValue={selectedPrice}>
                {renderOptions}
            </select>
        </div>
    )
}