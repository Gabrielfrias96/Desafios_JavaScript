let carrito = []


function AddProduct(){
    let product = document.getElementById("products").value;
    console.log(product);
    carrito.push(product);
    console.log(carrito)
    document.getElementById("containerProduct").innerHTML+= `<h3>${product}</h3>`;
    
}

