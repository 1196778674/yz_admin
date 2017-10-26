<template>
	<div class="yx_project">
		<div class="list_header am-form">
			<div class="list_left">
				<select data-am-selected>
					<option value="-1" selected>中心选择</option>
			  		<option value="a">Apple</option>
				  	<option value="b">Banana</option>
				  	<option value="o">Orange</option>
				  	<option value="m">Mango</option>
				</select>
			</div>
			<div class="list_left">
				<select data-am-selected>
					<option value="-1" selected>标签选择</option>
			  		<option value="a">Apple</option>
				  	<option value="b">Banana</option>
				  	<option value="o">Orange</option>
				  	<option value="m">Mango</option>
				</select>
			</div>
			<div class="am-form-group am-form-icon list_left">
			    <i class="am-icon-search"></i>
			    <input type="text" class="am-form-field" placeholder="搜索">
		  	</div>
		  	<button type="button" class="am-btn am-btn-primary list_left">搜索</button>
		  	<div class="list_btn">
		  		<button type="button" class="am-btn am-btn-primary">
		  			<i class="am-icon-plus"></i>
		  			添加
		  		</button>
		  	</div>
		  	<div class="clear"></div>
		</div>		
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
				  	<tr class="am-active">
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
	</div>
</template>
<script>
	export default {
		name: 'Project',

		data() {
			return {

			}
		},
		created: function () {
			Public.initSelect();
		}	
	}
</script>

<style scoped>
	
</style>