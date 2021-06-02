import React from 'react';
import Moment from 'moment';

import Rating from './Rating';

const noImageURL ="https://res.cloudinary.com/dasb94yfb/image/upload/v1622631234/MyLibrary/NoImage_ny4b39.jpg"

const Book = ({book}) => {

  if (book.image === "URL") {
    book.image = noImageURL;
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
      <button className="btn">Add to reading list</button>
    </div>
  )
}

export default Book
