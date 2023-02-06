import express from 'express';
import * as dotenv from 'dotenv';
import { Server } from 'socket.io';
import { Request, Response } from 'express';
import helmet from 'helmet';
import cors from 'cors';
import authRouter from './router/authRouter';

dotenv.config();
const app = express();
const server = require('http').createServer(app);
const io = new Server(server, {
  cors: {
    origin: process.env.URL,
    credentials: true,
  },
});

app.use(helmet());
app.use(express.json());
app.use(cors());
app.get('/', (_req: Request, res: Response): void => {
  res.send('hi');
});
app.use('/auth', authRouter);

io.on('connect', (socket) => {});
server.listen(4001, (): void => {
  console.log('Server listening on port 4001');
});
