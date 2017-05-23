/**
 * Created by Tania Maricela on 22/05/2017.
 */

var arregloStrings = ["1","2"];
console.log(arregloStrings);
arregloStrings.push ("3"); //["1","2","3"] agrego al final
console.log(arregloStrings);
arregloStrings.pop(); // ["1","2"] elimino al final
console.log(arregloStrings);

// ["1","3","2"] aregar el tres en medio con splice
arregloStrings.splice(1, 0, "3");
console.log(arregloStrings);



// ["3","2"] borrar el primero con splice
arregloStrings.splice(0,1);
console.log(arregloStrings);
