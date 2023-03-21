import React, { useState } from 'react';
// import '../../../css/Pyaments.css';
const Payment = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [nameOnCard, setNameOnCard] = useState('');
  const [billingAddress, setBillingAddress] = useState('');

  const handleCardNumberChange = (e) => {
    setCardNumber(e.target.value);
  };

  const handleExpiryDateChange = (e) => {
    setExpiryDate(e.target.value);
  };

  const handleCvvChange = (e) => {
    setCvv(e.target.value);
  };

  const handleNameOnCardChange = (e) => {
    setNameOnCard(e.target.value);
  };

  const handleBillingAddressChange = (e) => {
    setBillingAddress(e.target.value);
  };

  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    // code to process payment
  };

  return (
    <div>
      <h1>Payment</h1>
      <form onSubmit={handlePaymentSubmit}>
        <label>
          Card Number:
          <input type="text" value={cardNumber} onChange={handleCardNumberChange} />
        </label>
        <br />
        <label>
          Expiry Date:
          <input type="text" value={expiryDate} onChange={handleExpiryDateChange} />
        </label>
        <br />
        <label>
          CVV:
          <input type="text" value={cvv} onChange={handleCvvChange} />
        </label>
        <br />
        <label>
          Name on Card:
          <input type="text" value={nameOnCard} onChange={handleNameOnCardChange} />
        </label>
        <br />
        <label>
          Billing Address:
          <input type="text" value={billingAddress} onChange={handleBillingAddressChange} />
        </label>
        <br />
        <button type="submit">Pay Now</button>
      </form>
    </div>
  );
};

export default Payment;

