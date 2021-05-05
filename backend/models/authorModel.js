import mongoose from 'mongoose';

const authorSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  books: [{
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Book'
  }]
})

const Author = mongoose.model('Author', authorSchema);

export default Author;