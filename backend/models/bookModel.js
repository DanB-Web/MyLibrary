import mongoose from 'mongoose';

const bookSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  ISBN: {
    type: Number,
    required: true,
    unique: true
  }
});

const Book = mongoose.model('Book', bookSchema);

export default Book;