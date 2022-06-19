
export const formatAsMoney = (amount = 0, currency = "USD", locale ) =>
  new Intl.NumberFormat('vi-vn', {
    style: "currency",
    currency,
  }).format(amount);

// Returns true for non nullable values
export function notNullable<TValue>(value: TValue | null | undefined): value is TValue {
  return value !== null && value !== undefined;
}
