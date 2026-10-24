const UMBRAL_ENVIO_GRATIS = 150000
const COSTO_ENVIO_SINCELEJO = 8000
const COSTO_ENVIO_OTRO_MUNICIPIO = 15000

export function calcularEnvio ({
  municipio,
  totalProductosConIva,
  envioGratis = false
}) {
  if (envioGratis || totalProductosConIva >= UMBRAL_ENVIO_GRATIS) {
    return 0
  }

  if (municipio === 'Sincelejo') {
    return COSTO_ENVIO_SINCELEJO
  }

  return COSTO_ENVIO_OTRO_MUNICIPIO
}