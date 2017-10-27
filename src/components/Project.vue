<template>
	<div class="yx_project">
		<search modal="false"></search>	

		<div class="am-scrollable-horizontal list_table">
	  		<table class="am-table am-table-bordered am-table-striped am-table-compact">
		  		<thead>
			  		<tr>
			    		<th>项目编号</th>
			    		<th>项目名称</th>
			    		<th>所属中心</th>
			    		<th>项目类别</th>
			    		<th>时间</th>
			    		<th>操作</th>
			  		</tr>
			  	</thead>
			  	<tbody>
				  	<tr>
					    <td>Amaze UI</td>
					    <td>http://amazeui.org</td>
					    <td>2012-10-01</td>
					    <td>Amaze UI</td>
					    <td>http://amazeui.org</td>
					    <td>2012-10-01</td>
				  	</tr>
				  	<tr>
					    <td>Amaze UI</td>
					    <td>http://amazeui.org</td>
					    <td>2012-10-01</td>
					    <td>Amaze UI</td>
					    <td>http://amazeui.org</td>
					    <td>2012-10-01</td>
				  	</tr>
				  	<tr>
					    <td>Amaze UI</td>
					    <td>http://amazeui.org</td>
					    <td>2012-10-01</td>
					    <td>Amaze UI</td>
					    <td>http://amazeui.org</td>
					    <td>2012-10-01</td>
				  	</tr>
			  	</tbody>
			</table>
		</div>

		<page></page>
	</div>
</template>
<script>
	import Search from '@/tpls/Search';
	import Page from '@/tpls/Page';
	export default {
		name: 'Project',

		data() {
			return {

			}
		},
		components: {
			"search": Search,
			"page": Page
		},
		created: function () {
			Public.initSelect();
		}	
	}
</script>

<style scoped>
	
</style>