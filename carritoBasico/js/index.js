const contenedorTarjetas = document.getElementById("productos-container");

/** Crea las tarjetas de productos teniendo en cuenta la lista en instrumentos.js */
function crearTarjetasProductosInicio(productos){
  productos.forEach(producto => {
    const nuevoInstrumento = document.createElement("div");
    nuevoInstrumento.classList = "tarjeta-producto"
    nuevoInstrumento.innerHTML = `
    <img src="./img/productos/${producto.id}.jpg" alt="Instrumento 1">
    <h3>${producto.nombre}</h3>
    <p class="precio">$${producto.precio}</p>
    <button>Agregar al carrito</button>`
    contenedorTarjetas.appendChild(nuevoInstrumento);
    nuevoInstrumento.getElementsByTagName("button")[0].addEventListener("click",() => agregarAlCarrito(producto))
  });
}
crearTarjetasProductosInicio(instrumentos);