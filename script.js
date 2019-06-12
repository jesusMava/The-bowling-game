const BolosDerribados = [1,4,4,5,6,4,5,5,10,0,0,1,7,3,6,4,10,0,2,8,6];
//const BolosDerribados = [7,3,8,2,10,0,10,0,10,0,8,2,7,3,9,0,10,0,10,10,9];
//const BolosDerribados = [7,2,9,1,10,0,6,3,10,0,8,2,7,3,9,0,8,1,7,3,9];
let Tiro1 = 0,i = 0;
let PuntosAcomulados = 0;
let SumaBolosDosTiros = 0;
let VistaBolosCaidos = document.getElementById("VistaBolosCaidos");
let Resultados = document.getElementById("resultados");

do {
  Tiro1 = BolosDerribados[i];
  PuntosAcomulados = (Tiro1 == 10) ?
    ((BolosDerribados[i+2] == 10 && i < 16) ? PuntosAcomulados + Tiro1 + BolosDerribados[i+2] + BolosDerribados[i+4]
    :PuntosAcomulados + Tiro1 + BolosDerribados[i+2] + BolosDerribados[i+3])
  :(SumaBolosDosTiros = Tiro1 + BolosDerribados[i+1],
     PuntosAcomulados + compararSumaBolos(SumaBolosDosTiros,i));
  mostrarValoresTablero(PuntosAcomulados,i)  
  i += 2
} while(i < 17);

ResultadoFinal = PuntosAcomulados + BolosDerribados[18] + BolosDerribados[19] + BolosDerribados[20]
mostrarValoresFinalesTablero(ResultadoFinal)

function compararSumaBolos(SumaBolosDosTiros,i) {
  return SumaBolosDosTiros = (SumaBolosDosTiros == 10) ? SumaBolosDosTiros + BolosDerribados[i+2]:SumaBolosDosTiros;
}

function mostrarValoresTablero(PuntosAcomulados,i) {
  VistaBolosCaidos.insertAdjacentHTML("beforebegin", "<th>" + BolosDerribados[i] + " "
  + BolosDerribados[i+1] + "|</th>");     
  Resultados.insertAdjacentHTML("beforebegin", "<td>" + PuntosAcomulados + "|</td>");
}

function mostrarValoresFinalesTablero(ResultadoFinal) {
  VistaBolosCaidos.insertAdjacentHTML("beforebegin", "<th>" + BolosDerribados[18] + " "
  + BolosDerribados[19] + "|" + BolosDerribados[20] + "|</th>");     
  Resultados.insertAdjacentHTML("beforebegin", "<td>" + ResultadoFinal + "</td>");
}
