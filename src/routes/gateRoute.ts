import {Router} from 'express';
import {GateController} from '../controllers/exchanges/gate-controller';
export const gateRouter = Router();

const controller = new GateController();
gateRouter.get('/getAll',controller.getAll);
