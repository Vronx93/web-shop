import { Link } from "react-router-dom"
import { Product } from "../SearchResults/SearchResults"
import { useEffect, useState } from "react"
import { useBagItemsContext } from "../../contexts/BagItemsContext"
import RemoveItemIcon from "../RemoveItemIcon/RemoveItemIcon"
import styles from "./CheckoutItem.module.css"
import { handleQuantityChange } from "./CheckoutItem.utils"

export interface CheckoutItemProps {
    item: Product
}

export default function CheckoutItem({item} : CheckoutItemProps) {
    const {bagItems, setBagItems} = useBagItemsContext()
    const [quantity, setQuantity] = useState(item.quantity)

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
                <input 
                    id={item.id} 
                    value={quantity} 
                    min={1} 
                    max={99} 
                    type="number" 
                    onChange={(event) => handleQuantityChange(event, setQuantity, setBagItems, bagItems)} />
                {
                    quantity ?
                        <p data-testid="price">${item.price*quantity}</p>
                        :
                        <p>$0</p>
                }
            </div>
            <RemoveItemIcon item={item} />
        </li>
    )
}