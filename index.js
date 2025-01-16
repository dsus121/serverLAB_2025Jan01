const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
res.statusCode = 200;
res.setHeader("Content-Type", "text/html");

switch (req.url) {
case "/":
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.write('<h3 style="color: darkgreen">Hello World!</h3>');
    res.write('<p>Derek is amazing.</p>');
    res.end();break;

case "/test":
res.write("You've reached the test endpoint.");
break;


case "/brandon":
res.write("You've said HELLO to Brandon.");
break;
default:
res.statusCode = 404;
res.write("sort of an error");
break;

}

res.end();
})



    server.listen(port, hostname, () => {
        console.log(`Server running at http://${hostname}:${port}/`);
        });

