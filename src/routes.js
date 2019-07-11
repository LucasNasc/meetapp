// arquivo onde se encontrarão as rotas
import { Router } from 'express';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();

//  createUser
routes.post('/users', UserController.store);

// createSession
routes.post('/sessions', SessionController.store);

//  authenticationMiddeware
routes.use(authMiddleware);

// updateUser
routes.put('/users', UserController.update);

export default routes;
