"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const currency_controller_1 = __importDefault(require("../controllers/currency-controller"));
const router = express_1.default.Router();
router.get('/healthcheck', currency_controller_1.default.healthCheck);
module.exports = router;
//# sourceMappingURL=currency-route.js.map