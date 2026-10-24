import { describe, expect, it } from 'vitest'
import { calcularIva } from '../src/impuestos.js'

describe('HU-02 - Calcular el IVA', () => {
  it.each([
    [0, 0],
    [5, 5000],
    [19, 19000]
  ])('calcula el IVA del %i%% para un producto de $100.000', (tarifa, ivaEsperado) => {
    // Preparar
    const producto = { precio: 100000, iva: tarifa, cantidad: 1 }

    // Ejecutar
    const iva = calcularIva(producto)

    // Verificar
    expect(iva).toBe(ivaEsperado)
  })

  it('calcula el IVA sobre el precio después del descuento', () => {
    // Preparar
    const producto = { precio: 100000, iva: 19, cantidad: 1 }
    const descuentoPorcentaje = 10

    // Ejecutar
    const iva = calcularIva(producto, descuentoPorcentaje)

    // Verificar
    expect(iva).toBe(17100)
  })
})