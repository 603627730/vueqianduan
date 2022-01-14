<template>
  <div class="app-container">
    <el-table
      v-loading="listLoading"
      :data="list"
      element-loading-text="Loading"
      border
      fit
      highlight-current-row
    >
      <el-table-column align="center" label="ID" width="95">
        <template slot-scope="scope">
          {{ scope.$index +1}}
        </template>
      </el-table-column>
      <el-table-column label="课程封面" width="110" align="center">
        <template slot-scope="scope">
          <el-avatar :src="scope.row.cover"></el-avatar>
        </template>
      </el-table-column>
      <el-table-column label="课程名称" width="110" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.title }}</span>
        </template>
      </el-table-column>
      <el-table-column label="授课教师" width="110" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.teacherName }}</span>
        </template>
      </el-table-column>
      <el-table-column label="课程价格" width="110" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.price }}</span>
        </template>
      </el-table-column>
      <el-table-column label="所属一级分类" width="110" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.subjectLevelOne }}</span>
        </template>
      </el-table-column>
      <el-table-column label="所属二级分类" width="110" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.subjectLevelTwo }}</span>
        </template>
      </el-table-column>


    </el-table>
  </div>
</template>

<script>
import edu_courseAPI from "@/api/edu/edu_course";
export default {
  data() {
    return {
      list: [],
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      edu_courseAPI.getAllcourse().then(response=>{
        console.log(response.data.list)
        this.list=response.data.list
      })
    }
  }
}
</script>
