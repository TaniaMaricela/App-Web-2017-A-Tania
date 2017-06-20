/**
 * Created by Tania Maricela on 19/06/2017.
 */
declare var module;
module.exports = {
  welcome: (req, res) => { //solo post -sino error
    //POST
    if (req.method == "POST"){
      return res.json({saludo: "hola"});
    }
    //ERROR
    else {
      return res.send("Error en metodo")
    }
    //req.method;  --->  devuelve un string Metodo : GET POST DELETE
    //return json  --->  return res.json({saludo: "hola"});
    //return string -->  res.send("Hola")
  },
  bienvenido: (req, res) => {//solo put-sino error
    if (req.method == "PUT"){
      return res.json({saludo: "hola"});
    }
    else {
      return res.send("Error en metodo")
    }



    //return response.json({saludo:"hola"});
    //return res.send("Hola")
  }

}
