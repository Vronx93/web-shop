import { useEffect, useRef, useState } from "react"
import ShopItem from "../ShopItem/ShopItem"
import styles from "./ItemsListSlider.module.css"

export default function ItemsListSlider({shopItemsData}: any) {
    const itemsSlider = useRef(null)
    const renderedItems = shopItemsData?.map((item, index) => 
        <ShopItem
            key={index} 
            itemData={item}
        />)

    // console.log("renderedItems", renderedItems)

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
                Prev
            </button>
            <ul ref={itemsSlider} className={styles.list}>
                {renderedItems}
            </ul>
            <button 
                onClick={handleNextClick}
                className={styles.nextBtn}
            >
                Next
            </button>
            
        </div>
    )
}