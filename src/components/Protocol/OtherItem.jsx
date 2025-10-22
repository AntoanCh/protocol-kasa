import React, { forwardRef } from "react";
import TextField from '@mui/material/TextField';
import { Box } from "@mui/material";

const OtherItem = forwardRef(({ label, name, kasa, state, handleState,placeholderInput ,onKeyDown }, ref) => {


  const handleChange = (event) => {
  const { name, value } = event.target;

  // 1) Normalize and allow only digits + one dot
  let cleaned = value.replace(/,/g, ".").replace(/[^0-9.]/g, "");

  // Allow only one decimal point
  const firstDot = cleaned.indexOf(".");
  if (firstDot !== -1) {
    cleaned =
      cleaned.slice(0, firstDot + 1) +
      cleaned
        .slice(firstDot + 1)
        .replace(/\./g, ""); // remove any extra dots after the first
  }

  // Split parts after final cleaning
  let parts = cleaned.split(".");

  // Limit decimal part to 2 digits
  if (parts[1]?.length > 2) {
    parts[1] = parts[1].slice(0, 2);
    cleaned = parts.join(".");
  }

  // Enforce total digits (excluding dot)
  const totalDigits = (parts[0] || "").length + (parts[1] || "").length;
  const maxDigits = 8;
  if (totalDigits > maxDigits) {
    return; // ignore extra input
  }

  // Empty → zero
  if (cleaned === "") {
    handleState("other", name, 0, kasa);
    return;
  }

  // 2) Preserve "editing" states as STRING so the dot/zero doesn't vanish
  // - "1."   (ends with dot)
  // - "1.0"  (one decimal so far; user may type another digit)
  if (cleaned.endsWith(".") || /\.\d$/.test(cleaned)) {
    handleState("other", name, cleaned, kasa); // store string temporarily
    return;
  }

  // 3) Final parse to number for stable state/math
  const num = parseFloat(cleaned);
  const newValue = Number.isNaN(num) ? 0 : num;
  handleState("other", name, newValue, kasa);
};
//  const handleChange = (event) => {
//   const { name, value, nativeEvent } = event.target;

//   let cleaned = value.replace(/,/g, '.');           // Convert commas to dots
// cleaned = cleaned.replace(/[^0-9.]/g, '');        // Keep only digits and dots
//   // Clean input: allow only digits and one dot
//   cleaned = cleaned.replace(/[^0-9.]/g, '');

//   // Allow only one decimal point
//   const parts = cleaned.split('.');
//   if (parts.length > 2) {
//     cleaned = parts[0] + '.' + parts[1];
//   }

//   // Limit decimal part to 2 digits
//   if (parts[1]?.length > 2) {
//     parts[1] = parts[1].slice(0, 2);
//     cleaned = parts.join('.');
//   }

//   // Count total digits (excluding dot)
//   const totalDigits = (parts[0] || '').length + (parts[1] || '').length;
//   const maxDigits = 8; // Customize this for your limit (e.g., 6, 8, etc.)
//   if (totalDigits > maxDigits) {
//     return; // Ignore input beyond max digits
//   }

//   // Special cases
//   if (cleaned === '.') {
//     handleState("other", name, '0.', kasa);
//     return;
//   }

//   if (cleaned.endsWith('.')) {
//     const base = parseFloat(cleaned);
//     const newValue = isNaN(base) ? '0.' : base.toString() + '.';
//     handleState("other", name, newValue, kasa);
//     return;
//   }

//   // Final parsing
//   const num = parseFloat(cleaned);

//   // Guarantee a number (fallback to 0)
//   const newValue = isNaN(num) ? 0 : num;

//   handleState("other", name, newValue, kasa);
// };

// const handleChange = (event) => {
//   const { name, value, nativeEvent } = event.target;

//   // Clean input: allow only digits and one dot
//   let cleaned = value.replace(/[^0-9.]/g, '');

//   // Allow only one decimal point
//   const parts = cleaned.split('.');
//   if (parts.length > 2) {
//     cleaned = parts[0] + '.' + parts[1];
//   }

//   // Limit decimal part to 2 digits
//   if (parts[1]?.length > 2) {
//     parts[1] = parts[1].slice(0, 2);
//     cleaned = parts.join('.');
//   }

//   // Count total digits (excluding dot)
//   const totalDigits = (parts[0] || '').length + (parts[1] || '').length;
//   const maxDigits = 8; // Customize this for your limit (e.g., 6, 8, etc.)
//   if (totalDigits > maxDigits) {
//     return; // Ignore input beyond max digits
//   }

//   // Special cases
//   if (cleaned === '.') {
//     handleState("other", name, '0.', kasa);
//     return;
//   }

//   if (cleaned.endsWith('.')) {
//     const base = parseFloat(cleaned);
//     const newValue = isNaN(base) ? '0.' : base.toString() + '.';
//     handleState("other", name, newValue, kasa);
//     return;
//   }

//   // Final parsing
//   const num = parseFloat(cleaned);

//   // Guarantee a number (fallback to 0)
//   const newValue = isNaN(num) ? 0 : num;

//   handleState("other", name, newValue, kasa);
// };
  // const handleChange = (event) => {
  //   let name = event.target.name;
  //   if (event.target.value) {
  //     let name = event.target.name;
  //     let newValue;
  //     if (event.target.value.endsWith(".")) {
  //       newValue = parseFloat(event.target.value).toString() + ".";
  //     } else if (event.target.value.endsWith(".0")) {
  //       newValue = parseFloat(event.target.value).toString() + ".0";
  //     } else if (/^[0-9]*\.[0-9]{2,3}$/.test(event.target.value)) {
  //       newValue = Number(parseFloat(event.target.value).toFixed(2));
  //     } else if (event.nativeEvent.inputType === "insertFromPaste") {
  //       newValue = Number(parseFloat(event.target.value).toFixed(2));
  //     } else {
  //       newValue = parseFloat(event.target.value);
  //     }
  //     parseFloat(newValue);
  //     handleState("other", name, newValue, kasa);
  //   } else {
  //     handleState("other", name, 0, kasa);
  //   }
  // };
  let line = "";
  if (name === "terminal") {
    line = "underline topline";
  } else {
    line = "";
  }
  const handleFocus = (event) => {
    if (event.target.value == 0) {
      event.target.select();
    }
  };
  return (
    <Box className={`inline-input ${line}`}>
      <label>{label}</label>

      <input
        className="active"
        name={name}
        onFocus={handleFocus}
        onChange={handleChange}
        value={state[kasa - 1].other[name]}
        type="text"
         ref={ref}
        onKeyDown={onKeyDown}
        placeholderInput={placeholderInput}
      ></input>
      {/* <TextField sx={{ "& .MuiInputBase-input": { fontSize: 15, height: 7, padding: 1, fontWeight: 600 }, input: {
                  
                  background: "white", 
                  border: "3px solid grey",
                   
                },
                "& .MuiInputBase-input.Mui-disabled": {
            backgroundColor: 'grey',
          },
                 margin: "1px" }}
               
                id="outlined-size-small"
                defaultValue="0"
                size="small"
                name={name}
                
              onFocus={handleFocus}
              onChange={handleChange}
              value={state[kasa - 1].other[name]}
              /> */}
    </Box>
  );
})

export default OtherItem;
