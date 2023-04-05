import React, { useState, useEffect } from 'react';
import StripeCheckout from 'react-stripe-checkout';

const PaymentManage = () => {
  const [payments, setPayments] = useState([]);

  
  useEffect(() => {
    //    Here if my backend give me AIP here l will fetching a payment
    fetch('/api/payments')
      .then(response => response.json())
      .then(data => setPayments(data))
      .catch(error => console.error(error));
  }, []);

  const handleToken = (token) => {
    console.log(token);
    
    const newPayment = {
      id: Date.now(),
      amount: 'amount',
      currency: 'USD',
      status: 'paid'
    };
    setPayments([...payments, newPayment]);
  }

  return (
    <div>
      <h2>Payment Management</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Amount</th>
            <th>Currency</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {payments.map(payment => (
            <tr key={payment.id}>
              <td>{payment.id}</td>
              <td>{payment.amount}</td>
              <td>{payment.currency}</td>
              <td>{payment.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <br />
      <h3>Create New Payment</h3>
      <StripeCheckout
        stripeKey="your_stripe_publishable_key"
        token={handleToken}
        name="Payment"
        currency="USD"
      >
        <button>Pay now</button>
      </StripeCheckout>
    </div>
  );
}
export default PaymentManage;
