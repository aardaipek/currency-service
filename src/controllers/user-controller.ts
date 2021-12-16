import { Request, Response, NextFunction } from 'express';
import config from '../config/config';

const login = (req: Request, res: Response, next: NextFunction) => {
    return res.status(200).json({
        message: "asdas"
    })
};

const register = (req: Request, res: Response, next: NextFunction) => {
    return res.status(200).json({
        message: 'welcome register api'
    })
};

export default { login,register };