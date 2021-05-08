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
