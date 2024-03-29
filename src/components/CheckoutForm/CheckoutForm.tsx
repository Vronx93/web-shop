import CheckoutList from "../CheckoutList/CheckoutList"
import StripeCheckoutBtn from "../StripeCheckoutBtn/StripeCheckoutBtn"
import styles from "./CheckoutForm.module.css"
import { useBagItemsContext } from "../../contexts/BagItemsContext"

export default function CheckoutForm() {
    const {bagItems} = useBagItemsContext()

    return(
        <div className={styles.formContainer}>
            <CheckoutList />
            {bagItems.length > 0 && <StripeCheckoutBtn data-testid="stripe-checkout-btn"/>}
        </div>
    )
}