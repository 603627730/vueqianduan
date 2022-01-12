import request from '@/utils/request'

export default  {
  addPhoto(photo){
    return request({
      url: '/eduoss/fileoss',
      method: 'post',
      data:photo,
      baseURL: 'http://localhost:9001'
    })
  }

}
