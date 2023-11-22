import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../../../components/CheckoutForm/CheckoutForm";


const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);

const Payment = () => {
  return (
    <div>
      <div>
        <SectionTitle
          heading={"PAYMENT"}
          subTitle={"---Pay please ?---"}
        ></SectionTitle>
      </div>
      
     <div>
       <Elements stripe={stripePromise}>
        <CheckoutForm></CheckoutForm>
       </Elements>
     </div>
    </div>
  );
};

export default Payment;
