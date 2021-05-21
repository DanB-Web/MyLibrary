import Book from '../models/bookModel.js';

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