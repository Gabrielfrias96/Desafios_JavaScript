alert (`Te mostraremos los 20 primeros multiplos del numero que tu elijas.`)
var multiplosDe = prompt(`Ingresa un numero del 1 al 10`)

for (var i = 1; i <= 100 ; i++){
   var multiplos= i * multiplosDe;
   console.log(`EL Multiplo numero ` + i + ` es = ` + multiplos)
   if (i == 25){
       break;
   }
}
