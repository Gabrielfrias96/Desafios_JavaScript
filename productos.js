let productos =[
    {   id:1,
        nombre: "Combo Buger 1",
        precio: 542,
        type: "burger",
        img: "img/burger.png"},
    {   id:2,
        nombre: "Combo Buger 2",
        precio: 542,
        type: "burger",
        img: "img/burger.png"},
    {   id:3,
        nombre: "Combo Buger 3",
        precio: 542,
        type: "burger",
        img: "img/burger.png"},
    {   id:4,
        nombre: "Combo Buger 4",
        precio: 542,
        type: "burger",
        img: "img/burger.png"},
    {   id:5,
        nombre: "Combo Mila 1",
            precio: 542,
            type: "mila",
            img: "img/sandwich.png"},
    {   id:6,
            nombre: "Combo Mila 2",
            precio: 542,
            type: "mila",
            img: "img/sandwich.png"},
    {   id:7,
            nombre: "Combo Mila 3",
            precio: 542,
            type: "mila",
            img: "img/sandwich.png"},
    {   id:8,
        nombre: "Combo Mila 4",
        precio: 542,
        img: "img/sandwich.png"}
           
]

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
