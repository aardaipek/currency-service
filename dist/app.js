"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const routes_1 = __importDefault(require("./routes/routes"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const cors_1 = __importDefault(require("cors"));
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
app.get('/', (req, res) => res.send('Working!!!'));
app.use('/swagger', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swaggerDocument));
app.use('/api', routes_1.default);
app.listen(PORT, () => console.log("server running on :" + PORT));
//# sourceMappingURL=app.js.map