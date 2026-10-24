const CANTIDAD_MINIMA = 1
const CANTIDAD_MAXIMA = 50

export class Carrito { 
  constructor (inventario) {
    this.inventario = inventario
    this.productos = []
  }

  agregarProducto (producto, cantidad) {
    if (!Number.isInteger(cantidad) || cantidad < CANTIDAD_MINIMA || cantidad > CANTIDAD_MAXIMA) {
      throw new Error('La cantidad debe estar entre 1 y 50 unidades')
    }

    const stockDisponible = this.inventario.consultarStock(producto.id)
    const productoEnCarrito = this.productos.find((item) => item.id === producto.id)
    const cantidadTotal = (productoEnCarrito?.cantidad ?? 0) + cantidad

    if (stockDisponible < cantidadTotal) {
      throw new Error('Stock insuficiente')
    }

    if (productoEnCarrito) {
      productoEnCarrito.cantidad = cantidadTotal
      return
    }

    this.productos.push({ ...producto, cantidad })
  }
}
