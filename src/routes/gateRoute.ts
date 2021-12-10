import {Router} from 'express';
import * as gateController from '../controllers/exchanges/gate-controller';
export const gateRouter = Router();

gateRouter.get('/getAll',gateController.getAll);
