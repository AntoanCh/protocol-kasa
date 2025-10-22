import React from "react";

function RefItem({ label, name, state, handleRef, kasa }) {


  const handleChange = (event) => {
  const { name, value } = event.target;

  // 1) Normalize & keep only digits + dot
  let cleaned = value.replace(/,/g, ".").replace(/[^0-9.]/g, "");

  // 2) Allow only one decimal point (drop extras after the first)
  const firstDot = cleaned.indexOf(".");
  if (firstDot !== -1) {
    cleaned =
      cleaned.slice(0, firstDot + 1) +
      cleaned.slice(firstDot + 1).replace(/\./g, "");
  }

  // 3) Limit decimal part to 2 digits
  let parts = cleaned.split(".");
  if (parts[1]?.length > 2) {
    parts[1] = parts[1].slice(0, 2);
    cleaned = parts.join(".");
    parts = cleaned.split(".");
  }

  // 4) Limit total digits (excluding dot) to 6
  const totalDigits = (parts[0] || "").length + (parts[1] || "").length;
  const maxDigits = 6;
  if (totalDigits > maxDigits) return;

  // 5) Empty → 0
  if (cleaned === "") {
    handleRef("ref", name, 0, kasa);
    return;
  }

  // 6) Preserve partial input UX (keep STRING while editing)
  // - "0." or "12." (trailing dot)
  // - "1.0" (single decimal so far; user may type another)
  if (cleaned.endsWith(".") || /\.\d$/.test(cleaned)) {
    // Also normalize a lone "." to "0."
    const partial = cleaned === "." ? "0." : cleaned;
    handleRef("ref", name, partial, kasa);
    return;
  }

  // 7) Final numeric value
  const num = parseFloat(cleaned);
  handleRef("ref", name, Number.isNaN(num) ? 0 : num, kasa);
};

// const handleChange = (event) => {
//   const { name, value } = event.target;

//   // 1) Convert commas to dots, then strip invalid chars
//   let cleaned = value.replace(/,/g, '.');
//   cleaned = cleaned.replace(/[^0-9.]/g, '');

//   // 2) Allow only one decimal point
//   let parts = cleaned.split('.');
//   if (parts.length > 2) {
//     cleaned = parts[0] + '.' + parts[1];
//     parts = cleaned.split('.'); // recompute after change
//   }

//   // 3) Limit decimal part to 2 digits
//   if (parts[1]?.length > 2) {
//     parts[1] = parts[1].slice(0, 2);
//     cleaned = parts.join('.');
//     parts = cleaned.split('.'); // recompute after change
//   }

//   // 4) Limit total digits (excluding the dot) to 6
//   const totalDigits = (parts[0] || '').length + (parts[1] || '').length;
//   const maxDigits = 6;
//   if (totalDigits > maxDigits) {
//     return; // Ignore input beyond max digits
//   }

//   // 5) Special partial-input cases to preserve UX
//   if (cleaned === '.') {
//     handleRef("ref", name, '0.', kasa);
//     return;
//   }

//   if (cleaned.endsWith('.')) {
//     const base = parseFloat(cleaned);
//     const newValue = isNaN(base) ? '0.' : base.toString() + '.';
//     handleRef("ref", name, newValue, kasa);
//     return;
//   }

//   // 6) Final parse (fallback to 0)
//   const num = parseFloat(cleaned);
//   const newValue = isNaN(num) ? 0 : num;

//   handleRef("ref", name, newValue, kasa);
// };



//   const handleChange = (event) => {
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
//     handleRef("ref", name, '0.', kasa);
//     return;
//   }

//   if (cleaned.endsWith('.')) {
//     const base = parseFloat(cleaned);
//     const newValue = isNaN(base) ? '0.' : base.toString() + '.';
//     handleRef("ref", name, newValue, kasa);
//     return;
//   }

//   // Final parsing
//   const num = parseFloat(cleaned);

//   // Guarantee a number (fallback to 0)
//   const newValue = isNaN(num) ? 0 : num;

//   handleRef("ref", name, newValue, kasa);
// };
  // const handleChange = (event) => {
  //   if (event.target.value) {
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
  //       newValue = parseFloat(event.target.value); //.toString();
  //     }
  //     handleRef("ref", name, newValue, kasa);
  //   } else {
  //     handleRef("ref", name, 0, kasa);
  //   }
  // };

  //handle onBlur event for alert messages
  // const handleBlur = (event) => {
  //   if (event.target.name === "check") {
  //     if (
  //       event.target.value != parseFloat(state[kasa - 1].totals.vouchers) &&
  //       event.target.value != 0
  //     ) {
  //       event.target.style.borderColor = "red";
  //       handleAlert(
  //         true,
  //         `Разлика във ваучерите : ${Math.abs(
  //           event.target.value - parseFloat(state[kasa - 1].totals.vouchers)
  //         ).toFixed(2)}лв`,
  //         kasa
  //       );
  //     } else {
  //       event.target.style.borderColor = "";
  //       handleAlert(false, "", "");
  //     }
  //   }
  //   if (event.target.name === "karta") {
  //     if (
  //       event.target.value != parseFloat(state[kasa - 1].other.terminal) &&
  //       event.target.value != 0
  //     ) {
  //       event.target.style.borderColor = "red";
  //       handleAlert(
  //         true,
  //         `Разлика в плащанията с карта : ${Math.abs(
  //           event.target.value - parseFloat(state[kasa - 1].other.terminal)
  //         ).toFixed(2)} лв`,
  //         kasa
  //       );
  //     } else {
  //       event.target.style.borderColor = "";
  //       handleAlert(false, "");
  //     }
  //   }
  //   if (event.target.name === "glovo") {
  //     if (
  //       event.target.value != parseFloat(state[kasa - 1].other.glovo) &&
  //       event.target.value != 0
  //     ) {
  //       event.target.style.borderColor = "red";
  //       handleAlert(
  //         true,
  //         `Разлика в Кредит(Glovo) : ${Math.abs(
  //           event.target.value - parseFloat(state[kasa - 1].other.glovo)
  //         ).toFixed(2)}лв`,
  //         kasa
  //       );
  //     } else {
  //       event.target.style.borderColor = "";
  //       handleAlert(false, "");
  //     }
  //   }
  //   if (event.target.name === "broi") {
  //     if (
  //       event.target.value !=
  //         parseFloat(state[kasa - 1].totals.cash) +
  //           parseFloat(state[kasa - 1].other.inkaso) +
  //           parseFloat(state[kasa - 1].other.cashBack) +
  //           parseFloat(state[kasa - 1].other.rko) +
  //           parseFloat(state[kasa - 1].other.storno) &&
  //       event.target.value != 0
  //     ) {
  //       event.target.style.borderColor = "red";
  //       handleAlert(
  //         true,
  //         `Разлика в плащанията в брой : ${Math.abs(
  //           event.target.value -
  //             (parseFloat(state[kasa - 1].totals.cash) +
  //               parseFloat(state[kasa - 1].other.inkaso) +
  //               parseFloat(state[kasa - 1].other.cashBack) +
  //               parseFloat(state[kasa - 1].other.rko) +
  //               parseFloat(state[kasa - 1].other.storno))
  //         ).toFixed(2)} лв`,
  //         kasa
  //       );
  //     } else {
  //       event.target.style.borderColor = "";
  //       handleAlert(false, "");
  //     }
  //   }
  // };
  const handleFocus = (event) => {
    if (event.target.value == 0) {
      event.target.select();
    }
  };
  return (
    <div className="inline-input">
      <label>{label}</label>
      <input
        className="active"
        name={name}
        onFocus={handleFocus}
        value={state[kasa - 1].ref[name]}
        // onBlur={handleBlur}
        onChange={handleChange}
        type="text"
      ></input>
    </div>
  );
}

export default RefItem;
