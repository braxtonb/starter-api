import express from 'express';
import ExampleRouter from './routes/Example/example.router';

const router = (app: express.Application) => {
  app.use('/api/example', ExampleRouter);
  app.get('/', (req: express.Request, res: express.Response) => {
    return res.status(200).send('Hello world!');
  })
};

export default router;