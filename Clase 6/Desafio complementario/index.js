let carrito = []

// Constructor de Productos

function Producto (nombre,price) {
    this.nombre = nombre;
    this.price = price
}


class Productos {
    addDom(a){
        document.getElementById("containerProduct").innerHTML+= `
        <h3>${a.nombre} $${a.price}</h3>`;
    }
}

function AddProduct(){
    let product = document.getElementById("products-name").value;
    let price = document.getElementById("products-price").value
    
    let nuevoProducto = new Producto(product,price)
    carrito.push(nuevoProducto)
    console.log(carrito)
    let ui = new Productos();
    ui.addDom(nuevoProducto);
    
}


function ordenar(){
    carrito.sort(function (a, b) {
        if (a.price > b.price) {
          return 1;
        }
        if (a.price < b.price) {
          return -1;
        }
        return 0;
      });

    console.log(carrito)
}