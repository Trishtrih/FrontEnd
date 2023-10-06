import React from "react";
import "../CreditCardForm/style.css";
const CreditCardForm = () => {
  return (
    <form className="card-form">
      <div className="card-form-input">
        <label>Card Number</label>
        <input type={"number"} />
      </div>
      <div className="card-form-input">
        <label>Card Name</label>
        <input type={"text"} />
      </div>
      <div className="card-form-input">
        <label> Expiration Date</label>
        <div>
          <select>
            <option disabled selected>
              {" "}
              Month
            </option>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
            <option value={6}>6</option>
            <option value={7}>7</option>
            <option value={8}>8</option>
            <option value={9}>9</option>
            <option value={10}>10</option>
            <option value={11}>11</option>
            <option value={12}>12</option>
          </select>
          <select>
            <option disabled selected>
              Year
            </option>
            <option value={2023}>2023</option>
            <option value={2024}>2024</option>
            <option value={2025}>2025</option>
            <option value={2026}>2026</option>
            <option value={2027}>2027</option>
            <option value={2028}>2028</option>
            <option value={2029}>2029</option>
            <option value={2030}>2030</option>
            <option value={2031}>2031</option>
            <option value={2032}>2032</option>
            <option value={2033}>2033</option>
            <option value={2034}>2034</option>
          </select>

          <input type={"number"} max={9999} />
        </div>
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default CreditCardForm;
