import express from 'express';
import helmet from 'helmet';
let http = require('http');

let app = express()
let httpServer = http.Server(app);

let socketIO = require('socket.io')

let io = socketIO(httpServer);

const port = process.env.PORT || 3334;

export const socketServer = io.on('connection', (socket: any) => {
    socket.on('join', (data: any) => {
        socket.join(data.room);
        socket.broadcast.to(data.room).emit('user joined');
    });
    socket.on('message', (data: any) => {
        io.in(data.room).emit('new message', { user: data.user, message: data.message });
    })

    httpServer.listen(port, () => {
        console.log(`started on port ${port}`)
    })
})