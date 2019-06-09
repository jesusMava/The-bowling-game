//Cargamos el array con los puntos
var array = [1, 4, 4, 5, 6, 4, 5, 5, 10, 0, 0, 1, 7, 3, 6, 4, 10, 0, 2, 8, 6];
//Declaramos variable 
var acomulador = 0;
var suma = 0;
var retorno;
// Función para comparar ya que no podemos usar la sentencia if
function comparar(suma, i) {
    // En caso que la suma sea 10, sumamos el valor de i+1 del array y retornamos el valor
    // En caso contrario no hacemos nada y retornamos el mismo valor de suma
    // (Leer el problema Bowling game.)
    switch (suma) {
        case 10:
            suma = suma + array[i + 2];
            break;
        default:
            break;
    }
    return suma;
}

// Recorrido del array, tomando de dos en 2 posiciones empezando de cero
for (i = 0; i < array.length - 1; i += 2) {
    // tomamos el valor en la posición i (empezamos de cero y va de 2 en 2, 0,2,4,6...etc)
    suma = array[i];
    switch (suma) {
        // Si la primera posición tiene un valor de 10 (chusa)
        case 10:
            acomulador = acomulador + array[i + 2] + suma + array[i + 3];
            break;
        default:
            //a suma le agregamos el valor de i+1 
            suma = suma + array[i + 1]
                // Mandamos a llamar la función y nos restorna un resultado, el cual lo agregamos a acomulador
            retorno = comparar(suma, i);
            acomulador = acomulador + retorno;
            break;
    }
    // Imprimimos los resultados
    console.log(acomulador);
}