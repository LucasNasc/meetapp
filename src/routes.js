//arquivo onde se encontrarão as rotas
import { Router } from 'express';

const routes = new Router();

routes.get('/', (req, res) => {
  return res.json({ message: 'olá' });
})

export default routes;
