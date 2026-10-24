const SUBTOTAL_PARA_DESCUENTO_5 = 200000
const SUBTOTAL_PARA_DESCUENTO_10 = 500000
const TASA_DESCUENTO_5 = 0.05
const TASA_DESCUENTO_10 = 0.10

export function calcularDescuentoVolumen (subtotal) {
  if (subtotal >= SUBTOTAL_PARA_DESCUENTO_10) {
    return Math.round(subtotal * TASA_DESCUENTO_10)
  }

  if (subtotal >= SUBTOTAL_PARA_DESCUENTO_5) {
    return Math.round(subtotal * TASA_DESCUENTO_5)
  }

  return 0
}

