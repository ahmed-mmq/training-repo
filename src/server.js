"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var bodyParser = require("body-parser");
var compression = require("compression");
var express = require("express");
var helmet = require("helmet");
var mongoose = require("mongoose");
var logger = require("morgan");
var UserRouter_1 = require("./router/UserRouter");
var Server = /** @class */ (function () {
    function Server() {
        this.app = express();
        this.config();
        this.routes();
    }
    // application config
    Server.prototype.config = function () {
        var MONGO_URI = 'mongodb://ahmed:magdy@bear-shard-00-00-i5ioy.mongodb.net:27017,bear-shard-00-01-i5ioy.mongodb.net:27017,bear-shard-00-02-i5ioy.mongodb.net:27017/test?ssl=true&replicaSet=bear-shard-0&authSource=admin';
        mongoose.connect(MONGO_URI || process.env.MONGODB_URI);
        // express middleware
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.app.use(bodyParser.json());
        this.app.use(logger('dev'));
        this.app.use(compression());
        this.app.use(helmet());
    };
    // application routes
    Server.prototype.routes = function () {
        var router = express.Router();
        this.app.use('/', router);
        this.app.use('/api/v1/users', UserRouter_1.default);
    };
    return Server;
}());
// export
exports.default = new Server().app;
