import { describe, expect, it } from 'vitest'
import { calcularEnvio } from '../src/envio.js'
import { calcularTotalCompra } from '../src/liquidacion.js'

describe('HU-05 - Calcular el envío', () => {
  it.each([
    {
      caso: 'cobra $8.000 dentro de Sincelejo',
      municipio: 'Sincelejo',
      costoEsperado: 8000
    },
    {
      caso: 'cobra $15.000 en otro municipio de Sucre',
      municipio: 'Corozal',
      costoEsperado: 15000
    }
  ])('$caso', ({ municipio, costoEsperado }) => {
    // Preparar
    const pedido = { municipio, totalProductosConIva: 100000 }

    // Ejecutar
    const envio = calcularEnvio(pedido)

    // Verificar
    expect(envio).toBe(costoEsperado)
  })

  it.each([
    {
      caso: 'cobra envío si los productos con IVA suman menos de $150.000',
      totalProductosConIva: 149999,
      costoEsperado: 8000
    },
    {
      caso: 'deja gratis el envío desde $150.000',
      totalProductosConIva: 150000,
      costoEsperado: 0
    }
  ])('$caso', ({ totalProductosConIva, costoEsperado }) => {
    // Preparar
    const pedido = { municipio: 'Sincelejo', totalProductosConIva }

    // Ejecutar
    const envio = calcularEnvio(pedido)

    // Verificar
    expect(envio).toBe(costoEsperado)
  })

  it('deja gratis el envío cuando se aplicó ENVIOGRATIS', () => {
    // Preparar
    const pedido = {
      municipio: 'Sincelejo',
      totalProductosConIva: 40000,
      envioGratis: true
    }

    // Ejecutar
    const envio = calcularEnvio(pedido)

    // Verificar
    expect(envio).toBe(0)
  })

  it('calcula el total como subtotal menos descuento más IVA y envío', () => {
    // Preparar
    const pedido = {
      subtotal: 228000,
      descuento: 11400,
      iva: 33915,
      envio: 0
    }

    // Ejecutar
    const total = calcularTotalCompra(pedido)

    // Verificar
    expect(total).toBe(250515)
  })
})