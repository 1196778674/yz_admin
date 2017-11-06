<template>
	<div class="form_container">
		<div class="am-form froms am-form-horizontal">
			<div class="am-u-sm-9">
				<div class="am-form-group">
					<label for="doc-ipt-3" class="am-u-sm-4 am-form-label"><span>*</span>模块名称</label>
					<div class="am-u-sm-8">
						<input type="text" v-model="forms.name" class="am-radius" placeholder="请输入模块名称">
					</div>
				</div>
				<div class="am-form-group">
					<label for="doc-ipt-3" class="am-u-sm-4 am-form-label"><span>*</span>所属中心</label>
					<div class="am-u-sm-8">
						<select data-am-selected="{btnWidth: '100%', maxHeight: 200}" id="center_name">
						</select>
					</div>
				</div>
				<div class="am-form-group am-form-icon am-form-feedback">
					<label for="doc-ipt-3" class="am-u-sm-4 am-form-label"><span>*</span>执行人</label>
					<div class="am-u-sm-8">
						<p class="am-radius" @click="addEditFn($event, 1)">选中了{{peoples}}个执行人</p>
						<span class="am-icon-ellipsis-h"></span>
					</div>
					<div class="am-u-sm-8 show_detail_list" v-if="peoples > 0">
						<!-- <span v-for="v in forms.equipment_indications_labels">{{v.name}}</span> -->
					</div>
				</div>
				<div class="am-form-group am-form-icon am-form-feedback">
					<label for="doc-ipt-3" class="am-u-sm-4 am-form-label"><span>*</span>执行人等级</label>
					<div class="am-u-sm-8">
						<p class="am-radius">执行人等级</p>
					</div>
				</div>
				<div class="am-form-group">
					<label for="doc-ipt-4" class="am-u-sm-4 am-form-label"><span>*</span>是否医疗</label>
					<div class="am-u-sm-8">
						<label class="am-radio-inline">
							<input type="radio" value="1" name="gender_limit">是
						</label>
						<label class="am-radio-inline">
							<input type="radio" value="2" name="gender_limit">否
						</label>
					</div>
				</div>
				<div class="am-form-group ages" style="padding-left:5px;">
					<label for="doc-ipt-3" class="am-u-sm-4 am-form-label"><span>*</span>服务时间</label>
					<div class="am-u-sm-8" style="float:left;">
						<div class="am-form-group am-form-icon am-form-feedback">
						    <input type="text" class="am-radius" maxlength="4" placeholder="">
						    <span class="am-icon-ellipsis">分钟</span>
					  	</div>
					</div>
				</div>
				<div class="am-form-group" style="padding-left:5px;">
					<label for="doc-ipt-3" class="am-u-sm-4 am-form-label"><span>*</span>年龄限制</label>
					<div class="am-u-sm-8 age" style="float:left;">
						<div class="am-form-group am-form-icon am-form-feedback">
						    <input type="text" class="am-radius" maxlength="2" placeholder="" :disabled="no_limit">
						    <span class="am-icon-ellipsis">岁</span>
					  	</div>
					  	<span class="fg">至</span>
					  	<div class="am-form-group am-form-icon am-form-feedback">
						    <input type="text" class="am-radius" maxlength="2" placeholder="" :disabled="no_limit">
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
					<label for="doc-ipt-3" class="am-u-sm-4 am-form-label"><span>*</span>性别限制</label>
					<div class="am-u-sm-8">
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
					<label for="doc-ipt-3" class="am-u-sm-4 am-form-label"><span>*</span>诊室</label>
					<div class="am-u-sm-8">
						<p class="am-radius" @click="addEditFn($event, 1)">选中了0个诊室</p>
						<span class="am-icon-ellipsis-h"></span>
					</div>
					<!-- <div class="am-u-sm-8 show_detail_list" v-if="indications > 0">
						<span v-for="v in forms.equipment_indications_labels">{{v.name}}</span>
					</div> -->
				</div>
				<div class="am-form-group am-form-icon am-form-feedback">
					<label for="doc-ipt-3" class="am-u-sm-4 am-form-label">设备</label>
					<div class="am-u-sm-8">
						<p class="am-radius" @click="addEditFn($event, 1)">选中了0个设备</p>
						<span class="am-icon-ellipsis-h"></span>
					</div>
					<!-- <div class="am-u-sm-8 show_detail_list" v-if="indications > 0">
						<span v-for="v in forms.equipment_indications_labels">{{v.name}}</span>
					</div> -->
				</div>
				<div class="am-form-group am-form-icon am-form-feedback">
					<label for="doc-ipt-3" class="am-u-sm-4 am-form-label">用品</label>
					<div class="am-u-sm-8">
						<p class="am-radius" @click="addEditFn($event, 1)">选中了0个用品</p>
						<span class="am-icon-ellipsis-h"></span>
					</div>
					<!-- <div class="am-u-sm-8 show_detail_list" v-if="indications > 0">
						<span v-for="v in forms.equipment_indications_labels">{{v.name}}</span>
					</div> -->
				</div>
				<div class="am-form-group am-form-icon am-form-feedback">
					<label for="doc-ipt-3" class="am-u-sm-4 am-form-label">适应症</label>
					<div class="am-u-sm-8">
						<p class="am-radius" @click="addEditFn($event, 1)">选中了0个适应症</p>
						<span class="am-icon-ellipsis-h"></span>
					</div>
					<!-- <div class="am-u-sm-8 show_detail_list" v-if="indications > 0">
						<span v-for="v in forms.equipment_indications_labels">{{v.name}}</span>
					</div> -->
				</div>
				<div class="am-form-group am-form-icon am-form-feedback">
					<label for="doc-ipt-3" class="am-u-sm-4 am-form-label">禁忌症</label>
					<div class="am-u-sm-8">
						<p class="am-radius" @click="addEditFn($event, 1)">选中了0个禁忌症</p>
						<span class="am-icon-ellipsis-h"></span>
					</div>
					<!-- <div class="am-u-sm-8 show_detail_list" v-if="indications > 0">
						<span v-for="v in forms.equipment_indications_labels">{{v.name}}</span>
					</div> -->
				</div>
				<div class="am-form-group am-form-icon am-form-feedback">
					<label for="doc-ipt-3" class="am-u-sm-4 am-form-label">作用部位</label>
					<div class="am-u-sm-8">
						<p class="am-radius" @click="addEditFn($event, 1)">选中了0个作用部位</p>
						<span class="am-icon-ellipsis-h"></span>
					</div>
					<!-- <div class="am-u-sm-8 show_detail_list" v-if="indications > 0">
						<span v-for="v in forms.equipment_indications_labels">{{v.name}}</span>
					</div> -->
				</div>
				<div class="am-form-group am-form-icon am-form-feedback">
					<label for="doc-ipt-3" class="am-u-sm-4 am-form-label">作用功能</label>
					<div class="am-u-sm-8">
						<p class="am-radius" @click="addEditFn($event, 1)">选中了0个作用功能</p>
						<span class="am-icon-ellipsis-h"></span>
					</div>
					<!-- <div class="am-u-sm-8 show_detail_list" v-if="indications > 0">
						<span v-for="v in forms.equipment_indications_labels">{{v.name}}</span>
					</div> -->
				</div>
				<div class="am-form-group">
					<label for="doc-ipt-3" class="am-u-sm-4 am-form-label">注意事项</label>
					<div class="am-u-sm-8">
						<textarea name=""></textarea>
					</div>
				</div>
				<div class="am-form-group">
					<label for="doc-ipt-3" class="am-u-sm-4 am-form-label">不良反应</label>
					<div class="am-u-sm-8">
						<textarea name=""></textarea>
					</div>
				</div>
				<div class="am-form-group">
					<label for="doc-ipt-3" class="am-u-sm-4 am-form-label">备注</label>
					<div class="am-u-sm-8">
						<textarea name=""></textarea>
					</div>
				</div>

				


				<div class="am-form-group">
					<div class="am-u-sm-10 am-u-sm-offset-4">
						<button type="submit" class="am-btn am-btn-primary" @click="save()">确认提交</button>
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
				forms: {
					name: '',
					center_id: ''
				},
				peoples: 0,
				no_limit: false
			}
		},
		created () {
			if (!!this.$route.query.modular_id) {
				this.getDetail(this.$route.query.modular_id);
			} else {
				this.getCenter();
			}
		},
		methods: {
			getDetail (id) {

			},
			getCenter () {
				var self = this;
				Public.Ajax('center/list', {}, 'GET', function(res){
					self.center_list = res.data;
					var options = '';
					var center_id = self.forms.center_id;
					var eq;
					if (!!self.$route.query.modular_id) {
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
					// self.getClinics();
					// $('#center_name').on('change', function(){
					// 	self.getClinics();
					// });
					Public.initSelect();
				});
			},
			addEditFn (e, type) {

			},
			noLimit () {

			},
			save () {

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
</style>