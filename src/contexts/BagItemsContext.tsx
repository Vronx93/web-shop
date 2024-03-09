import { ReactNode, createContext, useContext, useState } from "react";
import { Product } from "../components/SearchResults/SearchResults";
export interface BagItemsContextInterface {
    bagItems: Product [] | [],
    setBagItems: React.Dispatch<React.SetStateAction<Product[]>>
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
    return {bagItems, setBagItems}
}

export function BagItemsContextProvider({children} : {children : ReactNode}) {
    const bagItems = useBagItems()

    return <BagItemsContext.Provider value={bagItems}>{children}</BagItemsContext.Provider>
}