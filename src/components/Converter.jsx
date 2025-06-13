import React, { useContext } from "react";
import { useCurrency } from "../context/CurrencyContext";
import Input from "./Input";
import Select from "./Select";

const Converter = () => {
  const { curData, nextCur, preCur, setPreCur, setNextCur, preAmt, handleChange, nextAmt, setPreAmt, handleSwitch } = useCurrency();

  return (
    <>
      <Input setPreAmt={setPreAmt} amt={preAmt} cr={preCur} />
      <Select curData={curData} setCur={setPreCur} cur={preCur} />

      <br />
      <br />
      <button onClick={handleSwitch}>Switch</button>
      <br />
      <br />

      <Input cr={nextCur} amt={nextAmt} />
      <Select curData={curData} setCur={setNextCur} cur={nextCur} />
    </>
  );
};

export default Converter;
