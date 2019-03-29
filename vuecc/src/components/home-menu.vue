<template>
<el-row class="tac">
  <el-col :span="12">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
	  >
      <el-submenu index="1" >
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span>菜单一</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1" v-on:click='onei1'>子菜单1</el-menu-item>
          <el-menu-item index="1-2"	v-on:click='onei2'>子菜单2</el-menu-item>
		  <el-menu-item index="1-3"	v-on:click='onei3'>子菜单3</el-menu-item>
		  <el-menu-item index="1-4">子菜单4</el-menu-item>
		  <el-menu-item index="1-5">子菜单5</el-menu-item>
		  <el-menu-item index="1-6">子菜单6</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
	  <el-submenu index="2">
	  <template slot="title">
	  	<i class="el-icon-menu"></i>
	  	<span>菜单二</span>
	  </template>
	  <el-menu-item-group>
		<el-menu-item index='1'  v-for='menuew in menuList' >{{menuew.menuee}}
		</el-menu-item>
	  </el-menu-item-group>
	  </el-submenu>
<!--      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">菜单二</span>
      </el-menu-item> -->
    </el-menu>
  </el-col>
</el-row>
</template>

<script>
  export default {
	  data(){
		  return{
			  menuList:[				  
			  { menuee: '子菜单1'},
			  { menuee: '子菜单2'},
			  { menuee: '子菜单3'},
			  ]
		  } 	
	  },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
	  onei1:function(){
		  this.$router.push({path:'/menuone'})  
	  },
	  onei2:function(){
	  	this.$router.push({path:'/menutwo'})  
	  },
	  onei3:function(){
	  	this.$router.push({path:'/menutree'})  
	  }
    }
  }
</script>

<style>
.el-row{
	text-align: -moz-left;
	width: 500px;
}
</style>
