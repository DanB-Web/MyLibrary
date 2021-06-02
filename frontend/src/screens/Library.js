import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { getBooks } from '../store/actions/bookActions';

import { ClockLoader } from 'react-spinners';

import Book from '../components/Book';

const Library = () => {

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [totalPagesArray, setTotalPagesArray] = useState([]);
  const { loading, error, books, totalBooks} = useSelector(state => state.books)

  const dispatch = useDispatch();

  //Calculate total number of pages and create dummy array to render pagination links with .map
  useEffect(() => {
    async function renderPage () {
      await dispatch(getBooks(currentPage));
      await setTotalPages(Math.ceil(totalBooks/3));
      const array = new Array(totalPages).fill('PAGE');
      setTotalPagesArray(array);
    }
    renderPage();
  }, [currentPage, totalBooks, totalPages, dispatch])

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
        {totalPages > 1 ?
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
