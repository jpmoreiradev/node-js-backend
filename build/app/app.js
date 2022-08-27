"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const logger_js_1 = __importDefault(require("../config/logger.js"));
const app = (0, express_1.default)();
console.log('hjjp');
app.get('/', (req, res) => {
    res.send('Hello World');
});
app.listen(3000, () => {
    logger_js_1.default.info('server is running');
});
