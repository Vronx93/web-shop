import { SetStateAction, useEffect, useMemo, useRef, useState } from "react"
import { getAllCategories } from "../../api"
import Category from "../Category/Category"
import styles from "./CategoriesList.module.css"

export interface CategoriesListProps {
    containerClassName?: string,
    listStyle?: string
    isDropdownActive: boolean,
    setIsDropdownActive: React.Dispatch<SetStateAction<boolean>>
}

export default function CategoriesList({containerClassName, listStyle, isDropdownActive, setIsDropdownActive } : CategoriesListProps) {
    const [categoryData, setCategoryData] = useState([])
    const categoriesRef = useRef(null)
    const containerStyle = containerClassName || styles.categoriesContainer
    const ulStyle = listStyle || styles.list

    useEffect(() => {
        getAllCategories()
            .then((resolvedData) => 
                setCategoryData(resolvedData))
    }, [])

    useEffect(() => {
        if(isDropdownActive){
            document.addEventListener('mousedown',closeDropdownOnOutsideClick)}
        
        return () => {
                document.removeEventListener("mousedown", closeDropdownOnOutsideClick)
        }
        }, [categoriesRef, closeDropdownOnOutsideClick]
    )

    function closeDropdownOnOutsideClick(event : any) {
        if(isDropdownActive && !categoriesRef.current?.contains(event.target)){
            setIsDropdownActive(false)
        }
    }

    const categories = useMemo(() => {
        return(
            categoryData?.map((cat : string) =>
                <Category
                key={cat}
                name={cat}
                setIsDropdownActive={setIsDropdownActive}
            />)
        )
    }, [categoryData]) 

    return(
        <div ref={categoriesRef} className={containerStyle}>
            <ul data-testid="categories-list" className={ulStyle}>
                {categories}
            </ul>
        </div>
    )
}