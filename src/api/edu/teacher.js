import request from '@/utils/request'

export default  {
  getTeacherList(){
    return request({
      url: '/serviceedu/edu-teacher/getAll',
      method: 'get',
      baseURL: 'http://139.196.6.43:9001'
    })
  },
  delTeacherById(id){
    return request({
      url: '/serviceedu/edu-teacher/'+id,
      method: 'delete',
      baseURL: 'http://139.196.6.43:9001'
    })
  },
  pageTeacher(page,limit){
    return request({
      url: '/serviceedu/edu-teacher/pageTeacher/'+page+"/"+limit,
      method: 'get',
      baseURL: 'http://139.196.6.43:9001'
    })
  },
  pageTeacherCondition(Eduteacher){
    return request({
      url: '/serviceedu/edu-teacher/pageTeacherCondition',
      method: 'post',
      baseURL: 'http://139.196.6.43:9001',
      data:Eduteacher
    })
  },addTeacher(Eduteacher){
    return request({
      url: '/serviceedu/edu-teacher/addTeacher',
      method: 'post',
      baseURL: 'http://139.196.6.43:9001',
      data:Eduteacher
    })
  },getTeacherById(id){
    return request({
      url: '/serviceedu/edu-teacher/getTeacherById/'+id,
      method: 'get',
      baseURL: 'http://139.196.6.43:9001',
    })
  },updateTeacher(Eduteacher){
    return request({
      url: '/serviceedu/edu-teacher/updateTeacher',
      method: 'post',
      baseURL: 'http://139.196.6.43:9001',
      data:Eduteacher
    })
  }
  ,getAllTeacherNameAndId(){
    return request({
      url: '/serviceedu/edu-teacher/getAllTeacherNameAndId',
      method: 'get',
      baseURL: 'http://139.196.6.43:9001'

    })
  },


}
