"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const dotenv_1 = __importDefault(require("dotenv"));
const router_1 = require("./routes/router");
const middlewares_1 = require("./middlewares/middlewares");
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use((0, morgan_1.default)('dev'));
app.use(express_1.default.json());
app.use(middlewares_1.setHeaders);
app.use('/api', router_1.RouterGithub);
app.use('/', (req, res) => {
    res.send("<h1>Hello to my Api Github</h1>");
});
exports.default = app;
