import express, { Router } from 'express';
import { validateForm } from '../controllers/validateForm';
import { prisma } from '../helpers/helpers';
import bcrypt from 'bcryptjs';
const authRouter: Router = express.Router();
authRouter.post('/signup', async (req, res): Promise<void> => {
  console.log('triggered');
  const data = await validateForm(req);
  if (data.user) {
    const userFound = await prisma.users.findUnique({
      where: { username: data.user.username },
    });
    if (!userFound) {
      const hashedPassword = await bcrypt.hash(data.user.password, 10);
      const newUser = await prisma.users.create({
        data: { username: data.user.username, passHash: hashedPassword },
      });
      data.user.password = hashedPassword;
      res.send(data);
      return;
    } else {
      data.success = false;
      data.error = {
        message: 'Username already exists',
        displayMessage: 'Username already exists',
      };
      res.send(data);
      return;
    }
  }
  res.send(data);
  return;
});
authRouter.post('/login', validateForm);

export default authRouter;
