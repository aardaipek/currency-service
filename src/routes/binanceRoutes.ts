import {Router} from 'express';
import * as binanceController from '../controllers/exchanges/binance-controller';
export const binanceRouter =  Router();

binanceRouter.get('/getAll',binanceController.getAll);