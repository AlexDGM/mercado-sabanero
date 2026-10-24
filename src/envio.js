export function calcularEnvio ({
  municipio,
  totalProductosConIva,
  envioGratis = false
}) {
  if (envioGratis || totalProductosConIva >= 150000) {
    return 0
  }

  if (municipio === 'Sincelejo') {
    return 8000
  }

  return 15000
}