"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.currencyRouter = void 0;
const express_1 = require("express");
const currency_controller_1 = require("../controllers/currency-controller");
exports.currencyRouter = (0, express_1.Router)();
const controller = new currency_controller_1.CurrencyController();
exports.currencyRouter.get('/save', controller.saveCurrency);
//# sourceMappingURL=currencyRoutes.js.map