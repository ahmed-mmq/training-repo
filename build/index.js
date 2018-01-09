"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http = require("http");
const server_1 = require("./server");
const port = 8080;
server_1.default.set('port', port);
console.log(`Server listening on port ${port}`);
const server = http.createServer(server_1.default);
server.listen(port);
//# sourceMappingURL=index.js.map