import { ReactNode, createContext, useContext, useState } from "react";
import { Product } from "../components/SearchResults/SearchResults";
export interface BagItemsContextInterface {
    bagItems: Product [] | [],
    setBagItems: React.Dispatch<React.SetStateAction<Product[]>>,
    addToBag: Function,
    removeFromBag: Function,
    resetBagItems: Function
}

export interface BagItemInterface {
    id: string, 
    title: string, 
    quantity: number, 
    price: number, 
    images: string, 
    thumbnail: string
}

const BagItemsContext = createContext<BagItemsContextInterface | null>(null)

export function useBagItemsContext() {
    const context = useContext(BagItemsContext)

    if(context) {
        return context
    }
    throw new Error (
        "Component should be placed in BagItemsContextProvider"
    )
}

function useBagItems() {
    const [bagItems, setBagItems] = useState(JSON.parse(localStorage.getItem("bagItems") || "[]"))

    const addToBag = async (event : any, product: Product, quantity: number) => {
        event.preventDefault()
        setBagItems((prevBagItems : BagItemInterface [] | []) => {
            const existingItem = prevBagItems.find((bagItem : BagItemInterface) => bagItem.id === product.id)
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
        localStorage.setItem("bagItems", JSON.stringify(bagItems))
    }

    const removeFromBag = (event : any) => {
        event.preventDefault()
        setBagItems((
            prevBagItems: BagItemInterface [] | []) => 
                prevBagItems.filter((item : BagItemInterface) => 
                    item.id != event.target.id))
        localStorage.setItem("bagItems", JSON.stringify(bagItems))
    }

    const resetBagItems = () => {
        setBagItems([])
        localStorage.setItem("bagItems", JSON.stringify(bagItems))
    }
    
    return {bagItems, setBagItems, addToBag, removeFromBag, resetBagItems}
}

export function BagItemsContextProvider({children} : {children : ReactNode}) {
    const {bagItems, setBagItems, addToBag, removeFromBag, resetBagItems} = useBagItems()

    return <BagItemsContext.Provider value={{bagItems, setBagItems, addToBag, removeFromBag, resetBagItems}}>{children}</BagItemsContext.Provider>
}