import axios from 'axios';

export const login = async (email, password) => {
  const config = {
    headers: {
      'Content-Type':'application/json'
    }, 
    withCredentials: true
  }
  const reply = await axios.post('http://localhost:3001/user/login', {email, password}, config);

  return reply;
}

export const addToReadingList = async (userId, bookId) => {
  const config = {
    headers: {
      'Content-Type':'application/json'
    }, 
    withCredentials: true
  }
  const reply = await axios.post('http://localhost:3001/book/readinglist', {userId, bookId}, config);

  return reply;
}

export const removeFromReadingList = async (userId, bookId) => {
  const config = {
    headers: {
      'Content-Type':'application/json'
    }, 
    withCredentials: true
  }
  const reply = await axios.put('http://localhost:3001/user/readinglist', {userId, bookId}, config);

  return reply;
}
