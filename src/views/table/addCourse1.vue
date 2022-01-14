<template>
  <div>
    <el-steps :active="1">
      <el-step title="步骤 1" description="这是一段很长很长很长的描述性文字"></el-step>
      <el-step title="步骤 2" description="这是一段很长很长很长的描述性文字"></el-step>
      <el-step title="步骤 3" description="这段就没那么长了"></el-step>
    </el-steps>
    <el-form :model="CourseInfoVo" ref="dynamicValidateForm" label-width="100px" class="demo-dynamic">

      <el-form-item label="课程讲师">
          <el-select v-model="CourseInfoVo.teacherId" placeholder="请选择" >
            <el-option
              v-for="item in getAllTeacherNameAndId"
              :key="item.id"
              :label="item.name"

              :value="item.id">
            </el-option>
          </el-select>
      </el-form-item>

      <el-form-item label="一级分类级ID">
        <el-select v-model="CourseInfoVo.subjectParentId"  placeholder="请选择" @change="getChildren">
          <el-option
            v-for="item in getAllSubjectNameAndId"
            :key="item.id"
            :label="item.title"
            :value="item.id">
          </el-option>
        </el-select>

      </el-form-item>

      <el-form-item label="课程专业ID">
        <el-select v-model="CourseInfoVo.subjectId" placeholder="请选择">
          <el-option
            v-for="item in children"
            :key="item.id"
            :label="item.title"
            :value="item.id">
          </el-option>
        </el-select>
      </el-form-item>



      <el-form-item label="课程标题">
        <el-input v-model="CourseInfoVo.title"></el-input>
      </el-form-item>
      <el-form-item label="课程销售价格">
        <el-input-number v-model="CourseInfoVo.price" :precision="2" :step="0.1" :max="10"></el-input-number>
      </el-form-item>
      <el-form-item label="总课时">
        <el-input v-model="CourseInfoVo.lessonNum"></el-input>
      </el-form-item>
      <el-form-item label="课程简介">
        <el-input v-model="CourseInfoVo.description"></el-input>
      </el-form-item>

    </el-form>
    <el-button type="primary" icon="el-icon-caret-right" @click="xia">下一步</el-button>
  </div>
</template>




<script>
import edu_courseAPI from "@/api/edu/edu_course";
import teacherAPI from "@/api/edu/teacher";
import subjectAPI from "@/api/edu/course";
export default {
  data(){
    return{
      CourseInfoVo: {
        id:'',
        teacherId:'',
        subjectId:'',
        title:'',
        price:'',
        subjectParentId:'',
        lessonNum:''
      },
      getAllTeacherNameAndId:[],
      getAllSubjectNameAndId:[],
      children:[]

    }
  },
  created() {
    if(this.$route.params&&this.$route.params.id){
      this.getInfo()
    }
    this.getTeacherNameAndid()
    subjectAPI.getOntTwoCourse().then(response=>{
      this.getAllSubjectNameAndId=response.data.oneList
    })
  },
  methods:{
    getInfo(){
      edu_courseAPI.getCourseInfo(this.$route.params.id).then(response=>{
        this.CourseInfoVo=response.data.courseInfoVo
        subjectAPI.getOntTwoCourse().then(response=>{
          this.getAllSubjectNameAndId=response.data.oneList
          for(var i=0 ;i<this.getAllSubjectNameAndId.length;i++){
            var oneSunject = this.getAllSubjectNameAndId[i]
            if(oneSunject.id===this.CourseInfoVo.subjectParentId){
              this.children=oneSunject.children
            }
          }
        })
      })
    },
    getChildren(value){
      for(var i=0;i<this.getAllSubjectNameAndId.length;i++){
        var oneSubjects = this.getAllSubjectNameAndId[i]
        if(value===oneSubjects.id){
          this.children=oneSubjects.children

            this.CourseInfoVo.subjectId=''
        }
      }
    },
    xia(){
      if(this.$route.params.id&& this.$route.params.id){
        this.CourseInfoVo.id=this.$route.params.id
        edu_courseAPI.updateCourseInfo(this.CourseInfoVo).then(response=>{
          this.$router.push({path:'/example/step2/'+this.$route.params.id})
        })
      }
      else{
        edu_courseAPI.sava_course_info(this.CourseInfoVo).then(response=>{
          this.$message({
            type:'success',
            message:'添加成功'
          })
          this.$router.push({path:'/example/step2/'+response.data.courseId})

        })
      }

    },
    getTeacherNameAndid(){
      teacherAPI.getAllTeacherNameAndId().then(response=>{
        this.getAllTeacherNameAndId=response.data.teachers

      })
    }
  }
}
</script>

<style scoped>

</style>
