import { calcularDescuentoVolumen } from './descuentos.js'
import { calcularEnvio } from './envio.js'
import { calcularIva } from './impuestos.js'
import { calcularPuntos } from './puntos.js'
import { aplicarCupon } from './cupones.js'

export function calcularTotalCompra ({ subtotal, descuento, iva, envio }) {
  return subtotal - descuento + iva + envio
}

export function liquidarCompra (compra) {
  const { productos, municipio, cliente, cupon } = compra

  const subtotal = productos.reduce(
    (suma, producto) => suma + producto.precio * producto.cantidad,
    0
  )

  const beneficio = cupon
    ? aplicarCupon(cupon, subtotal)
    : {
        descuento: calcularDescuentoVolumen(subtotal),
        envioGratis: false
      }

  const descuento = beneficio.descuento
  const descuentoPorcentaje = subtotal === 0 ? 0 : (descuento / subtotal) * 100

  const iva = productos.reduce(
    (suma, producto) => suma + calcularIva(producto, descuentoPorcentaje),
    0
  )

  const totalProductosConIva = subtotal - descuento + iva

  const envio = calcularEnvio({
    municipio,
    totalProductosConIva,
    envioGratis: beneficio.envioGratis
  })

  const total = calcularTotalCompra({ subtotal, descuento, iva, envio })
  const puntos = calcularPuntos(total - envio, cliente)

  return { subtotal, descuento, iva, envio, total, puntos }
}