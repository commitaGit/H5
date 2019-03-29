<template>
  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="进行中" name="first">
	<tasklist></tasklist>
	</el-tab-pane>
    <el-tab-pane label="已完成" name="second"><tasklist></tasklist></el-tab-pane>
    <el-tab-pane label="待开始" name="third">待开始列表</el-tab-pane>
    <el-tab-pane label="待定" name="fourth">待定列表</el-tab-pane>
  </el-tabs>
</template>

<script>
import tasklist from './task-pages/task-list.vue'
// import HelloWorld from './components/HelloWorld.vue'
  export default {
    data() {
      return {
        activeName: 'first'
      };
    },
	components:{
		tasklist
	},
    methods: {
      handleClick(tab, event) {
        // console.log(tab, event);
      }
    }
  };
</script>
