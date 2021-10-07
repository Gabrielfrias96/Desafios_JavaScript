for (producto of productos){
    let containerShop = document.getElementById("shop");
    containerShop.innerHTML+= `
    <div class="col-4 p-3">
        <i class="fas fa-tshirt"></i>
        <h3>Precio $${producto.precio}</h3>
        <h3>Nombre: ${producto.nombre}</h3>
    </div>
    `
}