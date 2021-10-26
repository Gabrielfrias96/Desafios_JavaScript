// Renderizar Productos en la tienda

    let boxShop = document.getElementById(`tienda`);

 productos.forEach((producto)=>{
     boxShop.innerHTML+= `
     <div class="col-md-3 d-flex justify-content-center p-4">
                <div class="card  card-cool">
                    <img class="card-img-top card-img-hero"  src="${producto.img}">
                    <div class="card-body card-content text-center" style="background-color:#040e1b;">
                       <h4>${producto.nombre}</h4>
                       <h5>Precio $${producto.precio}</h5>
                       <hr>
                       <ul id="igredientes">
                           <li>-Baccon</li>
                           <li>-Cheddar</li>
                           <li>-Huevo</li>
                       </ul>
                       <span id="btn-buy" class="btn-add" onclick="agregar(${producto.id})">Agregar
                       </span>
                    </div>
                </div>
            </div>`
            
 })


 if (userState === false){
    let btnCompra = document.querySelectorAll(`#btn-buy`)
    console.log(btnCompra)
    btnCompra.forEach((e)=>{
        e.classList.add(`ocultar`)
    })
}