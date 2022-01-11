import request from '@/utils/request'

export function test() {
  return request({
    url: '/educenter/member/info',
    method: 'get',
    baseURL: 'http://localhost:8001'
  })
}
