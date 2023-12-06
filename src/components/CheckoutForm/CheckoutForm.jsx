import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const CheckoutForm = () => {

  const [error, setError] = useState('');

  const [clientSecret, setClientSecret] = useState('');

  const [transactionId, setTransactionId] = useState('');

  const navigate = useNavigate();

  const stripe = useStripe();
  const elements = useElements();

  const {user} = useAuth();
  
  const axiosSecure = useAxiosSecure();

  const [cart, refetch] = useCart();
  
  const totalPrice = cart.reduce( (total, item ) => total + item.price ,0)



  useEffect(() => {

    if(totalPrice > 0){
      axiosSecure.post('/api/v1/create-payment-intent', { price : totalPrice })
    .then(res => {
      console.log(res.data.clientSecret);
      setClientSecret(res.data.clientSecret);
    })
    }

  },[axiosSecure, totalPrice])



  const handleSubmit = async (event) => {

    event.preventDefault();

    if(!stripe || !elements){
        return;
    }

    const card = elements.getElement(CardElement);

    if(card == null){
        return;
    }
   
    const {error, paymentMethod} = await stripe.createPaymentMethod({
        type:'card',
        card
    })


    if(error){
        console.log('Payment error', error);
        setError(error.message)
    } 

    else{
        console.log('paymentMethod', paymentMethod);
        setError('');
    }

    // confirm payment // 
    const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card : card, //card info came from line 54
        billing_details: {
          email : user?.email || 'anonymous',
          name : user?.displayName || 'anonymous'
        }
      }
    })

    if(confirmError){
      console.log('confirm Error ', confirmError);
    }

    else{
      console.log('payment intent', paymentIntent);
      if(paymentIntent.status === 'succeeded') {
        console.log('transaction id', paymentIntent.id);
        setTransactionId(paymentIntent.id);

        // now save the payment in database // 
        const payment = {
          email : user?.email,
          price : totalPrice,
          transactionId : paymentIntent.id,
          date : new Date(), //utc date convert //
          cartIds : cart.map(item => item._id),
          menuItemIds : cart.map(item => item.menuId),
          status : 'pending'
        }

        const res = await axiosSecure.post('/api/v1/payments', payment)
        refetch();
        if(res.data?.paymentResult?.insertedId) {
          Swal.fire({
            position: "top",
            icon: "success",
            title: "Payment Successfully",
            showConfirmButton: false,
            timer: 1500
          });
          navigate('/dashboard/paymentHistory');
        }

       

        // console.log('payment saved', res.data);
      }
    }

  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
         <button disabled={!stripe || !clientSecret} className="px-5 py-1 mt-4 bg-gray-200 border-b-4 rounded-md text-[#BB8506] border-[#BB8506] cursor-pointer">Pay</button>

         <p className="text-red-500 mt-4">{error}</p>

         {transactionId && <p className="text-green-500 mt-4"> Your transaction id : {transactionId}</p>}

      </form>
    </div>
  );
};

export default CheckoutForm;
