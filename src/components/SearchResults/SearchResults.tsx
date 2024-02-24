import { useEffect, useState } from "react"
import styles from "./SearchResults.module.css"
import { searchProduct } from "../../api"
import SearchEl from "../SearchEl/SearchEl"

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

export default function SearchResults({searchFor} : {searchFor: string}) {
    const [result, setResult] = useState<SearchResults | null>(null)

    useEffect(() => {
        async function loadItems() {
            const search = await searchProduct(searchFor)
            setResult(search)
        }
        loadItems()
    }, [searchFor])

    const renderElements = result?.products && result.products?.length > 0
    ? result.products.map((el) => (
      <SearchEl key={el.id} el={el} />
    ))
    : <p>Loading...</p>

    return(
        <div className={styles.listContainer}>
            <ul className={styles.resultsList}>
                {renderElements}
            </ul>
        </div>
    )
}