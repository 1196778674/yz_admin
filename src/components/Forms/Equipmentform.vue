<template>
	<div class="form_container">
		<div class="am-form froms am-form-horizontal">
			<div class="am-u-sm-10">
				<div class="am-form-group am-u-sm-6">
					<label for="doc-ipt-3" class="am-u-sm-4 am-form-label"><span>*</span>设备代码</label>
					<div class="am-u-sm-8">
						<input type="text" v-model="forms.code" class="am-radius" placeholder="设备代码不可重复">
					</div>
				</div>
				<div class="am-form-group am-u-sm-6">
					<label for="doc-ipt-3" class="am-u-sm-4 am-form-label"><span>*</span>设备名称</label>
					<div class="am-u-sm-8">
						<input type="text" v-model="forms.name" class="am-radius" placeholder="请输入设备名称">
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
						<select data-am-selected="{btnWidth: '100%'}" id="center_id">
							<option value="-1">中心选择</option>
					  		<option value="1">中心1</option>
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
				<div class="am-form-group am-u-sm-6">
					<label for="doc-ipt-3" class="am-u-sm-4 am-form-label">单次成本</label>
					<div class="am-u-sm-8">
						<input type="text" v-model="forms.once_cost" class="am-radius" placeholder="请输入单次成本">
					</div>
				</div>
				<div class="am-form-group am-u-sm-6">
					<label for="doc-ipt-3" class="am-u-sm-4 am-form-label"><span>*</span>摆放诊室</label>
					<div class="am-u-sm-8">
						<select data-am-selected="{btnWidth: '100%'}" id="clinics_id">
							<option value="-1">诊室选择</option>
					  		<option value="1">中心1</option>
						</select>
					</div>
				</div>
				<div class="am-form-group am-u-sm-12" style="padding-left:5px;">
					<label for="doc-ipt-3" class="am-u-sm-2 am-form-label"><span>*</span>年龄限制</label>
					<div class="am-u-sm-10 age">
						<div class="am-form-group am-form-icon am-form-feedback">
						    <input type="text" v-model="forms.min_age_limit" class="am-radius" maxlength="2" placeholder="">
						    <span class="am-icon-ellipsis">岁</span>
					  	</div>
					  	<span class="fg">至</span>
					  	<div class="am-form-group am-form-icon am-form-feedback">
						    <input type="text" v-model="forms.max_age_limit" class="am-radius" maxlength="2" placeholder="">
						    <span class="am-icon-ellipsis">岁</span>
					  	</div>
					</div>
				</div>
				<div class="am-form-group">
					<label for="doc-ipt-3" class="am-u-sm-2 am-form-label">设备描述</label>
					<div class="am-u-sm-10">
						<textarea name="" v-model="forms.description"></textarea>
					</div>
				</div>
				<div class="am-form-group am-form-icon am-form-feedback">
					<label for="doc-ipt-3" class="am-u-sm-2 am-form-label">适应症</label>
					<div class="am-u-sm-10">
						<p class="am-radius"></p>
						<span class="am-icon-ellipsis-h"></span>
					</div>
					<div class="am-u-sm-10 show_detail_list">
						<span>234,</span>
						<span>234,</span>
						<span>234</span>
					</div>
				</div>
				<div class="am-form-group am-form-icon am-form-feedback">
					<label for="doc-ipt-3" class="am-u-sm-2 am-form-label">禁忌症</label>
					<div class="am-u-sm-10">
						<p class="am-radius"></p>
						<span class="am-icon-ellipsis-h"></span>
					</div>
					<div class="am-u-sm-10 show_detail_list">
						<span>234,</span>
						<span>234,</span>
						<span>234</span>
					</div>
				</div>
				<div class="am-form-group">
					<label for="doc-ipt-3" class="am-u-sm-2 am-form-label"><span>*</span>性别限制</label>
					<div class="am-u-sm-10">
						<label class="am-radio-inline">
							<input type="radio" value="0" name="docInlineRadio">不限
						</label>
						<label class="am-radio-inline">
							<input type="radio" value="1" name="docInlineRadio">男
						</label>
						<label class="am-radio-inline">
							<input type="radio" value="2" name="docInlineRadio">女
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
		name: 'Equipmentform',
		data () {
			return {
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
					clinics_id: '',
					min_age_limit: '',
					max_age_limit: '',
					gender_limit: '',
					considerations: '',
					adverse_reaction: '',
					description: '',
					remark: '',
					equipment_indications_labels: [],
					equipment_contraindications_labels: [],
					equipment_images: '',
					equipment_attachments: ''
				}
			}
		},
		created () {
			Public.initSelect();
		},
		methods: {
			save () {
				console.log(this.forms);
			}
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
	.form_container .age .am-form-feedback{
		float: left;
		width: 45%;
	}
	.form_container .age span.fg{
		float: left;
		margin: 5px 10px;
	}
</style>