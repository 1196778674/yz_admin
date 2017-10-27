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

		<div class="yx_page">
			<paginate
			  :page-count=page
			  :click-handler="pagination"
			  :active-class="'am-active'"
			  :container-class="'am-pagination'"
			  :prev-text="'上一页'"
			  :next-text="'下一页'">
			</paginate>
		</div>
	</div>
</template>
<script>
	import Search from '@/tpls/Search';
	import Paginate from 'vuejs-paginate';
	export default {
		name: 'Project',

		data() {
			return {
				page: 10
			}
		},
		components: {
			"search": Search,
			"paginate": Paginate
		},
		created: function () {
			Public.initSelect();
		},
		methods: {
			pagination (page) {
				console.log(page);
			}
		}
	}
</script>

<style scoped>
	
</style>