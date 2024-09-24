import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/vue-element-admin/user/login', // 添加 /api 前缀
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return request({
    url: '/vue-element-admin/user/info', // 添加 /api 前缀
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/vue-element-admin/user/logout', // 添加 /api 前缀
    method: 'post'
  })
}

export function register(data) {
  return request({
    url: '/vue-element-admin/user/register', // 添加 /api 前缀
    method: 'post',
    data
  })
}
