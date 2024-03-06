import { useContext } from "react"
import styles from "./AddToBagBtn.module.css"
import { BagItemsContext } from "../../contexts/bagItemsContext"
import { Product } from "../SearchResults/SearchResults"
import useAddToBagBtn from "./useAddToBagBtn"

export default function AddToBagBtn({product, quantity} : {product: Product, quantity: number}) {
    const {setBagItems} = useContext(BagItemsContext)

    return(
        <button onClick={event => useAddToBagBtn(event, setBagItems, product, quantity)} className={styles.shopBtn}>
            Add to <img className={styles.shopBag} src="../../src/assets/images/shop-bag.svg" alt="Shopping bag" />
        </button>
    )
}