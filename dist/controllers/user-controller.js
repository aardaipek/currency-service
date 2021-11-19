"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const login = (req, res, next) => {
    return res.status(200).json({
        message: "asdas"
    });
};
const register = (req, res, next) => {
    return res.status(200).json({
        message: 'welcome register api'
    });
};
exports.default = { login, register };
//# sourceMappingURL=user-controller.js.map