import {  useContext, useEffect, useRef, useState } from "react"
import styles from "./ShoppingBag.module.css"
import { BagItemsContext, BagItemsContextInterface } from "../../contexts/bagItemsContext"
import { Link } from "react-router-dom"
import { Product } from "../SearchResults/SearchResults"

export default function ShoppingBag() {
    const [isDropdownActive, setIsDropdownActive] = useState(false)
    const [totalPrice, setTotalPrice] = useState(0)
    const {bagItems, setBagItems} = useContext<BagItemsContextInterface | []>(BagItemsContext)
    const dropdownRef = useRef(null)
    const dropdownBtnRef = useRef(null)

    function getTotalPrice() {
        let totalPrice = 0
        if(bagItems.length > 0){
            for(let i = 0; i < bagItems.length; i++) {
                totalPrice += bagItems[i].price * bagItems[i].quantity
            } 
        } return totalPrice
    }

    useEffect(() => {
        if(bagItems.length > 0) {
            setTotalPrice(getTotalPrice()) 
        }
    }, [bagItems])

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
            <Link to={`/product/${item.id}`} state={{item: item}} className={styles.bagElContainer}>
                <div className={styles.bagEl}>
                    <span>{item.title}</span>
                    <span>{item.quantity}</span>
                    <span className={styles.price}>${item.price*item.quantity}</span>
                </div>
            </Link>
            <img id={(item.id).toString()} tabIndex={0} onClick={(event) => handleRemoveIconClick(event)} className={styles.trashIcon} src="../../src/assets/images/trash-img.svg" alt="Remove icon" />
        </li>
    )

    function handleBagClick() {
            setIsDropdownActive(!isDropdownActive)
    }

    function handleRemoveIconClick(event : any) {
        setBagItems((prevBagItems: Product [] | []) => prevBagItems.filter((item : Product) => item.id !== parseInt(event.target.id)))
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
                    <Link className={styles.checkoutBtn} to="/checkout">Checkout</Link>
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