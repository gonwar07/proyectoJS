$(document).ajaxComplete(function () {

    let btnAgregarProducto = $(".btnAgregarProducto")
    const guardarLocal = (clave, valor) => { localStorage.setItem(clave, valor) }
    // let btnFinalizarCompra = document.getElementById("btnFinalizarCompra")

    function agregarProductos(){
        for(boton of btnAgregarProducto){
            boton.onclick = (e) =>{
                    let evento = e.target
                    let nombre = evento.parentElement.parentElement.children[0].textContent
                    let valor = evento.parentElement.parentElement.children[1].textContent
                    let talle = evento.parentElement.parentElement.children[2].selectedOptions[0].text
                    // let compra = parseFloat(valor.substr(3))
                    // guardarLocal(nombre, valor)
                    if(talle == "Elegí tu talle"){
                        alert("DEBES ELEGIR UN TALLE!")
                    } else{
                        alert('Has agregado el siguiente producto a tu carrito: ' + nombre)
                        guardarLocal(valor, nombre)
                        productoCarrito.innerHTML += `<li class="nombreProdCarrito">${nombre}</li>`
                        valorCarrito.innerHTML += `<li class="valorProdCarrito">${valor}</li>`
                        talleCarrito.innerHTML += `<li class="talleProdCarrito">${talle}</li>`
                        // totalCompra.innerHTML = `$. ${precio}`
                    }
                }
            }
        }
    agregarProductos()
})