"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.server = void 0;
const express_1 = __importDefault(require("express"));
const helmet_1 = __importDefault(require("helmet"));
const http_1 = __importDefault(require("http"));
const attendant_1 = require("../controller/attendant");
const app = (0, express_1.default)();
const httpServer = http_1.default;
const port = 3333;
const bodyParser = require('body-parser');
const headers = {
    'Access-Control-Allow-Origin': 'http://localhost:8080',
    'Access-Control-Allow-Methods': "GET, POST, OPTIONS, PUT, PATCH, DELETE",
    'Access-Control-Allow-Headers': "X-Request-With, Content-Type, Accept"
};
app.use((0, helmet_1.default)());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//TODO TYPE Args and method
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
    res.setHeader('Access-Control-Allow-Methods', "GET, POST, OPTIONS, PUT, PATCH, DELETE");
    res.setHeader('Access-Control-Allow-Headers', "X-Request-With, Content-Type, Accept");
    next();
});
// app.options('*', (req: any, res: any) => {
//     res.send(200);
// })
exports.server = httpServer.createServer(app);
exports.server.listen(port, () => {
    console.log(`Node Endpoints workings :) ${port}`);
});
// Send to methods file
app.all('/', (req, res) => {
    if (req.method === "GET") {
        res.status(200);
        res.json({ working: "GET FUNCIONANDO" });
        res.end();
    }
    if (req.method === "POST") {
        res.status(201);
        res.send('POST working');
        res.end();
    }
    if (req.method === "PUT") {
        res.status(200);
        res.send('PUT working');
        res.end();
    }
    if (req.method === "OPTIONS") {
        res.status(204);
        //fechando o recurso após a resposta
        res.end();
        return;
    }
});
app.get('/attendant', (req, res) => {
    (0, attendant_1.getAttendant)(res);
});
