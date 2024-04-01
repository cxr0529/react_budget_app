import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

const Currency = () => {
  const { dispatch, currency } = useContext(AppContext);
  const [selectedCurrency, setSelectedCurrency] = useState(currency);

  const handleCurrencyChange=(event)=>{
    const newCurrency = event.target.value;
    setSelectedCurrency(newCurrency);
    dispatch({
        type: 'CHANGE_CURRENCY',
        payload: newCurrency,
      });
  }

return (<div
    style={{
      backgroundColor: 'lightgreen',
      padding:'0.5rem',
      marginleft: '2rem',
    }}
  >
    <div>
    <label htmlFor="inputCurrencySelect01">Currency ({selectedCurrency})</label>
    <select
      className="custom-select"
      id="inputCurrencySelect01"
      value={selectedCurrency}
      onChange={handleCurrencyChange}
    >
      <option value="$" name="dollar">
        Dollar $
      </option>
      <option value="£" name="pounds">
        Pounds £
      </option>
      <option value="€" name="euro">
        Euro €
      </option>
      <option value="₹" name="ruppee">
        Ruppee ₹
      </option>
    </select>
  </div>
  </div>

)
};
export default Currency;