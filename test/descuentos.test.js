import { describe, expect, it } from 'vitest'
import { calcularDescuentoVolumen } from '../src/descuentos.js'

describe('HU-03 - Descuento por volumen', () => {
 it.each([
  { caso: 'no aplica descuento debajo de $200.000', subtotal: 199999, esperado: 0 },
  { caso: 'aplica 5% desde $200.000', subtotal: 200000, esperado: 10000 },
  { caso: 'aplica 5% antes de $500.000', subtotal: 499999, esperado: 25000 },
  { caso: 'aplica 10% desde $500.000', subtotal: 500000, esperado: 50000 }
])('$caso', ({ subtotal, esperado }) => {
  // Preparar: subtotal y descuento esperado

  // Ejecutar
  const descuento = calcularDescuentoVolumen(subtotal)

  // Verificar
  expect(descuento).toBe(esperado)
})
})