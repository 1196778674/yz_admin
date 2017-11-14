<template>
	<div class="form_container">
		<h2 class="title">{{title}}</h2>
		<div class="am-form froms am-form-horizontal">
			<div class="am-u-sm-8 am-u-sm-offset-2">
				<div class="am-form-group">
					<label for="doc-ipt-3" class="am-u-sm-2 am-form-label"><span>*</span>项目名称</label>
					<div class="am-u-sm-10">
						<input type="text" class="am-radius" v-model="forms.name" placeholder="输入您的项目名称">
					</div>
				</div>
				<div class="am-form-group">
					<label for="doc-ipt-3" class="am-u-sm-2 am-form-label"><span>*</span>所属中心</label>
					<div class="am-u-sm-10">
						<select data-am-selected="{btnWidth: '100%', maxHeight: 200}" id="center_name">
						</select>
					</div>
				</div>
				<div class="am-form-group am-form-icon am-form-feedback">
					<label for="doc-ipt-3" class="am-u-sm-2 am-form-label"><span>*</span>项目模块</label>
					<div class="am-u-sm-10">
						<p class="am-radius" @click="addEditFn($event, '项目模块')">选中{{forms.module_list.length}}个模块</p>
						<span class="am-icon-ellipsis-h"></span>
					</div>
					<div class="am-u-sm-10 am-u-sm-offset-2 show_detail_list module_show_list" v-if="forms.module_list.length > 0">
						<ul v-for="(module, key) in forms.module_list">
							<li v-for="(item, i) in module">
								<span v-if="module.length > 1">
									{{key+1}}-{{i+1}},{{item.name}}
								</span>
								<span v-else>
									{{key+1}},{{item.name}}
								</span>
							</li>
						</ul>
					</div>
				</div>
				<div class="am-form-group">
					<label for="doc-ipt-3" class="am-u-sm-2 am-form-label"><span>*</span>项目类别</label>
					<div class="am-u-sm-10">
						<select data-am-selected="{btnWidth: '100%', maxHeight: 200}" id="category_name">
						</select>
					</div>
				</div>
				<div class="am-form-group am-form-icon am-form-feedback">
					<label for="doc-ipt-3" class="am-u-sm-2 am-form-label">执行人等级</label>
					<div class="am-u-sm-10">
						<p class="am-radius">
							<span v-for="item in system.job_grades">
								{{item.name}}
							</span>
						</p>
					</div>
				</div>
				<div class="am-form-group">
					<label for="doc-ipt-3" class="am-u-sm-2 am-form-label">是否医疗</label>
					<div class="am-u-sm-10">
						<p class="am-radius">{{system.whether_medical_name}}</p>
					</div>
				</div>
				<div class="am-form-group am-form-icon am-form-feedback">
					<label for="doc-ipt-3" class="am-u-sm-2 am-form-label">项目时间</label>
					<div class="am-u-sm-10">
						<input type="text" class="am-radius" v-model="forms.time" maxlength="4" placeholder="输入项目分钟数">
						<span class="am-icon-ellipsis">分钟</span>
					</div>
				</div>
				<div class="am-form-group">
					<label for="doc-ipt-3" class="am-u-sm-2 am-form-label">年龄限制</label>
					<div class="am-u-sm-10">
						<p class="am-radius">{{system.age_limit}}</p>
					</div>
				</div>
				<div class="am-form-group">
					<label for="doc-ipt-3" class="am-u-sm-2 am-form-label">性别限制</label>
					<div class="am-u-sm-10">
						<p class="am-radius">{{system.gender_limit_name}}</p>
					</div>
				</div>
				<div class="am-form-group">
					<label for="doc-ipt-3" class="am-u-sm-2 am-form-label">诊室</label>
					<div class="am-u-sm-10">
						<p class="am-radius">
							<span v-for="item in system.module_clinics">
								{{item.name}}
							</span>
						</p>
					</div>
				</div>
				<div class="am-form-group">
					<label for="doc-ipt-3" class="am-u-sm-2 am-form-label">设备</label>
					<div class="am-u-sm-10">
						<p class="am-radius">
							<span v-for="item in system.module_equipment">
								{{item.name}}
							</span>
						</p>
					</div>
				</div>
				<div class="am-form-group">
					<label for="doc-ipt-3" class="am-u-sm-2 am-form-label">用品</label>
					<div class="am-u-sm-10">
						<p class="am-radius">
							<span v-for="item in system.module_supplies">
								{{item.name}}
							</span>
						</p>
					</div>
				</div>
				<div class="am-form-group am-form-icon am-form-feedback">
					<label for="doc-ipt-3" class="am-u-sm-2 am-form-label">适应症</label>
					<div class="am-u-sm-10">
						<p class="am-radius" @click="addEditFn($event, '适应症')">选中了{{forms.module_indications_labels.length}}个适应症</p>
						<span class="am-icon-ellipsis-h"></span>
					</div>
					<div class="am-u-sm-10 am-u-sm-offset-2 show_detail_list" v-if="forms.module_indications_labels.length > 0">
						<span v-for="v in forms.module_indications_labels">{{v.name}}</span>
					</div>
				</div>
				<div class="am-form-group">
					<label for="doc-ipt-3" class="am-u-sm-2 am-form-label">禁忌症</label>
					<div class="am-u-sm-10">
						<p class="am-radius">
							<span v-for="item in system.module_contraindications_labels">
								{{item.name}}
							</span>
						</p>
					</div>
				</div>
				<div class="am-form-group am-form-icon am-form-feedback">
					<label for="doc-ipt-3" class="am-u-sm-2 am-form-label">作用部位</label>
					<div class="am-u-sm-10">
						<p class="am-radius" @click="addEditFn($event, '作用部位')">选中了{{forms.module_working_part_labels.length}}个作用部位</p>
						<span class="am-icon-ellipsis-h"></span>
					</div>
					<div class="am-u-sm-10 am-u-sm-offset-2 show_detail_list" v-if="forms.module_working_part_labels.length > 0">
						<span v-for="v in forms.module_working_part_labels">{{v.name}}</span>
					</div>
				</div>
				<div class="am-form-group">
					<label for="doc-ipt-3" class="am-u-sm-2 am-form-label">作用功能</label>
					<div class="am-u-sm-10">
						<p class="am-radius">
							<span v-for="item in system.module_function_labels">
								{{item.name}}
							</span>
						</p>
					</div>
				</div>
				<div class="am-form-group am-form-icon am-form-feedback">
					<label for="doc-ipt-3" class="am-u-sm-2 am-form-label">不良反应</label>
					<div class="am-u-sm-10">
						<textarea name="" v-model="forms.adverse_reaction"></textarea>
					</div>
				</div>
				<div class="am-form-group am-form-icon am-form-feedback">
					<label for="doc-ipt-3" class="am-u-sm-2 am-form-label">注意事项</label>
					<div class="am-u-sm-10">
						<textarea name="" v-model="forms.considerations"></textarea>
					</div>
				</div>
				<div class="am-form-group am-form-icon am-form-feedback">
					<label for="doc-ipt-3" class="am-u-sm-2 am-form-label">备注</label>
					<div class="am-u-sm-10">
						<textarea name="" v-model="forms.remark"></textarea>
					</div>
				</div>
				<div class="am-form-group am-form-icon am-form-feedback">
					<label for="doc-ipt-3" class="am-u-sm-2 am-form-label">成本</label>
					<div class="am-u-sm-5">
						<p>{{system.expected_cost}}</p>
						<span class="am-icon-ellipsis">元</span>
					</div>
				</div>
				<div class="am-form-group am-form-icon am-form-feedback">
					<label for="doc-ipt-3" class="am-u-sm-2 am-form-label">市场价</label>
					<div class="am-u-sm-5">
						<input type="text" class="am-radius" maxlength="9" v-model="forms.market_price" placeholder="市场价">
						<span class="am-icon-ellipsis">元</span>
					</div>
				</div>
				<div class="am-form-group am-form-icon am-form-feedback">
					<label for="doc-ipt-3" class="am-u-sm-2 am-form-label">会员价</label>
					<div class="am-u-sm-5">
						<input type="text" class="am-radius" maxlength="9" v-model="forms.member_price" placeholder="会员价">
						<span class="am-icon-ellipsis">元</span>
					</div>
				</div>


				<div class="am-form-group">
					<div class="am-u-sm-10 am-u-sm-offset-2">
						<button type="submit" class="am-btn am-btn-primary" @click="saveProject($event)">确认提交</button>
					</div>
				</div>
				<div class="clear"></div>
			</div>
		</div>
	</div>
