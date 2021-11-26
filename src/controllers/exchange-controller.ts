import { Request, Response, NextFunction } from 'express';
import config from '../config';
import exchangeService from '../services/exchange-service';

const binance = async (req: Request, res: Response, next: NextFunction) => {
    const result = await exchangeService.getExchangeBinanceData();
    res.status(200).send(result);
};

const gate = async (req: Request, res: Response, next: NextFunction) => {
   const result = await exchangeService.getExchangeGateData();
   res.status(200).send(result);
};

export default { binance,gate };