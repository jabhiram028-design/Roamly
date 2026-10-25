const INDIA_CURRENCY = 'INR' as const;

// Roamly uses Indian Rupees as its default display currency.
// Keep this independent of browser locale/time zone so the currency never
// switches back to USD after refresh or when the visitor's locale differs.
export const USD_TO_INR_RATE = 84;

export const getVisitorCurrency = (): 'INR' => INDIA_CURRENCY;

export const formatVisitorPrice = (amount: number): string => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: INDIA_CURRENCY,
    maximumFractionDigits: 0
  }).format(amount);
};

export const formatVisitorPriceWithCode = (amount: number): string => {
  return `${formatVisitorPrice(amount)} INR`;
};
