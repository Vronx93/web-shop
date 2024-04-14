import styles from "./AddToBagBtn.module.css"
import { useBagItemsContext } from "../../contexts/BagItemsContext"
import { Product } from "../SearchResults/SearchResults"

export default function AddToBagBtn({product, quantity} : {product: Product, quantity: number}) {
    const {addToBag} = useBagItemsContext()

    return(
        <button 
            onClick={event => addToBag(event, product, quantity)} 
            className={styles.shopBtn}
            aria-label="Click to add this item to your shopping bag"
            >
            Add to <img className={styles.shopBag} src="/web-shop/assets/images/shop-bag.svg" alt="Shopping bag" />
        </button>
    )
}