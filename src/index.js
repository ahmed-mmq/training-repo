"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http = require("http");
var server_1 = require("./server");
var port = 8080;
server_1.default.set('port', port);
console.log("Server listening on port " + port);
var server = http.createServer(server_1.default);
server.listen(port);
