function mostrarNombre(){
    let turnoConsulta = document.getElementById("txName").value;
    let turnoCorrecto = isNaN(turnoConsulta) ;
    let turnoActual = 7
    let turnosFaltantes = turnoConsulta - turnoActual;
    let tiempoEspera = turnosFaltantes * 10;
    if (turnoCorrecto ||turnoConsulta == ""){
        document.getElementById("esperaVirtual").innerHTML+= `<div class="col-12"><h4>Has introducido un dato Incorrecto.</h4></div>`
    } else if(turnosFaltantes < 0) {
        document.getElementById("esperaVirtual").innerHTML+= `<div class="col-12"><h4>Lamentablemente su turno ya ha pasado. Porfavor acercarce a recepcion.</h4></div>`
      } else if (turnoConsulta > 10){
        document.getElementById("esperaVirtual").innerHTML+= `<div class="col-12"><h4>Turno Invalido, solo se han dado 10 Turnos.</h4></div>` 
      } else {
        document.getElementById("esperaVirtual").innerHTML+= `<div class="col-12"><h5>Faltan ${tiempoEspera}min para su Turno.</h5></div>`
    }
   
}

