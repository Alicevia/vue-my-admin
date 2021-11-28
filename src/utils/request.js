import axios from 'axios'
import { useMessage } from 'naive-ui'
import config from '../config'

const message = useMessage()
const service = axios.create({
  timeout: 5000,
  baseURL: config.VITE_BASE_API,
})

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
    message.error(error.message)
    return Promise.reject(error)
  },
)

export default service
