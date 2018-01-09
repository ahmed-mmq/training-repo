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
class UserModel {
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            let data = yield User_1.default.find();
            return data;
        });
    }
    getOne(_id) {
        return __awaiter(this, void 0, void 0, function* () {
            let data = yield User_1.default.findById({ _id });
            return data;
        });
    }
    post(user) {
        return __awaiter(this, void 0, void 0, function* () {
            let data = yield user.save();
            return data;
        });
    }
    update(_id, user) {
        return __awaiter(this, void 0, void 0, function* () {
            yield User_1.default.findByIdAndUpdate(_id, user)
                .then(() => {
                return "";
            })
                .catch((error) => {
                return error;
            });
        });
    }
    delete(_id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield User_1.default.findByIdAndRemove(_id)
                .then(() => {
                return "";
            })
                .catch((error) => {
                return "delete failed";
            });
        });
    }
}
exports.UserModel = UserModel;
//# sourceMappingURL=UserModel.js.map