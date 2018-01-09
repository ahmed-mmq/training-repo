"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const User_1 = require("../schema/User");
const UserModel_1 = require("../models/UserModel");
class UserRouter {
    constructor() {
        this.router = express_1.Router();
        this.routes();
    }
    /*public routes() {
      this.router.get('/', this.Iuser.getAll);
    }*/
    routes() {
        this.router.get('/', this.getAll);
        this.router.get('/:_id', this.getOne);
        this.router.post('/', this.create);
        this.router.put('/:_id', this.update);
        this.router.delete('/:_id', this.delete);
    }
    getAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var userModel = new UserModel_1.UserModel();
            try {
                let data = yield userModel.getAll();
                res.status(200).json(data);
            }
            catch (error) {
                console.log(error);
                res.status(500).json(error);
            }
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const _id = req.params._id;
            var userModel = new UserModel_1.UserModel();
            try {
                let data = yield userModel.getOne(_id);
                res.status(200).json({ data });
            }
            catch (error) {
                res.status(500).json({ error });
            }
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var userModel = new UserModel_1.UserModel();
            const firstName = req.body.firstName;
            const user = new User_1.default({
                firstName,
            });
            try {
                let data = yield userModel.post(user);
                res.status(200).json({ data });
            }
            catch (error) {
                res.status(500).json({ error });
            }
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const _id = req.params._id;
            var userModel = new UserModel_1.UserModel();
            try {
                let data = yield userModel.update(_id, req.body);
                res.status(200).json("user updated successfuly");
            }
            catch (error) {
                res.status(500).json({ error });
            }
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const _id = req.params._id;
            var userModel = new UserModel_1.UserModel();
            try {
                let data = yield userModel.delete(_id);
                res.status(200).json("user deleted successfuly");
            }
            catch (error) {
                res.status(500).json({ error });
            }
        });
    }
}
const userRoutes = new UserRouter();
userRoutes.routes();
exports.default = userRoutes.router;
//# sourceMappingURL=UserRouter.js.map