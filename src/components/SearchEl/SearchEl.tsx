import { Link } from "react-router-dom"
import styles from "./SearchEl.module.css"
import { Product } from "../SearchResults/SearchResults"
import { useEffect, useState } from "react"
import { useBagItemsContext } from "../../contexts/BagItemsContext"
import AddToBagBtn from "../AddToBagBtn/AddToBagBtn"

export default function SearchEl({el} : {el: Product}) {
    const {bagItems} = useBagItemsContext()
    const [quantity, setQuantity] = useState<number>(1)

    useEffect(() => {
        localStorage.setItem("bagItems", JSON.stringify(bagItems))
    }, [bagItems])
    
    return(
        <li className={styles.listEl}>
            <Link to={`/product/${el.id}`} state={el}>
                <div className={styles.imgContainer}>
                    <img src={el.thumbnail} alt={`${el.title}`} />
                </div>
                <div className={styles.textContainer}>
                    <h2>{el.title}</h2>
                    <p>{el.description}</p>
                </div>
                <form className={styles.priceContainer} onClick={(event) => event.preventDefault()}>
                    <p>${el.price}</p>
                    <label className={styles.quantityLabel} htmlFor="quantity">Choose quantity:</label>
                    <input 
                        onChange={(event) => setQuantity(parseInt(event?.target.value))}
                        id="quantity" 
                        type="number" 
                        required 
                        defaultValue={quantity}
                        min={1}
                    />
                    <AddToBagBtn 
                        product={el}
                        quantity={quantity}
                    />
                </form>
                
            </Link>
        </li>
    )
}