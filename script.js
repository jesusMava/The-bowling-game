const BolosDerribados = [1,4,4,5,6,4,5,5,10,0,0,1,7,3,6,4,10,0,2,8,6];
let Tiro1 = 0,i = 0;
let PuntosAcomulados = 0;
let SumaBolosDosTiros = 0;
let VistaBolosCaidos = document.getElementById("VistaBolosCaidos");
let resultados = document.getElementById("resultados");

do {
  Tiro1 = BolosDerribados[i];
  Tiro1 == 10 ?(PuntosAcomulados = PuntosAcomulados + BolosDerribados[i+2]  + BolosDerribados[i+3] + Tiro1)
    :(SumaBolosDosTiros = Tiro1 + BolosDerribados[i+1],
    PuntosAcomulados = PuntosAcomulados + compararSumaBolos(SumaBolosDosTiros,i));
  VistaBolosCaidos.insertAdjacentHTML("beforebegin", "<th>" + BolosDerribados[i] + " "
  + BolosDerribados[i+1] + "|</th>");     
  resultados.insertAdjacentHTML("beforebegin", "<td>" + PuntosAcomulados + "|</td>");
  i += 2
} while(i< BolosDerribados.length - 1);

function compararSumaBolos(SumaBolosDosTiros,i) {
  SumaBolosDosTiros==10 ? SumaBolosDosTiros = SumaBolosDosTiros + BolosDerribados[i+2]:SumaBolosDosTiros;

  return SumaBolosDosTiros;
}

