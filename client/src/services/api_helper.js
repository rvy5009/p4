import axios from 'axios';

const api = axios.create({
  baseURL: "http://localhost:3000"
})


export const loginUser = async (loginData) => {
  const resp = await api.post('/auth/login', loginData);
  console.log(resp);
  api.defaults.headers.common.authorization = `Bearer ${resp.data.auth_token}`;
  localStorage.setItem('authToken', resp.data.auth_token);
  localStorage.setItem('name', resp.data.name);
  localStorage.setItem('email', resp.data.email);
  return resp.data.user;
}

export const registerUser = async (registerData) => {

  const resp = await api.post('/signup', registerData);
  api.defaults.headers.common.authorization = `Bearer ${resp.data.auth_token}`;
  localStorage.setItem('authToken', resp.data.auth_token);
  localStorage.setItem('name', resp.data.name);
  localStorage.setItem('email', resp.data.email);
  return resp.data.user;

}

export const verifyUser = () => {
  const token = localStorage.getItem('authToken')
  if (token) {
    api.defaults.headers.common.authorization = `Bearer ${token}`
  }
}

export const allRegiments = async () => {
  console.log("Hit All Regiments by Rico Corp")
  const resp = await api.get('/regiments')
  return resp.data;
}

// export const postTodo = async (postData) => {
//   const resp = await api.post('/registers', postData);
//   return resp.data;
// }

// export const putTodo = async (id, postData) => {
//   const resp = await api.put(`/registers/${id}`, postData);
//   const todo = {id: id, title: resp.data.data}
//   return todo;
// }
