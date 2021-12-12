import request from '@/utils/request'

export const login = (data) =>
  request({
    url: '/sys/login',
    method: 'post',
    data,
  })

export const userInfo = () =>
  request({
    url: '/sys/profile',
    method: 'get',
  })
