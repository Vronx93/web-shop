import { useContext } from "react"
import styles from "./CheckoutList.module.css"
import { BagItemsContext } from "../../contexts/bagItemsContext"
import CheckoutItem from "../CheckoutItem/CheckoutItem"
import { Product } from "../SearchResults/SearchResults"

export default function CheckoutList() {
    const {bagItems} = useContext(BagItemsContext)

    console.log(bagItems)

    const renderElements = bagItems.map((item : Product) =>
        <CheckoutItem 
            key={item.id}
            item = {item}
        />
    )

    return(
        <ul>
            {renderElements}
        </ul>
    )
}