"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gateRouter = void 0;
const express_1 = require("express");
const gate_controller_1 = require("../controllers/exchanges/gate-controller");
exports.gateRouter = (0, express_1.Router)();
const controller = new gate_controller_1.GateController();
exports.gateRouter.get('/getAll', controller.getAll);
//# sourceMappingURL=gateRoute.js.map