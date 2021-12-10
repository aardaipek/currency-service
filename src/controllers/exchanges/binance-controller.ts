import { Request, Response, NextFunction } from 'express';
import config from '../../config';
import * as binanceService from '../../services/binance-service';

export const getAll = async (req: Request, res: Response, next: NextFunction) => {
    try{
        const result = await binanceService.getAll();
        res.status(200).send(result);
    }catch(err){
        res.status(400).send(err);
    }
    
};