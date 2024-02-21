import { useLocation } from "react-router-dom"
import styles from "./ProductDescriptionForm.module.css"
import { useContext, useEffect, useState } from "react"
import { BagItemsContext } from "../../contexts/bagItemsContext"

export default function ProductDescription() {
    const {bagItems, setBagItems} = useContext(BagItemsContext)
    const locationData = useLocation()
    console.log("LocationData", locationData.state)
    const [quantity, setQuantity] = useState(0)

    function handleInputChange(event : any) {
        setQuantity(parseInt(event.target.value))
    }

    function handleSubmit(event: any) {
        event.preventDefault()
        setBagItems((prevBagItems) => {
            const existingItem = prevBagItems.find((bagItem) => bagItem.id === locationData.state.id);

            if (existingItem) {
                return prevBagItems.map((bagItem) =>
                    bagItem.id === locationData.state.id
                        ? { ...bagItem, quantity: quantity + bagItem.quantity }
                        : bagItem
                )
            } else {
                return [...prevBagItems, { id: locationData.state.id, title: locationData.state.title, quantity: quantity, price: locationData.state.price }]
            }
        })
    }

    useEffect(() => {
        localStorage.setItem("bagItems", JSON.stringify(bagItems))
    }, [bagItems])
        console.log("NewBagItems", bagItems)
    

    return(
        <div className={styles.descriptionContainer}>
            <form 
                onSubmit={(event) => handleSubmit(event)} 
                method="post"
                className={styles.form}
            >
                <div className={styles.inputContainer}>
                    <label htmlFor="quantity">Quantity:</label>
                    <input onChange={(event) => handleInputChange(event)} id="quantity" type="number" value={quantity}/>
                </div>
                <button className={styles.shopBtn}>
                    Add to <img className={styles.shopBag} src="../../src/assets/images/shop-bag.svg" alt="Shopping bag" />
                </button>
            </form>
        </div>
    )
}