"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var UserModel_1 = require("../models/UserModel");
var UserRouter = /** @class */ (function () {
    function UserRouter() {
        this.Iuser = new UserModel_1.IUserModel();
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
    UserRouter.prototype.routes = function () {
        this.router.get('/', this.Iuser.getAll);
        this.router.get('/:username', this.Iuser.getOne);
        this.router.post('/', this.Iuser.create);
        this.router.put('/:username', this.Iuser.update);
        this.router.delete('/:username', this.Iuser.delete);
    };
    return UserRouter;
}());
var userRoutes = new UserRouter();
userRoutes.routes();
exports.default = userRoutes.router;
//# sourceMappingURL=UserRouter.js.map