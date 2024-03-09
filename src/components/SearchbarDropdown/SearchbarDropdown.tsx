import { useEffect, useRef } from "react";
import styles from "./SearchbarDropdown.module.css"
import { Link } from "react-router-dom";
import { Product } from "../SearchResults/SearchResults";

export default function SearchbarDropdown(
    {searchData, isDropdownActive, setIsDropdownActive, setInputValue} 
    : 
    { searchData : {products : {}[]} | null, setIsDropdownActive: any, isDropdownActive : boolean, setInputValue : any}) 
    {

    const searchbarData : any = searchData?.products
    const dropdownRef = useRef(null)

    function handleDropdownElClick(event : any) {
        setInputValue(event.currentTarget?.title)
        setIsDropdownActive(false)
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

    const dropdownEl = searchbarData?.map((product : Product, index : number) =>
        <li 
            key={index}
            id={product?.id.toString()}
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