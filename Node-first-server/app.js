// create server only with core node module 

//importing core modules
const http = require("http");

// A request listener receives :
// ( 1 )  A request which is of type incoming message 
// ( 2 )  A response object,

function rqListner(req,res){

}

// this method create a server and take a request listener 

http.createServer(rqListner);