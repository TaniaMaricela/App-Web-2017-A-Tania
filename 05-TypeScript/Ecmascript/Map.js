/**
 * Created by Tania Maricela on 29/05/2017.
 */
var arreglo = [1, 2, 3, 4, 5];
//me devuelve un arreglo
var resultado = arreglo.map(//map muta el arreglo, los cambia
function (valor, indice, arreglo) {
    return valor + 1;
});
console.log(resultado); // [2,3,4,5,6]
var resultado2 = arreglo.map(//map muta el arreglo, los cambia
function (valor, indice, arreglo) {
    return valor * indice;
});
console.log(resultado2);
var arreglo2 = [4, 6, 7, 4, 5, 8, 10, 4, 7];
//me devuelve un arreglo
var valorNotaTotal = 2;
var resultado = arreglo.map(//map muta el arreglo, los cambia
function (valor, indice, arreglo) {
    return (valor * 2) / 10;
});
var resultado3 = arreglo2.every(function (valor, indice, arreglo) {
    return (valor >= 2);
});
console.log(resultado3);
