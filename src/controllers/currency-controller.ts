import {CurrencyService} from '../services/currency-service';
import { ErrorCodes } from '../objects/errorCodes';
import { SuccessResult,ErrorResult } from '../objects/result';

export class CurrencyController{
    async saveCurrency(req,res){
        try{
            if(!req.body || !req.body.amount || !req.body.price || !req.body.pair || !req.body.exchangeType || !req.body.user){
                res.status(404).send(ErrorCodes.MISSING_PARAMATERS);
            }
            const currencyService = new CurrencyService();
            const result = await currencyService.saveCurrency(req.body);
            return res.status(200).json(new SuccessResult(result))
        }catch(err){
            res.status(400).send(err);
        }
        
    };
}