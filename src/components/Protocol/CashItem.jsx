import React, { forwardRef } from "react";

const CashItem = forwardRef(({ kasa, placeholder, state, handleCash ,placeholderInput ,onKeyDown, currency  },ref) =>  {
 const handleChange = (event) => {
  let { value } = event.target;

  // Remove all non-digit characters
  value = value.replace(/\D/g, '');

  // Limit to 6 digits
  if (value.length > 6) {
    value = value.slice(0, 6);
  }

  // Convert to integer (or 0 if empty)
  const newValue = value ? parseInt(value, 10) : 0;

  handleCash(placeholder, newValue, kasa);
};

  const handleFocus = (event) => {
    if (event.target.value == 0) {
      event.target.select();
    }
  };
 

  return (
    <div className="cash-table">
      <input
        className="active"
        name={placeholder}
        type="text"
        value={state[kasa - 1].cash[placeholder][0]}
        onFocus={handleFocus}
        onChange={handleChange}
        ref={ref}
        onKeyDown={onKeyDown}
        placeholderInput={placeholderInput}
      
      ></input>
      <input type="text" value={placeholder.toLocaleString("bg-BG", {
        style: "currency",
        currency: currency,
        maximumFractionDigits: placeholder >= 1 ? 0 : 2, 
      })} disabled></input>
      <input
        className="active"
        type="text"
        value={state[kasa - 1].cash[placeholder][1].toLocaleString("bg-BG", {
            style: "currency",
            currency: currency,
            
          })}
        // value={state[kasa - 1].cash[placeholder][1].toFixed(2)}
        // value={(state[kasa - 1].cash[placeholder] * placeholder).toFixed(2)}
        disabled
      ></input>
    </div>
  );
})

export default CashItem;
