

const calculadorFinal = (a,b)=> a + b;

const calculadorIVA = x => x * 0.21;


const planBronce = 500;
const planPlata= 800;
const planOro = 1200;

function costoFinal()
{let gasto = calculadorFinal(planBronce,calculadorIVA(planBronce));
document.getElementById("costos").innerHTML+= `<div class="col-12"><h4>Costo Final del servicio $${gasto} mensual.</h4></div>`
}




 