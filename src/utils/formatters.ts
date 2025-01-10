export const currencyFormatter = Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export const dateFormat = Intl.DateTimeFormat("en", {
  month: "short",
  day: "2-digit",
  year: "numeric",
});
