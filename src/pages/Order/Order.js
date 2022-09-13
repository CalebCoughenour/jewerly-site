import React from "react";
import './Order.css';
import photo1 from './orderForm.jpg';

const Order = () => {
  return (
    <>
    <div className="col-sm-3">
      <div className="HtoHeader">
       <h1>Bhodi Jewlery </h1>
        <h3>How to Order: </h3>
      <div className="Instructions">
        <ol>
          <li>Download PDF Form below</li>
          <li>Fill form out</li>
          <li>Email form to mette@BohdiJewelry.net</li>
        </ol>
        </div>
      </div>
    </div>

    <div className="col-sm-3">
      <img src={photo1} alt="OrderForm" width="600" height="600" />
      </div>
    </>
  )
};

export default Order;