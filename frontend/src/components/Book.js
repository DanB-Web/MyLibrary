import React from 'react'

const Book = ({book}) => {
  return (
    <div className="book-container neumorph">
      {book.title}
      {book.authorName}
    </div>
  )
}

export default Book
