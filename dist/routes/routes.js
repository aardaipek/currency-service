"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const app_controller_1 = __importDefault(require("../controllers/app-controller"));
const exchange_controller_1 = __importDefault(require("../controllers/exchange-controller"));
const user_controller_1 = __importDefault(require("../controllers/user-controller"));
const router = express_1.default.Router();
// App Controllers
router.get('/healthcheck', app_controller_1.default.healthCheck);
// Exchange Controllers
router.get('/binance', exchange_controller_1.default.binance);
router.get('/gate', exchange_controller_1.default.gate);
// User COntrollers
router.get('/login', user_controller_1.default.login);
router.post('register', user_controller_1.default.register);
module.exports = router;
//# sourceMappingURL=routes.js.map