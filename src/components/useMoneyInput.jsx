import { useState } from 'react';

export function useMoneyInput({
  maxDigits = 8,
  decimalPlaces = 2,
  initial = '0'
} = {}) {
  const [value, setValue] = useState(initial);

  const handleChange = (event) => {
    const raw = event.target.value;
    let cleaned = raw.replace(/[^0-9.]/g, '');

    const parts = cleaned.split('.');
    if (parts.length > 2) {
      cleaned = parts[0] + '.' + parts[1];
    }

    if (parts[1]?.length > decimalPlaces) {
      parts[1] = parts[1].slice(0, decimalPlaces);
      cleaned = parts.join('.');
    }

    const totalDigits = (parts[0] || '').length + (parts[1] || '').length;
    if (totalDigits > maxDigits) return;

    if (cleaned === '.') {
      setValue('0.');
      return;
    }

    if (cleaned.endsWith('.')) {
      const base = parseFloat(cleaned);
      setValue(isNaN(base) ? '0.' : base.toString() + '.');
      return;
    }

    const num = parseFloat(cleaned);
    setValue(isNaN(num) ? '0' : num);
  };

  return [value, handleChange];
}