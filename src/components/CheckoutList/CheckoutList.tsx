import { useContext} from "react"
import { BagItemsContext } from "../../contexts/bagItemsContext"
import CheckoutItem from "../CheckoutItem/CheckoutItem"
import { Product } from "../SearchResults/SearchResults"
import useTotalPrice from "../../hooks/useTotalPrice"
import styles from "./CheckoutList.module.css"

export default function CheckoutList() {
    const {bagItems} = useContext(BagItemsContext)
    const totalPrice = useTotalPrice()

    const renderElements = bagItems.map((item : Product) =>
        <CheckoutItem 
            key={item.id}
            item = {item}
        />
    )

    return(
        <>
            <ul className={styles.list}>
                {renderElements}
            </ul>
            <p className={styles.total}>Total: ${totalPrice}</p>
        </>
    )
}