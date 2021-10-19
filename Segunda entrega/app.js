//Renderizado de la tienda

for (producto of productos){
    let containerShop = document.getElementById("shop");
    containerShop.innerHTML+= `
    <div class="col-4 p-3">
        <i class="fas fa-tshirt"></i>
        <h3>Precio $${producto.precio}</h3>
        <h3>Nombre: ${producto.nombre}</h3>
        <button onclick="add(${producto.id})" class="btn btn-success">Agregar al Carrito</button>
    </div>
    `
}

// Array contenedor del carrito
let carrito = [];


//Preguntar si hay informacion en localStorage
let carritoLS = JSON.parse(localStorage.getItem(`carrito`))

if (carritoLS){
    carrito = carritoLS
    contador()
    renderCarrito()
}



//Abrir y cerrar carrito 
 let verCarrito = document.getElementById("verCarrito")
 let contenedorModal = document.querySelector(".box-modal")
 let btnClose = document.querySelector(".btn-close")
 verCarrito.addEventListener("click",()=>{
     contenedorModal.classList.toggle("modal-active")
 })

 btnClose.addEventListener("click", ()=>{
     contenedorModal.classList.toggle("modal-active")
 })



//Funcion que muestra el contador de productos  

function contador(){
    let cantidadProductos = carrito.length;
    let contenedorCantidad = document.getElementById("cantidad");
    contenedorCantidad.innerHTML=`${cantidadProductos}`}


//Funcion que agrega productos al carrito

function add(x){
 let id = x ;
 let addProducto = productos.find(item => {
     return item.id === id})
 carrito.push(addProducto)
 contador()
 renderCarrito()
 sumaCarrito()
 saveStorage()

}

// actualizar y renderizar carrito
function renderCarrito(){
  const contenedorCarrito = document.getElementById("containerProductos");
  contenedorCarrito.innerHTML="";
  for (producto of carrito){
      contenedorCarrito.innerHTML+=`
                <div class="col-3"><h6>${producto.nombre}</h6></div>
                <div class="col-3"><h6>${producto.precio}</h6></div>
                <div class="col-3"><h6>Cantidad: 1</h6></div>
                <div class="col-3"> <a onclick="removeProduct(${producto.id})"><i class="fas fa-trash-alt"></i></a></div>
                <hr>
      `
  }
  
}

// Funcion para saber saldo total 

function sumaCarrito(){
    let total = carrito.reduce((acc, item)=>{ return acc + item.precio},0)
    let containerTotal = document.getElementById(`total`)
    containerTotal.innerHTML=`${total}`
    console.log(total)
}

// Guardar en localStorage

function saveStorage(){
    localStorage.setItem(`carrito`, JSON.stringify(carrito))
}

// Remover productos del carrito 
function removeProduct(idProducto){
    let id = idProducto
    let positionProduct = carrito.findIndex((producto) => producto.id === id)
    carrito.splice(positionProduct,1)
    console.log(positionProduct)
    renderCarrito()
    contador()
    sumaCarrito()
    saveStorage()


}