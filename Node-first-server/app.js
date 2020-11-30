// create server only with core node module 

// Importing core node modules
const http = require("http");


const routes = require("./routes");
// http.createServer method create a server  

// A request listener receives  ( In this case the arrow funtion wriiten inside http.createServer )
// ( 1 )  A request which is of type incoming message 
// ( 2 )  A response object,

const server = http.createServer(routes.handler);

// Listen take optional argument  port, host name, 
// this keeps on litening for upcomming request
// here server run on 
// http://localhost:3000/
server.listen(3000);



/* Notes : 
 @ status code 302 means discribe redirection
 @ res.setHeader set certain header for response
 @ The difference is that the fs. writeFileSync method performs input/output operations synchronously, blocking the Node.

*/