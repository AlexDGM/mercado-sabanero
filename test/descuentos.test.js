import { describe, expect, it } from 'vitest'
import { calcularDescuentoVolumen } from '../src/descuentos.js'

describe('HU-03 - Descuento por volumen', () => {
  it.each([
    [199999, 0],
    [200000, 10000],
    [499999, 25000],
    [500000, 50000]
  ])('calcula el descuento para un subtotal de $%i', (subtotal, descuentoEsperado) => {
    // Preparar
    // El subtotal recibido en cada caso sirve como dato de entrada.

    // Ejecutar
    const descuento = calcularDescuentoVolumen(subtotal)

    // Verificar
    expect(descuento).toBe(descuentoEsperado)
  })
})