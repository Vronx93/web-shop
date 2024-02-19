import usePagination from "../../hooks/usePagination"
import styles from "./ProductImages.module.css"

export default function ProductImages({imgUrls, itemName} : {imgUrls : string[], itemName: string}) {
    
    const images = imgUrls.map((url) =>
        <li key={url}>
            <img className={styles.productImg} src={url} alt={`Product image of ${itemName}`} />
        </li>
    )

    const {currentPage, nextPage, prevPage, firstPage, lastPage, isOnlyOnePage} = usePagination(images, 1)

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