import React, { useState } from "react";
import "../../../css2/payment.css";
function PaymentForm() {
  const [name, setName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    // Add payment processing logic here
  }
  return (
    <div className="payment">
      <form onSubmit={handleSubmit}>
        <label>
          Name on Card:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          Mobile number:
          <input
            type="text"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
          />
        </label>
        <label>
          Expiry Date:
          <input
            type="text"
            value={expiryDate}
            onChange={(e) => setExpiryDate(e.target.value)}
          />
        </label>
        <label>
          moble number:
          <input
            type="number"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
          />
        </label>
        <button type="submit">Pay Now</button>
      </form>
    </div>
  );
}
export default PaymentForm;
