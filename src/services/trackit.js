import axios from "axios"

const BASE_URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit";

function getHabits(config) {
  const promise = axios.get(`${BASE_URL}/habits`, config)
  return promise
}

function saveHabit(name, days, config) {
  const promise = axios.post(`${BASE_URL}/habits`, { name, days }, config)
  return promise
}

function deleteHabit(id, config) {
  const promise = axios.delete(`${BASE_URL}/habits/${id}`, config)
  return promise
}

function getTodaysHabits(config) {
  const promise = axios.get(`${BASE_URL}/habits/today`, config)
  return promise
}

function checkHabit(id, endpointAPI, config) {
  const promise = axios.post(`${BASE_URL}/habits/${id}/${endpointAPI}`, {}, config)
  return promise
}

function login(userInfo) {
  const promise = axios.post(`${BASE_URL}/auth/login`, userInfo)
  return promise
}

function signUp(userInfo) {
  const promise = axios.post(`${BASE_URL}/auth/sign-up`, userInfo)
  return promise
}

function getHabitsHistory(config) {
  const promise = axios.get(`${BASE_URL}/habits/history/daily`, config)
  return promise
}

const api = {
  getHabits,
  saveHabit,
  deleteHabit,
  getTodaysHabits,
  checkHabit,
  login,
  signUp,
  getHabitsHistory
}

export default api