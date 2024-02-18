import styles from "./ProductImages.module.css"

export default function ProductImages({imgUrls, itemName} : {imgUrls : string[], itemName: string}) {

    const images = imgUrls.map((url) =>
        <li key={url}>
            <img src={url} alt={`Product image of ${itemName}`} />
        </li>
    )

    return(
        <div className={styles.mainImageContainer}>
            <ul>
                {images}
            </ul>
        </div>
    )
}