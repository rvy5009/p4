import axios from 'axios'

const api = axios.create({
  baseURL: "http://localhost:3000"
})


export const loginUser = async (loginData) => {
  const resp = await api.post('/auth/login', loginData)
  console.log(resp)
  api.defaults.headers.common.authorization = `Bearer ${resp.data.auth_token}`
  localStorage.setItem('authToken', resp.data.auth_token)
  localStorage.setItem('name', resp.data.name)
  localStorage.setItem('email', resp.data.email)
  return resp.data.user
}

export const registerUser = async (registerData) => {

  const resp = await api.post('/signup', registerData);
  api.defaults.headers.common.authorization = `Bearer ${resp.data.auth_token}`
  localStorage.setItem('authToken', resp.data.auth_token)
  localStorage.setItem('name', resp.data.name)
  localStorage.setItem('email', resp.data.email)
  return resp.data.user

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
  return resp.data
}

export const newRegiment = async (postData) => {
  const resp = await api.post('/regiments', postData)
  return resp.data
}
export const deleteRegiment = async id => {
  const resp = await api.delete(`/regiments/${id}`)
  return resp.data
}

export const updateRegiment = async (id, updateData) => {
  const resp = await api.put(`/regiments/${id}`, updateData);
  return resp.data;
}

export const oneRegiment = async (regId) => {
  const resp = await api.get(`/regiments/${regId}`)
  console.log(resp)
  return resp.data;
};




export const addExercise = async (id, postData) => {
  const resp = await api.post(`/regiments/${id}/exercises`, postData)
  return resp.data
}

export const allExercises = async (id) => {
  const resp = await api.get(`/regiments/${id}/exercises`)
  return resp.data
}

export const updateExerciseApi = async (regId, updateData, exId) => {
  const resp = await api.put(`/regiments/${regId}/exercises/${exId}`, updateData);
  return resp.data;
}


export const oneExercise = async (regId, exId) => {
  const resp = await api.get(`/regiments/${regId}/exercises/${exId}`)
  return resp.data;
};

export const deleteExercise = async (regId, exId) => {
  const resp = await api.delete(`/regiments/${regId}/exercises/${exId}`)
  return resp.data;
};
