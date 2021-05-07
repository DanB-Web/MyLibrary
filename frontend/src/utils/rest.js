import axios from 'axios';

// const axiosInstance = axios.create({
//   withCredentials: true
// })

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

// export const login = async (email, password) => {

//   let reply;
  
//   await fetch(`http://localhost:3001/user/login`, {
//     method: 'POST',
//     body: JSON.stringify({ email, password }),
//     headers: { 
//       'Content-Type': 'application/json', 
//     },
//     //credentials: 'include'
//   }).then(res => res.json())
//     .then(data => reply = data)
//     .catch(err => console.log('LOGIN FETCH ERROR', err));

//   return reply;
// }