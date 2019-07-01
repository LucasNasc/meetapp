//configuracao do servidor express
const express = require('express');
const routes = require('./routes');

class App { 
  constructor() {
    this.server = express();

    this.middewares();
    this.routes();
  }

  middewares() {
    //permite com que nosso servidor entenda requisições em json
    this.server.use(express.json())
  }

  routes() {
    this.server.use(routes);
  }
}

module.exports = new App(this.server);
