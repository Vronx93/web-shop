import { useEffect, useRef, useState } from "react"
import styles from "./Searchbar.module.css"
import { useDebounce } from "../../hooks/useDebounce"
import { searchProduct } from "../../api"
import SearchbarDropdown from "../SearchbarDropdown/SearchbarDropdown"
import { useLocation, useNavigate } from "react-router-dom"
import CategoriesList from "../CategoriesList/CategoriesList"

export default function Searchbar() {
    const [inputValue, setInputValue] = useState('')
    const [searchResult, setSearchResult] = useState(null)
    const [isDropdownActive, setIsDropdownActive] = useState(false)
    const [isCategoriesDropdownActive, setIsCategoriesDropdownActive] = useState(false)
    const navigate = useNavigate()
    const debouncedValue = useDebounce(inputValue, 500)
    const url = useLocation()
    console.log("url", url)

    // useEffect(() => {
    //     function closeOnOutsideClick(event : any) {
    //         if(isDropdownActive && !categoriesRef.current?.contains(event.target)){
    //             setIsCategoriesDropdownActive(false)
    //         }
    //     }
    //     if(isCategoriesDropdownActive){
    //         document.addEventListener('mousedown',closeOnOutsideClick)}
        
    //         return () => {
    //             document.removeEventListener("mousedown", closeOnOutsideClick)
    //         }
    //     }, [categoriesRef]
    // )

    useEffect(() => {
        if(debouncedValue) {
            async function search() {
                const data = await searchProduct(inputValue)
                setSearchResult(data)
            }
            search()
        }
    }, [debouncedValue])

    function handleInputChange(event : any) {
        setInputValue(event.target.value)
        if(event.target.value.length > 0) {
            setIsDropdownActive(true)
        } else {
            setIsDropdownActive(false)
        }
        
    }

    async function handleSubmit(e : any) {
        e.preventDefault()
        setIsDropdownActive(false)
        if(inputValue.length > 0) {
            return navigate(`/search/?q=${inputValue}`)
        }
    }

    return(
        <div className={styles.searchbarContainer}>
            <form onSubmit={(e) => handleSubmit(e)} className={styles.form} method="get">
                <input
                    className={styles.searchInput} 
                    type="search"
                    value={inputValue}
                    onChange={(event) => handleInputChange(event)}
                    placeholder="Search items..."
                >
                </input>
                <button type="button" className={styles.categoriesBtn} onClick={() => setIsCategoriesDropdownActive(!isCategoriesDropdownActive)}>Categories</button>
                <button className={styles.searchBtn}><img src="../../src/assets/images/search-icon.svg" alt="Search icon" /></button>
            </form>
            {
                isDropdownActive &&
                <SearchbarDropdown 
                    isDropdownActive = {isDropdownActive}
                    setIsDropdownActive = {setIsDropdownActive}
                    setInputValue = {setInputValue}
                    searchData  = {searchResult}
                />
            }
            {isCategoriesDropdownActive && <CategoriesList isDropdownActive={isCategoriesDropdownActive} setIsDropdownActive={setIsCategoriesDropdownActive} />}
        </div>
    )
}