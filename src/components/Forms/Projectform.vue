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
						<select data-am-selected>
							<option value="-1">关键字选择</option>
					  		<option value="a">Apple</option>
						  	<option value="b">Banana</option>
						  	<option value="o">Orange</option>
						  	<option value="m">Mango</option>
						</select>
					</div>
				</div>
				<div class="am-form-group am-form-icon am-form-feedback">
					<label for="doc-ipt-3" class="am-u-sm-2 am-form-label"><span>*</span>项目模块</label>
					<div class="am-u-sm-10">
						<p class="am-radius" @click="addEditFn($event)"></p>
						<span class="am-icon-ellipsis-h"></span>
					</div>
				</div>
				<div class="am-form-group am-form-icon am-form-feedback">
					<label for="doc-ipt-3" class="am-u-sm-2 am-form-label"><span>*</span>所属中心</label>
					<div class="am-u-sm-10">
						<p class="am-radius"></p>
						<span class="am-icon-ellipsis-h"></span>
					</div>
				</div>
				<div class="am-form-group am-form-icon am-form-feedback">
					<label for="doc-ipt-3" class="am-u-sm-2 am-form-label"><span>*</span>执行人等级</label>
					<div class="am-u-sm-10">
						<p class="am-radius"></p>
						<span class="am-icon-ellipsis-h"></span>
					</div>
				</div>
				<div class="am-form-group">
					<label for="doc-ipt-3" class="am-u-sm-2 am-form-label">是否医疗</label>
					<div class="am-u-sm-10">
						<label class="am-radio-inline">
							<input type="radio"  value="" name="docInlineRadio">是
						</label>
						<label class="am-radio-inline">
							<input type="radio" name="docInlineRadio">否
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
				</div>
				<div class="am-form-group">
					<label for="doc-ipt-3" class="am-u-sm-2 am-form-label">性别限制</label>
					<div class="am-u-sm-10">
						<label class="am-radio-inline">
							<input type="radio"  value="" name="docInlineRadio">男
						</label>
						<label class="am-radio-inline">
							<input type="radio" name="docInlineRadio">女
						</label>
					</div>
				</div>
				<div class="am-form-group am-form-icon am-form-feedback">
					<label for="doc-ipt-3" class="am-u-sm-2 am-form-label">诊室</label>
					<div class="am-u-sm-10">
						<p class="am-radius"></p>
						<span class="am-icon-ellipsis-h"></span>
					</div>
				</div>
				<div class="am-form-group am-form-icon am-form-feedback">
					<label for="doc-ipt-3" class="am-u-sm-2 am-form-label">设备</label>
					<div class="am-u-sm-10">
						<p class="am-radius"></p>
						<span class="am-icon-ellipsis-h"></span>
					</div>
				</div>
				<div class="am-form-group am-form-icon am-form-feedback">
					<label for="doc-ipt-3" class="am-u-sm-2 am-form-label">用品</label>
					<div class="am-u-sm-10">
						<p class="am-radius"></p>
						<span class="am-icon-ellipsis-h"></span>
					</div>
				</div>
				<div class="am-form-group am-form-icon am-form-feedback">
					<label for="doc-ipt-3" class="am-u-sm-2 am-form-label">适应症</label>
					<div class="am-u-sm-10">
						<p class="am-radius"></p>
						<span class="am-icon-ellipsis-h"></span>
					</div>
				</div>
				<div class="am-form-group am-form-icon am-form-feedback">
					<label for="doc-ipt-3" class="am-u-sm-2 am-form-label">禁忌症</label>
					<div class="am-u-sm-10">
						<p class="am-radius"></p>
						<span class="am-icon-ellipsis-h"></span>
					</div>
				</div>
				<div class="am-form-group am-form-icon am-form-feedback">
					<label for="doc-ipt-3" class="am-u-sm-2 am-form-label">作用部位</label>
					<div class="am-u-sm-10">
						<p class="am-radius"></p>
						<span class="am-icon-ellipsis-h"></span>
					</div>
				</div>
				<div class="am-form-group am-form-icon am-form-feedback">
					<label for="doc-ipt-3" class="am-u-sm-2 am-form-label">作用功能</label>
					<div class="am-u-sm-10">
						<p class="am-radius"></p>
						<span class="am-icon-ellipsis-h"></span>
					</div>
				</div>
				<div class="am-form-group am-form-icon am-form-feedback">
					<label for="doc-ipt-3" class="am-u-sm-2 am-form-label">不良反应</label>
					<div class="am-u-sm-10">
						<p class="textarea"></p>
					</div>
				</div>
				<div class="am-form-group am-form-icon am-form-feedback">
					<label for="doc-ipt-3" class="am-u-sm-2 am-form-label">注意事项</label>
					<div class="am-u-sm-10">
						<p class="textarea"></p>
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

			}
		},
		created () {
			Public.initSelect();
		},
		methods: {
			addEditFn (e) {
				var self = this;
				Public.addEditFn(e, '', self.selectHtm(), function(){
					console.log(1);
				});
			},
			selectHtm () {
				var item = '<li>'+
							'<label class="am-checkbox-inline">'+
							'<input type="checkbox" value="option1">模块1'+
							'</label>'+
							'</li>'+
							'<li>'+
							'<label class="am-checkbox-inline">'+
							'<input type="checkbox" value="option1">模块1'+
							'</label>'+
							'</li>'+
							'<li>'+
							'<label class="am-checkbox-inline">'+
							'<input type="checkbox" value="option1">模块1'+
							'</label>'+
							'</li>'+
							'<li>'+
							'<label class="am-checkbox-inline">'+
							'<input type="checkbox" value="option1">模块1'+
							'</label>'+
							'</li>'+
							'<li>'+
							'<label class="am-checkbox-inline">'+
							'<input type="checkbox" value="option1">模块1'+
							'</label>'+
							'</li>'+
							'<li>'+
							'<label class="am-checkbox-inline">'+
							'<input type="checkbox" value="option1">模块1'+
							'</label>'+
							'</li>';
				return '<div class="am-modal am-modal-prompt" tabindex="-1" id="add-edit-modal">'+
						'<div class="am-modal-dialog">'+
						'<div class="am-modal-hd">项目模块</div>'+
						'<div class="am-modal-bd">'+
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
	.form_container{
		overflow: hidden;
		padding-bottom: 50px;
	}
	.form_container .am-u-sm-5{
		float: left;
		width: 33%;
	}
</style>