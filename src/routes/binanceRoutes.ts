import {Router} from 'express';
import {BinanceController} from '../controllers/exchanges/binance-controller';
export const binanceRouter =  Router();

const controller = new BinanceController()
binanceRouter.get('/getAll',controller.getAll);