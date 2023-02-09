import express from 'express';
import * as dotenv from 'dotenv';
import { Server } from 'socket.io';
import { Request, Response } from 'express';
import helmet from 'helmet';
import cors from 'cors';
import authRouter from './router/authRouter';
import session from 'express-session';

// Config
dotenv.config();
const app = express();
const server = require('http').createServer(app);
const io = new Server(server, {
  cors: {
    origin: process.env.URL,
    credentials: true,
  },
});
const cookieSecret: string = process.env.COOKIE_SECRET || 'secret';
const sameSightConstant =
  process.env.ENVIROMENT === 'production' ? 'none' : 'lax';
// Middleware
app.use(helmet());
app.use(express.json());
app.use(
  cors({
    credentials: true,
    origin: process.env.URL,
  }),
);
app.use(
  session({
    saveUninitialized: false,
    resave: false,
    name: 'sid',
    secret: cookieSecret,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 7,
      secure: process.env.ENVIROMENT === 'production',
      httpOnly: true,
      sameSite: sameSightConstant,
    },
  }),
);
app.get('/', (_req: Request, res: Response): void => {
  res.send('hi');
});

// Routes
app.use('/auth', authRouter);

// Socket.io
io.on('connect', (socket) => {});
server.listen(4001, (): void => {
  console.log('Server listening on port 4001');
});
