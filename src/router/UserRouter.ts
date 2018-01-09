import { Request, Response, Router } from 'express';
import User from '../schema/User';
import {IUserModel} from '../models/UserModel';

class UserRouter {

  public router: Router;
  public Iuser = new IUserModel(); 
  constructor() {
    this.router = Router();
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

  public routes() {
    this.router.get('/', this.Iuser.getAll);
    this.router.get('/:username', this.Iuser.getOne);
    this.router.post('/', this.Iuser.create);
    this.router.put('/:username', this.Iuser.update);
    this.router.delete('/:username', this.Iuser.delete);
  }

}

const userRoutes = new UserRouter();
userRoutes.routes();

export default userRoutes.router;