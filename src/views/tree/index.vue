<template>
  <div class="app-container">
    <el-input v-model="filterText" placeholder="Filter keyword" style="margin-bottom:30px;"/>

    <el-tree
      ref="tree2"
      :data="courses"
      :props="defaultProps"
      :filter-node-method="filterNode"
      class="filter-tree"
      default-expand-all
    />

  </div>
</template>

<script>
import courseAPI from "@/api/edu/course";

export default {

  data() {
    return {
      filterText: '',
      courses: [],
      defaultProps: {
        label: 'title',
        children: 'children'
      }
    }
  },
  watch: {
    filterText(val) {
      this.$refs.tree2.filter(val)
    }
  },
  created() {
    this.getOneTwo()

  },
  methods: {
    filterNode(value, data) {
      if (!value) return true
      return data.label.indexOf(value) !== -1
    },
    getOneTwo(){
      courseAPI.getOntTwoCourse().then(response=>{
        this.courses=response.data.oneList
        console.log(this.courses)
      })
    }
  }
}
</script>

