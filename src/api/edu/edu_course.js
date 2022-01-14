import request from '@/utils/request'

export default  {
  getAllcourse(){
    return request({
      url: '/serviceedu/edu-course/getAllcourse',
      method: 'get',
      baseURL: 'http://139.196.6.43:9001'
    })
  },
  sava_course_info(data){
    return request({
      url: '/serviceedu/edu-course/sava_course_info',
      method: 'post',
      data:data,
      baseURL: 'http://139.196.6.43:9001'
    })
  },
  getCourseInfo(id){
    return request({
      url: '/serviceedu/edu-course/getCourseInfo/'+id,
      method: 'get',
      baseURL: 'http://139.196.6.43:9001'
    })
  },
  updateCourseInfo(data){
    return request({
      url: '/serviceedu/edu-course/updateCourseInfo',
      method: 'post',
      data:data,
      baseURL: 'http://139.196.6.43:9001'
    })
  },
  publishCourse(id){
    return request({
      url: '/serviceedu/edu-course/publishCourse/'+id,
      method: 'post',
      baseURL: 'http://139.196.6.43:9001'
    })
  },

}
