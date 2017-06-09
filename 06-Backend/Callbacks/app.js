/**
 * Created by Tania Maricela on 05/06/2017.
 */

const fs = require ('fs');

const express = require ('express');

console.log("empieza");

// 1 - Nombre y ruta del archivo
// 2 - Codificación
// 3 - Anonymous Funtion

fs.readFile('texto.txt', 'utf8',
    function(err, data) {
        if (err) throw err;
        console.log(data);
    });

console.log("termina");

//npm install express
