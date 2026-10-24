export function calcularTotalCompra ({ subtotal, descuento, iva, envio }) {
  return subtotal - descuento + iva + envio
}