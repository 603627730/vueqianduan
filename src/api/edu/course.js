import request from '@/utils/request'

export default  {
  getOntTwoCourse(){
    return request({
      url: '/serviceedu/edu-subject/getAllsubject',
      method: 'get',
      baseURL: 'http://139.196.6.43:9001'
    })
  },


}
