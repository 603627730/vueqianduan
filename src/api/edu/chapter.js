import request from '@/utils/request'
import da from "element-ui/src/locale/lang/da";

export default  {


  getChapterById(id){
    return request({
      url: '/serviceedu/edu-chapter/getChapterByID/'+id,
      method: 'get',
      baseURL: 'http://139.196.6.43:9001'
    })
  },

  addChapter(data){
    return request({
      url: '/serviceedu/edu-chapter/addChapter',
      method: 'post',
      data:data,
      baseURL: 'http://139.196.6.43:9001'
    })
  },


}
