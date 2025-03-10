import React, { useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import "./Styles/Payment.css";

const PaymentPage = () => {
  const [searchParams] = useSearchParams();
  const projectId = searchParams.get("projectId");
  const navigate = useNavigate();
  const [upiId, setUpiId] = useState("");
  const [amount, setAmount] = useState("");
  const [message, setMessage] = useState("");

  const handlePayment = (e) => {
    e.preventDefault();
    if (!upiId || !amount) {
      setMessage("Please enter valid UPI ID and amount.");
      return;
    }
    
    setMessage("Payment Successful! Thank you for your donation.");
    setTimeout(() => navigate("/"), 3000);
  };

  return (
    <div className="payment-page">
      <h1>Donate to Project</h1>
      <p>Project ID: {projectId}</p>
      <form onSubmit={handlePayment} className="payment-form">
        <label>
          Enter UPI ID:
          <input
            type="text"
            value={upiId}
            onChange={(e) => setUpiId(e.target.value)}
            placeholder="example@upi"
            required
          />
        </label>
        <label>
          Enter Amount:
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter donation amount"
            required
          />
        </label>
        <button type="submit" className="pay-button">Pay Now</button>
      </form>
      {message && <p className="payment-message">{message}</p>}
    </div>
  );
};

export default PaymentPage;
