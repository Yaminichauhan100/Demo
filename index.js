// 
// var fs = require('fs');

// fs.open('mynewfile2.txt', 'w', function (err, file) {
//   if (err) throw err;
//   console.log('Saved!');
// });
// var fs = require('fs');

// fs.appendFile('mynewfile1.txt', ' This is my text.', function (err) {
//   if (err) throw err;
//   console.log('Updated!');
// });
// var fs = require('fs');

// fs.rename('hello',"myRename.txt",function (err) {
//   if (err) throw err;
//   console.log('Replaced!');
// });
// var http = require('http');
// var uc = require('upper-case');
// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   res.write(uc.upperCase("Hello World!"));
//   res.end();
// }).listen(8080);
// var url = require('url');
// var adr = 'http://localhost:8080/default.htm?year=2017&month=february';
// var q = url.parse(adr, true);

// console.log(q.host); //returns 'localhost:8080'
// console.log(q.pathname); //returns '/default.htm'
// // console.log(q.search); //returns '?year=2017&month=february'

// var qdata = q.query; //returns an object: { year: 2017, month: 'february' }
// console.log(qdata.month); //returns 'february'
// console.log(qdata.search);

// const express = require('express');

// const app = express();

// //app.use(express.json());

// const port = 8000;

// app.listen( port, () => {
//     console.log(`Server is running on ${port} `)
// })
// var fs = require('fs');
// var rs = fs.createReadStream('./demo.txt');
// rs.on('open', function () {
//   console.log('The file is open');
// });


var events = require('events');
var eventEmitter = new events();

//Create an event handler:
var myEventHandler = function () {
  console.log('I hear a scream!');
}

//Assign the event handler to an event:
eventEmitter.on('scream', myEventHandler);

//Fire the 'scream' event:
eventEmitter.emit('scream');