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
const User_1 = require("../schema/User");
class IUserModel {
    //constructor(){}
    getAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                var names = yield User_1.default.find();
                res.status(200).json({ names });
            }
            catch (error) {
                res.status(500).json(error);
            }
        });
    }
    getOne(req, res) {
        const username = req.params.username;
        User_1.default.findOne({ username })
            .then((data) => {
            res.status(200).json({ data });
        })
            .catch((error) => {
            res.status(500).json({ error });
        });
    }
    create(req, res) {
        const firstName = req.body.firstName;
        const user = new User_1.default({
            firstName,
        });
        user.save()
            .then((data) => {
            res.status(201).json({ data });
        })
            .catch((error) => {
            res.status(500).json({ error });
        });
    }
    update(req, res) {
        const username = req.params.username;
        User_1.default.findOneAndUpdate({ username }, req.body)
            .then((data) => {
            res.status(200).json({ data });
        })
            .catch((error) => {
            res.status(500).json({ error });
        });
    }
    delete(req, res) {
        const username = req.params.username;
        User_1.default.findOneAndRemove({ username })
            .then(() => {
            res.status(204).end();
        })
            .catch((error) => {
            res.status(500).json({ error });
        });
    }
}
exports.IUserModel = IUserModel;
//# sourceMappingURL=UserModel.js.map