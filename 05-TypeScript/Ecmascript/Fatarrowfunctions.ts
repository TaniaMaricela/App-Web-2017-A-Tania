/**
 * Created by Tania Maricela on 29/05/2017.
 */
function holaMundo(){
    console.log("Hola Mundo");
}


//anonimous function
let holaMundo2 = function () {
    console.log("Hola Mundo");
}

let holaMundo3 = ()=>{
    console.log("Hola Mundo");
};
let HolaMundo4 = () => console.log("Hola Mundo"); // el console.log devuelve undefined y eso es practicamente void

let HolaMundo5 = function () {
    return 5;
}

let HolaMundo6 = ()=> 5; // omitimos return porq solo e suna linea de código

let HolaMundo7 = ()=> {
    let a=2;
    return a+3;
};

//mandar parametros

let saludar  = nombre => "Hola"+nombre; // los parentesis se omiten cuando hay un solo parámetro

// esto con dos parámetros
let saludarConAPellido  = (nombre, apellido)
    => `Hola ${nombre} ${apellido}
`;

//con => se puede omitir la palabra function
//omitir return
//omitir llaves

console.log(saludarConAPellido("Tania","Guamushig"));