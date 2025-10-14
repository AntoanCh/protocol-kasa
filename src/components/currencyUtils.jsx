/**
 * Converts a number or string currency (e.g. "12.99") to an integer in cents (e.g. 1299)
 * Rounds to the nearest cent.
 * @param {string | number} value - Currency input
 * @returns {number} Integer representing cents
 */
export function toCents(value) {
  const parsed = parseFloat(value);
  if (isNaN(parsed)) return 0;
  return Math.round(parsed * 100);
}

/**
 * Converts an integer in cents to a formatted decimal string (e.g. 1299 -> "12.99")
 * @param {number} cents - Amount in cents
 * @param {number} decimalPlaces - Decimal precision (default 2)
 * @returns {string}
 */
export function fromCents(cents, decimalPlaces = 2) {
  if (typeof cents !== 'number' || isNaN(cents)) return '0.00';
  return (cents / 100).toFixed(decimalPlaces);
}

/**
 * Converts cents to a localized currency string (e.g. "$12.99")
 * @param {number} cents
 * @param {string} currency
 * @param {string} locale
 * @returns {string}
 */
export function formatCents(cents, currency = 'BGN', locale = 'bg-BG') {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(cents / 100);
}