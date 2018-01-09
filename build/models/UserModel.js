"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User_1 = require("../schema/User");
var IUserModel = /** @class */ (function () {
    function IUserModel() {
    }
    IUserModel.prototype.getAll = function (req, res) {
        User_1.default.find()
            .then(function (data) {
            res.status(200).json({ data: data });
        })
            .catch(function (error) {
            res.status(500).json({ error: error });
        });
    };
    /*public async getAll(req: Request, res: Response) {
      try{
        let names = await User.find();
        res.status(200).json({ names });
      }
      catch (error) {
        res.status(500).json(error);
      }
      return "";
    }*/
    IUserModel.prototype.getOne = function (req, res) {
        var username = req.params.username;
        User_1.default.findOne({ username: username })
            .then(function (data) {
            res.status(200).json({ data: data });
        })
            .catch(function (error) {
            res.status(500).json({ error: error });
        });
    };
    IUserModel.prototype.create = function (req, res) {
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
    IUserModel.prototype.update = function (req, res) {
        var username = req.params.username;
        User_1.default.findOneAndUpdate({ username: username }, req.body)
            .then(function (data) {
            res.status(200).json({ data: data });
        })
            .catch(function (error) {
            res.status(500).json({ error: error });
        });
    };
    IUserModel.prototype.delete = function (req, res) {
        var username = req.params.username;
        User_1.default.findOneAndRemove({ username: username })
            .then(function () {
            res.status(204).end();
        })
            .catch(function (error) {
            res.status(500).json({ error: error });
        });
    };
    return IUserModel;
}());
exports.IUserModel = IUserModel;
//# sourceMappingURL=UserModel.js.map