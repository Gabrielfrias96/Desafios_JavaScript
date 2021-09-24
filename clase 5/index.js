function Perro (nombre, edad , color){
    this.nombre = nombre;
    this.edad = edad;
    this.color = color;
}

class Habilides{
    hablar(a){
        document.getElementById("saludo").innerHTML+= `
        <div class="col-12">
            <h2>Hola Soy ${a.nombre} tu nuevo perro!</h2>
            <p> Tengo ${a.edad} años de edad y el color de mi pelo es ${a.color}!</p>
        </div>`
    }

    
}

// Creacion del perro 

function nuevoPerro(){
    //Pedimos los datos al usuario
    alert("Dinos como quieres que sea tu perro!");
    let nombre = prompt("Como se llamará ?")
    let edad = prompt(" Cuantos años tendrá?")
    let color = prompt (" De que color sera su Pelo")


    // Creamos al perro con su contrusctores

    let nuevoPerro = new Perro(nombre, edad, color)

    // aplicamos la clase

    let ui = new Habilides()

    ui.hablar(nuevoPerro)

    //mostramos por consola el nuevo Objeto

    console.log(nuevoPerro)
}