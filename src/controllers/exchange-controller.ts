import { Request, Response, NextFunction } from 'express';
import config from '../config';
import exchangeService from '../services/exchange-service';

const binance = (req: Request, res: Response, next: NextFunction) => {
    return res.status(200).json({
        message: config.binance.api
    })
};

const gate = (req: Request, res: Response, next: NextFunction) => {
   const result = exchangeService.getExchangeData("gate");
   console.log(result)
};

export default { binance,gate };