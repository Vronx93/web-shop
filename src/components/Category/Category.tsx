import { Link } from "react-router-dom"
import { getProductByCategory } from "../../api"
import styles from "./Category.module.css"
import { useState } from "react"

export default function Category({name, setIsDropdownActive} : {name: string, setIsDropdownActive: any}) {
    const [itemsOfCategory, setItemsOfCategory] : any[] = useState([])

    function handleCategoryClick(event : any) {
        if(event.currentTarget.id === name) {
            getProductByCategory(name)
                .then((resolvedData) => setItemsOfCategory(resolvedData.products))
        }
        setIsDropdownActive(false)
    }

    return(
        <li className={styles.categoryContainer} >
            <Link to={`/web-shop/search/?category=${name}`} id={name} onClick={(event) =>handleCategoryClick(event)} className={styles.categoryBtn} state={itemsOfCategory}>
                    {name}
            </Link>
        </li>
    )
    }
