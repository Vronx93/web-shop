import useTotalPrice from "../../hooks/useTotalPrice"
import CheckoutList from "../CheckoutList/CheckoutList"
import StripeCheckoutBtn from "../StripeCheckoutBtn/StripeCheckoutBtn"
import styles from "./CheckoutForm.module.css"

export default function CheckoutForm() {
    return(
        <div className={styles.formContainer}>
            <CheckoutList />
            {useTotalPrice() > 0 && <StripeCheckoutBtn />}
        </div>
    )
}