import { useContext } from "react"
import { Product } from "../SearchResults/SearchResults"
import styles from "./RemoveItemIcon.module.css"
import { BagItemsContext } from "../../contexts/bagItemsContext"

export default function RemoveItemIcon({item} : {item : Product}) {
    const {setBagItems} = useContext(BagItemsContext)

    function handleRemoveIconClick(event : any) {
        setBagItems((prevBagItems: Product [] | []) => prevBagItems.filter((item : Product) => item.id !== parseInt(event.target.id)))
    }
    return(
        <img id={(item.id).toString()} tabIndex={0} onClick={(event) => handleRemoveIconClick(event)} className={styles.trashIcon} src="../../src/assets/images/trash-img.svg" alt="Remove icon" />
    )
}