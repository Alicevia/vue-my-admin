import axios from 'axios'
import config from '../config'
import userStore from '@/store/userStore'
import { isCheckTimeout } from './auth'

const service = axios.create({
  timeout: 15000,
  baseURL: config.VITE_BASE_API,
})
service.interceptors.request.use(
  (cfg) => {
    const user = userStore()
    if (user.token) {
      if (isCheckTimeout()) {
        user.logout() // token主动设置超时
        return Promise.reject(cfg)
      }
      cfg.headers.Authorization = `Bearer ${user.token}`
    }
    return cfg
  },
  (err) => {
    console.dir(err, 'configerr')
    return Promise.reject(err)
  },
)

service.interceptors.response.use(
  (response) => {
    const { $message } = window
    const { success, message, data } = response.data
    if (success) {
      return data
    }
    $message.error(message)
    return Promise.reject(response)
  },
  (error) => {
    const user = userStore()
    const { $message } = window
    const { response, message } = error
    $message.error(response.data?.message || response.data || message)
    if (response.status == 401) {
      user.logout()
    }
    return Promise.reject(error)
  },
)

export default service
