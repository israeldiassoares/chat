"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.socketServer = void 0;
const express_1 = __importDefault(require("express"));
let http = require('http');
let app = (0, express_1.default)();
let httpServer = http.Server(app);
let socketIO = require('socket.io');
let io = socketIO(httpServer);
const port = process.env.PORT || 3334;
exports.socketServer = io.on('connection', (socket) => {
    socket.on('join', (data) => {
        socket.join(data.room);
        socket.broadcast.to(data.room).emit('user joined');
    });
    socket.on('message', (data) => {
        io.in(data.room).emit('new message', { user: data.user, message: data.message });
    });
    httpServer.listen(port, () => {
        console.log(`started on port ${port}`);
    });
});
