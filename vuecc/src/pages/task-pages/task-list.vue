<template>
  <el-table
    :data="tableData"
    style="width: 100%">
    <!-- 
		<el-table-column
      label="id"
      width="50">
      <template slot-scope="scope">
        <i class="el-icon-time"></i>
        <span style="margin-left: 10px">{{ scope.row.id }}</span>
      </template>
    </el-table-column> 
		-->
	<el-table-column
	label='标题'
	width="100">
	<template slot-scope="scope">
		<el-popover trigger="hover" placement="top">
			<p>{{ scope.row.title }}</p>
		<div slot="reference" class="name-wrapper">
			<el-tag size="medium">{{ scope.row.title }}</el-tag>
		</div>
		</el-popover>
	</template>
	</el-table-column>
	<el-table-column
	label="内容"
	width="100">
	<template slot-scope="scope">
		<el-popover trigger="hover" placement="top">
		<p>{{ scope.row.content }}</p>
		<div slot="reference" class="name-wrapper">
			<el-tag size="medium">{{ scope.row.content }}</el-tag>
		</div>
		</el-popover>
	</template>
	</el-table-column>
	<el-table-column
	label="开始时间"
	width="100">
	<template slot-scope="scope">
		<el-popover trigger="hover" placement="top">
		<p>姓名: {{ scope.row.name }}</p>
		<p>住址: {{ scope.row.address }}</p>
		<div slot="reference" class="name-wrapper">
			<el-tag size="medium">{{ scope.row.start_time }}</el-tag>
		</div>
		</el-popover>
	</template>
	</el-table-column>
	<el-table-column
	label="结束时间"
	width="100">
	<template slot-scope="scope">
		<el-popover trigger="hover" placement="top">
		<p>姓名: {{ scope.row.name }}</p>
		<p>住址: {{ scope.row.address }}</p>
		<div slot="reference" class="name-wrapper">
			<el-tag size="medium">{{ scope.row.end_time }}</el-tag>
		</div>
		</el-popover>
	</template>
	</el-table-column>
	<el-table-column
	label="状态"
	width="50">
	<template slot-scope="scope">
		<el-popover  placement="top">
		<p>姓名: {{ scope.row.name }}</p>
		<p>住址: {{ scope.row.address }}</p>
		<div slot="reference" class="name-wrapper">
			<el-tag size="medium">{{ scope.row.state }}</el-tag>
		</div>
		</el-popover>
	</template>
	</el-table-column>
	<el-table-column
	label="负责人"
	width="100">
	<template slot-scope="scope">
		<el-popover trigger="hover" placement="top">
		<p>姓名: {{ scope.row.name }}</p>
		<p>住址: {{ scope.row.address }}</p>
		<div slot="reference" class="name-wrapper">
			<el-tag size="medium">{{ scope.row.person }}</el-tag>
		</div>
		</el-popover>
	</template>
	</el-table-column>
	<el-table-column
	label="迭代版本"
	width="100">
	<template slot-scope="scope">
		<el-popover trigger="hover" placement="top">
		<p>姓名: {{ scope.row.name }}</p>
		<p>住址: {{ scope.row.address }}</p>
		<div slot="reference" class="name-wrapper">
			<el-tag size="medium">{{ scope.row.edition }}</el-tag>
		</div>
		</el-popover>
	</template>
	</el-table-column>
	<el-table-column
	label="流转时间"
	width="200">
	<template slot-scope="scope">
		
		<div slot="reference" >
			<el-tag size="medium">{{ scope.row.flow_time }}</el-tag>
		</div>
		
	</template>
	</el-table-column>
    <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
  export default {
    data() {
      return {
				tableData:[
					{
					}
	
				],
//         tableData: [{
//           date: '2016-05-02',
//           name: '王小虎',
//           address: '上海市普陀区金沙江路 1518 弄'
//         }, {
//           date: '2016-05-04',
//           name: '王小虎',
//           address: '上海市普陀区金沙江路 1517 弄'
//         }, {
//           date: '2016-05-01',
//           name: '王小虎',
//           address: '上海市普陀区金沙江路 1519 弄'
//         }, {
//           date: '2016-05-03',
//           name: '王小虎',
//           address: '上海市普陀区金沙江路 1516 弄'
//         }
// 				],
				
				
			
      }
    },
    methods: {
      handleEdit(index, row) {
        console.log(index, row);
				this.$router.push({path:'/menuone'});
// 				this.axios.get('http://localhost:8181/task/selecttask?state=3',
// 				// this.axios.get('http://localhost:8181/task/selecttask?state=3',
// 												{
// 													headers: {'Content-Type': 'application/x-www-form-urlencoded',
// 													}
// 												}
// 				).then(function(response){
// 					console.log('点击事件',response);
// 				}).catch(function(error){
// 					console.log('点击事件',error);
// 				});
      },
      handleDelete(index, row) {
        console.log(index, row);
      }
     },
		 beforeCreate:function(){
			 	this.axios.get('http://localhost:8181/task/selecttask?state=3',
			 								{
			 									headers: {'Content-Type': 'application/x-www-form-urlencoded',
			 									}
			 								}
			 ).then((response)=>{
			 
				
				console.log(response.data.data);
				this.tableData=response.data.data;
				console.log('LIST=====',this.tableData);
				console.log('请求成功');
			 }).catch((error)=>{
			 	console.log('请求失败');
				console.log(error);
				
			 })
		 }
		
  }
</script>