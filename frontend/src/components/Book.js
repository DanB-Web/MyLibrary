import React from 'react';

import { useSelector } from 'react-redux';

import Moment from 'moment';

import { addToReadingList } from '../utils/rest.js';
import { noImage } from '../utils/constants.js';

import Rating from './Rating';

const Book = ({book}) => {

  const user = useSelector(state => state.userDetails.userInfo);

  if (book.image === "URL") {
    book.image = noImage;
  } 

  const addToReadingListhandler = () => {
    addToReadingList(user._id, book._id);
  }

  return (
    <div className="book-container neumorph">
      <div className="book-container-details">
        <img className="neumorph" src={book.image} alt={book.title}></img>
        <div>
          <div className="book-container-title">
            <h3>{book.title}</h3>
            <Rating rating={book.rating} ratingsNumber={book.ratingsNumber}></Rating>
          </div>
          <hr/>
          <div className="book-container-info">
            <p><span>Author:</span> {book.authorName}</p>
            <p><span>Published:</span> {Moment(book.published).format('MMM Do YYYY')}</p>
            <p><span>Pages:</span> {book.pages}</p>
            <p><span>ISBN:</span> {book.ISBN}</p>
          </div>  
        </div>
      </div>
      <p className="book-container-synopsis">{book.synopsis}</p>
      <button className="btn" onClick={addToReadingListhandler}>Add to reading list</button>
    </div>
  )
}

export default Book
