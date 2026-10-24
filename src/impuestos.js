const PORCENTAJE_BASE = 100

export function calcularIva (producto, descuentoPorcentaje = 0) {
  const base = producto.precio * producto.cantidad
  const baseConDescuento = base * (1 - descuentoPorcentaje / PORCENTAJE_BASE)
  return Math.round(baseConDescuento * producto.iva / PORCENTAJE_BASE)
}

