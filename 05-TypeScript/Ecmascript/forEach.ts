/**
 * Created by Tania Maricela on 29/05/2017.
 */
 //solo aplicar para arreglos

let arregloNumeros = [1,2,3,4,5];

//automaticamente tenemos la funcion forEach al crear el arreglo

//parametros en una function es una function anónima y puede usarse en vez de funtion el  fatarrow
arregloNumeros.forEach((valor, indice,arreglo)=>{ //for Each itera los elementos de un arreglo
    console.log("El valor es: " + valor);
    console.log("El indice es: " + indice);
    console.log("El arreglo es:" + arreglo);
});

let resultado = arregloNumeros.forEach((valor, indice,arreglo)=>{ //for Each itera los elementos de un arreglo
    console.log("El valor es: " + valor);
    console.log("El indice es: " + indice);
    console.log("El arreglo es:" + arreglo);
});
console.log("Resultado es igual a: ", resultado); //undefined, no devuelve nada
