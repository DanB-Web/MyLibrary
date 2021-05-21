import mongoose from 'mongoose';
import colors from 'colors';

import users from './seedData/users.js';
import books from './seedData/books.js';
import authors from './seedData/authors.js';

import User from '../models/userModel.js';
import Book from '../models/bookModel.js';
import Author from '../models/authorModel.js';

//DB CONNECTION
const connectDB = async () => {

  try {
    const conn = await mongoose.connect('mongodb://localhost:27017/myLibrary', {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true
    })
    console.log(`Database Connected: ${conn.connection.host}`.cyan.underline);
  } catch (err) {
    console.error(`Database Connection Error: ${err.message}`.red.underline.bold);
    process.exit(1);
  }
}

connectDB();

//IMPORT SEED DATA FUNCTION 
const importData = async () => {

  try {

    //CLEAR DB
    await User.deleteMany();
    await Book.deleteMany();
    await Author.deleteMany();

    //ADD ALL USERS - HAD TO USE 'create' METHOD TO TRIGGER MONGOOSE 'pre' MW
    await User.create(users[0]);
    await User.create(users[1]);
    await User.create(users[2]);
    

    //ADD ALL AUTHORS
    const createdAuthors = await Author.insertMany(authors);

    //ADD AUTHOR ID TO BOOK OBJECTS (RELATIONSHIPS)
    books[0].author = createdAuthors[0]._id;
    books[1].author = createdAuthors[0]._id;
    books[2].author = createdAuthors[0]._id;
    books[3].author = createdAuthors[1]._id;
    books[4].author = createdAuthors[1]._id;
    books[5].author = createdAuthors[2]._id;;
    books[6].author = createdAuthors[2]._id;
    books[7].author = createdAuthors[2]._id;

    //ADD ALL BOOKS
    const createdBooks = await Book.insertMany(books);

    //ADD BOOKS TO AUTHOR ARRAYS
    createdAuthors[0].books.push(createdBooks[0]._id);
    createdAuthors[0].books.push(createdBooks[1]._id);
    createdAuthors[0].books.push(createdBooks[2]._id);
    await createdAuthors[0].save();

    createdAuthors[1].books.push(createdBooks[3]._id);
    createdAuthors[1].books.push(createdBooks[4]._id);
    await createdAuthors[1].save();

    createdAuthors[2].books.push(createdBooks[5]._id);
    createdAuthors[2].books.push(createdBooks[6]._id);
    createdAuthors[2].books.push(createdBooks[7]._id);
    await createdAuthors[2].save();

    //SUCCESSFUL SEED
    console.log('Data imported'.green.inverse);
    process.exit();

  } catch (err) {
    console.error(`${err}`.red.inverse);
    process.exit(1);
  }
}

// DELETE SEED DATA FUNCTION
const destroyData = async () => {

  try { 

    //CLEAR EXISTING DB
    await User.deleteMany();
    await Book.deleteMany();
    await Author.deleteMany();

    console.log('Data removed!'.green.inverse);
    process.exit();

  } catch (err) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
}

//npm run data:import 
//npm run data:destroy
if (process.argv[2] === '-d') {
  destroyData();
} else {
  importData();
}