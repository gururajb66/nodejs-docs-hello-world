const http = require('http');
var fs = require('fs');
const server = http.createServer((request, response) => {
     fs.readFile("AppPages/MyPage.html", function (error, pgResp) {
     if(error)
     {console.log('error reading file';
				  }
                  else
         {
             response.writeHead(200, { 'Content-Type': 'text/html' });
                response.write(pgResp);
         }
     }
    //response.writeHead(200, {"Content-Type": "text/plain"});
    //response.end("Hello World!");
});

const port = process.env.PORT || 1337;
server.listen(port);

console.log("Server running at http://localhost:%d", port);
