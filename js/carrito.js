// BOTON CARRITO MUESTRA DIV
btnCarrito[0].onclick = () => {
    if(divCarrito.css('display') == 'none'){
        divCarrito.css('display','grid')
    }else{
        divCarrito.css('display','none')
    }
}

//FINALIZAR COMPRA
btnFinalizarCompra[0].onclick = () => {
    let total = $("#resultadoCompra")[0].textContent
    if(total == '0' || total == "$. 0"){
        alert('No añadiste ningún producto a tu carrito!')
    }else{
        alert('El total de tu compra es: ' + total + '. Muchas gracias por confiar en nosotros!')
        location.reload()
    }
}

//CERRAR CARRITO
btnCerrarCarrito[0].onclick = () => {
    divCarrito.css('display', 'none')
}

