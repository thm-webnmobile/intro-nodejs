const http = require("http");

http.createServer((req, res) => {

    res.writeHead(200, {"Content-Type": "text/html"});

    res.end(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Beispielseite</title>
        </head>
        <body>
            <center><h1>Hello World</h1></center>
        </body>
        </html>
    `);

}).listen(3000);

console.log("Web Server listening on Port 3000");
