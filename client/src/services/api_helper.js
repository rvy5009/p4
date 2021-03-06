import axios from 'axios'

const api = axios.create({
  baseURL: "http://localhost:3000"
})

export const loginUser = async (loginData) => {
  const resp = await api.post('/auth/login', loginData)
  api.defaults.headers.common.authorization = `Bearer ${resp.data.auth_token}`
  localStorage.setItem('authToken', resp.data.auth_token)
  localStorage.setItem('name', resp.data.name)
  localStorage.setItem('email', resp.data.email)
  return resp.data
}

export const registerUser = async (registerData) => {
  const resp = await api.post('/signup', registerData);
  api.defaults.headers.common.authorization = `Bearer ${resp.data.auth_token}`
  localStorage.setItem('authToken', resp.data.auth_token)
  localStorage.setItem('name', resp.data.name)
  localStorage.setItem('email', resp.data.email)
  return resp.data
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

export const addRegiment = async (postData) => {
  await api.post('/regiments', postData)

}
export const deleteRegiment = async id => {
  await api.delete(`/regiments/${id}`)
}

export const updateRegiment = async (id, updateData) => {
  await api.put(`/regiments/${id}`, updateData)
}

export const oneRegiment = async (regId) => {
  const resp = await api.get(`/regiments/${regId}`)
  return resp.data;
}

export const addExercise = async (id, postData) => {
  await api.post(`/regiments/${id}/exercises`, postData)
}

export const allExercises = async (id) => {
  const resp = await api.get(`/regiments/${id}/exercises`)
  return resp.data
}

export const updateExerciseApi = async (regId, updateData, exId) => {
  await api.put(`/regiments/${regId}/exercises/${exId}`, updateData)
}

export const oneExercise = async (regId, exId) => {
  const resp = await api.get(`/regiments/${regId}/exercises/${exId}`)
  return resp.data
}

export const deleteExercise = async (regId, exId) => {
  await api.delete(`/regiments/${regId}/exercises/${exId}`)
}
