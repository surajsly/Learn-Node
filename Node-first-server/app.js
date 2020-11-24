// create server only with core node module 

//importing core modules
const http = require("http");



// http.createServer method create a server  

// A request listener receives  ( In this case the arrow funtion wriiten inside http.createServer )
// ( 1 )  A request which is of type incoming message 
// ( 2 )  A response object,

const server = http.createServer((req,res)=>{
	console.log(req);
	// process.exit() forced shut down the server 
	// process.exit();
});

// Listen take optional argument  port, host name 
// this keeps on litening for upcomming request
// here server run on 
// http://localhost:3000/
server.listen(3000);