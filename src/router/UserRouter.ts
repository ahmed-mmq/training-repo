import { Request, Response, Router } from 'express';
import User from '../schema/User';
import {UserModel} from '../models/UserModel';

class UserRouter {

  public router: Router;
  constructor() {
    this.router = Router();
    this.routes();
  }
  /*public routes() {
    this.router.get('/', this.Iuser.getAll);
  }*/
 

    public routes() {
    this.router.get('/', this.getAll);
     this.router.get('/:_id', this.getOne);
     this.router.post('/', this.create);
     this.router.put('/:_id', this.update);
     this.router.delete('/:_id', this.delete);
  }
  public async getAll(req: Request, res: Response): Promise<void> {
    var userModel = new UserModel(); 
    try{
       let data = await userModel.getAll();
       res.status(200).json(data);
     }catch (error) {
       console.log(error);
       res.status(500).json(error);
     }
   }

   public async getOne(req: Request, res: Response): Promise<void> {
    const _id: string = req.params._id;
    var userModel = new UserModel(); 
    try {
      let data = await userModel.getOne(_id);
      res.status(200).json({ data });
    } catch (error) {
      res.status(500).json({ error });
    }
  }

  public async create(req: Request, res: Response): Promise<void> {
    var userModel = new UserModel();
    const firstName: string = req.body.firstName;
    const user = new User({
      firstName,
    });
    try{
      let data = await userModel.post(user);
      res.status(200).json({ data });
    } catch (error) {
      res.status(500).json({ error });
    }
  }

  public async update(req: Request, res: Response): Promise<void> {
    const _id: string = req.params._id;
    var userModel = new UserModel();
    try{
      let data = await userModel.update( _id , req.body);
      res.status(200).json("user updated successfuly");
    }catch(error) {
        res.status(500).json({ error });
    }
  }

  public async delete(req: Request, res: Response): Promise<void> {
    const _id: string = req.params._id;
    var userModel = new UserModel();
    try{
      let data = await userModel.delete( _id );
      res.status(200).json("user deleted successfuly");
    }catch(error) {
        res.status(500).json({ error });
    }
  }
}

const userRoutes = new UserRouter();
userRoutes.routes();
export default userRoutes.router;