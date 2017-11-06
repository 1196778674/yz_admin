<template>
	<div>
		<search modal="false" @searchFn="searchFn" fromtype="modular"></search>	

		<div class="am-scrollable-horizontal list_table">
	  		<table class="am-table am-table-bordered am-table-striped am-table-compact">
		  		<thead>
			  		<tr>
			    		<th>模块编号</th>
			    		<th>模块名称</th>
			    		<th>中心</th>
			    		<th>执行人</th>
			    		<th>时间</th>
			    		<th>操作</th>
			  		</tr>
			  	</thead>
			  	<tbody>
				  	<tr v-for="item in list">
					    <td>{{item.code}}</td>
					    <td>{{item.name}}</td>
					    <td>{{item.center_name}}</td>
					    <td>{{item.job_grade_list}}</td>
					    <td>{{item.time}}</td>
					    <td>
					    	<router-link :to="{ path: 'modulardetail', query: { id: item.id }}">
					    		<span class="am-icon-file-text-o"></span>
					    		查看详情
					    	</router-link>
					    	<a href="javascript:;" title="删除" class="am-delete" @click="deleteList($event, item.id)">
					    		<span class="am-icon-trash-o"></span>
					    		删除
					    	</a>
					    </td>
				  	</tr>
			  	</tbody>
			</table>
		</div>

		<div class="yx_page" v-if="page > 1">
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
		name: 'Modular',

		data() {
			return {
				page: 0,
				list: '',
				current_page: 1,
			}
		},
		created: function () {
			Public.initSelect();
			this.getList();
		},
		components: {
			"search": Search,
			"paginate": Paginate
		},
		methods: {
			getList () {
				var self = this;
				var params = {
					current_page: this.current_page
				};
				Public.Ajax('module/list', params, 'GET', function(res){
					self.list = res.data.list;
					self.page = res.data.total_page;
				});
			},
			searchFn (params) {
				console.log(params);
			},
			pagination (page) {
				this.current_page = page;
			},
			deleteList (e, id) {
				var self = this;
				Public.deleteModal(e, id, function(){
					console.log({module_id: id});
					return;
					Public.Ajax('module/del', {module_id: id}, 'GET', function(res){
						self.getList(self.current_page);
					});
				});
			},
		}
	}
</script>

<style scoped>
	
</style>