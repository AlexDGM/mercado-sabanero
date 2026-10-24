import { describe, expect, it } from 'vitest'
import { aplicarCupon } from '../src/cupones.js'

describe('HU-04 - Usar cupones', () => {
  it('aplica SABANERO10 con un subtotal mínimo de $50.000', () => {
    // Preparar
    const codigo = 'SABANERO10'
    const subtotal = 50000

    // Ejecutar
    const beneficio = aplicarCupon(codigo, subtotal)

    // Verificar
    expect(beneficio).toEqual({
      descuento: 5000,
      envioGratis: false
    })
  })

  it('deja el envío gratis al aplicar ENVIOGRATIS', () => {
    // Preparar
    const codigo = 'ENVIOGRATIS'
    const subtotal = 40000

    // Ejecutar
    const beneficio = aplicarCupon(codigo, subtotal)

    // Verificar
    expect(beneficio).toEqual({
      descuento: 0,
      envioGratis: true
    })
  })

  it('rechaza un cupón inexistente o vencido', () => {
    // Preparar
    const codigo = 'CUPONINVALIDO'
    const subtotal = 100000

    // Ejecutar y verificar
    expect(() => aplicarCupon(codigo, subtotal))
      .toThrow('Cupón inválido')
  })

  it('usa el mayor descuento y no suma el cupón con el descuento por volumen', () => {
    // Preparar
    const codigo = 'SABANERO10'
    const subtotal = 200000

    // Ejecutar
    const beneficio = aplicarCupon(codigo, subtotal)

    // Verificar
    // SABANERO10 da $20.000 y el volumen da $10.000.
    // El descuento final es $20.000, no $30.000.
    expect(beneficio).toEqual({
      descuento: 20000,
      envioGratis: false
    })
  })
})