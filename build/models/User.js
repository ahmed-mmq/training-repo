"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var UserSchema = new mongoose_1.Schema({
    firstName: {
        type: String,
        default: '',
        required: true
    },
});
exports.default = mongoose_1.model('User', UserSchema);
//# sourceMappingURL=User.js.map