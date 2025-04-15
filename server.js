import express from 'express';
import dotenv from 'dotenv';
import helmet from 'helmet';
import morgan from 'morgan';
import cors from 'cors';
import { dbConnect } from './dbConnect/dbConnect.js';

dotenv.config();
const app = express();

app.use(helmet());
app.use(morgan('common'));
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log('Server Running in', PORT);
  dbConnect();
});