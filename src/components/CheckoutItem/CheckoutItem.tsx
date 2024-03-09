import { Link } from "react-router-dom"
import { Product } from "../SearchResults/SearchResults"
import { useEffect, useState } from "react"
import { useBagItemsContext } from "../../contexts/BagItemsContext"
import RemoveItemIcon from "../RemoveItemIcon/RemoveItemIcon"
import styles from "./CheckoutItem.module.css"

export interface CheckoutItemProps {
    item: Product
}

export default function CheckoutItem({item} : CheckoutItemProps) {
    const {bagItems, setBagItems} = useBagItemsContext()
    const [quantity, setQuantity] = useState(item.quantity)
    console.log(quantity)
    console.log("ID", item.id)

    function handleQuantityChange(event : any) {
        setQuantity(parseInt(event.currentTarget.value))
        setBagItems((prevBagItems) => {
            const updatedBagItems = prevBagItems.map((prevItem) => {
                if(parseInt(event.currentTarget?.id) === prevItem?.id) {
                    return {...prevItem, quantity: event.currentTarget.value}
                } else {
                    return prevItem
                }
            }) 
            return updatedBagItems
        })
    }

    useEffect(() => {
        localStorage.setItem("bagItems", JSON.stringify(bagItems))
    }, [bagItems])
    
    return(
        <li className={styles.listItem} key={item.id}>
            <Link to={`/product/${item.id}`} state={item}>
                <img className={styles.thumbnail} src={item.thumbnail} alt={item.title} />
                <h2>{item.title}</h2>
            </Link>
            <div className={styles.priceQuantityContainer}>
                <input id={item.id.toString()} value={quantity} min={1} max={99} type="number" onChange={(event) => handleQuantityChange(event)} />
                {
                    quantity ?
                        <p>${item.price*quantity}</p>
                        :
                        <p>$0</p>
                }
            </div>
            <RemoveItemIcon item={item} />
        </li>
    )
}