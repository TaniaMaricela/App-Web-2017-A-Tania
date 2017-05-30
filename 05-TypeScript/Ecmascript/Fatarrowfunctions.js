/**
 * Created by Tania Maricela on 29/05/2017.
 */
function holaMundo() {
    console.log("Hola Mundo");
}
//anonimous function
var holaMundo2 = function () {
    console.log("Hola Mundo");
};
var holaMundo3 = function () {
    console.log("Hola Mundo");
};
var HolaMundo4 = function () { return console.log("Hola Mundo"); }; // el console.log devuelve undefined y eso es practicamente void
var HolaMundo5 = function () {
    return 5;
};
var HolaMundo6 = function () { return 5; }; // omitimos return porq solo e suna linea de código
var HolaMundo7 = function () {
    var a = 2;
    return a + 3;
};
//mandar parametros
var saludar = function (nombre) { return "Hola" + nombre; }; // los parentesis se omiten cuando hay un solo parámetro
// esto con dos parámetros
var saludarConAPellido = function (nombre, apellido) { return "Hola " + nombre + " " + apellido + "\n"; };
//con => se puede omitir la palabra function
//omitir return
//omitir llaves
console.log(saludarConAPellido("Tania", "Guamushig"));
