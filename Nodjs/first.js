const Average=require('./avg.js');
const res=Average(4,8,6);
console.log(res);
const http = require('http');
const server = http.createServer((req, resp) => {
    resp.writeHead(200, { "content-type": "text/html" });
    resp.write("<h1>Hello</h1>");
    resp.write("<button>click me</button>");
    resp.end("End Of Response");

}
).listen(808);

