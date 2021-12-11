"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.binanceRouter = void 0;
const express_1 = require("express");
const binance_controller_1 = require("../controllers/exchanges/binance-controller");
exports.binanceRouter = (0, express_1.Router)();
const controller = new binance_controller_1.BinanceController();
exports.binanceRouter.get('/getAll', controller.getAll);
//# sourceMappingURL=binanceRoutes.js.map