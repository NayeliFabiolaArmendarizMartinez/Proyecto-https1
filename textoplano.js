//llamamos el modulo http
const http = require('http');
//establecemos la url o ip de nuestro servidor 
const hostname = '127.0.0.1';
//establecemos el puerto de escucha
const port = 3000;
//creamos una instancia http con un reques y un response
const server = http.createServer((req, res) =>{
    //el servidor respondera con un texto plano
    res.statusCode = 200;
    //el servidor respondera con un texto plano
    res.setHeader('Content-Type', 'text/html');
    //el servidor respondera el mensaje hola mundo
    res.end('<p>Nayeli </p>');
});
server.listen(port, hostname, () =>{

    console.log(`El servidor se esta ejecutando en http://${hostname}:${port}/`);
});


