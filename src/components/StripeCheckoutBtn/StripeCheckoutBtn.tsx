import StripeCheckout from "react-stripe-checkout"
import { useContext } from "react";
import { BagItemsContext } from "../../contexts/bagItemsContext";
import styles from "./StripeCheckoutBtn.module.css"
import useTotalPrice from "../../hooks/useTotalPrice";
import { useNavigate } from "react-router-dom";

export default function StripeCheckoutBtn() {
    const {bagItems, setBagItems} = useContext(BagItemsContext)
    const navigate = useNavigate();
    const handleToken = (token : {}) => {
        // You can handle the token received from Stripe here
        // navigate to success
        // remove items from the bag
        console.log("TOKEN", token);
        if(token) {
            setBagItems([])
            // navigate("/")
            alert("Your order was created successfully. Thank you for testing :)")
        }
    }
    
      return (
        <StripeCheckout
          stripeKey="pk_test_51MitKlItnsJFe1YBSCflmI84GyV29Tsyw7pes9sc8vgW5WEhwGhePY4Nn3kQXXB4io5lxCdG7aUwJy5Ol89qVUU700T9En4y9G"
          token={handleToken}
          image="https://stripe.com/img/documentation/checkout/marketplace.png"
          amount={useTotalPrice()*100}
          name="WebStore App"
          description="Products Purchase"
          currency="USD"
          shippingAddress
          billingAddress
        >
            <button className={styles.purchaseBtn}>
                Purchase
            </button>
        </StripeCheckout>
      );
    };
    
