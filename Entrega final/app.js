// Renderizar Productos en la tienda



 if (userState === false){
    let btnCompra = document.querySelectorAll(`#btn-buy`)
    console.log(btnCompra)
    btnCompra.forEach((e)=>{
        e.classList.add(`ocultar`)
    })
}