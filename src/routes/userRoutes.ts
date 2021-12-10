import {Router} from 'express';
import userController from '../controllers/user-controller';
export const userRouter = Router();

userRouter.get('/login',userController.login);
userRouter.post('/register',userController.register);