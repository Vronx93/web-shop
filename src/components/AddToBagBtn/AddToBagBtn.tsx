import { useContext } from "react"
import styles from "./AddToBagBtn.module.css"
import { BagItemsContext } from "../../contexts/bagItemsContext"
import { Product } from "../SearchResults/SearchResults"

export default function AddToBagBtn({product, quantity} : {product: Product, quantity: number}) {
    const {setBagItems} = useContext(BagItemsContext)

    function handleSubmit(event: any) {
        event.preventDefault()
        setBagItems((prevBagItems) => {
            const existingItem = prevBagItems.find((bagItem) => bagItem.id === product.id)

            if (existingItem) {
                return prevBagItems.map((bagItem) =>
                    bagItem.id === product.id
                        ? { ...bagItem, quantity: quantity + bagItem.quantity }
                        : bagItem
                )
            } else {
                return [...prevBagItems, { id: product.id, title: product.title, quantity: quantity, price: product.price, images: product.images, thumbnail: product.thumbnail }]
            }
        })
    }

    return(
        <button onClick={handleSubmit} className={styles.shopBtn}>
            Add to <img className={styles.shopBag} src="../../src/assets/images/shop-bag.svg" alt="Shopping bag" />
        </button>
    )
}