import StripeCheckout from "react-stripe-checkout";
import { useBagItemsContext } from "../../contexts/BagItemsContext";
// import styles from "./StripeCheckoutBtn.module.css"
// import { useNavigate } from "react-router-dom";

export default function StripeCheckoutBtn() {
  const { countTotalPrice, resetBagItems } = useBagItemsContext();
  // const navigate = useNavigate();
  const handleToken = (token: {}) => {
    // handle the token received from Stripe here
    // navigate to success?
    console.log("TOKEN", token);
    if (token) {
      resetBagItems(); // remove items from the bag
      // navigate("/")
      alert("Your order was created successfully. Thank you for testing :)");
    }
  };

  return (
    <StripeCheckout
      stripeKey="pk_test_51MitKlItnsJFe1YBSCflmI84GyV29Tsyw7pes9sc8vgW5WEhwGhePY4Nn3kQXXB4io5lxCdG7aUwJy5Ol89qVUU700T9En4y9G" //i know this shouldn't be here, it's only for testing/demo reasons
      token={handleToken}
      image="https://stripe.com/img/documentation/checkout/marketplace.png"
      amount={countTotalPrice() * 100}
      name="WebStore App"
      description="Products Purchase"
      currency="USD"
      shippingAddress
      billingAddress
    ></StripeCheckout>
  );
}
