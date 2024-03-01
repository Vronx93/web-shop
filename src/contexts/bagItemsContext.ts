import { createContext } from "react";
import { Product } from "../components/SearchResults/SearchResults";
export interface BagItemsContextInterface {
    bagItems?: Product [],
    setBagItems?: React.Dispatch<React.SetStateAction<Product[]>>
}
export const BagItemsContext = createContext<Product [] | []>([])

