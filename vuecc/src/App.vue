<template>
	<div>
		<el-container style="height: 100%;min-height:100vh;" direction='vertical'  >
			<el-header >
				<img alt="Vue logo" src="./assets/logo.png" height="30px" width="30px" >
				<span>捞乜都掂</span>
			</el-header>
			<el-container >
				<el-aside width='250px' >
					<homemenu></homemenu>
				</el-aside>
				<el-main>
					<keep-alive>
					<router-view ></router-view>
					</keep-alive>
				</el-main>
			</el-container>
			<!-- <el-footer>   //底部栏
				<homebottom></homebottom>
			</el-footer>	 -->
		</el-container>
	</div>	
</template>

<script>
import homemenu from './components/home-menu.vue'
import homebottom from './components/home-bottom.vue'

export default {
  name: 'app',
  components: {
		homemenu,
		homebottom
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 30px;
}
/* .el-container{
	direction:'horizontal'
} */
.el-header,.el-footer,.el-aside{
	background: #DCDFE6;
}
</style>
