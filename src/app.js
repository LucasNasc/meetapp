// configuracao do servidor express
import express from 'express';
import routes from './routes';
import './database';

class App {
  constructor() {
    this.server = express();

    this.middewares();
    this.routes();
  }

  middewares() {
    // permite com que nosso servidor entenda requisições em json
    this.server.use(express.json());
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;
