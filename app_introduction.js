const http = require('http');

// request de cliente a servidor
// response de servidor a cliente
http.createServer((request, response) => {
console.clear();
console.log(request);
    // Responde en texto plano
    // response.writeHead(200, {'Content-Type': 'text/plain'});
    // response.write('Hola mundo');

    // Responde en formato JSON
    // response.writeHead(200, {'Content-Type': 'application/json'});
    // const persona = {
    //     id: 1,
    //     name: 'Ivan'
    // }
    // response.write(JSON.stringify(persona));
    // Responde en formato JSON

    response.setHeader('Content-Disposition', 'attachment; filename=lista.scv');
    response.writeHead(200, {'Content-Type': 'application/csv'});
    response.write('id, name\n');
    response.write('1, Ivan\n');
    response.write('2, Moises\n');

    // Se finaliza y se envia la respuesta
    response.end();
})
.listen( 8080 );

// El servidor ya esta en ejecución
// http://localhost:8080/
console.log('Escuchando el puerto ', 8080);