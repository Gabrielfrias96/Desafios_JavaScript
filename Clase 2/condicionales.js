alert ("Te haremos unas preguntas para saber si eres Persona de Riesgo ante Covid-19");
let nameUser = prompt ("¿Como es tu nombre?");
alert("Genia " + nameUser + " contesta las siguientes preguntas con si/no");
let eresMayor = prompt ("¿Eres mayor de 60 años?");
let tieneDiabetes = prompt ("¿Tienes diabetes?");
let tieneAsma = prompt("¿Tienes ASMA?");


if (eresMayor == "si" || tieneDiabetes == "si" || tieneAsma == "si") {

    alert(`Te cominicamos ${nameUser} que SI eres persona de Riesgo`);
}
 else { alert (`Te cominicamos ${nameUser} que NO eres persona de Riesgo`);
}
