// src/hooks/useNumericInput.js
import { useCallback } from "react";

/**
 * useNumericInput
 * - Converts commas to dots
 * - Allows only digits and a single dot
 * - Max 2 decimal places
 * - Limits total digits (excludes the dot) to maxDigits
 * - Preserves '0.' / trailing '.' UX
 *
 * @param {object} opts
 * @param {number} opts.maxDigits total digits excluding dot (default 6)
 * @param {(nextValue: string|number) => void} opts.onCommit called with final value (number) or '0.' / '12.' string while typing
 */
export default function useNumericInput({ maxDigits = 6, onCommit }) {
  return useCallback(
    (event) => {
      const { name, value } = event.target;

      // 1) Convert commas to dots, strip invalid chars
      let cleaned = value.replace(/,/g, ".").replace(/[^0-9.]/g, "");

      // 2) Allow only one decimal point
      let parts = cleaned.split(".");
      if (parts.length > 2) {
        cleaned = parts[0] + "." + parts[1];
        parts = cleaned.split(".");
      }

      // 3) Limit decimal part to 2 digits
      if (parts[1]?.length > 2) {
        parts[1] = parts[1].slice(0, 2);
        cleaned = parts.join(".");
        parts = cleaned.split(".");
      }

      // 4) Enforce total digit limit (excluding dot)
      const totalDigits = (parts[0] || "").length + (parts[1] || "").length;
      if (totalDigits > maxDigits) {
        return; // ignore extra input
      }

      // 5) Partial-input UX
      if (cleaned === ".") {
        onCommit({ name, value: "0." });
        return;
      }
      if (cleaned.endsWith(".")) {
        const base = parseFloat(cleaned);
        const newValue = Number.isNaN(base) ? "0." : base.toString() + ".";
        onCommit({ name, value: newValue });
        return;
      }

      // 6) Final parse
      const num = parseFloat(cleaned);
      const finalValue = Number.isNaN(num) ? 0 : num;

      onCommit({ name, value: finalValue });
    },
    [maxDigits, onCommit]
  );
}
