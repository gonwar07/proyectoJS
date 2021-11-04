const productos = [{id: 1, nombre:"Zapatos", precio:5000, img: "src='img/zapatos.png'"},
                   {id: 2, nombre:"Remera", precio:2000, img: "src='img/remera.png'"},
                   {id: 3, nombre:"Campera", precio:6000, img: "src='img/campera.png'"},
                   {id: 4, nombre:"Pantalón", precio:3000, img: "src='img/pantalon.png'"},
                   {id: 5, nombre:"Mochila", precio:1800, img: "src='img/mochila.png'"},
                   {id: 6, nombre:"Cinturón", precio:1200, img: "src='img/cinturon.png'"},
                   {id: 7, nombre:"Buzo", precio:3400, img: "src='img/buzo.png'"}]

let btnCarrito = $("#carrito")
let divCarrito = $(".divCarrito")
let productoCarrito = divCarrito[0].children[0]
let valorCarrito = divCarrito[0].children[2]
let talleCarrito = divCarrito[0].children[1]
let totalCompra = divCarrito[0].children[5]
let btnFinalizarCompra = $("#finalizarCompra")
let btnCerrarCarrito = $("#cerrar")

