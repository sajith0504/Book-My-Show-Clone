import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const PaymentPage = () => {
  const location = useLocation();
  const navi = useNavigate();
  const { price } = location.state || {};

  const handlesubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission
    navi("/home"); // Navigate to home after submitting
  };

  return (
    <div className='pay_mai-box'>
        <div className='pay-sub-box'>
        <form onSubmit={handlesubmit}>
            <div className="mb-3">
              <label htmlFor="cardNumber" className="form-label">Card Number</label>
              <input
                type="text"
                className="form-control"
                id="cardNumber"
                name="cardNumber"
                maxLength={16}
                inputMode="numeric"
                pattern="\d{16}"
                onInput={(e) => {
                  e.target.value = e.target.value.replace(/\D/, '');
                }}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="expiryDate" className="form-label">Expiry Date</label>
              <input
                type="month"
                className="form-control"
                id="expiryDate"
                name="expiryDate"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="cvv" className="form-label">CVV</label>
              <input
                type="text"
                className="form-control"
                id="cvv"
                name="cvv"
                maxLength={3}
                inputMode="numeric"
                onInput={(e) => {
                  e.target.value = e.target.value.replace(/\D/, '');
                }}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="cardHolder" className="form-label">Card Holder's Name</label>
              <input
                type="text"
                className="form-control"
                id="cardHolder"
                name="cardHolder"
                required
              />
            </div>
            <button type="submit" className="btn btn-primary w-100">
              Pay RS {price}
            </button>
          </form>
        </div>
    </div>
  );
};

export default PaymentPage;
