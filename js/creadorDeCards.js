let contenedorProductos = $("#tarjetasProductos")
const URLJSON = 'js/productos.json'

function cargoProductos() {
    $.getJSON(URLJSON, function (respuesta, estado) {
        if (estado === "success") {
            contenedorProductos.innerHTML = "";
            let productos = respuesta;
            for (const producto of productos) {
                if(producto.talle == "numeroCalzado"){
                    contenedorProductos.append(`<div class="col-12 col-md-5 tarjeta">
                    <img class="imagenProducto id="imagenProducto"" ${producto.img} alt="">
                    <span class="textoTarjeta col-6">
                    <h3> ${producto.nombre}</h3>
                    <b> $ ${producto.precio}</b>
                    <select name ="talle" class="form-select" aria-label=".form-select-sm example"><option selected>Elegí tu talle</option>
                    <option value="1">39</option>
                    <option value="2">40</option>
                    <option value="3">41</option>
                    <option value="4">42</option>
                    <option value="5">43</option>
                    <option value="6">44</option>
                    </select>
                    <button><i class="fas fa-plus btnAgregarProducto"></i></button>
                    </span>
                    </div>`)
                }else if(producto.talle == "letra"){
                    contenedorProductos.append(`<div class="col-12 col-md-5 tarjeta">
                    <img class="imagenProducto id="imagenProducto"" ${producto.imagen} alt="">
                    <span class="textoTarjeta col-6">
                    <h3> ${producto.nombre}</h3>
                    <b> $ ${producto.precio}</b>
                    <select class="form-select" aria-label=".form-select-sm example"><option selected>Elegí tu talle</option>
                    <option value="1">XS</option>
                    <option value="2">S</option>
                    <option value="3">M</option>
                    <option value="4">L</option>
                    <option value="5">XL</option>
                    <option value="6">XXL</option>
                    </select>
                    <button><i class="fas fa-plus btnAgregarProducto"></i></button>
                    </span>
                    </div>`)
                }else if(producto.talle == "numeroPantalon"){
                    contenedorProductos.append(`<div class="col-12 col-md-5 tarjeta">
                    <img class="imagenProducto id="imagenProducto"" ${producto.imagen} alt="">
                    <span class="textoTarjeta col-6">
                    <h3> ${producto.nombre}</h3>
                    <b> $ ${producto.precio}</b>
                    <select class="form-select" aria-label=".form-select-sm example"><option selected>Elegí tu talle</option>
                    <option value="1">38</option>
                    <option value="2">40</option>
                    <option value="3">42</option>
                    <option value="4">44</option>
                    <option value="5">46</option>
                    <option value="6">50</option>
                    </select>
                    <button><i class="fas fa-plus btnAgregarProducto"></i></button>
                    </span>
                    </div>`)
                }else{
                    contenedorProductos.append(`<div class="col-12 col-md-5 tarjeta">
                    <img class="imagenProducto id="imagenProducto"" ${producto.imagen} alt="">
                    <span class="textoTarjeta col-6">
                    <h3> ${producto.nombre}</h3>
                    <b> $ ${producto.precio}</b>
                    <select class="form-select" aria-label=".form-select-sm example"><option selected>Elegí tu talle</option>
                    <option value="1">Único</option>
                    </select>
                    <button><i class="fas fa-plus btnAgregarProducto"></i></button>
                    </span>
                    </div>`)
                }
            }
        }
    })
}

cargoProductos()
