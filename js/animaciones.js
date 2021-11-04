$(document).ajaxComplete(function () {
    let imagenProducto = $(".imagenProducto")

    function agrandar(e) {
        e.animate({ width: '60%' },
            1000,
            function () { console.log("FIN") })
    }
    function achicar(e) {
        e.animate({ width: '40%' },
            1000,
            function () { console.log("FIN") })
    }

    for (let imagen of imagenProducto) {
        imagen.onmousemove = () => { agrandar(imagen) }
        imagen.onmouseout = () => { achicar(imagen) }
    }
})