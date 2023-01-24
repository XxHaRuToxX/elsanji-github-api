import express, { Request, Response } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import dotenv from 'dotenv';
import { RouterGithub } from './routes/router';
import { setHeaders } from './middlewares/middlewares';

dotenv.config();

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.use(setHeaders);

app.use('/api', RouterGithub);
app.use('/', (req:Request, res:Response) => {
    res.send("<h1>Hello to my Api Github</h1>")
});

export default app;