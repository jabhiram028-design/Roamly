const INDIA_CURRENCY = 'INR';
const US_CURRENCY = 'USD';

// Pricing data in Roamly is stored in USD. This rate is only for display conversion.
// Update this value when you want to refresh the site's display rate.
export const USD_TO_INR_RATE = 84;

export const getVisitorCurrency = (): 'INR' | 'USD' => {
  if (typeof window === 'undefined') return INDIA_CURRENCY;

  const locale = (navigator.language || '').toLowerCase();
  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone || '';

  // Prefer an explicit India locale/time zone.
  if (locale === 'en-in' || locale.endsWith('-in') || timeZone === 'Asia/Kolkata' || timeZone === 'Asia/Calcutta') {
    return INDIA_CURRENCY;
  }

  // US locale/time zones are displayed in dollars.
  if (locale === 'en-us' || locale.endsWith('-us') || timeZone.startsWith('America/')) {
    return US_CURRENCY;
  }

  // USD is the fallback for visitors whose region cannot be identified reliably.
  return US_CURRENCY;
};

export const formatVisitorPrice = (usdAmount: number): string => {
  const currency = getVisitorCurrency();
  const amount = currency === INDIA_CURRENCY ? usdAmount * USD_TO_INR_RATE : usdAmount;
  const locale = currency === INDIA_CURRENCY ? 'en-IN' : 'en-US';

  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
    maximumFractionDigits: 0
  }).format(amount);
};

export const formatVisitorPriceWithCode = (usdAmount: number): string => {
  const currency = getVisitorCurrency();
  const amount = currency === INDIA_CURRENCY ? usdAmount * USD_TO_INR_RATE : usdAmount;
  const locale = currency === INDIA_CURRENCY ? 'en-IN' : 'en-US';

  return `${new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
    maximumFractionDigits: 0
  }).format(amount)} ${currency}`;
};
