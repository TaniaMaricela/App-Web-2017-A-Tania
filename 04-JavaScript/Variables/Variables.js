/**
 * Created by Tania Maricela on 22/05/2017.
 */

var texto = "";
var texto2 = '';
var numero = 1;
var booleano = false;
var decimal = 1.2;
var fecha = new Date();
var objeto = {};
texto = 2;
texto = booleano;
texto = decimal;
texto = fecha;
texto = objeto;
//Comentario en linea
/**
 * Comentario
 * en
 * bloque
 */
//ARREGLOS
var arregloNumeros = [1,2,3,4,5];
var arregloStrings = ["a","b","c"];
var arregloBooleanos = [true, false, true];

arregloNumeros = [1,"a",true,[1,"b"],{}];
var matriz = [[1,2],[3,4]];

//   0  1
//0  1  2
//1  3  4

//Objeto JSON (acrónimo de JavaScript Object Notation)
/**
 * Alternativ al XML
 */

//NOtacion

    /*de ley usar las llaves
    * usar ":*/
var objetoNotacion = {};
var objeto2 = {
    llave:"valor",//es como se va a acceder
    //llave:ncbdsjc; no hay dos, solo hay una con el mismo nombre
    llave2:"valor",
    llave3:"valor"
};
objeto2.llave; // valor
objeto2.llave2; //valor
objeto2.llave3; //valor

var objetoComplejo = { ///asimilarlo como una clase incluye métodos
    nombre:"",
    apellido: "",
    fechaNacimiento: new Date(),
    mayorEdad: true,
    peso: 70.2,
    altura: 127,
    saltar: function () {
        /*esta funcion no tiene nombre porque son de tipo anonimus y no necesita nombre porqu la estamos definiendo dentro del*/
        objeto
        console.log("Saltar");
    },
    correr: function () {
        console.log("Correr");
    },
    sumar: function (a, b) {
        return a + b;
    },
    imprimirNombre:function () {
        //return objetoComplejo.nombre + " " + objetoComplejo.apellido    INCORRECTO
        return this.nombre+" "+ this.apellido; //CORRECTO
    }
};

objetoComplejo.altura//127

objetoComplejo.apellido//""
objetoComplejo.nombre//""

objetoNotacion.nombre = "Tania";
objetoComplejo.nombre; //"Tania"

objetoComplejo.apellido = "Guamushig";
objetoComplejo.apellido; //"Guamushig"

objetoComplejo.titulo; // undefined
objetoComplejo.titulo = "Ingeniero";

//objetoComplejo.titulo.fechaExpedicion = ""; ESTO ESTA MAL, NO SE HACE
//EROOR  objetoComplejo.hsdvchsvchxb.hsbchjbchjd = ""

delete objetoComplejo.nombre;

var arregloStrings = ["1","2"];
arregloStrings.push ("3"); //["1","2","3"] agrego al final
arregloStrings.pop(); // ["1","2"] elimino al final
// ["1","3","2"] aregar el tres en medio con splice




// ["3","2"] borrar el primero con splice

