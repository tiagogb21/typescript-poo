import express from 'express';

import userRouter from './routes/user.route';

const app = express();

const PORT = 3000;

app.use(express.json());

app.use(userRouter)

app.use(express.json());

app.listen(PORT, () => {
  console.log(`Listening on ${ PORT }`);
})
