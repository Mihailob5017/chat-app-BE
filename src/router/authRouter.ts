import express, { Router } from 'express';
import { validateForm } from '../controllers/validateForm';

const authRouter: Router = express.Router();
authRouter.post('/signup', validateForm);
authRouter.post('/login', validateForm);

export default authRouter;
