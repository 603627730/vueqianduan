<template>
  <el-form :model="teacher"  ref="teacher" label-width="100px" class="demo-ruleForm">
    <el-form-item label="教师名称" prop="name">
      <el-input v-model="teacher.name"></el-input>
    </el-form-item>
    <el-form-item label="等级">
      <el-select v-model="teacher.level" placeholder="选择教师等级">
        <el-option label="一级" value="1"></el-option>
        <el-option label="二级" value="2"></el-option>
      </el-select>
    </el-form-item>

    <el-form-item label="介绍" prop="region">
      <el-input v-model="teacher.intro"></el-input>
    </el-form-item>

    <el-form-item label="职位" prop="region">
        <el-input v-model="teacher.career"></el-input>
    </el-form-item>
    <el-upload
      class="avatar-uploader"
      action="http://localhost:9001/eduoss/fileoss"
      :show-file-list="false"
      :on-success="handleAvatarSuccess">
      <img v-if="teacher.avatar" :src="teacher.avatar" class="avatar">
      <i v-else class="el-icon-plus avatar-uploader-icon">上传头像</i>
    </el-upload>

    <el-form-item>
      <el-button type="primary" @click="submitForm()">立即创建</el-button>
    </el-form-item>

  </el-form>



</template>

<script>
import teacherAPI from "@/api/edu/teacher";
import ossAPI from "@/api/edu/oss";
export default {
  data() {
    return {
      teacher: {
        name: '',
        intro: '',
        career: '',
        level: '',
        avatar: ''
      },


    };
  },
  created() {
    if(this.$route.params && this.$route.params.id){
      teacherAPI.getTeacherById(this.$route.params.id).then(response=>{
        this.teacher=response.data.teacher
        console.log(this.teacher)
      })
    }
  },
  methods: {
    // 文件上传
    handleAvatarSuccess(res) {
      this.teacher.avatar = res.data.url
      console.log("++++",this.teacher.avatar,"------")
    },


    submitForm() {
      if(this.$route.params && this.$route.params.id){
        teacherAPI.updateTeacher(this.teacher).then(response=>{
          this.$message({
            type:'success',
            message:'修改成功'
          })
          this.$router.push({path:'/teacher/table'})
        })
      }
      else{
        teacherAPI.addTeacher(this.teacher).then(response=>{
          this.$message({
            type:'success',
            message:'添加成功'
          })
          this.$router.push({path:'/teacher/table'})
        })
      }
    }
  }
}
</script>
