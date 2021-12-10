"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const app_controller_1 = __importDefault(require("../controllers/app-controller"));
const binanceRoutes_1 = require("./binanceRoutes");
const gateRoute_1 = require("./gateRoute");
const userRoutes_1 = require("./userRoutes");
exports.router = (0, express_1.Router)();
exports.router.get('/healthcheck', app_controller_1.default.healthCheck);
// Exchanges
exports.router.use('/api/binance', binanceRoutes_1.binanceRouter);
exports.router.use('/api/gate', gateRoute_1.gateRouter);
// User
exports.router.use('/api/user', userRoutes_1.userRouter);
//# sourceMappingURL=routes.js.map