const tienda = []
//Constructor de Products
   function Productos(nombre,precio){
        this.nombre = nombre 
        this.precio = precio
        }

 
 




//Add products to Shop
function addProduct(){
    let name = document.getElementById("nameProduct").value;
    let price = document.getElementById("priceProduct").value;
    let newProduct = new Productos(name,price)
    tienda.push(newProduct);
    console.log(tienda)
    let cantidadTotal = tienda.length;
    console.log(cantidadTotal)
    document.getElementById("cantidadProducto").innerHTML=`${cantidadTotal}`
}

function verProductos(){
    tienda.forEach((productos) =>{
        document.getElementById("tienda").innerHTML+=`
        <div class="card">
            <h3>${productos.nombre}</h3>
            <h3>${productos.precio}</h3>
        </div> `  })
    }

