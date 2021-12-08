import axios from 'axios'
import { useMessage } from 'naive-ui'
import config from '../config'
import store from '@/store'
import { isCheckTimeout } from './auth'

const message = useMessage()
const service = axios.create({
  timeout: 5000,
  baseURL: config.VITE_BASE_API,
})
service.interceptors.request.use(
  (cfg) => {
    if (store.state.value.user.token) {
      if (isCheckTimeout()) {
        store.state.user.logout()
      }
    }

    return cfg
  },
  (err) => Promise.reject(err),
)

service.interceptors.response.use(
  (response) => {
    const { success, message: msg, data } = response.data
    if (success) {
      return data
    }
    message.error(msg)
    return Promise.reject(response)
  },
  (error) => {
    console.log(message)
    message.error(error.message)
    return Promise.reject(error)
  },
)

export default service
