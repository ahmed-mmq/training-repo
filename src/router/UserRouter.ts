import { Request, Response, Router } from 'express';
import User from '../models/User';

class UserRouter {

  public router: Router;

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

   public getAll(req: Request, res: Response): void {
    User.find()
    .then((data) => {
      res.status(200).json({ data });
    })
    .catch((error) => {
      res.status(500).json({ error });
    });
  
  }

  public getOne(req: Request, res: Response): void {
    const username: string = req.params.username;

    User.findOne({ username })
    .then((data) => {
      res.status(200).json({ data });
    })
    .catch((error) => {
      res.status(500).json({ error });
    });
  }

  public create(req: Request, res: Response): void {
    const firstName: string = req.body.firstName;
   
    const user = new User({
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
  
  public update(req: Request, res: Response): void {
    const username: string = req.params.username;

    User.findOneAndUpdate({ username }, req.body)
    .then((data) => {
      res.status(200).json({ data });
    })
    .catch((error) => {
      res.status(500).json({ error });
    });
  }

  public delete(req: Request, res: Response): void {
    const username: string = req.params.username;

    User.findOneAndRemove({ username })
    .then(() => {
      res.status(204).end();
    })
    .catch((error) => {
      res.status(500).json({ error });
    });
  }
  // set up our routes
  public routes() {
    this.router.get('/', this.getAll);
    this.router.get('/:username', this.getOne);
    this.router.post('/', this.create);
    this.router.put('/:username', this.update);
    this.router.delete('/:username', this.delete);
  }

}

const userRoutes = new UserRouter();
userRoutes.routes();

export default userRoutes.router;