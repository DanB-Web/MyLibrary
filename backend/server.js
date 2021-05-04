import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import morgan from 'morgan';
import colors from 'colors';

import userRoutes from './routes/userRoutes.js';
import bookRoutes from './routes/bookRoutes.js';
import authorRoutes from './routes/authorRoutes.js';

import { notFound, errorHandler } from './middleware/error.js';

import { connectDB } from './config/database.js'

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

const isProduction = process.env.NODE_ENV === 'production';

//STANDARD EXPRESS CONFIG MIDDLEWARE
app.use(cors(), express.json());

//MORGAN REQ LOGGER
isProduction ? 
  app.use(morgan('common')):
  app.use(morgan('dev'));

//ROUTES
app.use('/user', userRoutes);
app.use('/book', bookRoutes);
app.use('/author', authorRoutes);

//404
app.use(notFound);

//ERROR HANDLING
app.use(errorHandler);

//IIFE TO AWAIT DB CONNECTION
(async function () {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`Listening in ${process.env.NODE_ENV} mode on port ${PORT}`.green.bold)
    })
  } catch (err) {
    console.log(`Failure to start server: ${err}`.red.bold);
  }
})();