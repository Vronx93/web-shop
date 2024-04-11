import { Product } from "../SearchResults/SearchResults"

export async function handleQuantityChange(event : any, setQuantity: Function, setBagItems: Function, bagItems: Product[] | []) {
    const updatedBagItems = bagItems.map((bagItem) => {
        if(event.currentTarget?.id === (bagItem?.id).toString()) {
            return {...bagItem, quantity: event.currentTarget.value}
        } else {
            return bagItem
        }
    }) 
    setQuantity(parseInt(event.currentTarget.value))
    setBagItems(updatedBagItems)
}
