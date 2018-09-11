import axios from 'axios'

const request = axios.create({
  baseURL: 'https://reqres.in/api',
  timeout: 5000
})

export default request