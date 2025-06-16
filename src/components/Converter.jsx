import React, { useContext } from "react";
import { useCurrency } from "../context/CurrencyContext";
import Input from "./Input";
import Select from "./Select";

const Converter = () => {
  const { curData, nextCur, preCur, setPreCur, setNextCur, preAmt, handleChange, nextAmt, setPreAmt, handleSwitch } = useCurrency();

  return (
    <>
    <div className="flex w-md border">
      <Input setPreAmt={setPreAmt} amt={preAmt} cr={preCur} />
      <Select curData={curData} setCur={setPreCur} cur={preCur} />
    </div>

      <br />
      <br />
      <button onClick={handleSwitch}>Switch</button>
      <br />
      <br />
    <div className="flex w-md border">
      <Input cr={nextCur} amt={nextAmt} />
      <Select curData={curData} setCur={setNextCur} cur={nextCur} />
    </div>
    </>
  );
};

export default Converter;
