module.exports = {
    welcome: function (req, res) {
        //POST
        if (req.method == "POST") {
            return res.json({ saludo: "hola" });
        }
        else {
            return res.send("Error en metodo");
        }
        //req.method;  --->  devuelve un string Metodo : GET POST DELETE
        //return json  --->  return res.json({saludo: "hola"});
        //return string -->  res.send("Hola")
    },
    bienvenido: function (req, res) {
        if (req.method == "PUT") {
            return res.json({ saludo: "hola" });
        }
        else {
            return res.send("Error en metodo");
        }
        //return response.json({saludo:"hola"});
        //return res.send("Hola")
    }
};
