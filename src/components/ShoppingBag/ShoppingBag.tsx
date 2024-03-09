import { useEffect, useRef, useState } from "react"
import styles from "./ShoppingBag.module.css"
import { useBagItemsContext } from "../../contexts/BagItemsContext"
import { Link } from "react-router-dom"
import { Product } from "../SearchResults/SearchResults"
import RemoveItemIcon from "../RemoveItemIcon/RemoveItemIcon"
import useTotalPrice from "../../hooks/useTotalPrice"

export default function ShoppingBag() {
    const [isDropdownActive, setIsDropdownActive] = useState(false)
    const {bagItems} = useBagItemsContext()
    const dropdownRef = useRef(null)
    const dropdownBtnRef = useRef(null)
    const totalPrice = useTotalPrice()

    function closeDropdownOnOutsideClick(event : any) {
        const refs = !dropdownRef.current?.contains(event.target) && !dropdownBtnRef.current?.contains(event.target)
        if(isDropdownActive && refs){
            setIsDropdownActive(false)
        }
    }
    
    useEffect(() => {
        if(isDropdownActive){
            document.addEventListener('mousedown',closeDropdownOnOutsideClick)}
        
            return () => {
                document.removeEventListener("mousedown", closeDropdownOnOutsideClick)
            }
        }, [dropdownRef, dropdownBtnRef, closeDropdownOnOutsideClick]
    )

    const displayItems = bagItems
        .map((item : Product) =>
        <li key={item.id} className={styles.listItemContainer}>
            <Link to={`/product/${item.id}`} state={item} className={styles.bagElContainer}>
                <div className={styles.bagEl}>
                    <span>{item.title}</span>
                    <span>{item.quantity}</span>
                    <span className={styles.price}>${item.price*item.quantity}</span>
                </div>
            </Link>
            <RemoveItemIcon item={item} />
        </li>
    )

    function handleBagClick() {
            setIsDropdownActive(!isDropdownActive)
    }

    useEffect(() => {
        localStorage.setItem("bagItems", JSON.stringify(bagItems))
    }, [bagItems])

    return(
        <div>
            <button 
                className={styles.shoppingBagBtn}
                onClick={handleBagClick}
                ref={dropdownBtnRef}
            >
                <img src="../../src/assets/images/red-bag.svg" alt="Your shopping bag" />
            </button>
            {
                displayItems.length > 0 ?
                isDropdownActive && 
                <div ref={dropdownRef} className={styles.dropdown}>
                    <ul>
                        {displayItems}
                    </ul>
                    <p className={styles.total}>Total: ${totalPrice}</p>
                    <Link className={styles.checkoutBtn} to="/checkout" onClick={() => setIsDropdownActive(false)}>Checkout</Link>
                </div>
                :
                isDropdownActive && 
                <div className={styles.dropdown}>
                    <p>You don't have any items in your shopping bag.</p>
                </div>
            }
        </div>

    )
}