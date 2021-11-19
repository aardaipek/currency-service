"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const healthCheck = (req, res, next) => {
    return res.status(200).json({
        message: 'Running'
    });
};
exports.default = { healthCheck };
//# sourceMappingURL=app-controller.js.map