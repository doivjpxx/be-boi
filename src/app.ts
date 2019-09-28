import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as mongoose from 'mongoose';
import * as bluebird from 'bluebird';
import * as cors from 'cors';
import * as logger from 'morgan';
import * as path from 'path';
import { MongoError } from 'mongodb';
import { DB } from './configs/def';
import { RootRouter } from './routes/index';

class App {
  public app: express.Application;
  public root: RootRouter = new RootRouter();
  public mongoUrl = `mongodb://${DB.URI}/${DB.NAME}`; 

  constructor() {
    this.app = express();
    this._config();
  }

  private _config(): void {

    // connect DB
    this._mongoSetup();

    // handle cors
    this.app.use(cors());
    this.app.options('*', cors());

    // morgan middleware
    this.app.use(logger('dev'));

    // parse body
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));

    // assets folder
    this.app.use(express.static(path.join(__dirname, '../public')));

    // root routes api
    this.app.use('/api/v1', this.root.router);

    // Hi all!
    this.app.get('/', (req, res) => {
      res.end('Hi all!');
    });
  }

  private _mongoSetup(): void {
    (mongoose as mongoose.Mongoose).Promise = bluebird;
    mongoose.connect(this.mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true })
            .then(() => console.log('Connected DB: ' + this.mongoUrl))
            .catch((e: MongoError) => console.log(`Error DB: ${e}`));
  }
}

export default new App().app;
