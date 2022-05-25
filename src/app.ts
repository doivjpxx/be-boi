import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as mongoose from 'mongoose';
import * as bluebird from 'bluebird';
import * as cors from 'cors';
import * as logger from 'morgan';
import * as path from 'path';
import * as fs from 'fs';
import { MongoError } from 'mongodb';
import { DB } from './configs/def';
import { RootRouter } from './routes/index';
import helmet from 'helmet';
import errorMiddleware from './middlewares/error.middleware';

class App {
  public app: express.Application;
  public root: RootRouter = new RootRouter();
  public mongoUrl = `mongodb://${process.env.DB_URI}/${process.env.DB_NAME}`;
  public helmet = helmet();

  constructor() {
    this.app = express();
    this._config();
  }

  private _setupLogger() {
    const accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), {
      flags: 'a',
    });
    // morgan middleware
    this.app.use(logger('combined', { stream: accessLogStream }));
  }

  private _setupErrorHandling() {
    this.app.use(errorMiddleware);
  }

  private _config(): void {
    // connect DB
    this._mongoSetup();

    // handle helmet
    this.app.use(this.helmet);

    // handle cors
    this.app.use(cors());
    this.app.options('*', cors());

    // setup logger
    this._setupLogger();

    // parse body
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));

    // assets folder
    this.app.use(express.static(path.join(__dirname, '../public')));

    // root routes api
    this.app.use('/api', this.root.router);

    // Hi all!
    this.app.get('/health', (req, res) => {
      res.end('Healthy');
    });

    // setup error handling
    this._setupErrorHandling();
  }

  private _mongoSetup(): void {
    (mongoose as mongoose.Mongoose).Promise = bluebird;
    mongoose
      .connect(this.mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true })
      .then(() => console.log('Connected DB: ' + this.mongoUrl))
      .catch((e: MongoError) => console.log(`Error DB: ${e}`));
  }
}

export default new App().app;
