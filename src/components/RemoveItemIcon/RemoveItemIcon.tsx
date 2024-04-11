import { Product } from "../SearchResults/SearchResults"
import styles from "./RemoveItemIcon.module.css"
import { useBagItemsContext } from "../../contexts/BagItemsContext"

export default function RemoveItemIcon({item} : {item : Product}) {
    const {removeFromBag} = useBagItemsContext()

    return(
        <img id={item.id} tabIndex={0} onClick={(event) => removeFromBag(event)} className={styles.trashIcon} src="../../src/assets/images/trash-img.svg" alt={`Remove icon for ${item.title}`} />
    )
}