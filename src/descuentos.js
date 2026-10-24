export function calcularDescuentoVolumen (subtotal) {
  if (subtotal >= 500000) {
    return Math.round(subtotal * 0.10)
  }

  if (subtotal >= 200000) {
    return Math.round(subtotal * 0.05)
  }

  return 0
}