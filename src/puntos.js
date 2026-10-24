export function calcularPuntos (totalPagadoSinEnvio, categoria = 'ESTANDAR') {
  const puntosBase = Math.floor(totalPagadoSinEnvio / 1000)

  if (categoria === 'ORO') {
    return puntosBase * 2
  }

  return puntosBase
}