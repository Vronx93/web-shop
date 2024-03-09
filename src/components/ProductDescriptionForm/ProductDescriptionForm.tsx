import { useLocation } from "react-router-dom"
import styles from "./ProductDescriptionForm.module.css"
import { useEffect, useState } from "react"
import { useBagItemsContext } from "../../contexts/BagItemsContext"
import AddToBagBtn from "../AddToBagBtn/AddToBagBtn"
import { Product } from "../SearchResults/SearchResults"

export default function ProductDescription() {
    const {bagItems} = useBagItemsContext()
    const locationData = useLocation()
    console.log("LocationData", locationData.state)
    const [quantity, setQuantity] = useState(1)
    const product : Product = locationData.state

    function handleInputChange(event : any) {
        setQuantity(parseInt(event.target.value))
    }

    useEffect(() => {
        localStorage.setItem("bagItems", JSON.stringify(bagItems))
    }, [bagItems])
    

    return(
        <div className={styles.descriptionContainer}>
            <form 
                method="post"
                className={styles.form}
            >
                <div className={styles.inputContainer}>
                    <label htmlFor="quantity">Quantity:</label>
                    <input onChange={(event) => handleInputChange(event)} id="quantity" type="number" value={quantity} required min={1}/>
                    <p>Total price: ${product.price * quantity}</p>
                </div>
                <AddToBagBtn 
                    product = {product}
                    quantity = {quantity}
                />
            </form>
            <p>{product.description}</p>
        </div>
    )
}