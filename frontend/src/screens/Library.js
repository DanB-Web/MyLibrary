import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { getBooks } from '../store/actions/bookActions';

import Book from '../components/Book';

const Library = () => {

  const [page, setPage] = useState(1);
  const { loading, error, books, next, totalBooks} = useSelector(state => state.books)

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks(page))
  }, [page, dispatch])

  if (error) {
    return <p>Something went wrong...</p>
  }

  if (loading) {
    return <p>Loading...</p>
  }

  if (totalBooks === 0) {
    return <p>No books...</p>
  }

  return (
    <div>
      {books && (books.map(book => {
        return <Book key={book._id} book={book}></Book>
      }))}
    </div>
  )
}

export default Library
