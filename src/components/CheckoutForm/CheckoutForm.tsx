import CheckoutAddress from "../CheckoutAddress/CheckoutAddress"
import CheckoutList from "../CheckoutList/CheckoutList"
import PurchaseBtn from "../PurchaseBtn/PurchaseBtn"
import styles from "./CheckoutForm.module.css"

export default function CheckoutForm() {
    return(
        <div className={styles.formContainer}>
            <CheckoutList />
            <CheckoutAddress />
            <PurchaseBtn />
        </div>
    )
}