import { useBagItemsContext } from "../../contexts/BagItemsContext"
import CheckoutItem from "../CheckoutItem/CheckoutItem"
import { Product } from "../SearchResults/SearchResults"
import styles from "./CheckoutList.module.css"

export default function CheckoutList() {
    const {bagItems, totalPrice} = useBagItemsContext()

    const renderElements = bagItems.map((item : Product) =>
        <CheckoutItem 
            key={item.id}
            item = {item}
        />
    )

    return(
        <>
            {renderElements.length > 0 && 
            <ul className={styles.list}>
                {renderElements}
            </ul>}
            {
                renderElements.length > 0 ? 
                    <p data-testid="total" className={styles.total}>Total: ${totalPrice()}</p>
                    : 
                    <h2 data-testid="no-items">You don't have any items in your shopping bag yet.</h2>
            }
        </>
    )
}