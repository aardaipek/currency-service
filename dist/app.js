"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const routes_1 = __importDefault(require("./routes/routes"));
const PORT = process.env.PORT || 4200;
let cors = require('cors');
const app = (0, express_1.default)();
app.use(cors({
    credentials: true,
    origin: true
}));
app.options('*', cors());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(body_parser_1.default.json());
app.get('/', (req, res) => res.send('Working!!!'));
app.use('/api', routes_1.default);
app.listen(PORT, () => console.log("server running on :" + PORT));
//# sourceMappingURL=app.js.map