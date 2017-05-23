/**
 * Created by Tania Maricela on 22/05/2017.
 */


//devuelve undefined
//VOID -- undefined
function ImprimirHolaMundo() {
    console.log("Hola Mundo");
}
ImprimirHolaMundo();
//node Funciones.js

function Imprimir(texto) {//indefined
    console.log(texto)
}
Imprimir("Tania"); // undefined

function Suma2Numeros(a, b) {
    return a+b;
}

Suma2Numeros(1,2); //3
var resultado =  Suma2Numeros(1,2); //3
console.log(Suma2Numeros(1,2));//I:3
console.log(resultado);//I:3





//ninguna funcino en JS se necesita decir si devuelve algo
//podemos mandar cualquier cosa como parametro en una funcion


function Operar2Numeros(n1, n2, funcion) {
    n1 = n1+1;
    n2 = n2+2;
    funcion(n1,n2);
}

Operar2Numeros (2,4,function (primerNumero,segundoNumero) {
    //primerNumero = 3
    //segundoNumero = 6
    return primerNumero*segundoNumero; //3 * 6 ? 18;
});

//para que sirve esta cosa rara??
//para un for each


//FOR EACH es un a funcion que tiene los arreglos
// [1,2,3,4].forEach(function(valorIteración,Indice,Arreglo){
//
//  console.log (valorIteracion) //
//
//})
//


// sin eel for each hay q hacer un for




// node Funciones.js