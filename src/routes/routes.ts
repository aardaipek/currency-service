import express from 'express';
import appController from '../controllers/app-controller';
import exchangeController from '../controllers/exchange-controller';
import userController from '../controllers/user-controller';

const router = express.Router();
// App Controllers
router.get('/healthcheck', appController.healthCheck);
// Exchange Controllers
router.get('/binance/getAll',exchangeController.binance);
router.get('/gate/getAll',exchangeController.gate);
// User COntrollers
router.get('/login',userController.login);
router.post('/register',userController.register);

export = router;