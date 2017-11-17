<template>
	<div class="form_container">
		<h2 class="title">{{title}}</h2>
		<div class="am-form froms am-form-horizontal">
			<div class="am-u-sm-8 am-u-sm-offset-2">
				<div class="am-form-group">
					<label for="doc-ipt-3" class="am-u-sm-2 am-form-label"><span>*</span>模块名称</label>
					<div class="am-u-sm-10">
						<input type="text" v-model="forms.name" class="am-radius" placeholder="请输入模块名称">
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
					<label for="doc-ipt-3" class="am-u-sm-2 am-form-label"><span>*</span>执行人等级</label>
					<div class="am-u-sm-10">
						<p class="am-radius" @click="addEditFn($event, 'grade')">选中了{{forms.job_grades.length}}个执行人等级</p>
						<span class="am-icon-ellipsis-h"></span>
					</div>
					<div class="am-u-sm-10 am-u-sm-offset-2 show_detail_list" v-if="forms.job_grades.length > 0">
						<span v-for="v in forms.job_grades">{{v.name}}</span>
					</div>
				</div>
				<div class="am-form-group am-form-icon am-form-feedback">
					<label for="doc-ipt-3" class="am-u-sm-2 am-form-label"><span>*</span>执行人</label>
					<div class="am-u-sm-10">
						<p class="am-radius">
							<span v-for="person in grade_list_person">
								{{person.name}}
							</span>
						</p>
					</div>
				</div>
				<div class="am-form-group am-form-icon am-form-feedback">
					<label for="doc-ipt-3" class="am-u-sm-2 am-form-label">设备</label>
					<div class="am-u-sm-10">
						<p class="am-radius" @click="addEditFn($event, 'equipment')">选中了{{forms.module_equipment.length}}个设备</p>
						<span class="am-icon-ellipsis-h"></span>
					</div>
					<div class="am-u-sm-10 am-u-sm-offset-2 show_detail_list" v-if="forms.module_equipment.length > 0">
						<span v-for="v in forms.module_equipment">{{v.name}}</span>
					</div>
				</div>
				<div class="am-form-group am-form-icon am-form-feedback">
					<label for="doc-ipt-3" class="am-u-sm-2 am-form-label">用品</label>
					<div class="am-u-sm-10">
						<p class="am-radius" @click="addEditFn($event, 'supplies')">选中了{{forms.module_supplies.length}}个用品</p>
						<span class="am-icon-ellipsis-h"></span>
					</div>
					<div class="am-u-sm-10 am-u-sm-offset-2 show_detail_list" v-if="forms.module_supplies.length > 0">
						<span v-for="v in forms.module_supplies">{{v.name}}</span>
					</div>
				</div>
				<div class="am-form-group">
					<label for="doc-ipt-4" class="am-u-sm-2 am-form-label"><span>*</span>是否医疗</label>
					<div class="am-u-sm-10">
						<label class="am-radio-inline">
							<input type="radio" value="1" name="whether_medical">是
						</label>
						<label class="am-radio-inline">
							<input type="radio" value="0" name="whether_medical">否
						</label>
					</div>
				</div>
				<div class="am-form-group ages" style="padding-left:5px;">
					<label for="doc-ipt-3" class="am-u-sm-2 am-form-label"><span>*</span>服务时间</label>
					<div class="am-u-sm-10" style="float:left;">
						<div class="am-form-icon am-form-feedback">
						    <input type="text" class="am-radius" v-model="forms.service_time" maxlength="4" placeholder="">
						    <span class="am-icon-ellipsis">分钟</span>
					  	</div>
					</div>
				</div>
				<div class="am-form-group ages" style="padding-left:5px;">
					<label for="doc-ipt-3" class="am-u-sm-2 am-form-label"><span>*</span>服务后时间</label>
					<div class="am-u-sm-10" style="float:left;">
						<div class="am-form-icon am-form-feedback">
						    <input type="text" class="am-radius" v-model="forms.service_after_time" maxlength="4" placeholder="">
						    <span class="am-icon-ellipsis">分钟</span>
					  	</div>
					</div>
				</div>
				<div class="am-form-group" style="padding-left:5px;">
					<label for="doc-ipt-3" class="am-u-sm-2 am-form-label"><span>*</span>年龄限制</label>
					<div class="am-u-sm-10 age" style="float:left;">
						<div class="am-form-icon am-form-feedback">
						    <input type="text" class="age-input am-radius" v-model="forms.min_age_limit" maxlength="2" placeholder="" :disabled="no_limit">
						    <span class="am-icon-ellipsis">岁</span>
					  	</div>
					  	<span class="fg">至</span>
					  	<div class="am-form-icon am-form-feedback">
						    <input type="text" class="age-input am-radius" v-model="forms.max_age_limit" maxlength="2" placeholder="" :disabled="no_limit">
						    <span class="am-icon-ellipsis">岁</span>
					  	</div>
					  	<div class="checkbox no_limit">
					        <label>
				          		<input v-model="no_limit" type="checkbox" @click="noLimit">不限
					        </label>
				      	</div>
					</div>
				</div>
				<div class="am-form-group">
					<label for="doc-ipt-3" class="am-u-sm-2 am-form-label"><span>*</span>性别限制</label>
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
					<label for="doc-ipt-3" class="am-u-sm-2 am-form-label"><span>*</span>诊室</label>
					<div class="am-u-sm-10">
						<p class="am-radius" @click="addEditFn($event, 'consultation')">选中了{{consultation_list.length}}个诊室</p>
						<span class="am-icon-ellipsis-h"></span>
					</div>
					<div class="am-u-sm-10 am-u-sm-offset-2 show_detail_list" v-if="consultation_list.length > 0">
						<span v-for="v in consultation_list">{{v.name}}</span>
					</div>
				</div>
				<!-- <div class="am-form-group am-form-icon am-form-feedback">
					<label for="doc-ipt-3" class="am-u-sm-4 am-form-label">适应症</label>
					<div class="am-u-sm-8">
						<p class="am-radius" @click="addEditFn($event, 1)">选中了{{forms.module_indications_labels.length}}个适应症</p>
						<span class="am-icon-ellipsis-h"></span>
					</div>
					<div class="am-u-sm-8 show_detail_list" v-if="forms.module_indications_labels.length > 0">
						<span v-for="v in forms.module_indications_labels">{{v.name}}</span>
					</div>
				</div> -->
				<div class="am-form-group am-form-icon am-form-feedback">
					<label for="doc-ipt-3" class="am-u-sm-2 am-form-label">禁忌症</label>
					<div class="am-u-sm-10">
						<p class="am-radius" @click="addEditFn($event, 2)">选中了{{forms.module_contraindications_labels.length}}个禁忌症</p>
						<span class="am-icon-ellipsis-h"></span>
					</div>
					<div class="am-u-sm-10 am-u-sm-offset-2 show_detail_list" v-if="forms.module_contraindications_labels.length > 0">
						<span v-for="v in forms.module_contraindications_labels">{{v.name}}</span>
					</div>
				</div>
				<!-- <div class="am-form-group am-form-icon am-form-feedback">
					<label for="doc-ipt-3" class="am-u-sm-4 am-form-label">作用部位</label>
					<div class="am-u-sm-8">
						<p class="am-radius" @click="addEditFn($event, 3)">选中了{{forms.module_working_part_labels.length}}个作用部位</p>
						<span class="am-icon-ellipsis-h"></span>
					</div>
					<div class="am-u-sm-8 show_detail_list" v-if="forms.module_working_part_labels.length > 0">
						<span v-for="v in forms.module_working_part_labels">{{v.name}}</span>
					</div>
				</div> -->
				<div class="am-form-group am-form-icon am-form-feedback">
					<label for="doc-ipt-3" class="am-u-sm-2 am-form-label">作用功能</label>
					<div class="am-u-sm-10">
						<p class="am-radius" @click="addEditFn($event, 3)">选中了{{forms.module_function_labels.length}}个作用功能</p>
						<span class="am-icon-ellipsis-h"></span>
					</div>
					<div class="am-u-sm-10 am-u-sm-offset-2 show_detail_list" v-if="forms.module_function_labels.length > 0">
						<span v-for="v in forms.module_function_labels">{{v.name}}</span>
					</div>
				</div>
				<div class="am-form-group">
					<label for="doc-ipt-3" class="am-u-sm-2 am-form-label">注意事项</label>
					<div class="am-u-sm-10">
						<textarea name="" v-model="forms.considerations"></textarea>
					</div>
				</div>
				<div class="am-form-group">
					<label for="doc-ipt-3" class="am-u-sm-2 am-form-label">不良反应</label>
					<div class="am-u-sm-10">
						<textarea name="" v-model="forms.adverse_reaction"></textarea>
					</div>
				</div>
				<div class="am-form-group">
					<label for="doc-ipt-3" class="am-u-sm-2 am-form-label">描述</label>
					<div class="am-u-sm-10">
						<textarea name="" v-model="forms.description"></textarea>
					</div>
				</div>
				<div class="am-form-group">
					<label for="doc-ipt-3" class="am-u-sm-2 am-form-label">备注</label>
					<div class="am-u-sm-10">
						<textarea name="" v-model="forms.remark"></textarea>
					</div>
				</div>

				


				<div class="am-form-group">
					<div class="am-u-sm-10 am-u-sm-offset-2">
						<button type="submit" class="am-btn am-btn-primary" @click="saveModule($event)">确认提交</button>
					</div>
				</div>
				<div class="clear"></div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Modularform',
		data () {
			return {
				title: !!this.$route.query.module_id ? '编辑模块' : '添加模块',
				forms: {
					"id": '',
			        "code": "",
			        "name": "",
			        "center_id": '',
			        "service_time": '',
			        "service_after_time": '',
			        "whether_medical": "",
			        "min_age_limit": '',
			        "max_age_limit": '',
			        "gender_limit": '',
			        "considerations": "",
			        "adverse_reaction": "",
			        "description": "",
			        "expected_cost": "",
			        "remark": "",
			        "created_at": "",
			        "updated_at": "",
			        "deleted_at": '',
			        "center_name": "",
			        "job_grades": [],
			        "personnel_list": [],
			        "module_equipment": [],
			        "module_supplies": [],
			        "module_clinics": [],
			        "module_working_part_labels": [],
			        "module_contraindications_labels": [],
			        "module_indications_labels": [],
			        "module_function_labels": [],
			        "gender_limit_name": "",
			        "age_limit": ""
				},
				center_list: '',
				grade_list: '',
				label_list: '',
				consultation_list: [],
				equipment_list: '',
				supplies_list: '',
				grade_list_person: [],
				checked_list: '',
				no_limit: false
			}
		},
		created () {
			if (!!this.$route.query.module_id) {
				this.getDetail(this.$route.query.module_id);
			} else {
				this.getCenter();
			};
			// this.getCenter();
			this.initCheckbox();
			this.ageInput();
		},
		methods: {
			ageInput () {
				Public.inputNumber('.age-input');
			},
			getDetail (id) {
				var self = this;
				Public.Ajax('module/detail', {module_id: id}, 'GET', function(res){
					self.forms = res.data;
					$.each($('input[name="gender_limit"]'), function(index, val) {
						 if ($(val).val() == self.forms.gender_limit) {
						 	$(val).prop('checked', true);
						 }
					});
					$.each($('input[name="whether_medical"]'), function(index, val) {
						 if ($(val).val() == self.forms.whether_medical) {
						 	$(val).prop('checked', true);
						 }
					});
					self.consultation_list = self.forms.module_clinics;
					self.grade_list_person = self.forms.personnel_list;
					self.getCenter();
					self.getConsultationList(self.forms);
					if (self.forms.max_age_limit == '' && self.forms.min_age_limit == '') {
						self.no_limit = true;
					};
				});
			},
			getConsultationList (obj) {
				var self = this;
				var params = {
					equipment_list: JSON.stringify(obj.module_equipment),
					supplies_list: JSON.stringify(obj.module_supplies),
					center_id: obj.center_id || 1
				};
				Public.Ajax('module/check_gender_age', params, 'GET', function(res){
					self.forms.module_clinics = res.data.clinics_list;
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
					if (!!self.$route.query.module_id) {
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
					if (!!self.$route.query.module_id) {
						self.getClinics();
					};
					$('#center_name').on('change', function(){
						self.getClinics();
					});
				});
			},
			getClinics () {
				var self = this;
				var center_name = $('.am-selected-status').eq(0).text();
				$.each(self.center_list, function(i, v) {
					if (v.name == center_name) {
						self.forms.center_id = v.id;
					}
				});
				Public.Ajax('job-grade/list', {center_id: self.forms.center_id || 0}, 'GET', function(res){
					self.grade_list = res.data;
				});
				// 设备
				Public.Ajax('equipment/listByCenterId', {center_id: self.forms.center_id || 1}, 'GET', function(res){
					self.equipment_list = res.data;
				});
				// 用品 
				Public.Ajax('supplies/listByCenterId', {center_id: self.forms.center_id || 1}, 'GET', function(res){
					self.supplies_list = res.data;
				});
				self.getLabelList();
				if (!self.$route.query.module_id) {
					self.getConsultationList(self.forms);
				}
			},
			getLabelList () {
				var self = this; 
				Public.Ajax('label/list', {}, 'GET', function(res){
					self.label_list = res.data;
				});
			},
			getLabelSelct (list, id) {
				var lists = '';
				$.each(list, function(i, val) {
					if (val.id == id) {
						lists = val.list;
					}
				});
				return lists;
			},
			addEditFn (e, type) {
				var self = this;
				switch(type) {
					case 'grade':
						var list = this.grade_list;
						break;
					case 'equipment':
						var list = this.equipment_list;
						break;
					case 'supplies':
						var list = this.supplies_list;
						break;
					case 'consultation':
						var list = this.forms.module_clinics;
						break;
					case 1:
						var list = self.getLabelSelct(self.label_list, 1);
						break;
					case 2:
						var list = self.getLabelSelct(self.label_list, 2);
						break;
					case 3:
						var list = self.getLabelSelct(self.label_list, 3);
						break;
					case 4:
						var list = self.getLabelSelct(self.label_list, 4);
						break;
					default:

						break;
				};
				Public.addEditFn(e, '', self.selectHtm(type, list), function(){
					switch(type) {
						case 'grade':
							self.forms.job_grades = [];
							self.grade_list_person = [];
							break;
						case 'equipment':
							self.forms.module_equipment = [];
							break;
						case 'supplies':
							self.forms.module_supplies = [];
							break;
						case 'consultation':
							self.forms.module_clinics = [];
							self.consultation_list = [];
							break;
						case 1:
							self.forms.module_indications_labels = [];
							break;
						case 2:
							self.forms.module_contraindications_labels = [];
							break;
						case 3:
							self.forms.module_function_labels = [];
							break;
						case 4:
							self.forms.module_function_labels = [];
							break;
						default:

							break;
					};
					$.each(list, function(index, val) {
						 var id = val.id + '';
						 if ($.inArray(id, self.checked_list) > -1 && type == 'grade') {
						 	self.forms.job_grades.push(val);
						 	$.each(val.personnel_list, function(i, v) {
						 		 self.grade_list_person.push(v);
						 	});
						 };
						 if ($.inArray(id, self.checked_list) > -1 && type == 'equipment') {
						 	self.forms.module_equipment.push(val);
						 };
						 if ($.inArray(id, self.checked_list) > -1 && type == 'supplies') {
						 	self.forms.module_supplies.push(val);
						 };
						 if ($.inArray(id, self.checked_list) > -1 && type == 'consultation') {
						 	self.consultation_list.push(val);
						 };
						 if ($.inArray(id, self.checked_list) > -1 && type == 1) {
						 	self.forms.module_indications_labels.push(val);
						 };
						 if ($.inArray(id, self.checked_list) > -1 && type == 2) {
						 	self.forms.module_contraindications_labels.push(val);
						 };
						 if ($.inArray(id, self.checked_list) > -1 && type == 3) {
						 	self.forms.module_function_labels.push(val);
						 };
						 if ($.inArray(id, self.checked_list) > -1 && type == 4) {
						 	self.forms.module_function_labels.push(val);
						 };
					});
					if (type == 'equipment' || type == 'supplies' || type == 'consultation') {
						var params = {
							equipment_list: JSON.stringify(self.forms.module_equipment),
							supplies_list: JSON.stringify(self.forms.module_supplies),
							center_id: self.forms.center_id || 1
						};
						Public.Ajax('module/check_gender_age', params, 'GET', function(res){
							var data = res.data;
							self.forms.gender = data.gender;
							$('input[name="gender_limit"]').eq(data.gender).prop('checked', true);
							self.forms.max_age_limit = data.max_age_limit;
							self.forms.min_age_limit = data.min_age_limit;
							if (data.clinics_list.length) {
								self.forms.module_clinics = data.clinics_list;
							}

							if (self.consultation_list.length) {
								return;
							}
							$.each(self.forms.module_clinics, function(index, val) {
								 if (val.status == 1) {
								 	self.consultation_list.push(val);
								 }
							});
						});
					}
				}, function(){
					$('#addCheckList').on('click', function(e){
						var val = $('#add_check_name').val();
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
								self.getLabelList();
							});
						});
					});
				});
			},
			noLimit () {
				this.forms.min_age_limit = '';
				this.forms.max_age_limit = '';
			},
			saveModule (e) {
				var self = this;
				Public.addModel(e, self.save);
			},
			save () {
				var self = this;
				var center_name = $('.am-selected-status').eq(0).text();
				$.each(self.center_list, function(i, v) {
					if (v.name == center_name) {
						self.forms.center_id = v.id;
					}
				});
				this.forms.gender_limit = $('input[name="gender_limit"]:checked').val();
				this.forms.whether_medical = $('input[name="whether_medical"]:checked').val();
				if (!!this.$route.query.module_id) {
					this.forms.module_id = this.$route.query.module_id;
					var url = 'module/edit'
				} else {
					var url = 'module/add'
				}
				if (!$.trim(self.forms.name)) {
					Public.dialog('请输入模块名称');
					return false;
				};
				if (self.forms.center_id == 0) {
					Public.dialog('请选择所属中心');
					return false;
				}
				if (!self.forms.job_grades.length) {
					Public.dialog('请选择执行人等级');
					return false;
				}
				if (self.forms.whether_medical == undefined) {
					Public.dialog('请选择是否医疗');
					return false;
				}
				if (!$.trim(self.forms.service_time)) {
					Public.dialog('请填加服务时间');
					return false;
				}
				if (!$.trim(self.forms.service_after_time)) {
					Public.dialog('请填加服务后时间');
					return false;
				}
				if (self.forms.gender_limit == undefined) {
					Public.dialog('请选择性别限制');
					return false;
				}
				// console.log(self.forms.module_clinics);
				// return;
				if (!self.consultation_list.length) {
					Public.dialog('请选择诊室');
					return false;
				}
				this.forms.job_grades = JSON.stringify(this.forms.job_grades);
				this.forms.personnel_list = JSON.stringify(this.forms.personnel_list);
				this.forms.module_equipment = JSON.stringify(this.forms.module_equipment);
				this.forms.module_supplies = JSON.stringify(this.forms.module_supplies);
				this.forms.module_clinics = JSON.stringify(this.consultation_list);
				this.forms.module_working_part_labels = JSON.stringify(this.forms.module_working_part_labels);
				this.forms.module_contraindications_labels = JSON.stringify(this.forms.module_contraindications_labels);
				this.forms.module_indications_labels = JSON.stringify(this.forms.module_indications_labels);
				this.forms.module_function_labels = JSON.stringify(this.forms.module_function_labels);
				// console.log(this.forms);
				// return;
				Public.Ajax(url, this.forms, 'POST', function(res){
					if (!!self.$route.query.module_id) {
						window.location.href = '#/modulardetail?id=' + self.$route.query.module_id;
					} else {
						window.location.href = '#/modular';
					}
				}, function(){
					self.returnString();
				});
			},
			returnString () {
				var self = this;
				self.forms.job_grades = JSON.parse(self.forms.job_grades);
				self.forms.personnel_list = JSON.parse(self.forms.personnel_list);
				self.forms.module_equipment = JSON.parse(self.forms.module_equipment);
				self.forms.module_supplies = JSON.parse(self.forms.module_supplies);
				self.forms.module_clinics = JSON.parse(self.forms.module_clinics);
				self.forms.module_working_part_labels = JSON.parse(self.forms.module_working_part_labels);
				self.forms.module_contraindications_labels = JSON.parse(self.forms.module_contraindications_labels);
				self.forms.module_indications_labels = JSON.parse(self.forms.module_indications_labels);
				self.forms.module_function_labels = JSON.parse(self.forms.module_function_labels);
			},
			initCheckbox () {
				var self = this;
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
			},
			selectHtm (type, list) {
				var self = this;
				switch(type) {
					case 1:
						var title = '适应症';
						break;
					case 2:
						var title = '禁忌症';
						var arr = [];
						$.each(self.forms.module_contraindications_labels, function(index, val) {
							 arr.push(val.id);
						});
						break;
					case 3:
						var title = '作用部位';
						var arr = [];
						$.each(self.forms.module_function_labels, function(index, val) {
							 arr.push(val.id);
						});
						break;
					case 4:
						var title = '作用功能';
						break;
					default:
						break;
				}
				var addBtn = '<li style="width: 30%; margin-left:15px; margin-top: 10px;">'+
						'<div class="am-input-group">'+
						'<input type="text" id="add_check_name" class="am-form-field" style="height: 30px;line-height: 30px;border: 1px solid #ccc; border-top-left-radius: 3px;border-bottom-left-radius: 3px;" placeholder="添加'+title+'">'+
						'<span class="am-input-group-btn">'+
						'<button class="am-btn am-btn-secondary" id="addCheckList" type="button" style="height: 30px;border: 1px solid #3bb4f2;">添加</button>'+
						'</span>'+
						'</div>'+
						'</li>';
				switch(type) {
					case 'grade':
						var title = '执行人等级';
						var addBtn = '';
						var arr = [];
						$.each(self.forms.job_grades, function(index, val) {
							 arr.push(val.id);
						});
						break;
					case 'equipment':
						var title = '设备';
						var addBtn = '';
						var arr = [];
						$.each(self.forms.module_equipment, function(index, val) {
							 arr.push(val.id);
						});
						break;
					case 'supplies':
						var title = '用品';
						var addBtn = '';
						var arr = [];
						$.each(self.forms.module_supplies, function(index, val) {
							 arr.push(val.id);
						});
						break;
					case 'consultation':
						var title = '诊室';
						var addBtn = '';
						var arr = [];
						$.each(self.consultation_list, function(index, val) {
							 arr.push(val.id);
						});
						break;
					default:
						break;
				};
				var item = '';
				for (var i = 0; i < list.length; i++) {
					var id = list[i].id;
					if ($.inArray(id, arr) > '-1') {
						item += '<li>'+
							'<label class="am-checkbox-inline">'+
							'<input class="checks" checked type="checkbox" value="'+id+'">'+list[i].name+''+
							'</label>'+
							'</li>';
					} else {
						item += '<li>'+
							'<label class="am-checkbox-inline">'+
							'<input class="checks" type="checkbox" value="'+id+'">'+list[i].name+''+
							'</label>'+
							'</li>';
					}	
				};
				return '<div class="am-modal am-modal-prompt" tabindex="-1" id="add-edit-modal">'+
						'<div class="am-modal-dialog">'+
						'<div class="am-modal-hd">'+title+'</div>'+
						'<div class="am-modal-bd">'+
						'<ul>'+
						'<span id="checked_arr_list">'+
						item +
						'</span>'+
						'</ul>'+
						addBtn +
						'</div>'+
						'<div class="am-modal-footer">'+
						'<span class="am-modal-btn" data-am-modal-cancel>取消</span>'+
						'<span class="am-modal-btn" data-am-modal-confirm>确定</span>'+
						'</div>'+
						'</div>'+
						'</div>';
			}
		}
	}
</script>

<style scoped>
	.froms .am-form-group p.am-radius{
		line-height: 25px;
		padding-left: 5px;
		font-size: 13px;
	}
	.form_container .ages span{
		right: 10px;	
		font-size: 13px;
	}
	.form_container .am-u-sm-5{
		float: left;
		width: 33%;
	}
	.form_container .am-u-sm-6{
		float: left;
	}
	.form_container .age .am-form-feedback{
		float: left;
		width: 42%;
	}
	.form_container .age span.fg{
		float: left;
		line-height: 35px;
		margin: 0px 5px;
	}
	.show_detail_list span{
		font-size: 13px;
		margin-right: 10px;
		color: #777;
	}
</style>