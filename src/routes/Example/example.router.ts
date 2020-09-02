import { Router } from 'express';
import { handleExample } from './example.controller';

const ExampleRouter = Router();

// layer path /api/example
ExampleRouter.get('/:errorId?', handleExample);

export default ExampleRouter;
