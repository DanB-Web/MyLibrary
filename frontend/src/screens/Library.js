import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { getBooks } from '../store/actions/bookActions';

import { ClockLoader } from 'react-spinners';

import Book from '../components/Book';

const Library = () => {

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalPagesArray, setTotalPagesArray] = useState(['PAGE']);

  const { loading, error, books, totalBooks} = useSelector(state => state.books);
  
  const dispatch = useDispatch();

  //Fetch books for current page
  useEffect(() => {
    dispatch(getBooks(currentPage));   
  }, [currentPage, dispatch]);

  //Calculate total number of pages and create dummy array to render pagination links with .map
  useEffect(() => {
    if (totalBooks > 3) {
      setTotalPages(Math.ceil(totalBooks/3));
      const array = new Array(totalPages).fill('PAGE');
      setTotalPagesArray(array);
    }  
  }, [books, totalBooks, totalPages])

  const pageHandler = (page) => {
    setCurrentPage(page);
  }

  if (error) {
    return <p>Something went wrong...</p>
  }

  if (loading) {
    return <div className="loader-container">
        <ClockLoader size={100} color={'var(--color-primary)'}/>
    </div>
  }

  if (totalBooks === 0) {
    return <p>No books...</p>
  }

  return (
    <div className="library-container">
      {books && (books.map(book => {
        return <Book key={book._id} book={book}></Book>
      }))}
      <div className="library-container-pagination">
        {books ?
          totalPagesArray.map((_, index) => {
            const page = index + 1;
            if (page === currentPage) {
              return <button className="active" key={index} onClick={() => pageHandler(page)}>{page}</button>
            } else {
              return <button key={index} onClick={() => pageHandler(page)}>{page}</button>   
            }
          }):
          null
        }
      </div>  
    </div>
  )
}

export default Library
