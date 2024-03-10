import { Product } from "../SearchResults/SearchResults"

export function handleQuantityChange(event : any, setQuantity: Function, setBagItems: Function) {
    setQuantity(parseInt(event.currentTarget.value))
    setBagItems((prevBagItems : Product[] | []) => {
        const updatedBagItems = prevBagItems.map((prevItem) => {
            if(parseInt(event.currentTarget?.id) === prevItem?.id) {
                return {...prevItem, quantity: event.currentTarget.value}
            } else {
                return prevItem
            }
        }) 
        return updatedBagItems
    })
}