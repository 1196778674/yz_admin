<template>
	<animated-fade-in-right>
		<div>
			<search modal="true" search="false" @addEditFn="addEditFn" fromtype="personnel"></search>	

			<div class="am-scrollable-horizontal list_table">
		  		<table class="am-table am-table-bordered am-table-compact">
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
					  	<tr v-for="item in list">
						    <td>{{item.name}}</td>
						    <td>{{item.center_name}}</td>
						    <td>{{item.job_grade_name}}</td>
						    <td>{{item.hourly_wage}}</td>
						    <td>
						    	<a href="javascript:;" title="编辑" @click="edit($event, item.id, item)">
						    		<span class="am-icon-edit"></span>
						    		编辑
						    	</a>
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
	</animated-fade-in-right>
</template>

<script>
	import Search from '@/tpls/Search';
	import Paginate from 'vuejs-paginate';
	export default {
		name: 'Personnel',

		data() {
			return {
				page: 1,
				list: '',
				current_page: 1,
				person: {
					name: '',
					job_grade_name: '',
					center_id: '',
					hourly_wage: ''
				},
				center_list: []
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
			getList (page) {
				var self = this;
				Public.Ajax ('personnel/list', {}, 'GET', function(res){
					self.list = res.data;
				});
				Public.Ajax('center/list', {}, 'GET', function(res){
					self.center_list = res.data;
				});
			},
			pagination (page) {
				console.log(page);
				// this.getList(page);
			},
			deleteList (e, id) {
				var self = this;
				Public.deleteModal(e, id, function(){
					// console.log(id);
					// return;
					Public.Ajax('personnel/del', {personnel_id: id}, 'GET', function(res){
						self.getList();
					});
				});
			},
			addEditFn (e) {
				var self = this;
				this.person = {
					name: '',
					job_grade_name: '',
					center_id: '',
					hourly_wage: ''
				};
				Public.addEditFn(e, '', this.htm(this.person), function(){
					self.person = {
						name: $('#name').val(),
						job_grade_name: $('#job_grade_name').val(),
						center_id: $('#center_id').val(),
						hourly_wage: $('#hourly_wage').val()
					};
					// console.log(self.person);
					// return;
					Public.Ajax('personnel/add', self.person, 'POST', function(res){
						self.getList();
					});
				}, function(){
					Public.keyEnter();
				});
			},
			edit (e, id, obj) {
				var self = this;
				Public.addEditFn(e, '', this.htm(obj), function(){
					self.person = {
						name: $('#name').val(),
						job_grade_name: $('#job_grade_name').val(),
						center_id: $('#center_id').val(),
						hourly_wage: $('#hourly_wage').val()
					};
					self.person.personnel_id = id;
					// console.log(self.person);
					// return;
					Public.Ajax('personnel/edit', self.person, 'POST', function(res){
						self.getList();
					});
				}, function(){
					Public.keyEnter();
				});
			},
			htm (obj) {
				console.log(obj);
					if (!!obj.id) {
						var title = '编辑人员';
					} else {
						var title = '添加人员';
					};
					var option = '';
					for (var i = 0; i < this.center_list.length; i++) {
						if (this.center_list[i].id == obj.center_id) {
							option += '<option value="'+this.center_list[i].id+'" selected>'+this.center_list[i].name+'</option>';
						} else {
							option += '<option value="'+this.center_list[i].id+'">'+this.center_list[i].name+'</option>';
						}
					}
					return '<div class="am-modal am-modal-prompt" tabindex="-1" id="add-edit-modal">'+
						'<div class="am-modal-dialog">'+
						'<div class="am-modal-hd">'+title+'</div>'+
						'<div class="am-modal-bd" style="padding: 0px;">'+
						'<div class="am-modal-hd" style="padding: 20px;padding-bottom: 0px;"><div action="" class="am-form">'+
						'<div class="am-form-group">'+
						'<input type="text" id="name" value="'+obj.name+'" class="am-form-field" placeholder="请输入人员姓名">'+
						'</div>'+
						'<div class="am-form-group">'+
						'<select data-am-selected id="center_id" value="'+obj.center_id+'">'+
						option+
						'</select>'+
						'</div>'+
						'<div class="am-form-group">'+
						'<input type="text" id="job_grade_name" value="'+obj.job_grade_name+'" class="am-form-field" placeholder="请输入职位等级">'+
						'</div>'+
						'<div class="am-form-group">'+
						'<input type="text" id="hourly_wage" value="'+obj.hourly_wage+'" class="am-form-field" placeholder="请输入时薪">'+
						'</div>'+
						'</div>'+
						'</div>'+
						'<div class="am-modal-footer">'+
						'<span class="am-modal-btn" data-am-modal-cancel>取消</span>'+
						'<span id="modal_confirm" class="am-modal-btn" data-am-modal-confirm>确认</span>'+
						'</div>'+
						'</div>'+
						'</div>';
			}
		}
	}
</script>

<style scoped>

</style>