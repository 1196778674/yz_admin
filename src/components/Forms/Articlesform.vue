<template>
	<div class="form_container">
		<h2 class="title">{{title}}</h2>
		<div class="am-form froms am-form-horizontal">
			<div class="am-u-sm-12">
				<div class="am-form-group am-u-sm-6">
					<label for="doc-ipt-3" class="am-u-sm-4 am-form-label"><span>*</span>用品编码</label>
					<div class="am-u-sm-8">
						<input type="text" v-model="forms.code" class="am-radius" placeholder="用品编码不可重复">
					</div>
				</div>
				<div class="am-form-group am-u-sm-6">
					<label for="doc-ipt-3" class="am-u-sm-4 am-form-label"><span>*</span>用品名称</label>
					<div class="am-u-sm-8">
						<input type="text" v-model="forms.name" class="am-radius" placeholder="请输入用品名称">
					</div>
				</div>
				<div class="am-form-group am-u-sm-6">
					<label for="doc-ipt-3" class="am-u-sm-4 am-form-label">库存名字</label>
					<div class="am-u-sm-8">
						<input type="text" v-model="forms.storage_name" class="am-radius" placeholder="请输入库存名字">
					</div>
				</div>
				<div class="am-form-group am-u-sm-6">
					<label for="doc-ipt-3" class="am-u-sm-4 am-form-label">英文名</label>
					<div class="am-u-sm-8">
						<input type="text" v-model="forms.english_name" class="am-radius" placeholder="请输入英文名">
					</div>
				</div>
				<div class="am-form-group am-u-sm-6">
					<label for="doc-ipt-3" class="am-u-sm-4 am-form-label"><span>*</span>所属中心</label>
					<div class="am-u-sm-8">
						<select data-am-selected="{btnWidth: '100%', maxHeight: 200}" id="center_name">
							
						</select>
					</div>
				</div>
				<div class="am-form-group am-u-sm-6">
					<label for="doc-ipt-3" class="am-u-sm-4 am-form-label">规格型号</label>
					<div class="am-u-sm-8">
						<input type="text" v-model="forms.specifications" class="am-radius" placeholder="请输入规格型号">
					</div>
				</div>
				<div class="am-form-group am-u-sm-6">
					<label for="doc-ipt-3" class="am-u-sm-4 am-form-label">品牌</label>
					<div class="am-u-sm-8">
						<input type="text" v-model="forms.brands" class="am-radius" placeholder="请输入品牌">
					</div>
				</div>
				<div class="am-form-group am-u-sm-6">
					<label for="doc-ipt-3" class="am-u-sm-4 am-form-label">产地</label>
					<div class="am-u-sm-8">
						<input type="text" v-model="forms.production_area" class="am-radius" placeholder="请输入产地">
					</div>
				</div>
				<div class="am-form-group am-u-sm-6">
					<label for="doc-ipt-3" class="am-u-sm-4 am-form-label">计量单位</label>
					<div class="am-u-sm-8">
						<input type="text" v-model="forms.unit" class="am-radius" placeholder="请输入计量单位">
					</div>
				</div>
				<div class="am-form-group am-u-sm-6">
					<label for="doc-ipt-3" class="am-u-sm-4 am-form-label">单次成本</label>
					<div class="am-u-sm-8">
						<input type="text" v-model="forms.once_cost" class="am-radius" placeholder="请输入单次成本">
					</div>
				</div>
				<div class="am-form-group am-u-sm-6">
					<label for="doc-ipt-3" class="am-u-sm-4 am-form-label">采购价格</label>
					<div class="am-u-sm-8">
						<input type="text" v-model="forms.purchase_price" class="am-radius" placeholder="请输入采购价格">
					</div>
				</div>
				<div class="am-form-group am-u-sm-6">
					<label for="doc-ipt-3" class="am-u-sm-4 am-form-label">市场价格</label>
					<div class="am-u-sm-8">
						<input type="text" v-model="forms.market_price" class="am-radius" placeholder="请输入市场价格">
					</div>
				</div>
				<div class="am-form-group am-u-sm-12" style="padding-left:5px;">
					<label for="doc-ipt-3" class="am-u-sm-2 am-form-label"><span>*</span>年龄限制</label>
					<div class="am-u-sm-6 age" style="float:left;">
						<div class="am-form-icon am-form-feedback">
						    <input type="text" v-model="forms.min_age_limit" class="age-input am-radius" maxlength="2" placeholder="" :disabled="no_limit">
						    <span class="am-icon-ellipsis">岁</span>
					  	</div>
					  	<span class="fg">至</span>
					  	<div class="am-form-icon am-form-feedback">
						    <input type="text" v-model="forms.max_age_limit" class="age-input am-radius" maxlength="2" placeholder="" :disabled="no_limit">
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
					<label for="doc-ipt-3" class="am-u-sm-2 am-form-label">用品描述</label>
					<div class="am-u-sm-10">
						<textarea name="" v-model="forms.description"></textarea>
					</div>
				</div>
				<div class="am-form-group am-form-icon am-form-feedback">
					<label for="doc-ipt-3" class="am-u-sm-2 am-form-label">适应症</label>
					<div class="am-u-sm-10">
						<p class="am-radius" @click="addEditFn($event, 1)">选中了{{indications}}个适应症</p>
						<span class="am-icon-ellipsis-h"></span>
					</div>
					<div class="am-u-sm-10 am-u-sm-offset-2 show_detail_list">
						<span v-for="v in forms.supplies_indications_labels">{{v.name}}</span>
					</div>
				</div>
				<div class="am-form-group am-form-icon am-form-feedback">
					<label for="doc-ipt-3" class="am-u-sm-2 am-form-label">禁忌症</label>
					<div class="am-u-sm-10">
						<p class="am-radius" @click="addEditFn($event, 2)">选中了{{contraindications}}个适应症</p>
						<span class="am-icon-ellipsis-h"></span>
					</div>
					<div class="am-u-sm-10 am-u-sm-offset-2 show_detail_list" v-if="contraindications > 0">
						<span v-for="v in forms.supplies_contraindications_labels">{{v.name}}</span>
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
					<label for="doc-ipt-3" class="am-u-sm-2 am-form-label">备注</label>
					<div class="am-u-sm-10">
						<textarea name="" v-model="forms.remark"></textarea>
					</div>
				</div>

				


				<div class="am-form-group">
					<div class="am-u-sm-10 am-u-sm-offset-2">
						<button type="submit" class="am-btn am-btn-primary" @click="saveArticles($event)">确认提交</button>
					</div>
				</div>
				<div class="clear"></div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Articlesform',
		data () {
			return {
				title: !!this.$route.query.supplies_id ? '编辑用品' : '添加用品',
				forms: {
					code: '',
					name: '',
					english_name: '',
					storage_name: '',
					center_id: '',
					brands: '',
					production_area: '',
					specifications: '',
					purchase_price: '',
					market_price: '',
					once_cost: '',
					min_age_limit: '',
					max_age_limit: '',
					gender_limit: '',
					considerations: '',
					adverse_reaction: '',
					description: '',
					remark: '',
					supplies_indications_labels: [],
					supplies_contraindications_labels: [],
					supplies_images: '',
					supplies_attachments: '',
					unit: ''
				},
				checked_list: [],
				indications: 0,
				contraindications: 0,
				center_list: [],
				no_limit: false
			}
		},
		created () {
			this.initCheckbox();
			this.ageInput();
			if (!!this.$route.query.supplies_id) {
				this.getDetail(this.$route.query.supplies_id);
			} else {
				this.getCenter();
			}
		},
		methods: {
			ageInput () {
				Public.inputNumber('.age-input');
			},
			noLimit () {
				this.forms.min_age_limit = '';
				this.forms.max_age_limit = '';
			},
			getDetail (id) {
				var self = this;
				Public.Ajax('supplies/detail', {supplies_id: id}, 'GET', function(res){
					self.forms = res.data;
					self.getCenter();
					self.indications = self.forms.supplies_indications_labels.length;
					self.contraindications = self.forms.supplies_contraindications_labels.length;
					$.each($('input[name="gender_limit"]'), function(index, val) {
						 if ($(val).val() == self.forms.gender_limit) {
						 	$(val).prop('checked', true);
						 }
					});
					if (self.forms.max_age_limit == '' && self.forms.min_age_limit == '') {
						self.no_limit = true;
					};
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
					if (!!self.$route.query.supplies_id) {
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
				});
			},
			saveArticles (e) {
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
				if (!!this.$route.query.supplies_id) {
					this.forms.supplies_id = this.$route.query.supplies_id;
					var url = 'supplies/edit'
				} else {
					var url = 'supplies/add'
				}
				// console.log(this.forms);
				// return;
				if (!$.trim(self.forms.code)) {
					Public.dialog('请输入用品编码');
					return false;
				};
				if (!$.trim(self.forms.name)) {
					Public.dialog('请输入用品名称');
					return false;
				};
				if (self.forms.center_id == 0) {
					Public.dialog('请选择所属中心');
					return false;
				}
				if (self.forms.gender_limit == undefined) {
					Public.dialog('请选择性别限制');
					return false;
				}
				this.forms.supplies_indications_labels = JSON.stringify(this.forms.supplies_indications_labels);
				this.forms.supplies_contraindications_labels = JSON.stringify(this.forms.supplies_contraindications_labels);
				Public.Ajax(url, this.forms, 'POST', function(res){
					if (!!self.$route.query.supplies_id) {
						window.location.href = '#/articlesdetail?id=' + self.$route.query.supplies_id;
					} else {
						window.location.href = '#/articles';
					}
				}, function (){
					self.returnString();
				});
			},
			returnString () {
				var self = this;
				self.forms.supplies_indications_labels = JSON.parse(self.forms.supplies_indications_labels);
				self.forms.supplies_contraindications_labels = JSON.parse(self.forms.supplies_contraindications_labels);
			},
			addEditFn (e, type) {
				var self = this;
				var list, item;
				Public.Ajax('label/selectList', {label_category_id: type}, 'GET', function(res){
					var list = res.data;
					Public.addEditFn(e, '', self.selectHtm(type, list), function(){
						if (type == 1) {
							self.forms.supplies_indications_labels = [];
						} else {
							self.forms.supplies_contraindications_labels = [];
						};
						$.each(list, function(k, val) {
							 var id = val.id + '';
							 if ($.inArray(id, self.checked_list) > -1 && type == 1) {
							 	self.forms.supplies_indications_labels.push(val);
							 }
							 if ($.inArray(id, self.checked_list) > -1 && type == 2) {
							 	self.forms.supplies_contraindications_labels.push(val);
							 }
						});
						if (type == 1) {
							self.indications = self.forms.supplies_indications_labels.length;
						} else {
							self.contraindications = self.forms.supplies_contraindications_labels.length;
						}
					},function(){
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
								});
							});
						});
					});
				});
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
				if (type == 1) {
					var title = '适应症';
					var arr = [];
					$.each(self.forms.supplies_indications_labels, function(index, val) {
						 arr.push(val.id);
					});
				} else {
					var title = '禁忌症';
					var arr = [];
					$.each(self.forms.supplies_contraindications_labels, function(index, val) {
						 arr.push(val.id);
					});
				}
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
						'<li style="width: 30%; margin-left: 15px; margin-top: 10px;">'+
						'<div class="am-input-group">'+
						'<input type="text" id="add_check_name" class="am-form-field" style="height: 30px;line-height: 30px;border: 1px solid #ccc; border-top-left-radius: 3px;border-bottom-left-radius: 3px;" placeholder="添加'+title+'">'+
						'<span class="am-input-group-btn">'+
						'<button class="am-btn am-btn-secondary" id="addCheckList" type="button" style="height: 30px;border: 1px solid #3bb4f2;">添加</button>'+
						'</span>'+
						'</div>'+
						'</li>'+
						'</div>'+
						'<div class="am-modal-footer">'+
						'<span class="am-modal-btn" data-am-modal-cancel>取消</span>'+
						'<span class="am-modal-btn" data-am-modal-confirm>确定</span>'+
						'</div>'+
						'</div>'+
						'</div>';
			},
		}
	}
</script>

<style scoped>
	.form_container{
		overflow: hidden;
		padding-bottom: 50px;
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
		width: 27%;
	}
	.form_container .age span.fg{
		float: left;
		margin: 5px 10px;
	}
	.show_detail_list span{
		font-size: 13px;
		margin-right: 10px;
		color: #777;
	}
	.froms .am-form-group p.am-radius{
		line-height: 25px;
		padding-left: 5px;
		font-size: 13px;
	}
</style>