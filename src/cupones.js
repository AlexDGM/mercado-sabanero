import { calcularDescuentoVolumen } from './descuentos.js'

const CODIGO_CUPON_ENVIO_GRATIS = 'ENVIOGRATIS'
const CODIGO_CUPON_SABANERO10 = 'SABANERO10'
const SUBTOTAL_MINIMO_CUPON = 50000
const TASA_CUPON_SABANERO10 = 0.10

export function aplicarCupon (codigo, subtotal) {
  if (codigo === CODIGO_CUPON_ENVIO_GRATIS) {
    return {
      descuento: calcularDescuentoVolumen(subtotal),
      envioGratis: true
    }
  }

  if (codigo === CODIGO_CUPON_SABANERO10) {
    const descuentoCupon = subtotal >= SUBTOTAL_MINIMO_CUPON
      ? Math.round(subtotal * TASA_CUPON_SABANERO10)
      : 0

    const descuentoVolumen = calcularDescuentoVolumen(subtotal)

    return {
      descuento: Math.max(descuentoCupon, descuentoVolumen),
      envioGratis: false
    }
  }

  throw new Error('Cupón inválido')
}