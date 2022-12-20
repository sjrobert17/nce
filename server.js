const http = require('http');
const fs = require('fs');
const path = require('path');
const port = 3000;

const requestHandler = (request, response) => {
  // Get the file path from the request
  const filePath = path.join(__dirname, 'src', request.url);

  // Get the file extension
  const extname = path.extname(filePath);

  // Set the content type based on the file extension
  let contentType = 'text/html';
  switch (extname) {
    case '.js':
      contentType = 'text/javascript';
      break;
    case '.css':
      contentType = 'text/css';
      break;
    case '.json':
      contentType = 'application/json';
      break;
    case '.png':
      contentType = 'image/png';
      break;
    case '.jpg':
      contentType = 'image/jpg';
      break;
  }

  // Read the file from the file system
  fs.readFile(filePath, (err, data) => {
    if (err) {
      response.writeHead(404);
      response.end();
      return;
    }

    response.writeHead(200, { 'Content-Type': contentType });
    response.end(data);
  });
};

const server = http.createServer(requestHandler);

server.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err);
  }

  console.log(`server is listening on ${port}`);
});