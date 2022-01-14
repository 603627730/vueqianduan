<template>
  <div>
    <el-steps :active="3">
      <el-step title="步骤 1" description="这是一段很长很长很长的描述性文字"></el-step>
      <el-step title="步骤 2" description="这是一段很长很长很长的描述性文字"></el-step>
      <el-step title="步骤 3" description="这段就没那么长了"></el-step>
    </el-steps>



    <el-button type="primary" icon="el-icon-caret-left" @click="shang">上一步</el-button>
    <el-button type="primary" icon="el-icon-caret-right" @click="xia">发布</el-button>
  </div>
</template>

<script>
import edu_courseAPI from "@/api/edu/edu_course";
export default {
  data(){
    return{

    }
  },
  created() {

  },
  methods:{
    shang(){
      this.$router.push({path:'/example/step2/'+this.$route.params.id})
    },
    xia(){
      edu_courseAPI.publishCourse(this.$route.params.id).then(response=>{
        this.$message({
          type:'success',
          message:'发布课程成功'
        })
        this.$router.push({path:'/example/tree'})

      })
    }

  }
}
</script>

<style scoped>

</style>
