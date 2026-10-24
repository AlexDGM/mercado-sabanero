import { describe, expect, it } from 'vitest'
import { calcularPuntos } from '../src/puntos.js'

describe('HU-06 - Acumular puntos', () => {
  it.each([
    {
      caso: 'no otorga puntos por menos de $1.000',
      totalSinEnvio: 999,
      puntosEsperados: 0
    },
    {
      caso: 'otorga un punto por cada $1.000 completos',
      totalSinEnvio: 1000,
      puntosEsperados: 1
    },
    {
      caso: 'ignora los pesos que no completan otro millar',
      totalSinEnvio: 1999,
      puntosEsperados: 1
    },
    {
      caso: 'otorga dos puntos por $2.000 completos',
      totalSinEnvio: 2000,
      puntosEsperados: 2
    }
  ])('$caso', ({ totalSinEnvio, puntosEsperados }) => {
    // Preparar
    const categoria = 'ESTANDAR'

    // Ejecutar
    const puntos = calcularPuntos(totalSinEnvio, categoria)

    // Verificar
    expect(puntos).toBe(puntosEsperados)
  })

  it('otorga 250 puntos a un cliente ESTANDAR que paga $250.515 sin envío', () => {
    // Preparar
    const totalSinEnvio = 250515
    const categoria = 'ESTANDAR'

    // Ejecutar
    const puntos = calcularPuntos(totalSinEnvio, categoria)

    // Verificar
    expect(puntos).toBe(250)
  })

  it('duplica los puntos de un cliente ORO', () => {
    // Preparar
    const totalSinEnvio = 250515
    const categoria = 'ORO'

    // Ejecutar
    const puntos = calcularPuntos(totalSinEnvio, categoria)

    // Verificar
    expect(puntos).toBe(500)
  })
})