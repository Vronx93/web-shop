import { getProductByCategory } from "../../api"
import styles from "./Category.module.css"

export default function Category({name} : {name: string}) {

    return(
        <li className={styles.categoryContainer}>
            <button onClick={() => getProductByCategory(name)} className={styles.categoryBtn}>
                {name}
            </button>
        </li>
    )
}