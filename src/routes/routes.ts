import {Router} from 'express';
import appController from '../controllers/app-controller';
import { binanceRouter } from './binanceRoutes';
import { currencyRouter } from './currencyRoutes';
import { gateRouter } from './gateRoute';
import { userRouter } from './userRoutes';

export const router = Router();
router.get('/healthcheck', appController.healthCheck);
// Exchanges
router.use('/api/binance',binanceRouter);
router.use('/api/gate',gateRouter);
// User
router.use('/api/user',userRouter);
// Currency
router.use('/api/currency',currencyRouter);

