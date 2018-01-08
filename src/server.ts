import UserRouter from './router/UserRouter';
import * as bodyParser from 'body-parser';
import * as compression from 'compression';
import * as express from 'express';
import * as helmet from 'helmet';
import * as mongoose from 'mongoose';
import * as logger from 'morgan';
import * as path from 'path';

class Server {

  public app: express.Application;

  constructor() {
    this.app = express();
    this.config();
    this.routes();
  }
  
  public config(): void {

    const MONGO_URI: string = 'mongodb://ahmed:magdy@bear-shard-00-00-i5ioy.mongodb.net:27017,bear-shard-00-01-i5ioy.mongodb.net:27017,bear-shard-00-02-i5ioy.mongodb.net:27017/test?ssl=true&replicaSet=bear-shard-0&authSource=admin'; 
    mongoose.connect(MONGO_URI);

    this.app.use(bodyParser.urlencoded({ extended: true }));
    this.app.use(bodyParser.json());
    this.app.use(logger('dev'));
    this.app.use(compression());
    this.app.use(helmet());

    
  }

  public routes(): void {
    const router: express.Router = express.Router();

    this.app.use('/users', UserRouter);
  }
}
export default new Server().app;