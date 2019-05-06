import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import routes from './routes';
import * as errorHandler from './utils/errorHandler';
import DatabaseConnection from "./Persistence/DatabaseConnection";

class App {
  public app: express.Application;

  constructor() {
    this.app = express();
    this.setDatabaseConnection();
    this.setMiddlewares();
    this.setRoutes();
    this.catchErrors();
  }

  private setMiddlewares(): void {
    this.app.use(cors());
    this.app.use(morgan('dev'));
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
    this.app.use(helmet());
  }

  private setRoutes(): void {
    this.app.use('/api/v1', routes);
  }

  private catchErrors(): void {
    this.app.use(errorHandler.mapApplicationToHTTPErrors);
    this.app.use(errorHandler.execute);
  }

  private async setDatabaseConnection() {
    const dbConnection = new DatabaseConnection();
    await dbConnection.getConnection();
  }
}

export default new App().app;
