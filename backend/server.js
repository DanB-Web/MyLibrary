import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import session from 'express-session';
import { default as connectMongoDBSession } from 'connect-mongodb-session';

import morgan from 'morgan';
import colors from 'colors';

import userRoutes from './routes/userRoutes.js';
import bookRoutes from './routes/bookRoutes.js';
import authorRoutes from './routes/authorRoutes.js';

import { notFound, errorHandler } from './middleware/error.js';

import connectDB from './config/database.js'

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

const isProduction = process.env.NODE_ENV === 'production';

//INITIALISE SESSION STORE
const MongoDBStore = connectMongoDBSession(session);
const store = new MongoDBStore({
  uri: process.env.MONGO_URI,
  collection: 'sessions'
});

const corsOptions = {
  origin: 'http://localhost:3000',
  methods: ['POST', 'PUT', 'GET', 'OPTIONS', 'HEAD'],
  credentials: true
};

//STANDARD EXPRESS CONFIG MIDDLEWARE
app.use(
  cors(corsOptions), 
  express.json()
);

//SESSION CONFIG
app.use(session(
  {secret: 'mySecret', 
   resave: false, 
   //maxAge: 7200000, //2 HOURS
   saveUninitialized: false,
   store: store,
   cookie: {httpOnly: false}
  }))

//MORGAN REQ LOGGER
isProduction ? 
  app.use(morgan('common')):
  app.use(morgan('dev'));

//ROUTES
app.use('/user', userRoutes);
app.use('/book', bookRoutes);
app.use('/author', authorRoutes);

//404 + ERROR HANDLING
app.use(notFound);
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