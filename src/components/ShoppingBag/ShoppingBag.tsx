import { useContext, useEffect, useRef, useState } from "react"
import styles from "./ShoppingBag.module.css"
// import { isLoggedInContext } from "../../contexts/isLoggedInContext"
import { BagItemsContext } from "../../contexts/bagItemsContext"
import { Link } from "react-router-dom"

export default function ShoppingBag() {
    const [isDropdownActive, setIsDropdownActive] = useState(false)
    const [totalPrice, setTotalPrice] = useState(0)
    // const {isLoggedIn} = useContext(isLoggedInContext)
    const {bagItems, setBagItems} = useContext(BagItemsContext)
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
        .map((item) =>
        <li key={item.id} className={styles.listItemContainer}>
            <Link to={`/product/${item.id}`} state={{item: item}} className={styles.bagElContainer}>
                <div className={styles.bagEl}>
                    <span>{item.title}</span>
                    <span>{item.quantity}</span>
                    <span className={styles.price}>${item.price*item.quantity}</span>
                </div>
            </Link>
            <img id={item.id} tabIndex={0} onClick={(event) => handleRemoveIconClick(event)} className={styles.trashIcon} src="../../src/assets/images/trash-img.svg" alt="Remove icon" />
        </li>
    )

    function handleBagClick() {
            setIsDropdownActive(!isDropdownActive)
    }

    function handleRemoveIconClick(event : any) {
        setBagItems(prevBagItems => prevBagItems.filter((item) => item.id !== parseInt(event.target.id)))
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
                    <div className={styles.checkoutBtnsContainer}>
                        <button>Show my bag</button>
                        <button>Checkout</button>
                    </div>
                </div>
                :
                isDropdownActive && 
                <div className={styles.dropdown}>
                    <p>You didn't put any items to your shopping bag yet.</p>
                </div>
            }
        </div>

    )
}