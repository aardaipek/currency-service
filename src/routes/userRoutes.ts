import {Router} from 'express';
import { UserController } from '../controllers/user-controller';
export const userRouter = Router();

const controller = new UserController();
userRouter.post('/login',controller.login);
userRouter.post('/signup',controller.signup);