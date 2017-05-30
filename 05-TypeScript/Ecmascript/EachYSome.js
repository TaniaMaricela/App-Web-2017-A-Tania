/**
 * Created by Tania Maricela on 29/05/2017.
 */
var arreglo = [4, 6, 7, 4, 5, 8, 10, 4, 7];
//me devuelve un arreglo
var resultado = arreglo.map(//map muta el arreglo, los cambia
function (valor, indice, arreglo) {
    return valor + 1;
});
console.log(resultado); // [2,3,4,5,6]
var resultado2 = arreglo.map(function (valor, indice, arreglo) {
    return (valor * 2) / 10;
})
    .some(function (valor) {
    return valor <= 0.2;
});
console.log(resultado2);
