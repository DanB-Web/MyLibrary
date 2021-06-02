import React from 'react';

const Rating = ({rating, ratingsNumber}) => {

  const color = '#D4AF37';
  const value = rating;

  return (
    <div className="rating-container">
      <span>
        <i style={{color:color}} className={value >= 1 ? 'fas fa-star' : value >= 0.5 ? 'fas fa-star-half-alt' : 'far fa-star'}></i>
        <i style={{color:color}} className={value >= 2 ? 'fas fa-star' : value >= 1.5 ? 'fas fa-star-half-alt' : 'far fa-star'}></i>
        <i style={{color:color}} className={value >= 3 ? 'fas fa-star' : value >= 2.5 ? 'fas fa-star-half-alt' : 'far fa-star'}></i>
        <i style={{color:color}} className={value >= 4 ? 'fas fa-star' : value >= 3.5 ? 'fas fa-star-half-alt' : 'far fa-star'}></i>
        <i style={{color:color}} className={value >= 5 ? 'fas fa-star' : value >= 4.5 ? 'fas fa-star-half-alt' : 'far fa-star'}></i>
        {ratingsNumber === 0 && <p>No reviews</p>}
        {ratingsNumber === 1 && <p>{ratingsNumber} review</p>}
        {ratingsNumber > 1 && <p>{ratingsNumber} reviews</p>}
      </span>
    </div>
  )
}

export default Rating;