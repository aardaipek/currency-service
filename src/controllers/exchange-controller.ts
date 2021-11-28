import { Request, Response, NextFunction } from 'express';
import config from '../config';
import exchangeService from '../services/exchange-service';

const binance = async (req: Request, res: Response, next: NextFunction) => {
    try{
        const result = await exchangeService.getExchangeBinanceData();
        res.status(200).send(result);
    }catch(err){
        res.status(400).send(err);
    }
    
};

const gate = async (req: Request, res: Response, next: NextFunction) => {
    try{
        const result = await exchangeService.getExchangeGateData();
        res.status(200).send(result);
    }catch(err){
        res.status(400).send(err);
    }

};

export default { binance,gate };