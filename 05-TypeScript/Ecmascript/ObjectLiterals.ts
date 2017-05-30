/**
 * Created by Tania Maricela on 29/05/2017.
 */


//ingresan 2 num y la funcion devuelve un obj json con dos valores siendo los numeros multiplicados por  2
function multiplicarX2 (n1, n2){
    let resultado = {
        n1 : n1,
        n2 : n2
    };
    resultado.n1 = resultado.n1*2;
    resultado.n2 = resultado.n2*2;
    return resultado;
}

