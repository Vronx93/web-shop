import { useEffect, useState } from "react"
import { getAllCategories } from "../../api"
import Category from "../Category/Category"
import styles from "./CategoriesList.module.css"

export default function CategoriesList() {
    const [categoryData, setCategoryData] = useState([])

    useEffect(() => {
        getAllCategories()
            .then((resolvedData) => 
                setCategoryData(resolvedData))
    }, [])

    // console.log("categoryData", categoryData)
    


    const categories = categoryData?.map((cat : string) =>
        <Category
            key={cat}
            name={cat}
        />)
    return(
        <div className={styles.categoriesContainer}>
            <ul className={styles.list}>
                {categories}
            </ul>
        </div>
    )
}