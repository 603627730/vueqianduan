<template>
  <div>
    <el-table
      :data="teacherList"
      style="width: 100%">

      <el-table-column label="序号">
        <template slot-scope="scope">
          {{ scope.$index +1}}
        </template>
      </el-table-column>
      <el-table-column label="avator">
        <template slot-scope="scope" >
          <el-avatar :src="scope.row.avatar"></el-avatar>
        </template>
      </el-table-column>
      <el-table-column
        prop="name"
        label="name"
        width="180">
      </el-table-column>
      <el-table-column
        prop="career"
        label="career"
        width="180">
      </el-table-column>
      <el-table-column
        prop="gmtCreate"
        label="gmtCreate"
        width="180">
      </el-table-column>
      <el-table-column
        prop="level"
        label="level" width="100">
      </el-table-column>
      <el-table-column>
        <template slot-scope="scope">
          <el-button type="primary" @click="editTeacher(scope.row.id)"  width="100">编辑</el-button>
          <el-button type="danger" @click="deleteTeacher(scope.row.id)"  width="180">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      background
      layout="prev, pager, next"
      @current-change="pageTeacher"
      :current-page="page.curr"
      :total="page.total">
    </el-pagination>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import teacherAPI from "@/api/edu/teacher";

export default {
  name: 'Dashboard',
  computed: {
    ...mapGetters([
      'name'
    ])
  },
  data() {
    return {
      page:{
        total:910,
        curr:1
      },
      teacherList:[
      ]
    }
  },

  created() {
    this.getAll()
  },
  methods: {
    editTeacher(id){
      this.$router.push({path:'/teacher/edit/'+id})
    },

    getAll(){
      // teacherAPI.getTeacherList().then(response=>{
      //   this.teacherList = response.data.allTeacher
      // })
      this.pageTeacher(1,2)
    },
    deleteTeacher(id){
      teacherAPI.delTeacherById(id).then(response=>{
        this.$message({
          showClose: true,
          message: '删除成功～',
          type: 'success'
        });
        this.getAll()
      })
    },
    pageTeacher(page) {
      teacherAPI.pageTeacher(page,2).then(response=>{
        console.log(response.data)
        this.page.total=response.data.sizes*10
        this.teacherList=response.data.rows
        this.page.curr=page
      })
    },
    pageChange(num){
      this.page.curr=this.page.curr+num
    }

  }
}
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }

  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
