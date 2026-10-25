# Mercado Sabanero

Módulo de lógica de negocio para agregar productos al carrito y liquidar compras de Mercado Sabanero. Proyecto académico desarrollado con JavaScript puro y pruebas automatizadas mediante Vitest.

## Requisitos

- Node.js
- pnpm

## Instalación

Desde la carpeta raíz del proyecto, instala las dependencias:

```bash
pnpm install
```

## Ejecutar las pruebas

Para correr toda la suite:

```bash
pnpm test
```

Para correr las pruebas en modo interactivo, observando cambios en los archivos:

```bash
pnpm test:watch
```

Para ejecutar un archivo de pruebas específico:

```bash
pnpm exec vitest run test/carrito.test.js
```

Cambia `carrito.test.js` por `impuestos.test.js`, `descuentos.test.js`, `cupones.test.js`, `envio.test.js`, `puntos.test.js` o `liquidacion.test.js` para ejecutar otro conjunto.

## Cobertura

Para ejecutar las pruebas y generar el reporte de cobertura:

```bash
pnpm coverage
```

La configuración actual usa el proveedor de cobertura V8 de Vitest. El reporte muestra cobertura de líneas, sentencias, funciones y ramas.

## Historias implementadas

- **HU-01:** agregar productos al carrito, validar cantidades y stock.
- **HU-02:** calcular el IVA de los productos.
- **HU-03:** calcular descuentos por volumen.
- **HU-04:** aplicar cupones y evitar sumar descuentos.
- **HU-05:** calcular el costo del envío y el total de compra.
- **HU-06:** calcular los puntos acumulados por la compra.

La suite contiene pruebas unitarias de estas historias y una prueba integrada del ejemplo de liquidación definido en la actividad.

## Estructura del proyecto

```text
src/
  carrito.js
  cupones.js
  descuentos.js
  envio.js
  impuestos.js
  liquidacion.js
  puntos.js

test/
  carrito.test.js
  cupones.test.js
  descuentos.test.js
  envio.test.js
  impuestos.test.js
  liquidacion.test.js
  puntos.test.js
```

## Tecnologías

- JavaScript con módulos ES.
- Vitest para pruebas unitarias.
- `vi.fn()` para simular consultas al inventario durante las pruebas.
- pnpm para instalar dependencias y ejecutar scripts.
