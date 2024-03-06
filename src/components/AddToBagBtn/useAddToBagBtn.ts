import { Dispatch } from "react"
import { Product } from "../SearchResults/SearchResults"

export default function useAddToBagBtn(event : any, setter: Dispatch<React.SetStateAction<Product[]>>, product: Product, quantity: number){
    event.preventDefault()
        setter((prevBagItems) => {
            const existingItem = prevBagItems.find((bagItem : Product) => bagItem.id === product.id)

            if (existingItem) {
                return prevBagItems.map((bagItem) =>
                    bagItem.id === product.id
                        ? { ...bagItem, quantity: quantity + bagItem.quantity }
                        : bagItem
                )
            } else {
                return [...prevBagItems, { id: product.id, title: product.title, quantity: quantity, price: product.price, images: product.images, thumbnail: product.thumbnail }]
            }
        })
}
