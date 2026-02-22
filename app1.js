
const http = require('http');
const handler = require('./handler'); // Object receive hoga

// handler.requestHandler likhna zaroori hai kyunki aapne 'exports' use kiya hai
const server = http.createServer(handler.requestHandler); 

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});