"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = require("./routes/routes");
const PORT = process.env.PORT || 4200;
const app = (0, express_1.default)();
const fs = require("fs");
let swaggerFile = (process.cwd() + "/src/swagger.json");
let swaggerData = fs.readFileSync(swaggerFile, 'utf8');
let swaggerDocument = JSON.parse(swaggerData);
app.use((0, cors_1.default)({
    credentials: true,
    origin: true
}));
app.options('*', (0, cors_1.default)());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(body_parser_1.default.json());
// Redirect
app.get('/', (req, res) => res.redirect('/swagger'));
app.use('/swagger', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swaggerDocument));
app.use(routes_1.router);
app.listen(PORT, () => console.log("server running on :" + PORT));
//# sourceMappingURL=app.js.map