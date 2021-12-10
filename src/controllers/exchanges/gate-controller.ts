import { Request, Response, NextFunction } from 'express';
import config from '../../config';
import * as gateService from '../../services/gate-service';

export const getAll = async (req: Request, res: Response, next: NextFunction) => {
    try{
        const result = await gateService.getAll();
        res.status(200).send(result);
    }catch(err){
        res.status(400).send(err);
    }

};