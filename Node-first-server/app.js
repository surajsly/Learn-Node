// create server only with core node module 

//importing core modules
const http = require("http");



// http.createServer method create a server  

// A request listener receives  ( In this case the arrow funtion wriiten inside http.createServer )
// ( 1 )  A request which is of type incoming message 
// ( 2 )  A response object,

const server = http.createServer((req,res)=>{
	console.log(req);
	console.log("important in response: \n url --> ",req.url,"\n method --> ",req.method,"\n headers -->" , req.headers);
	
	// res.setHeader set certain header for response
	res.setHeader('Content-Type',"text/html");

	// res.write allow you to write response
	res.write('<html>');
	res.write('<head> <title> My first Page </title> </head>');
	res.write('<body> <h1> hello from my node.js server </h1> </body>');
	res.write('</html>');

	// end response writing cant use  res.write beyond this as it will result in error 
	res.end();

	// process.exit() forced shut down the server 
	// process.exit();
});

// Listen take optional argument  port, host name 
// this keeps on litening for upcomming request
// here server run on 
// http://localhost:3000/
server.listen(3000);