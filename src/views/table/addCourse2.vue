<template>
<div>
  <el-steps :active="2">
    <el-step title="步骤 1" description="这是一段很长很长很长的描述性文字"></el-step>
    <el-step title="步骤 2" description="这是一段很长很长很长的描述性文字"></el-step>
    <el-step title="步骤 3" description="这段就没那么长了"></el-step>
  </el-steps>
  <el-upload
    class="avatar-uploader"
    action="http://localhost:9001/eduoss/fileoss"
    :show-file-list="false"

    :on-success="handleAvatarSuccess">
    <img v-if="CourseInfoVo.cover" :src="CourseInfoVo.cover" class="avatar" width="200px" height="200px">
    <i v-else class="el-icon-plus avatar-uploader-icon">上传讲师头像</i>
  </el-upload>

  <el-button type="text" @click="centerDialogVisible = true">添加章节</el-button>
  <el-dialog
    title="添加章节"
    :visible.sync="centerDialogVisible"
    width="60%"
    center>
    <el-form>
      <el-form-item label="章节名称">
        <el-input v-model="chapter.title"></el-input>
      </el-form-item>
      <el-form-item label="排序">
        <el-input v-model="chapter.sort"></el-input>
      </el-form-item>
    </el-form>
    <span slot="footer" class="dialog-footer">
    <el-button @click="centerDialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="add">确 定</el-button>
  </span>
  </el-dialog>

  <ul v-for="cha in allchapter">
    <li>{{cha.title}}
      <ul >
        <li>1</li>
      </ul>

    </li>

  </ul>

  <el-button type="primary" icon="el-icon-caret-left" @click="shang">上一步</el-button>
  <el-button type="primary" icon="el-icon-caret-right" @click="xia">下一步</el-button>
</div>
</template>

<script>
import edu_courseAPI from "@/api/edu/edu_course";
import chapterAPI from "@/api/edu/chapter";

export default {
  data(){
    return{
      CourseInfoVo:{
        cover:''
      },
      chapter:{
        courseId:this.$route.params.id,
        title:'',
        sort:''
      },
      centerDialogVisible:false,
      allchapter:[

      ]
    }
  },
  created() {
    if(this.$route.params&&this.$route.params.id){
      edu_courseAPI.getCourseInfo(this.$route.params.id).then(response=>{
        this.CourseInfoVo.cover=response.data.courseInfoVo.cover
      })
    }
    chapterAPI.getChapterById(this.$route.params.id).then(response=>{
      this.allchapter=response.data.chapter
    })
  },
  methods:{
    add(){
      this.centerDialogVisible = false
      chapterAPI.addChapter(this.chapter).then(response=>{
        location.reload();
      })
    },
    shang(){
      this.$router.push({path:'/example/step1/'+this.$route.params.id})
    },
    xia(){
      this.CourseInfoVo.id=this.$route.params.id
      edu_courseAPI.updateCourseInfo(this.CourseInfoVo).then(response=>{
        this.$message({
          type:'success',
          message:'添加图片成功'
        })
        this.$router.push({path:'/example/step3/'+this.$route.params.id})

      })
    },
    handleAvatarSuccess(res) {
      this.CourseInfoVo.cover = res.data.url
      console.log("++++",this.CourseInfoVo.cover,"------")
    },

  }
}
</script>

<style scoped>

</style>
