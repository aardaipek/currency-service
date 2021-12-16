import {Router} from 'express';
import {CurrencyController} from '../controllers/currency-controller';
export const currencyRouter = Router();

const controller = new CurrencyController();
currencyRouter.post('/save',controller.saveCurrency);
currencyRouter.post('/get',controller.getCustomerCurrencies);
