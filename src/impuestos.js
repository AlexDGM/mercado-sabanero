export function calcularIva (producto, descuentoPorcentaje = 0) {
  const base = producto.precio * producto.cantidad
  const baseConDescuento = base * (1 - descuentoPorcentaje / 100)
  return Math.round(baseConDescuento * producto.iva / 100)
}