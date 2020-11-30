
const fs = require("fs");

const requestHandler = (req,res) =>{
	const url = req.url;
	const method = req.method;


	if(url === '/'){

	// res.write allow you to write response
	res.write('<html>');
	res.write('<head> <title> My first Page </title> </head>');
	res.write('<body> <form action="/message" method="POST" > <input name="message" type="text" /> <button type="submit">Send </button> </form> </body>');
	res.write('</html>');
	return res.end();

	}

	if (url === '/message' && method === 'POST'){

		const body = [];

		// req.on is a event listener which will run for every chunk of data
		req.on('data', (chunk) => {
			console.log(chunk)
			body.push(chunk);
		});

		// req.on('end') will run when all chunked recived 
		req.on('end', ()=>{
			const parsedBody = Buffer.concat(body).toString();
			console.log(parsedBody);
			const message = parsedBody.split('=')[1]

			// creating and saving file
			fs.writeFile('message.txt', message, err => {
				// redirecting to "/" 
				// status code 302 means discribe redirection 
				res.statusCode = 302 ;
				res.setHeader('Location','/');
				return res.end();		
			});
		});
	}
	
	// res.setHeader set certain header for response
	res.setHeader('Content-Type',"text/html");
	// res.write allow you to write response
	res.write('<html>');
	res.write('<head> <title> My first Page </title> </head>');
	res.write('<body> <h1> hello from my node.js server </h1> </body>');
	res.write('</html>');
	// res.end signifies response writing . You cannot use res.write beyond this as it will result in error 
	res.end();


}

module.exports = requestHandler;

	// process.exit() forced shut down the server 
	//process.exit();	

