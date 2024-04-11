import { useEffect, useState } from "react"
import styles from "./ShopItem.module.css"
import { Link } from "react-router-dom"

export default function ShopItem({ itemData} : { itemData: any}) {
    const [data, setData] = useState(itemData)

    useEffect(() => {
        itemData.then((resolvedData : any) =>
            setData(resolvedData))
    }, [data])

    return(
        <li 
            className={styles.itemContainer}
        >
            <Link to={`/product/${data.id}`} state={data}>
                <img className={styles.thumbnailPhoto} src={data.thumbnail} alt="" />
                <div className={styles.titlePriceContainer}>
                    <span className={styles.title}>{data.title}</span>
                    <span className={styles.price}>${data.price}</span>
                </div>
            </Link>
        </li>
    )
}
