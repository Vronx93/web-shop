import { useContext } from "react"
import { BagItemsContextInterface, BagItemsContext } from "../../contexts/bagItemsContext"
import CheckoutList from "../../components/CheckoutList/CheckoutList"

export default function Checkout() {

    return(
        <>
            <CheckoutList />
        </>
    )
}