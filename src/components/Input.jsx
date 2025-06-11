import React from "react";
import { useCurrency } from "../context/CurrencyContext";

const Input = ({ cr, handleChange, amt }) => {
  return (
    <>
      <input type="number" value={amt} onChange={handleChange} placeholder={cr} />
    </>
  );
};

export default Input;
