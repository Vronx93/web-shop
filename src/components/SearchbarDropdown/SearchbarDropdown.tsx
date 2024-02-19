import { useEffect, useRef, useState } from "react";
import styles from "./SearchbarDropdown.module.css"
import { getShopItemById } from "../../api";
import { Link } from "react-router-dom";


export default function SearchbarDropdown(
    {searchData, isDropdownActive, setIsDropdownActive, setInputValue} 
    : 
    { searchData : {products : {}} | null, setIsDropdownActive: any, isDropdownActive : boolean, setInputValue : any}) 
    {

    const searchbarData : any = searchData?.products
    const dropdownRef = useRef(null)
    console.log("searchDatainDropdown", searchbarData)

    function handleDropdownElClick(event) {
        setInputValue(event.currentTarget?.title)
        setIsDropdownActive(false)
        const item = getShopItemById(event.currentTarget?.id)
        console.log("found", item )
    }

    function closeDropdownOnOutsideClick(event : any) {
        if(isDropdownActive && !dropdownRef.current?.contains(event.target)){
            setIsDropdownActive(false)
        }
    }

    useEffect(() => {
        if(isDropdownActive){
            document.addEventListener('mousedown',closeDropdownOnOutsideClick)}
        
            return () => {
                document.removeEventListener("mousedown", closeDropdownOnOutsideClick)
            }
        }, [dropdownRef, closeDropdownOnOutsideClick]
    )

    const dropdownEl = searchbarData?.map((product, index) =>
        <li 
            key={index}
            id={product?.id}
            title={product?.title}
            className={styles.dropdownEl}
            onClick={(event => handleDropdownElClick(event))}
        >
            <Link state={product} to={`/product/${product.id}`}>
                <p>{product?.title}</p>
            </Link>      
        </li>)



    return(
        <div 
            className={styles.dropdownContainer} 
            ref={dropdownRef}
        >
            <ul className={styles.dropdownList}>
                {dropdownEl}
            </ul>
        </div>
    )
}