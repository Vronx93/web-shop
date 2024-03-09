import styles from "./AddToBagBtn.module.css"
import { useBagItemsContext } from "../../contexts/BagItemsContext"
import { Product } from "../SearchResults/SearchResults"
import { addToBag } from "./AddToBagBtn.utils"

export default function AddToBagBtn({product, quantity} : {product: Product, quantity: number}) {
    const {setBagItems} = useBagItemsContext()

    return(
        <button 
            onClick={event => addToBag(event, setBagItems, product, quantity)} 
            className={styles.shopBtn}
            aria-label="Click to add this item to your shopping bag"
            >
            Add to <img className={styles.shopBag} src="../../src/assets/images/shop-bag.svg" alt="Shopping bag" />
        </button>
    )
}