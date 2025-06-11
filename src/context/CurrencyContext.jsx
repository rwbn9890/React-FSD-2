import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

export const CurrencyContext = createContext();

export const CurrencyContextProvider = ({ children }) => {
  const [curData, setCurData] = useState({});
  const [preCur, setPreCur] = useState("usd");
  const [nextCur, setNextCur] = useState("inr");
  const [nextAmt, setNextAmt] = useState(0)

  const api_url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${preCur}.json`;

  async function getCurrency() {
    let data = await axios.get(api_url);
    // console.log(data.data);
    setCurData(data.data[preCur]);
  }

  useEffect(() => {
    getCurrency();
  }, []);


  function handleChange(e){
    setNextAmt(e.target.value*curData[nextCur])
    // console.log(curData[nextCur])
  }

  return (
    <CurrencyContext.Provider
      value={{ curData, nextCur, setNextCur, setPreCur, preCur, handleChange, nextAmt }}
    >
      {children}
    </CurrencyContext.Provider>
  );
};

export const useCurrency = () => {
  return useContext(CurrencyContext);
};
