import {CurrencyService} from '../services/currency-service';

export class CurrencyController{
    async saveCurrency(req,res){
        try{
            const currencyService = new CurrencyService();
            const result = await currencyService.saveCurrency();
            res.status(200).send(result);
        }catch(err){
            res.status(400).send(err);
        }
        
    };
}