export const currencyFormatter = (value: number) => {
  return new Intl.NumberFormat("es-cl", {
    style: "currency",
    currency: "CLP",
    minimumFractionDigits: 0,
  }).format(value);
};
