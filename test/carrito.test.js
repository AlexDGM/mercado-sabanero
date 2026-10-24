import { describe, expect, it, vi } from 'vitest'
import { Carrito } from '../src/carrito.js'

describe('HU-01 - Agregar productos al carrito', () => {
  it.each([1, 50])('agrega %i unidades cuando hay stock suficiente', (cantidad) => {
    // Preparar
    const inventario = { consultarStock: vi.fn().mockReturnValue(50) }
    const carrito = new Carrito(inventario)

    // Ejecutar
    carrito.agregarProducto({ id: 'arroz', nombre: 'Arroz', precio: 4500, iva: 0 }, cantidad)

    // Verificar
    expect(carrito.productos).toEqual([
      { id: 'arroz', nombre: 'Arroz', precio: 4500, iva: 0, cantidad }
    ])
  })

  it.each([0, 51])('rechaza agregar %i unidades', (cantidad) => {
    // Preparar
    const inventario = { consultarStock: vi.fn() }
    const carrito = new Carrito(inventario)

    // Ejecutar y verificar
    expect(() => carrito.agregarProducto({ id: 'arroz' }, cantidad))
      .toThrow('La cantidad debe estar entre 1 y 50 unidades')
  })

  it('informa un error cuando el stock es menor que la cantidad solicitada', () => {
    // Preparar
    const inventario = { consultarStock: vi.fn().mockReturnValue(3) }
    const carrito = new Carrito(inventario)

    // Ejecutar y verificar
    expect(() => carrito.agregarProducto({ id: 'arroz' }, 4))
      .toThrow('Stock insuficiente')
  })

  it('suma la cantidad cuando el producto ya existe en el carrito', () => {
    // Preparar
    const inventario = { consultarStock: vi.fn().mockReturnValue(10) }
    const carrito = new Carrito(inventario)
    const arroz = { id: 'arroz', nombre: 'Arroz', precio: 4500, iva: 0 }
    carrito.agregarProducto(arroz, 2)

    // Ejecutar
    carrito.agregarProducto(arroz, 3)

    // Verificar
    expect(carrito.productos).toEqual([{ ...arroz, cantidad: 5 }])
    expect(inventario.consultarStock).toHaveBeenCalledTimes(2)
  })
})
