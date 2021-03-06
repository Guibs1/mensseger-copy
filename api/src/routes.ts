import express from 'express';

import LoginController from './controllers/LoginController';
import UserController from './controllers/UserController';
import ConversationController from './controllers/ConversationController';
import MessageController from './controllers/MessageController';

const loginController = new LoginController();
const userController = new UserController();
const conversationController = new ConversationController();
const messageController = new MessageController();

const routes = express.Router();

routes.post('/login', loginController.login);
routes.get('/users', userController.index);
routes.get('/users/:id', userController.show);
routes.post('/users', userController.store);
routes.put('/users/:id', userController.update);
routes.delete('/users/:id', userController.delete);
routes.get('/conversations', conversationController.index);
routes.get('/messages', messageController.index);
routes.post('/messages', messageController.store);

export default routes;