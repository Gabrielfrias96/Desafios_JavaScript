let carrito = JSON.parse(localStorage.getItem(`carrito`));

// Si no hay nada den el LocalStorage que sea un array vacio. de lo Contrario renderiza el Carrito
if (carrito == null || carrito == false) {
     carrito = []}
else{
    renderCarrito()
}
// abrir y cerrar Carrito
const btnCarrito = document.getElementById(`btn-carrito`)
const boxCarrito = document.getElementById(`carrito`)
const btnCloseCarrito = document.getElementById(`closeCarrito`)
btnCarrito.addEventListener('click',()=>{
    boxCarrito.classList.toggle(`modal-active`)
})

btnCloseCarrito.addEventListener('click',()=>{
    boxCarrito.classList.toggle(`modal-active`)
})



// === Agregar al Carrito ===== //

function agregar(x) {
    let id = x;
    let addProducto = productos.find((item)=>{ return item.id == id})
    console.log(addProducto)
    carrito.push(addProducto)
    console.log(carrito)
    renderCarrito()
    saveCarrito()
}



// funcion para actualizar y renderizar Carrito

function renderCarrito (){
    let boxCarrito = document.getElementById(`box-productos`)
    boxCarrito.innerHTML="";
    carrito.forEach((producto)=>{
        boxCarrito.innerHTML+=`
        <div class="col-3 d-flex align-items-center justify-content-center mt-2">
            <img class="img-carrito" src="${producto.img}" alt="${producto.nombre}" />
            <h3>${producto.nombre}</h3>
        </div>
        <div class="col-3 d-flex align-items-center justify-content-center mt-2">
            <h3>1</h3>
        </div>
        <div class="col-3 d-flex align-items-center justify-content-center mt-2">
            <h3>$${producto.precio}</h3>
        </div>
        <div class="col-3 d-flex align-items-center justify-content-center mt-2">
            <i id="deleteProducto" onclick="removeProduct(${producto.id})" class="far fa-trash-alt"></i>
        </div>
        `
    })

    sumarTotal()

}


// ==== remover producto del carrito ====

function removeProduct(x){
   let positionProduct = carrito.findIndex((producto)=>{return producto.id == x})
    carrito.splice(positionProduct,1)
    saveCarrito()
    renderCarrito()
    
}


// ==== Guardar en LocalStorage =====

function saveCarrito(){
    localStorage.setItem(`carrito`, JSON.stringify(carrito))
}

// ==== Sumar totatl de la Compra ==== //

function sumarTotal(){
    let boxTotal = document.getElementById(`reduce`)
    let sumaReduce = carrito.reduce((acc, item)=> {return acc + item.precio},0)

    boxTotal.innerHTML=`<h2>Total: $${sumaReduce}</h2>`

    console.log(sumaReduce)
}