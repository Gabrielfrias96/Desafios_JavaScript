for (producto of productos){
    let containerShop = document.getElementById("shop");
    containerShop.innerHTML+= `
    <div class="col-4 p-3">
        <i class="fas fa-tshirt"></i>
        <h3>Precio $${producto.precio}</h3>
        <h3>Nombre: ${producto.nombre}</h3>
        <button onclick="add(${producto.id})" class="btn btn-danger">Agregar al Carrito</button>
    </div>
    `
}
//abrir y cerrar carrito 
let verCarrito = document.getElementById("verCarrito")
let contenedorModal = document.querySelector(".box-modal")
verCarrito.addEventListener("click",()=>{
    contenedorModal.classList.toggle("modal-active")
})

contenedorModal.addEventListener("click", ()=>{
    contenedorModal.classList.toggle("modal-active")
})



// Array contenedor del carrito
let carrito = [];

// Variable contenedor del reduce para el saldo
let total ="";

//Funcion que muestra el contador de productos

function contador(){
    let cantidadProductos = carrito.length;
    let contenedorCantidad = document.getElementById("cantidad");
    contenedorCantidad.innerHTML=`${cantidadProductos}`}


//Funcion que agrega productos al carrito

function add(x){
 let id = x ;
 let producto = productos.find(item => id)
 carrito.push(producto)
 contador()
 renderCarrito()
 console.log(carrito)
}

//renderizar carrito
function renderCarrito(){
  const contenedorCarrito = document.getElementById("containerProductos");
  contenedorCarrito.innerHTML="";
  carrito.forEach((producto)=>{
      contenedorCarrito.innerHTML=`
                <div class="col-4"><h6>${producto.nombre}</h6></div>
                <div class="col-4"><h6>${producto.precio}</h6></div>
                <div class="col-4"><h6>Cantidad</h6></div>
                <hr>
      `
  })
  
}