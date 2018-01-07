import * as http from 'http';
import Server from './server';

const port = 8080 ;
Server.set('port', port);

console.log(`Server listening on port ${port}`);

const server = http.createServer(Server);
server.listen(port);
