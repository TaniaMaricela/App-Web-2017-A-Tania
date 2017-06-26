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
  subdomains: (req, res) => {
    res.send(req.subdomains);
  },
  //4
  url: (req, res) => {
    res.json(req.url);
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
  //7
  accepts: (req, res) => {
    res.json(req.accepts('json'));
  },
  //8
  acceptsCharse: (req, res) => {
    req.acceptsCharset('utf-8');
  },
  //9
  acceptsLanguage: (req, res) => {
    req.acceptsLanguage('en-gb');
  },
  //10
  allParams: (req, res) => {
    res.json(req.allParams());
  },
  //11
  file: (req, res) => {
    req.file('avatar').upload(function (err, uploadedFiles) {
      if (err) return res.serverError(err);
      return res.json({
        message: files.length + ' file(s) uploaded successfully!',
        files: files
      });
    });
  },
  //12
  get: (req, res) => {
    res.json(req.get('cookieSigned'));
  },
  //13
  is: (req, res) => {
    req.is('html');
  },
  //14
  param: (req, res) => {
    req.param('sku');
  },
  //15
  attachment: (req, res) => {

    res.attachment('path/to/logo.png');
  },
  //16
  badRequest: (req, res) => {
    return res.badRequest();
  },
  //17
  clearCookie: (req, res) => {
    res.clearCookie(name [, options
    ])
    ;
  },
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
