let btnTotalCompra = $("#btnTotalCompra")
let arrayValores = []
let total = $("#resultadoCompra")
let suma = 0

btnTotalCompra[0].onclick = () =>{
    let valores = $(".valorProdCarrito")
    arrayValores.length = 0
    for(i = 0; i < valores.length; i++){
        arrayValores.push(parseFloat(valores[i].textContent.substr(3)))
        }
        var resultado = arrayValores.reduce((a, b) => a + b, 0)
        total[0].innerHTML = `<p>$. ${resultado}</p>`
}