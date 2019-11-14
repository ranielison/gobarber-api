import { Router } from 'express';
import User from './app/models/User';

const routes = new Router();

routes.get('/', async (req, res) => {
  const user = await User.create({
    name: 'Ranielison',
    email: 'ranielisonsoares2@gmail.com',
    password_hash: 'aksjdkasdjkasd',
  });

  return res.json(user);
});

export default routes;
