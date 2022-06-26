import express from 'express';

import userRouter from './routes/user.route';
import Error from './routes/error';

const error = new Error();

const app = express();

const PORT = 3000;

app.use(express.json());

app.use(userRouter);

app.use(error.message);

app.listen(PORT, () => {
  console.log(`Listening on ${ PORT }`);
})
