import { useEffect, useState } from "react"
import styles from "./ShopItem.module.css"



export default function ShopItem({ itemData} : { itemData: any}) {
    const [data, setData] = useState(itemData)

    useEffect(() => {
        itemData.then((resolvedData : any) =>
            setData(resolvedData))
    }, [data])

    // console.log("stateData", data)

    // console.log("shopItemComponentParam", itemData)

    return(
        <li 
            className={styles.itemContainer}
            tabIndex={0}
        >
            <img className={styles.thumbnailPhoto} src={data.thumbnail} alt="" />
            <div className={styles.titlePriceContainer}>
                <span className={styles.title}>{data.title}</span>
                <span className={styles.price}>${data.price}</span>
            </div>
        </li>
    )
}
