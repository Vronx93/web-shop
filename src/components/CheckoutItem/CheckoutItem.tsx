import { Link } from "react-router-dom"
import styles from "./CheckoutItem.module.css"
import { Product } from "../SearchResults/SearchResults"

export interface CheckoutItemProps {
    item: Product
}

export default function CheckoutItem({item} : CheckoutItemProps) {
    return(
        <li>
            <Link to={`/product/${item.id}`} state={{item : item}}>
                {item.title}
            </Link>
        </li>
    )
}