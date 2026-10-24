import { describe, expect, it } from 'vitest'
import { liquidarCompra } from '../src/liquidacion.js'

describe('Liquidación completa de una compra', () => {
  it('calcula correctamente el ejemplo de la actividad', () => {
    // Preparar
    const compra = {
      cliente: 'ESTANDAR',
      municipio: 'Sincelejo',
      productos: [
        { nombre: 'Licuadora', precio: 180000, iva: 19, cantidad: 1 },
        { nombre: 'Café', precio: 15000, iva: 5, cantidad: 2 },
        { nombre: 'Arroz', precio: 4500, iva: 0, cantidad: 4 }
      ]
    }

    // Ejecutar
    const resultado = liquidarCompra(compra)

    // Verificar
    expect(resultado).toEqual({
      subtotal: 228000,
      descuento: 11400,
      iva: 33915,
      envio: 0,
      total: 250515,
      puntos: 250
    })
  })
})