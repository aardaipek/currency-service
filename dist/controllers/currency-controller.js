"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurrencyController = void 0;
const currency_service_1 = require("../services/currency-service");
const errorCodes_1 = require("../objects/errorCodes");
const result_1 = require("../objects/result");
class CurrencyController {
    saveCurrency(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!req.body || !req.body.amount || !req.body.price || !req.body.pair || !req.body.exchangeType || !req.body.userUid) {
                return errorCodes_1.ErrorCodes.MISSING_PARAMATERS;
            }
            const currencyService = new currency_service_1.CurrencyService();
            const result = yield currencyService.saveCurrency(req.body);
            res.status(200).json(new result_1.SuccessResult(result));
        });
    }
    ;
    getCustomerCurrencies(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!req.body || !req.body.exchangeType || !req.body.userUid) {
                return errorCodes_1.ErrorCodes.MISSING_PARAMATERS;
            }
            const currencyService = new currency_service_1.CurrencyService();
            const result = yield currencyService.getUserCurrencies(req.body.userUid, req.body.exchangeType);
            res.status(200).json(new result_1.SuccessResult(result));
        });
    }
    ;
}
exports.CurrencyController = CurrencyController;
//# sourceMappingURL=currency-controller.js.map