</template>

<script>

	export default {
		name: 'Projectform',
		data () {
			return {
				title: !!this.$route.query.project_id ? '编辑项目' : '添加项目',
				forms: {
					min_age_limit: '',
					max_age_limit: '',
					module_list: [],
					category_id: '',
					center_id: '',
					description: '',
					time: '',
					gender_limit: '',
					considerations: '',
					adverse_reaction: '',
					remark: '',
					module_indications_labels: [],
					module_working_part_labels: [],
					market_price: '',
					member_price: ''
				},
				system: {
					job_grades: [],
					module_equipment: [],
					module_supplies: [],
					module_clinics: [],
					whether_medical_name: '',
					module_working_part_labels: [],
					module_indications_labels: [],
					module_contraindications_labels: [],
					module_function_labels: [],
					gender_limit_name: '',
					age_limit: '',
					expected_cost: ''
				},
				center_list: '',
				category_list: [],
				module_list_arr: '',
				checked_list: [],
				indications_list: [],
				working_part_list: []
			}
		},
		created () {
			if (!!this.$route.query.project_id) {
				this.getDetail(this.$route.query.project_id);
			} else {
				this.getCenter();
			};
			// this.getCenter();
			this.getModuleList();
			this.getLabels();
		},
		methods: {
			getDetail (id) {
				var self = this;
				Public.Ajax('project/detail', {project_id: id}, 'GET', function(res){
					self.forms = res.data;
					self.getCenter();
					self.getSystem();
				});
			},
			getLabels () {
				var self = this;
				Public.Ajax('label/selectList', {label_category_id: 1}, 'GET', function(res){
					self.indications_list = res.data;
				});
				Public.Ajax('label/selectList', {label_category_id: 4}, 'GET', function(res){
					self.working_part_list = res.data;
				});
			},
			getModuleList () {
				var self = this;
				var params = {
					center_id: 0,
					label_category_id: 0,
					label_key_word: 0
				};
				Public.Ajax('module/search', params, 'GET', function(res){
					self.module_list_arr = res.data;
				});
			},
			getCenter () {
				var self = this;
				Public.Ajax('center/list', {}, 'GET', function(res){
					self.center_list = res.data;
					self.center_list.unshift({id: 0, name: '中心选择'});
					var options = '';
					var center_id = self.forms.center_id;
					var eq;
					if (!!self.$route.query.project_id) {
						$.each(self.center_list, function(index, val) {
							 if (val.id == center_id) {
							 	eq = index;
							 }
						});
					}
					for (var i = 0; i < self.center_list.length; i++) {
						if (eq == i) {
							options += '<option value="'+self.center_list[i].id+'" selected>'+self.center_list[i].name+'</option>';
						} else {
							options += '<option value="'+self.center_list[i].id+'">'+self.center_list[i].name+'</option>';
						};
					};
					$('#center_name').append(options);
					Public.initSelect();
					self.getCategory();
					$('#center_name').on('change', function(){
						self.getCategory();
					});
				});
			},
			getCategory () {
				var self = this;
				// category_name
				var params = {
					center_id: $('#center_name').val()
				};
				if (params.center_id == 0) {
					return;
				}
				Public.Ajax('category/listByCenterId', params, 'GET', function(res){
					self.category_list = res.data;
					var options = '';
					var category_id = self.forms.category_id;
					var eq;
					if (!!self.$route.query.project_id) {
						$.each(self.category_list, function(index, val) {
							 if (val.id == category_id) {
							 	eq = index;
							 }
						});
					}
					for (var i = 0; i < self.category_list.length; i++) {
						if (eq == i) {
							options += '<option value="'+self.category_list[i].id+'" selected>'+self.category_list[i].name+'</option>';
						} else {
							options += '<option value="'+self.category_list[i].id+'">'+self.category_list[i].name+'</option>';
						};
					};
					$('#category_name').html('').append(options);
					Public.initSelect();
				});
			},
			noLimit () {
				this.forms.min_age_limit = '';
				this.forms.max_age_limit = '';
			},
			getSystem () {
				var self = this;
				var params = {
					module_list: JSON.stringify(self.forms.module_list)
				};
				Public.Ajax('project/getModuleDataForProject', params, 'GET', function(res){
					self.system = res.data;
				});
			},
			addEditFn (e, title) {
				var self = this;
				var module_eq;
				if (title == '项目模块') {
					self.forms.module_list = [];
				} else if (title == '适应症') {
					// self.forms.module_indications_labels = [];
				} else if (title == '作用部位') {
					// self.forms.module_working_part_labels = [];
				};
				Public.addEditFn(e, '', self.selectHtm(title, self.module_list_arr), function(){
					// console.log(self.forms.module_list);
					if (title == '项目模块') {
						self.getSystem();
					} else if (title == '适应症') {
						self.forms.module_indications_labels = [];
						$.each(self.indications_list, function(k, val) {
							 var id = val.id + '';
							 if ($.inArray(id, self.checked_list) > -1) {
							 	self.forms.module_indications_labels.push(val);
							 }
						});
					} else if (title == '作用部位') {
						self.forms.module_working_part_labels = [];
						$.each(self.working_part_list, function(k, val) {
							 var id = val.id + '';
							 if ($.inArray(id, self.checked_list) > -1) {
							 	self.forms.module_working_part_labels.push(val);
							 }
						});
					}
				}, function(){
					$('body').unbind('click').on('click', '.check_items', function(e){
						var is_checked = $(e.target).prop('checked'),
							id = $(e.target).val(),
							name = $(e.target).data('name');
						if (is_checked) {
							if (module_eq != undefined) {
								self.forms.module_list[module_eq].push({id: id, name: name});
								module_eq = undefined;
							} else {
								self.forms.module_list.push([{id: id, name: name}]);
							};
						} else {
							$.each(self.forms.module_list, function(index, val) {
							 	$.each(val, function(i, v) {
								 	if (v.id == id) {
								 	 	val.splice(i,1);
								 	 	return false;
							 	 	};
							 	});
								 if (val.length == 0) {
								 	self.forms.module_list.splice(index,1);
								 	return false;
								 }
							});
						};
						// console.log(module_eq, self.forms.module_list);
						var module_item = '';
						$.each(self.forms.module_list, function(index, val) {
							module_item += '<ul>';
						 	$.each(val, function(i, v) {
						 		if (val.length > 1) {
						 			module_item += '<li class="module_active"><span>'+(index+1)+'-'+(i+1)+'</span>'+v.name+'</li>';
						 		} else {
						 			module_item += '<li class="module_active"><span>'+(index+1)+'</span>'+v.name+'</li>';
						 		}
						 	});
						 	module_item += '</ul>';
						});
						$('#module_list_container').html('').html(module_item);
					});
					$('body').on('click', '.module_active', function(e){
						if ($(e.target).hasClass('active')) {
							$(e.target).removeClass('active');
							module_eq = undefined;
						} else {
							if ($(e.target).prev('li').length) {
								return false;
							};
							$(e.target).addClass('active');
							$(e.target).siblings().removeClass('active');
							$(e.target).parent('ul').siblings().children('li').removeClass('active');
							module_eq = $(e.target).parent('ul').index();
						};
					});
					$('#addCheckList').on('click', function(e){
						var val = $('#add_check_name').val();
						if (title == '适应症') {
							var type = 1;
						} else {
							var type = 4;
						}
						Public.Ajax('label/add', {label_category_id: type, name: val}, 'POST', function(res){
							Public.Ajax('label/selectList', {label_category_id: type}, 'GET', function(res){
								$('#add_check_name').val('');
								var list = res.data,
									item = '';
								for (var i = 0; i < list.length; i++) {
									item += '<li>'+
											'<label class="am-checkbox-inline">'+
											'<input class="checks" type="checkbox" value="'+list[i].id+'">'+list[i].name+''+
											'</label>'+
											'</li>';	
								};
								$('#checked_arr_list').html(item);
							});
						});
					});
					$('body').on('click', '.checks', function(e) {
						self.checked_list = [];
						$('.checks').each(function(k, v){
							var is_checked = $(v).prop('checked'),
								id = $(v).val();
							if (is_checked) {
								self.checked_list.push(id);
							};
						});
					});
				});
			},
			saveProject (e) {
				var self = this;
				Public.addModel(e, self.save);
			},
			save () {
				var self = this;
				self.forms.center_id = $('#center_name').val();
				self.forms.category_id = $('#category_name').val();
				self.forms.module_indications_labels = JSON.stringify(self.forms.module_indications_labels);
				self.forms.module_list = JSON.stringify(self.forms.module_list);
				self.forms.module_working_part_labels = JSON.stringify(self.forms.module_working_part_labels);
				if (!!self.$route.query.project_id) {
					var url = 'project/edit';
					this.forms.project_id = this.$route.query.project_id;
				} else {
					var url = 'project/add';
				}
				if (!self.forms.name) {
					Public.dialog('请输入项目名称');
					self.returnString();
					return false;
				}
				if (!self.forms.center_id) {
					Public.dialog('请选择所属中心');
					self.returnString();
					return false;
				}
				if (!self.forms.category_id) {
					Public.dialog('请选择项目类别');
					self.returnString();
					return false;
				}
				Public.Ajax(url, self.forms, 'POST', function(res){
					if (!!self.$route.query.project_id) {
						window.location.href = '#/projectdetail?id=' + self.$route.query.project_id;
					} else {
						window.location.href = '#/project';
					}
				}, function(){
					self.returnString();
				});
			},
			returnString () {
				var self = this;
				self.forms.module_indications_labels = JSON.parse(self.forms.module_indications_labels);
				self.forms.module_list = JSON.parse(self.forms.module_list);
				self.forms.module_working_part_labels = JSON.parse(self.forms.module_working_part_labels);
			},
			selectHtm (title, list) {
				var self = this;
				var addBtn = '<li style="width: 30%; margin-left:15px; margin-top: 10px;">'+
						'<div class="am-input-group">'+
						'<input type="text" id="add_check_name" class="am-form-field" style="height: 30px;line-height: 30px;border: 1px solid #ccc; border-top-left-radius: 3px;border-bottom-left-radius: 3px;" placeholder="添加'+title+'">'+
						'<span class="am-input-group-btn">'+
						'<button class="am-btn am-btn-secondary" id="addCheckList" type="button" style="height: 30px;border: 1px solid #3bb4f2;">添加</button>'+
						'</span>'+
						'</div>'+
						'</li>';
				if (title == '项目模块') {
					var items = '';
					for (var i = 0; i < self.module_list_arr.length; i++) {
						var data = self.module_list_arr[i];
						items += '<tr>'+
							'<td><input type="checkbox" class="check_items" data-name="'+data.name+'" value="'+data.id+'"/></td>'+
							'<td>'+data.code+'</td>'+
							'<td>'+data.name+'</td>'+
							'<td>'+data.center_name+'</td>'+
							'<td>'+data.job_grade_list+'</td>'+
							'<td>'+data.time+'</td>'+
							'</tr>';
					}
					if (self.module_list_arr.length == 0) {
						var item = '无模块，请添加模块！'
					} else {
						var item = '<table class="am-table am-table-bordered am-table-striped am-table-compact">'+
							'<thead>'+
							'<tr>'+
							'<th></th>'+
							'<th>模块编号</th>'+
							'<th>模块名称</th>'+
							'<th>中心</th>'+
							'<th>执行人</th>'+
							'<th>时间</th>'+
							'</tr>'+
							'</thead>'+
							'<tbody>'+
							items +
							'</tbody>'+
							'</table>';
					}
					var addBtn = '';
				} else if (title == '适应症') {
					var item = '';
					var arr = [];
					$.each(self.forms.module_indications_labels, function(index, val) {
						 arr.push(val.id);
					});
					$.each(self.indications_list, function(index, val) {
						var id = val.id;
						if ($.inArray(id, arr) > '-1') {
							item += '<li>'+
								'<label class="am-checkbox-inline">'+
								'<input class="checks" checked type="checkbox" value="'+id+'">'+val.name+
								'</label>'+
								'</li>';
						} else {
							item += '<li>'+
								'<label class="am-checkbox-inline">'+
								'<input class="checks" type="checkbox" value="'+id+'">'+val.name+
								'</label>'+
								'</li>';
						}
					});
				} else if (title == '作用部位') {
					var item = '';
					var arr = [];
					$.each(self.forms.module_working_part_labels, function(index, val) {
						 arr.push(val.id);
					});
					$.each(self.working_part_list, function(index, val) {
						var id = val.id;
						if ($.inArray(id, arr) > '-1') {
							item += '<li>'+
								'<label class="am-checkbox-inline">'+
								'<input class="checks" checked type="checkbox" value="'+id+'">'+val.name+
								'</label>'+
								'</li>';
						} else {
							item += '<li>'+
								'<label class="am-checkbox-inline">'+
								'<input class="checks" type="checkbox" value="'+id+'">'+val.name+
								'</label>'+
								'</li>';
						}
					});
				}
				return '<div class="am-modal am-modal-prompt" tabindex="-1" id="add-edit-modal">'+
						'<div class="am-modal-dialog">'+
						'<div class="am-modal-hd">'+title+'</div>'+
						'<div class="am-modal-bd">'+
						'<div id="module_list_container">'+
						'</div>'+
						'<ul id="checked_arr_list">'+
						item +
						'</ul>'+
						addBtn +
						'</div>'+
						'<div class="am-modal-footer">'+
						'<span class="am-modal-btn" data-am-modal-cancel>取消</span>'+
						'<span class="am-modal-btn" data-am-modal-confirm>提交</span>'+
						'</div>'+
						'</div>'+
						'</div>';
			},
		}
	}
</script>
<style scoped>
	.froms .am-form-group p.am-radius{
		line-height: 25px;
		padding-left: 5px;
		font-size: 13px;
	}
	.form_container{
		overflow: hidden;
		padding-bottom: 50px;
	}
	.form_container .am-u-sm-5{
		float: left;
		width: 33%;
	}
	.show_detail_list span{
		font-size: 13px;
		margin-right: 10px;
		color: #777;
	}
	[class*=am-u-]+[class*=am-u-]:last-child{
		float: left;
	}
	.am-table-bordered>tbody>tr>td, .am-table-bordered>tbody>tr>th, .am-table-bordered>tfoot>tr>td, .am-table-bordered>tfoot>tr>th, .am-table-bordered>thead>tr>td, .am-table-bordered>thead>tr>th, .am-table-bordered>thead+tbody>tr:first-child>td, .am-table-bordered>thead+tbody>tr:first-child>th{
		word-break: keep-all;
	}
</style>