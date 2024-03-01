import CheckoutForm from "../../components/CheckoutForm/CheckoutForm"
import { useEffect } from "react"

export default function Checkout() {
    useEffect(()=>{
        window.scrollTo({top: 0})
    },[])

    return(
        <>
            <CheckoutForm />
        </>
    )
}