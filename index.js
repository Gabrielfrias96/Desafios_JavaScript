let valorCustom = 500
//array contenedor de Pedidos
 const pedidos = []

 //Contrusctor del DOM 
class Product{
    addProduct(hamburgerUsuario){
        document.getElementById("menu").innerHTML+= `
        <div class="col-4">
                <div class="card text-center mt-4">
                    <div class="card-head">
                        <i class="fas fa-hamburger"></i>
                    </div>
                    <div class="card-body">
                        <h2>Pedido de ${hamburgerUsuario.nombre}</h2>
                        <h3>Precio $${hamburgerUsuario.valor}</h3>
                        <ul>
                            <li>- ${hamburgerUsuario.item1}</li>
                            <li>- ${hamburgerUsuario.item2}</li>
                            <li>- ${hamburgerUsuario.item3}</li>
                            <li>- ${hamburgerUsuario.salsa}</li>
                            <li>- ${hamburgerUsuario.observaciones}</li>
                        </ul>
                    </div>
                </div>
            </div>`

    }


}
// Contructor de hamburgesas

function Hamburger(nombre, valor, item1, item2, item3, salsa, observaciones){
    this.nombre = nombre
    this.valor = valor
    this.item1 = item1
    this.item2 = item2
    this.item3 = item3
    this.salsa = salsa
    this.observaciones = observaciones
}


//Crear pedido con la informacion del usuario

function pedidoCustom (){
    let nombre = prompt("Introduce tu Nombre para el Pedido.");
    alert(" A continuacion te pediremos que nos digas los 3 ingredientes que quiere poner en tu hamburgesa + una salsa.")
    let ingrediente1 = prompt("¿Cual sera el primer ingrediente?");
    let ingrediente2 = prompt("¿Cual sera el segundo ingrediente?");
    let ingrediente3 = prompt("¿Cual sera el ultimo ingrediente?")
    let salsa = prompt("Que salsa tendra?")
    let observaciones = prompt(`¿Alguna peticion u observacion sobre el pedido ?`)
    // Uso del contructor con parametros recibidos
    let hamburgerUsuario = new Hamburger(nombre, valorCustom, ingrediente1, ingrediente2, ingrediente3, salsa, observaciones)
    pedidos.push(hamburgerUsuario)
    console.log(`Recibimos el nuevo pedido de ${hamburgerUsuario.nombre}`)
    console.log(pedidos)

    const ui = new Product();
    ui.addProduct(hamburgerUsuario)
}





