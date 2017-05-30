/**
 * Created by Tania Maricela on 29/05/2017.
 */

let arreglo = [4,6,7,4,5,8,10,4,7];

//me devuelve un arreglo
let resultado = arreglo.map (//map muta el arreglo, los cambia
    (valor, indice, arreglo)=>{
        return valor +1;
    }
);
console.log(resultado); // [2,3,4,5,6]

let resultado2 = arreglo.map (//map muta el arreglo, los cambia
    (valor, indice, arreglo)=>{
        return valor*indice;
    }
);
console.log(resultado2);

let arreglo2 = [4,6,7,4,5,8,10,4,7];

//me devuelve un arreglo
let valorNotaTotal = 2;
let resultado = arreglo.map (//map muta el arreglo, los cambia
    (valor, indice, arreglo)=>{
        return (valor *2)/10;
    }
);

let resultado3 = arreglo2.every(
    (valor,indice,arreglo)=>{
    return (valor>=2);
});
console.log(resultado3);
