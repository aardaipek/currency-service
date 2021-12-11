import {Router} from 'express';
import {CurrencyController} from '../controllers/currency-controller';
export const currencyRouter = Router();

const controller = new CurrencyController();
currencyRouter.get('/save',controller.saveCurrency);
