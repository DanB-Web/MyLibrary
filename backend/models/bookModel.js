import mongoose from 'mongoose';

const bookSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Author'
  },
  authorName: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  published: {
    type: Date,
    required: true
  },
  synopsis: {
    type: String,
    required: true
  },
  pages: {
    type: Number,
    required: true
  },
  languages: {
    type: [String],
    required: true
  },
  ISBN: {
    type: Number,
    required: true,
    unique: true
  }
}, {
    timestamps: true
  }
);

const Book = mongoose.model('Book', bookSchema);

export default Book;