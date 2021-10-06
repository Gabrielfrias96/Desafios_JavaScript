let btnCarrito = document.getElementById("carrito")
let containerCarrito = document.getElementsByClassName("box-modal")[0]
let btnCarritoClose = document.getElementById("carritoClose")

btnCarrito.addEventListener(`click`, () => {
    containerCarrito.classList.toggle(`modal__carrito--Active`)
})

btnCarritoClose.addEventListener(`click`, () => {
    containerCarrito.classList.toggle(`modal__carrito--Active`)
})




document.getElementById("verFind").addEventListener(`click`, () => {
    let cantidadCuotas = document.getElementById("cuotas").value;
    let containerFinanciacion = document.getElementById("find");
    let precioCuotas = 4566 / cantidadCuotas;
    containerFinanciacion.innerHTML+=`<h6> Quedarian ${cantidadCuotas} de $${precioCuotas}</h6>`
})