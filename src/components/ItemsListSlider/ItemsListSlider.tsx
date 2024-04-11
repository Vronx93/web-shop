import { Key, useRef } from "react"
import ShopItem from "../ShopItem/ShopItem"
import styles from "./ItemsListSlider.module.css"

export default function ItemsListSlider({shopItemsData}: any) {
    const itemsSlider = useRef<HTMLUListElement>(null)
    const renderedItems = shopItemsData?.map((item: any, index: Key | null | undefined) => 
        <ShopItem
            key={index} 
            itemData={item}
        />)

    const handlePrevClick = () => {
        if(itemsSlider.current) {
            itemsSlider.current.scrollLeft -= 450
        }
    }
    
    const handleNextClick = () => {
        if(itemsSlider.current) {
            itemsSlider.current.scrollLeft += 450
        }
    }
    
    return(
        <div className={styles.listContainer}>
            <button 
                onClick={handlePrevClick}
                className={styles.prevBtn}
            >
                <img src="src/assets/images/left-arrow.svg" alt="Left arrow" />
            </button>
            <ul ref={itemsSlider} className={styles.list}>
                {renderedItems}
            </ul>
            <button 
                onClick={handleNextClick}
                className={styles.nextBtn}
            >
                <img src="src/assets/images/right-arrow.svg" alt="Right arrow" />
            </button>
            
        </div>
    )
}