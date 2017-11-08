<template>
	<div class="form_container">
		<div class="am-form froms am-form-horizontal">
			<div class="am-u-sm-8 am-u-sm-offset-2">
				<div class="am-form-group">
					<label for="doc-ipt-3" class="am-u-sm-2 am-form-label"><span>*</span>项目名称</label>
					<div class="am-u-sm-10">
						<input type="text" class="am-radius" placeholder="输入您的项目名称">
					</div>
				</div>
				<div class="am-form-group">
					<label for="doc-ipt-3" class="am-u-sm-2 am-form-label"><span>*</span>项目类别</label>
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
					<div class="am-u-sm-10 show_detail_list module_show_list" v-if="forms.module_list.length > 0">
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
						<!-- <span v-for="v in forms.module_list">{{v.name}}</span> -->
					</div>
				</div>
				<div class="am-form-group am-form-icon am-form-feedback">
					<label for="doc-ipt-3" class="am-u-sm-2 am-form-label"><span>*</span>所属中心</label>
					<div class="am-u-sm-10">
						<p class="am-radius" @click="addEditFn($event, '所属中心')"></p>
						<span class="am-icon-ellipsis-h"></span>
					</div>
				</div>
				<div class="am-form-group am-form-icon am-form-feedback">
					<label for="doc-ipt-3" class="am-u-sm-2 am-form-label"><span>*</span>执行人等级</label>
					<div class="am-u-sm-10">
						<p class="am-radius" @click="addEditFn($event, '执行人等级')"></p>
						<span class="am-icon-ellipsis-h"></span>
					</div>
				</div>
				<div class="am-form-group">
					<label for="doc-ipt-3" class="am-u-sm-2 am-form-label">是否医疗</label>
					<div class="am-u-sm-10">
						<label class="am-radio-inline">
							<input type="radio"  value="" name="whether_medical">是
						</label>
						<label class="am-radio-inline">
							<input type="radio" name="whether_medical">否
						</label>
					</div>
				</div>
				<div class="am-form-group am-form-icon am-form-feedback">
					<label for="doc-ipt-3" class="am-u-sm-2 am-form-label">项目时间</label>
					<div class="am-u-sm-10">
						<input type="text" class="am-radius" maxlength="4" placeholder="输入项目分钟数">
						<span class="am-icon-ellipsis">分钟</span>
					</div>
				</div>
				<div class="am-form-group">
					<label for="doc-ipt-3" class="am-u-sm-2 am-form-label">年龄限制</label>
					<div class="am-u-sm-10 am-form-inline age">
						<div style="float:left;">
							<div class="am-form-group am-form-icon am-form-feedback">
							    <input type="text" class="am-radius" maxlength="2" placeholder="录入数字">
							    <span class="am-icon-ellipsis">岁</span>
						  	</div>
						  	<span>至</span>
						  	<div class="am-form-group am-form-icon am-form-feedback">
							    <input type="text" class="am-radius" maxlength="2" placeholder="录入数字">
							    <span class="am-icon-ellipsis">岁</span>
						  	</div>
						</div>
						<div class="checkbox no_limit">
					        <label>
				          		<input v-model="no_limit" type="checkbox" @click="noLimit">不限
					        </label>
				      	</div>
					</div>
				</div>
				<div class="am-form-group">
					<label for="doc-ipt-3" class="am-u-sm-2 am-form-label">性别限制</label>
					<div class="am-u-sm-10">
						<label class="am-radio-inline">
							<input type="radio" value="0" name="gender_limit">不限
						</label>
						<label class="am-radio-inline">
							<input type="radio" value="1" name="gender_limit">男
						</label>
						<label class="am-radio-inline">
							<input type="radio" value="2" name="gender_limit">女
						</label>
					</div>
				</div>
				<div class="am-form-group am-form-icon am-form-feedback">
					<label for="doc-ipt-3" class="am-u-sm-2 am-form-label">诊室</label>
					<div class="am-u-sm-10">
						<p class="am-radius" @click="addEditFn($event, '诊室')"></p>
						<span class="am-icon-ellipsis-h"></span>
					</div>
				</div>
				<div class="am-form-group am-form-icon am-form-feedback">
					<label for="doc-ipt-3" class="am-u-sm-2 am-form-label">设备</label>
					<div class="am-u-sm-10">
						<p class="am-radius" @click="addEditFn($event, '设备')"></p>
						<span class="am-icon-ellipsis-h"></span>
					</div>
				</div>
				<div class="am-form-group am-form-icon am-form-feedback">
					<label for="doc-ipt-3" class="am-u-sm-2 am-form-label">用品</label>
					<div class="am-u-sm-10">
						<p class="am-radius" @click="addEditFn($event, '用品')"></p>
						<span class="am-icon-ellipsis-h"></span>
					</div>
				</div>
				<div class="am-form-group am-form-icon am-form-feedback">
					<label for="doc-ipt-3" class="am-u-sm-2 am-form-label">适应症</label>
					<div class="am-u-sm-10">
						<p class="am-radius" @click="addEditFn($event, '适应症')"></p>
						<span class="am-icon-ellipsis-h"></span>
					</div>
				</div>
				<div class="am-form-group am-form-icon am-form-feedback">
					<label for="doc-ipt-3" class="am-u-sm-2 am-form-label">禁忌症</label>
					<div class="am-u-sm-10">
						<p class="am-radius" @click="addEditFn($event, '禁忌症')"></p>
						<span class="am-icon-ellipsis-h"></span>
					</div>
				</div>
				<div class="am-form-group am-form-icon am-form-feedback">
					<label for="doc-ipt-3" class="am-u-sm-2 am-form-label">作用部位</label>
					<div class="am-u-sm-10">
						<p class="am-radius" @click="addEditFn($event, '作用部位')"></p>
						<span class="am-icon-ellipsis-h"></span>
					</div>
				</div>
				<div class="am-form-group am-form-icon am-form-feedback">
					<label for="doc-ipt-3" class="am-u-sm-2 am-form-label">作用功能</label>
					<div class="am-u-sm-10">
						<p class="am-radius" @click="addEditFn($event, '作用功能')"></p>
						<span class="am-icon-ellipsis-h"></span>
					</div>
				</div>
				<div class="am-form-group am-form-icon am-form-feedback">
					<label for="doc-ipt-3" class="am-u-sm-2 am-form-label">不良反应</label>
					<div class="am-u-sm-10">
						<textarea name=""></textarea>
					</div>
				</div>
				<div class="am-form-group am-form-icon am-form-feedback">
					<label for="doc-ipt-3" class="am-u-sm-2 am-form-label">注意事项</label>
					<div class="am-u-sm-10">
						<textarea name=""></textarea>
					</div>
				</div>
				<div class="am-form-group am-form-icon am-form-feedback">
					<label for="doc-ipt-3" class="am-u-sm-2 am-form-label">备注</label>
					<div class="am-u-sm-10">
						<textarea name=""></textarea>
					</div>
				</div>
				<div class="am-form-group am-form-icon am-form-feedback">
					<label for="doc-ipt-3" class="am-u-sm-2 am-form-label">成本</label>
					<div class="am-u-sm-5">
						<input type="text" class="am-radius" maxlength="9" placeholder="成本价">
						<span class="am-icon-ellipsis">元</span>
					</div>
				</div>
				<div class="am-form-group am-form-icon am-form-feedback">
					<label for="doc-ipt-3" class="am-u-sm-2 am-form-label">市场价</label>
					<div class="am-u-sm-5">
						<input type="text" class="am-radius" maxlength="9" placeholder="市场价">
						<span class="am-icon-ellipsis">元</span>
					</div>
				</div>
				<div class="am-form-group am-form-icon am-form-feedback">
					<label for="doc-ipt-3" class="am-u-sm-2 am-form-label">会员价</label>
					<div class="am-u-sm-5">
						<input type="text" class="am-radius" maxlength="9" placeholder="会员价">
						<span class="am-icon-ellipsis">元</span>
					</div>
				</div>


				<div class="am-form-group">
					<div class="am-u-sm-10 am-u-sm-offset-2">
						<button type="submit" class="am-btn am-btn-primary">确认提交</button>
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
				forms: {
					min_age_limit: '',
					max_age_limit: '',
					module_list: [],
				},
				center_list: '',
				module_list_arr: '',
				no_limit: false,
			}
		},
		created () {
			this.getCenter();
			this.getModuleList();
		},
		methods: {
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
					var options = '';
					// var center_id = self.forms.center_id;
					var eq;
					// if (!!self.$route.query.module_id) {
					// 	$.each(self.center_list, function(index, val) {
					// 		 if (val.id == center_id) {
					// 		 	eq = index;
					// 		 }
					// 	});
					// }
					for (var i = 0; i < self.center_list.length; i++) {
						if (eq == i) {
							options += '<option value="'+self.center_list[i].id+'" selected>'+self.center_list[i].name+'</option>';
						} else {
							options += '<option value="'+self.center_list[i].id+'">'+self.center_list[i].name+'</option>';
						};
					};
					$('#center_name').append(options);
					Public.initSelect();
					// self.getClinics();
					// $('#center_name').on('change', function(){
					// 	self.getClinics();
					// });
				});
			},
			noLimit () {
				this.forms.min_age_limit = '';
				this.forms.max_age_limit = '';
			},
			addEditFn (e, title) {
				var self = this;
				var module_eq;
				Public.addEditFn(e, '', self.selectHtm(title, self.module_list_arr), function(){
					console.log(self.forms.module_list);
					var params = {
						module_list: JSON.stringify(self.forms.module_list)
					};
					Public.Ajax('project/getModuleDataForProject', params, 'GET', function(res){

					});
				}, function(){
					$('body').on('click', '.check_items', function(e){
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
				});
			},
			selectHtm (title, list) {
				var self = this;
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
				} else if (title == '所属中心') {
					var item = '<li>'+
							'<label class="am-checkbox-inline">'+
							'<input type="checkbox" value="option1">中心1'+
							'</label>'+
							'</li>';
				} else if (title == '执行人等级') {
					var item = '<li>'+
							'<label class="am-checkbox-inline">'+
							'<input type="checkbox" value="option1">等级1'+
							'</label>'+
							'</li>';
				} else if (title == '诊室') {
					var item = '<li>'+
							'<label class="am-checkbox-inline">'+
							'<input type="checkbox" value="option1">诊室1'+
							'</label>'+
							'</li>';
				} else if (title == '设备') {
					var item = '<li>'+
							'<label class="am-checkbox-inline">'+
							'<input type="checkbox" value="option1">设备'+
							'</label>'+
							'</li>';
				} else if (title == '用品') {
					var item = '<li>'+
							'<label class="am-checkbox-inline">'+
							'<input type="checkbox" value="option1">用品'+
							'</label>'+
							'</li>';
				} else if (title == '适应症') {
					var item = '<li>'+
							'<label class="am-checkbox-inline">'+
							'<input type="checkbox" value="option1">适应症'+
							'</label>'+
							'</li>';
				} else if (title == '禁忌症') {
					var item = '<li>'+
							'<label class="am-checkbox-inline">'+
							'<input type="checkbox" value="option1">禁忌症'+
							'</label>'+
							'</li>';
				} else if (title == '作用部位') {
					var item = '<li>'+
							'<label class="am-checkbox-inline">'+
							'<input type="checkbox" value="option1">作用部位'+
							'</label>'+
							'</li>';
				} else if (title == '作用功能') {
					var item = '<li>'+
							'<label class="am-checkbox-inline">'+
							'<input type="checkbox" value="option1">作用功能'+
							'</label>'+
							'</li>';
				}
				return '<div class="am-modal am-modal-prompt" tabindex="-1" id="add-edit-modal">'+
						'<div class="am-modal-dialog" style="max-width: 100%;">'+
						'<div class="am-modal-hd">'+title+'</div>'+
						'<div class="am-modal-bd">'+
						'<div id="module_list_container">'+
						'</div>'+
						'<ul>'+
						item +
						'</ul>'+
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
	.am-table-bordered>tbody>tr>td, .am-table-bordered>tbody>tr>th, .am-table-bordered>tfoot>tr>td, .am-table-bordered>tfoot>tr>th, .am-table-bordered>thead>tr>td, .am-table-bordered>thead>tr>th, .am-table-bordered>thead+tbody>tr:first-child>td, .am-table-bordered>thead+tbody>tr:first-child>th{
		word-break: keep-all;
	}
</style>