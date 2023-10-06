import React from "react";
import "../Main/style.css";
import CreditCard from "../CreditCard";
import CreditCardForm from "../CreditCardForm";
const Main = () => {
  return (
    <div className="credit-card-main">
      <CreditCard />
      <CreditCardForm />
    </div>
  );
};

export default Main;
