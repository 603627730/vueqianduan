import request from '@/utils/request'

export default  {
  addPhoto(photo){
    return request({
      url: '/eduoss/fileoss',
      method: 'post',
      data:photo,
      baseURL: 'http://139.196.6.43:9001'
    })
  }

}
