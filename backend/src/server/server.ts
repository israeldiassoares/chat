import express from 'express';
import helmet from 'helmet';
import http from 'http';
import { getAttendant } from '../controller/attendant'
import { getTopic } from "../controller/topic";
const app: express.Application = express();
const httpServer = http

const port = 3333;
const bodyParser = require('body-parser');

app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

//TODO TYPE Args and method
app.use((req: any, res: any, next: any) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080')
    res.setHeader('Access-Control-Allow-Methods', "GET, POST, OPTIONS, PUT, PATCH, DELETE")
    res.setHeader('Access-Control-Allow-Headers', "X-Request-With, Content-Type, Accept")
    next();
})


export const server = httpServer.createServer(app)

server.listen(port, () => {
    console.log(`Node Endpoints workings :) ${port}`)
})

// Send to methods file
app.all('/', (req: any, res: any) => {
    if (req.method === "GET") {
        res.status(200);
        res.json({ working: "GET working" });
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
        res.end()
        return;
    }
})

app.get('/attendant', (req: any, res: any) => {
    try {
        res.end(getAttendant(res))
    } catch (error) {
        console.error("error", error)
        throw error
    }
})

app.get('/topic', (req: any, res: any) => {
    try {
        res.end(getTopic(res))
    } catch (error) {
        console.error("error", error)
        throw error
    }
})