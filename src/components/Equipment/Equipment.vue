<template>
	<animated-fade-in-right>
		<div>
			<search modal="false" @searchFn="searchFn" fromtype="equipment"></search>	

			<div class="am-scrollable-horizontal list_table">
		  		<table class="am-table am-table-bordered am-table-striped am-table-compact">
			  		<thead>
				  		<tr>
				    		<th>设备编号</th>
				    		<th>设备名称</th>
				    		<th>品牌</th>
				    		<th>所属中心</th>
				    		<th>摆放诊室</th>
				    		<th>操作</th>
				  		</tr>
				  	</thead>
				  	<tbody>
					  	<tr v-for="item in list">
						    <td>{{item.code}}</td>
						    <td>{{item.name}}</td>
						    <td>{{item.brands}}</td>
						    <td>{{item.center_name}}</td>
						    <td>{{item.clinics_name}}</td>
						    <td>
						    	<router-link :to="{ path: 'equipmentdetail', query: { id: item.id }}">
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

			<div class="yx_page" v-if="page_total > 1">
				<paginate
				  :page-count=page_total
				  :click-handler="pagination"
				  :active-class="'am-active'"
				  :container-class="'am-pagination'"
				  :prev-text="'上一页'"
				  :next-text="'下一页'">
				</paginate>
			</div>
		</div>
	</animated-fade-in-right>
</template>

<script>
	import Search from '@/tpls/Search';
	import Paginate from 'vuejs-paginate';
	export default {
		name: 'Equipment',

		data() {
			return {
				page_total: 0,
				current_page: this.$route.query.page || 1,
				list: ''
			}
		},
		created: function () {
			Public.initSelect();
			this.getList(this.current_page);
		},
		components: {
			"search": Search,
			"paginate": Paginate
		},
		methods: {
			getList (page, param) {
				var self = this;
				var params = {
					current_page: page
				};
				params = $.extend(true, params, param);
				if (param) {
					var url = 'equipment/search';
				} else {
					var url = 'equipment/list';
				}
				Public.Ajax(url, params, 'GET', function(res){
					if (param) {
						self.list = res.data;
					} else {
						self.list = res.data.list;
						self.page_total = res.data.total_page;
					}
				});
			},
			pagination (page) {
				this.getList(page);
			},
			deleteList (e, id) {
				var self = this;
				Public.deleteModal(e, id, function(){
					// console.log(id);
					// return;
					Public.Ajax('equipment/del', {equipment_id: id}, 'GET', function(res){
						self.getList(self.current_page);
					});
				});
			},
			searchFn (params) {
				this.getList(this.current_page, params);
			}
		}
	}
</script>

<style scoped>

</style>