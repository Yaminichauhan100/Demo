// const express = require('express');
// const app = express();
// app.get('/', (req, res) => {
//   res.json({ message: 'Hello from teh server' });
// });
// const port = 3000;
// app.listen(3000, () => {
//   console.log(`Api is listening at ${port}`);
// });
// const a = function (a,b){return c=a+b}
// a(40,20)
// console.log(c);


// let a=40,b=20;
// if(a>b){
//     console.log( "a is greater than b");
// }
// else{
//     console.log("b is greater")
// }

//const http = require('http')
// const server = http.createServer((req,res)=>{


// })
// server.listen(8000,()=>{
//     console.log("hello")
// })

// let http = require('http');
// let dt = require('./myFirstModule');

// http.createServer((req, res) =>{
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   res.write("The date .......and time are currently: " + dt.Date());
//   res.end();
// }).listen(8080,()=>{
//     console.log('listening');
// });
var http = require('http');
var fs = require('fs');
http.createServer( (req, document) =>
{
  fs.readFile('txt.js', (err, data)=> {
   res.writeHead(200, {'Content-Type': 'text/html'});
 document.write(data);
    document.end();
  });
}).listen(8080,()=>{
    console.log('listening');
});