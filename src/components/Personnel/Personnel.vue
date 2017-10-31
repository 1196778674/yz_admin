<template>
	<div>
		<search modal="false" @addEditFn="addEditFn" fromtype="personnel"></search>	

		<div class="am-scrollable-horizontal list_table">
	  		<table class="am-table am-table-bordered am-table-striped am-table-compact">
		  		<thead>
			  		<tr>
			    		<th>人员姓名</th>
			    		<th>所属中心</th>
			    		<th>职位等级</th>
			    		<th>时薪</th>
			    		<th>操作</th>
			  		</tr>
			  	</thead>
			  	<tbody>
				  	<tr>
					    <td>111-AZ</td>
					    <td>测试项目测试项目测试项目</td>
					    <td>测试中心测试中心</td>
					    <td>测试类别</td>
					    <td>
					    	<router-link :to="{ path: 'personneldetail', query: { id: 123 }}">
					    		<span class="am-icon-file-text-o"></span>
					    		查看详情
					    	</router-link>
					    	<a href="javascript:;" title="删除" class="am-delete" @click="deleteList($event, 1)">
					    		<span class="am-icon-trash-o"></span>
					    		删除
					    	</a>
					    </td>
				  	</tr>
				  	<tr>
					    <td>111-AZ</td>
					    <td>测试项目测试项目测试项目</td>
					    <td>测试中心测试中心</td>
					    <td>测试类别</td>
					    <td>
					    	<router-link to="#">
					    		<span class="am-icon-file-text-o"></span>
					    		查看详情
					    	</router-link>
					    	<a href="javascript:;" title="删除" class="am-delete" @click="deleteList($event, 1)">
					    		<span class="am-icon-trash-o"></span>
					    		删除
					    	</a>
					    </td>
				  	</tr>
				  	<tr>
					    <td>111-AZ</td>
					    <td>测试项目测试项目测试项目</td>
					    <td>测试中心测试中心</td>
					    <td>测试类别</td>
					    <td>
					    	<router-link to="#">
					    		<span class="am-icon-file-text-o"></span>
					    		查看详情
					    	</router-link>
					    	<a href="javascript:;" title="删除" class="am-delete" @click="deleteList($event, 1)">
					    		<span class="am-icon-trash-o"></span>
					    		删除
					    	</a>
					    </td>
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
		name: 'Personnel',

		data() {
			return {
				page: 10
			}
		},
		created: function () {
			Public.initSelect();
		},
		components: {
			"search": Search,
			"paginate": Paginate
		},
		methods: {
			pagination (page) {
				console.log(page);
			},
			deleteList (e, id) {
				Public.deleteModal(e, id, function(){
					console.log('delete');
				});
			},
			addEditFn (e) {
				Public.addEditFn(e, '1', this.htm(), function(){
					console.log(1);
				});
			},
			htm () {
					return '<div class="am-modal am-modal-prompt" tabindex="-1" id="add-edit-modal">'+
						'<div class="am-modal-dialog">'+
						'<div class="am-modal-hd">添加/编辑</div>'+
						'<div class="am-modal-bd">'+
						'sdsfsdf'+
						'</div>'+
						'<div class="am-modal-footer">'+
						'<span class="am-modal-btn" data-am-modal-cancel>取消</span>'+
						'<span class="am-modal-btn" data-am-modal-confirm>提交</span>'+
						'</div>'+
						'</div>'+
						'</div>';
			}
		}
	}
</script>

<style scoped>
	
</style>