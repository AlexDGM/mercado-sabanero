import { calcularDescuentoVolumen } from './descuentos.js'

export function aplicarCupon (codigo, subtotal) {
  if (codigo === 'ENVIOGRATIS') {
    return {
      descuento: calcularDescuentoVolumen(subtotal),
      envioGratis: true
    }
  }

  if (codigo === 'SABANERO10') {
    const descuentoCupon = subtotal >= 50000
      ? Math.round(subtotal * 0.10)
      : 0

    const descuentoVolumen = calcularDescuentoVolumen(subtotal)

    return {
      descuento: Math.max(descuentoCupon, descuentoVolumen),
      envioGratis: false
    }
  }

  throw new Error('Cupón inválido')
}