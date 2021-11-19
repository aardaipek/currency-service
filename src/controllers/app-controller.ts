import { Request, Response, NextFunction } from 'express';

const healthCheck = (req: Request, res: Response, next: NextFunction) => {
    return res.status(200).json({
        message: 'Running'
    })
};

export default { healthCheck };