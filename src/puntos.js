const PESOS_POR_PUNTO = 1000
const MULTIPLICADOR_ORO = 2

export function calcularPuntos (totalPagadoSinEnvio, categoria = 'ESTANDAR') {
  const puntosBase = Math.floor(totalPagadoSinEnvio / PESOS_POR_PUNTO)

  if (categoria === 'ORO') {
    return puntosBase * MULTIPLICADOR_ORO
  }

  return puntosBase
}