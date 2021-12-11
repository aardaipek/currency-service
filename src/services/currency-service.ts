import {Currency} from '../models/currency';

export class CurrencyService{
    async saveCurrency(){
        const currencyModel = new Currency(455,1,"ETH_USDT");
        return currencyModel;
    }
}

