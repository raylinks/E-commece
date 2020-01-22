const http = require('http');
const app = require('./app');
const config =require('./api/config/config')

const server = http.createServer(app);
server.listen(config.port);
console.log(`This Server started at ${config.port}`)