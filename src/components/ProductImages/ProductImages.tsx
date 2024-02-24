import { useEffect } from "react"
import usePagination from "../../hooks/usePagination"
import styles from "./ProductImages.module.css"
import { useParams } from "react-router-dom"

interface ProductImagesProps {
    imgUrls: string[],
    itemName: string,
    toPage?: number
}

export default function ProductImages({imgUrls, itemName, toPage = 0} : ProductImagesProps) {
    
    const images = imgUrls.map((url) =>
        <li key={url}>
            <img className={styles.productImg} src={url} alt={`Product image of ${itemName}`} />
        </li>
    )
    const currentUrl = useParams()
    const {currentPage, currentIndex, setCurrentIndex, nextPage, prevPage, firstPage, lastPage, isOnlyOnePage} = usePagination({arr: images, itemsPerPage: 1})

    
    useEffect(() => {
        setCurrentIndex(toPage)
    }, [currentUrl])
    
    

    console.log("CURRENT PAGE", currentIndex)

    return(
        <div className={styles.mainImgContainer}>
            <div className={styles.imgWithBtns}>
                {
                    !isOnlyOnePage &&
                    <button 
                        onClick={prevPage} 
                        className={styles.prevBtn}
                        disabled={firstPage}
                    >
                        <img src="../../src/assets/images/left-arrow.svg" alt="Left arrow." />
                    </button>
                }
                <ul className={styles.list}>
                    {currentPage}
                </ul>
                {
                    !isOnlyOnePage &&
                    <button 
                        onClick={nextPage} 
                        className={styles.nextBtn}
                        disabled = {lastPage}
                    >
                        <img src="../../src/assets/images/right-arrow.svg" alt="Right arrow." />
                    </button>
                }
            </div>
            <h2 className={styles.title}>{itemName}</h2>
        </div>
    )
}