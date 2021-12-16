import {CurrencyService} from '../services/currency-service';
import { ErrorCodes } from '../objects/errorCodes';
import { SuccessResult,ErrorResult } from '../objects/result';

export class CurrencyController{
    async saveCurrency(req,res){
        if(!req.body || !req.body.amount || !req.body.price || !req.body.pair || !req.body.exchangeType || !req.body.user){
            return ErrorCodes.MISSING_PARAMATERS;
        }
        const currencyService = new CurrencyService();
        const result = await currencyService.saveCurrency(req.body);
        res.status(200).json(new SuccessResult(result));
    };

    async getCustomerCurrencies(req,res){
        if(!req.body || !req.body.exchangeType || !req.body.user){
            return ErrorCodes.MISSING_PARAMATERS;
        }
        const currencyService = new CurrencyService();
        const result = await currencyService.getUserCurrencies(req.body.user,req.body.exchangeType);
       res.status(200).json(new SuccessResult(result));
    };
}