function mostrarNombre(){
    let turnoConsulta = document.getElementById("txName").value;
    let turnoCorrecto = isNaN(turnoConsulta) ;
    let turnoActual = 7
    let turnosFaltantes = turnoConsulta - turnoActual;
    let tiempoEspera = turnosFaltantes * 10;
    if (turnoCorrecto ||turnoConsulta == ""){
        alert(`El turno ingresado es invalido porfavor ingrese un numero`)
    } else if(turnosFaltantes < 0) {
        alert ("Lamentablemente su turno ya ha pasado. Porfavor acercarce a recepcion.")
      } else if (turnoConsulta > 10){
          alert(`Turno Invalido, solo se han dado 10 Turnos.`)
      } else {
          alert(`Faltan ${tiempoEspera}min para su Turno.`)}
    }
   
    

