import express from 'express';
import { json } from 'body-parser';
import cors from 'cors';
// import { join } from 'path';
import router from './router';

const app = express();

// request setup
app.options('*', cors());
app.use(cors());

// response middleware
app.use(json({ type: '*/*' }));

// static file and router setup
// app.use(express.static(join(__dirname, 'static')));
router(app);

export default app;