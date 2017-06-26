/**
 * Created by Tania Maricela on 26/06/2017.
 */

declare var module;


module.exports = {
  //1
  cookieSigned: (req, res) => {
    res.json(req.signedCookies);
  },
  //2
  socket: (req, res) => {
    if (req.isSocket) {
      res.jason(req.socket);
    }
    else {
      res.send("Socket: Método obsoleto");
    }
  },
  //3
  subdomains: (req,res) => {
    res.send(req.subdomains);
  },
  //4
  url: (req, res) => {
    res.json (req.url);
  },
  //5
  wantsJson: (req, res) => {
    if (req.wantsJSON) {
      res.json({elección: "wantsJSON"});
    }
    else {
      res.send("Error");
    }
  },
  //6
  xhr: (req, res) => {
    if (req.xhr) {
      res.json(req.xhr);
    }
    else {
      res.send("Error");
    }
  },
  accepts : (req, res ) => {

    var accepts = req('accepts');
    var http = req('http');
    var accept = accepts(req);
    switch (accept.type(['json', 'html'])) {
      case 'json':
        res.setHeader('Content-Type', 'application/json');
        res.write('{"hello":"world!"}');
        break;
      case 'html':
        res.setHeader('Content-Type', 'text/html');
        res.write('<b>hello, world!</b>');
        break;
      default:
        // the fallback is text/plain, so no need to specify it above
        res.setHeader('Content-Type', 'text/plain');
        res.write('hello, world!');
        break
    }

    res.end();
  }
  //7
  //8
  //9
  //10
  //11
  //12
  //13
  //14
  //15
  //16
  //17
};


/*bienvenido: (req, res) => {//solo put-sino error
 if (req.method == "PUT") {
 return res.json({saludo: "hola"});
 }
 else {
 return res.send("Error en metodo")
 }
 //return response.json({saludo:"hola"});
 //return res.send("Hola")
 }*/
