"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UserModel_1 = require("../models/UserModel");
class UserRouter {
    constructor() {
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
    routes() {
        this.router.get('/', this.Iuser.getAll);
        this.router.get('/:username', this.Iuser.getOne);
        this.router.post('/', this.Iuser.create);
        this.router.put('/:username', this.Iuser.update);
        this.router.delete('/:username', this.Iuser.delete);
    }
}
const userRoutes = new UserRouter();
userRoutes.routes();
exports.default = userRoutes.router;
//# sourceMappingURL=UserRouter.js.map