import Book from '../models/bookModel.js';
import User from '../models/userModel.js';

export const getBooks = async (req, res) => {

  try {
    let page = parseInt(req.query.page);
    let limit = parseInt(req.query.limit);
    
    const startIndex = (page - 1 ) * limit;
    const endIndex = page * limit;
    const results = {};

    const totalBooks = await Book.countDocuments();
    results.totalBooks = totalBooks;
  
    if (endIndex < totalBooks) {
      results.next = {
        page: page + 1,
        limit: limit
      }
    }
  
    if (startIndex > 0) {
      results.previous = {
        page: page - 1,
        limit: limit
      }
    }
    results.books = await Book.find().limit(limit).skip(startIndex); 
    res.json({results});
  } catch (e) {
    throw new Error('Pagination error');
  }
}

export const addToReadingList = async (req, res) => {
  try {
    const { userId, bookId } = req.body;
    const user = await User.findById(userId);
    if (!user.readingList.includes(bookId)) {
      const book = await Book.findById(bookId);
      const readingListItem = {
        book,
        read: false,
        myRating: null
      }
      user.readingList.push(readingListItem);
    }
    await user.save();
    res.send(user);
  } catch (e) {
    throw new Error('Add to reading list error')
  }
}

export const removeFromReadingList = async (req, res) => {
  try {
    const { userId, bookId } = req.body;
    console.log(userId, bookId);
    res.send();
  } catch (e) {
    throw new Error('Remove from reading list error')
  }
}