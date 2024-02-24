import { useEffect, useState } from "react"
import styles from "./Searchbar.module.css"
import { useDebounce } from "../../hooks/useDebounce"
import { searchProduct } from "../../api"
import SearchbarDropdown from "../SearchbarDropdown/SearchbarDropdown"
import { useLocation, useNavigate, useNavigation, useSearchParams } from "react-router-dom"

export default function Searchbar() {
    const [inputValue, setInputValue] = useState('')
    const [searchResult, setSearchResult] = useState(null)
    const [isDropdownActive, setIsDropdownActive] = useState(false)
    const navigate = useNavigate()
    const debouncedValue = useDebounce(inputValue, 500)
    const url = useLocation()
    console.log("url", url)

    useEffect(() => {
        if(debouncedValue) {
            async function search() {
                const data = await searchProduct(inputValue)
                setSearchResult(data)
            }
            search()
        }
    }, [debouncedValue])

    function handleInputChange(event) {
        setInputValue(event.target.value)
        if(event.target.value.length > 0) {
            setIsDropdownActive(true)
        } else {
            setIsDropdownActive(false)
        }
        
    }

    async function handleSubmit(e) {
        e.preventDefault()
        console.log(url)
        // await searchProduct(inputValue)
        console.log("Search")
        return navigate(`/search/?q=${inputValue}`)
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
                <button className={styles.searchBtn}><img src="../../src/assets/images/search-icon.svg" alt="Search icon" /></button>
            </form>
            {isDropdownActive &&
            <SearchbarDropdown 
                isDropdownActive = {isDropdownActive}
                setIsDropdownActive = {setIsDropdownActive}
                setInputValue = {setInputValue}
                searchData  = {searchResult}
            />}
        </div>
    )
}