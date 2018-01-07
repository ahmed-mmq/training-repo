"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var User_1 = require("../models/User");
var UserRouter = /** @class */ (function () {
    function UserRouter() {
        this.router = express_1.Router();
        this.routes();
    }
    /*public async getAll(req: Request, res: Response) {
      try {
        const names = await User.find();
        res.status(200).json({ names });
      }
      catch (error) {
        res.status(500).json( error );
      }
    
    }*/
    UserRouter.prototype.getAll = function (req, res) {
        User_1.default.find()
            .then(function (data) {
            res.status(200).json({ data: data });
        })
            .catch(function (error) {
            res.status(500).json({ error: error });
        });
    };
    UserRouter.prototype.getOne = function (req, res) {
        var username = req.params.username;
        User_1.default.findOne({ username: username })
            .then(function (data) {
            res.status(200).json({ data: data });
        })
            .catch(function (error) {
            res.status(500).json({ error: error });
        });
    };
    UserRouter.prototype.create = function (req, res) {
        var firstName = req.body.firstName;
        var user = new User_1.default({
            firstName: firstName,
        });
        user.save()
            .then(function (data) {
            res.status(201).json({ data: data });
        })
            .catch(function (error) {
            res.status(500).json({ error: error });
        });
    };
    UserRouter.prototype.update = function (req, res) {
        var username = req.params.username;
        User_1.default.findOneAndUpdate({ username: username }, req.body)
            .then(function (data) {
            res.status(200).json({ data: data });
        })
            .catch(function (error) {
            res.status(500).json({ error: error });
        });
    };
    UserRouter.prototype.delete = function (req, res) {
        var username = req.params.username;
        User_1.default.findOneAndRemove({ username: username })
            .then(function () {
            res.status(204).end();
        })
            .catch(function (error) {
            res.status(500).json({ error: error });
        });
    };
    // set up our routes
    UserRouter.prototype.routes = function () {
        this.router.get('/', this.getAll);
        this.router.get('/:username', this.getOne);
        this.router.post('/', this.create);
        this.router.put('/:username', this.update);
        this.router.delete('/:username', this.delete);
    };
    return UserRouter;
}());
var userRoutes = new UserRouter();
userRoutes.routes();
exports.default = userRoutes.router;
