const boxUser = document.getElementById(`users`)

// Almacenamiento de Usuarios 
let users =[ ]

let usersLS = JSON.parse(localStorage.getItem('Usuarios'))
if(usersLS){
    users = usersLS
}

// let userState = false;
// let userPosition = null;

let userState = JSON.parse(localStorage.getItem('state'))
//Si no hay nada en el LocalStorage que se asigne False
if(userState == null){ userState = false}
//Posicion del Usuario en array
let userPosition = JSON.parse(localStorage.getItem('position'))

if (usersLS && usersLS.length == 1) {
    let users = usersLS
    console.log(users)
    boxUser.innerHTML=`<span id="login-modal"><i class="fas fa-sign-in-alt"></i> Iniciar Sesion</span> | <span id="register-modal">Registrarse</span>`

    
} else {
    users = []
    boxUser.innerHTML=`<span id="login-modal"><i class="fas fa-sign-in-alt"></i> Iniciar Sesion</span> | <span id="register-modal">Registrarse</span>`

}

//Consultar si el Usuario sigue activo
consultaState()

function consultaState(){
    if (userState){
        boxUser.innerHTML=`
        <div class="m-3">
        <i id="btn-carrito" class="fas fa-shopping-cart"></i>
        </div>
        <div class="m-3">
            ${users[userPosition].nombre}
       </div>
       <div class="m-3">
        <button class="btn btn-dark" onclick="closeSesion()">Cerrar Sesion</button>
       </div>

        `;

        
    } else if (userState == null || userState == false){
        
        boxUser.innerHTML=`<span id="login-modal"><i class="fas fa-sign-in-alt"></i> Iniciar Sesion</span> | <span id="register-modal">Registrarse</span>`
}
    
}




//  Abri Modal del Login
const openLogin = document.getElementById(`login-modal`);
const modalLogin = document.getElementById(`box-login`)
const animateModalLogin = document.querySelector(`.modal-login`)
const btnCloseLogin = document.getElementById(`colseLogin`)
openLogin.addEventListener(`click`,()=>{
    animateModalLogin.classList.toggle(`animate__animated`);
    animateModalLogin.classList.toggle(`animate__bounceInDown`);
    modalLogin.classList.toggle(`modal-active`);


})
// Cerrar Modal del Login
btnCloseLogin.addEventListener(`click`, ()=>{
    animateModalLogin.classList.toggle(`animate__animated`);
    animateModalLogin.classList.toggle(`animate__bounceInDown`);
    modalLogin.classList.toggle(`modal-active`);
})


// Abri Modal Register

const openRegister = document.getElementById(`register-modal`)
const modalRegister = document.getElementById(`register`)
const animateModalRegister = document.querySelector(`.modal-register`)
const btnCloseRegister = document.getElementById(`colseRegister`)
openRegister.addEventListener(`click`,()=>{
    modalRegister.classList.toggle(`modal-active`);
    animateModalRegister.classList.toggle(`animate__animated`);
    animateModalRegister.classList.toggle(`animate__bounceInDown`);
})

// Cerrar Modal register
btnCloseRegister.addEventListener(`click`, ()=>{
    animateModalRegister.classList.toggle(`animate__animated`);
    animateModalRegister.classList.toggle(`animate__bounceInDown`);
    modalRegister.classList.toggle(`modal-active`);
})


//Contructor de Usuarios

function Usuario(nombre, password){
    this.nombre = nombre;
    this.password = password
}

//Funcio creadora de users

function createUser(){
    const nombreUser = document.getElementById(`nombreUser`).value;
   // const mailUser = document.getElementById(`mailUser`).value;
    const passwordUser = document.getElementById(`passwordUser`).value;

    let usuario = new Usuario(nombreUser,passwordUser)
    //cerrar modal
    modalRegister.classList.toggle(`modal-active`);
    //Guardar en array
    console.log(usuario)
    users.push(usuario)
    console.log(users)
    //Guardar en LocalStorage
    saveUser()
}


// Guardar Usuario en LocalStorage

function saveUser(){
    localStorage.setItem(`Usuarios`, JSON.stringify(users))
}

// Funcion para Iniciar sesion

function iniciarSesion(){
    let SolicitudNombre = document.getElementById(`nameLogin`).value;
    let SolicitudPassword = document.getElementById(`passwordLogin`).value;
    let serchName =  users.findIndex((user)=> user.nombre === SolicitudNombre)
    let serchPassword = users.findIndex((user)=> user.password === SolicitudPassword)
    console.log(serchName)
    console.log(serchPassword)

    renderUILogin(serchName,serchPassword)
    window.location.reload()
}

//renderizar UI Usuario Logeado
const boxErrorLogin = document.getElementById(`ErrorLogin`)

function renderUILogin (a,b){
    if (a === b && a!= -1 && b!= -1){
        //Cerar modal
        modalLogin.classList.toggle(`modal-active`);

        // Recordar estado del Usuarios
        state = true;
        position = a;
        
        activeUser(state,position)

        let confirmUser = users[a].nombre
        boxUser.innerHTML=`
        <div class="m-3">
        <i id="btn-carrito" class="fas fa-shopping-cart "></i>
        </div>
        <div class="m-3">
             ${confirmUser} 
       </div>
       <div class="m-3">
        <button class="btn btn-dark" onclick="closeSesion()">Cerrar Sesion</button>
       </div>

        `
    } else { boxErrorLogin.innerHTML=`<p style="color:red;">El Usuario y/o Contraseña son Incorrectos</p>`
        
    }
   }
   
   
   
   // Funcion para recordar Usuario Logeado

   function activeUser(x,y){
       userState = x;
       userPosition = y;

       localStorage.setItem(`state`, JSON.stringify(userState))
       localStorage.setItem(`position`, JSON.stringify(userPosition))
   }

   function closeSesion(){
       userState = false
       window.location.reload()
       localStorage.setItem(`state`, JSON.stringify(userState))
       consultaState()
       resetCarrito()
   }


   // reiniciar carrito al Cerrar Sesion

   function resetCarrito(){
       localStorage.removeItem(`carrito`)
   }