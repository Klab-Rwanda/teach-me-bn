import React, { useState } from 'react';
import StripeCheckout from 'react-stripe-checkout';

const Payment = () => {
  const [amount, setAmount] = useState(0);

  const handleToken = (token) => {
    console.log(token);
    // Here, you can handle the token object returned by Stripe to process the payment on your server.
  }

  return (
    <div>
      <h2>Payment Page</h2>
      <input type="number" placeholder="Enter Amount" value={amount} onChange={(e) => setAmount(e.target.value)} />
      <StripeCheckout
        stripeKey="your_stripe_publishable_key"
        token={handleToken}
        amount={amount * 100}
        name="Payment"
        currency="USD"
      >
        <button>Pay now</button>
      </StripeCheckout>
    </div>
  );
}

export default Payment;


