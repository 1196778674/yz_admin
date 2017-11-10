<template>
	<div class="yx_login">
		<div class="login_logo"></div>
		<div class="am-form am-form-horizontal login_form">
			<h2>{{title}}</h2>
			<h3>{{title1}}</h3>
			<div class="am-form-group am-form-icon">
			    <i class="am-icon-user"></i>
			    <input type="email" class="am-form-field" v-model="params.email" placeholder="请输入您的邮箱" @keyup="keyUp($event)">
		  	</div>

		  	<div class="am-form-group am-form-icon">
			    <i class="am-icon-unlock-alt"></i>
			    <input type="password" class="am-form-field" v-model="params.password" placeholder="请输入密码" @keyup="keyUp($event)">
		  	</div>

		  	<div class="am-form-group">
			    <button type="button" class="am-btn am-btn-lg" data-am-loading="{spinner: 'circle-o-notch', loadingText: '登录中...', resetText: '登录'}" @click="login($event)">登录</button>
		  	</div>
		</div>
	</div>
</template>
<script>
	export default{
		name: 'Login',
		data(){
			return {
				title: '优翔国际生命院',
				title1: '项目管理系统',
				params: {
					email: '',
					password: ''
				}
			}
		},
		methods: {
			login (e) {
				var self = this;
				var $btn = $(e.target),
					params = this.params;
				$btn.button('loading');
				if (!$.trim(params.email) || !/[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/.test($.trim(params.email))) {
					Public.dialog('请输入正确的邮箱!');
					$btn.button('reset');
					return false;
				}
				if (!$.trim(params.password)) {
					Public.dialog('请输入密码!');
					$btn.button('reset');
					return false;
				}
				Public.Ajax('user/login', params, 'POST', function(res){
					$btn.button('reset');
					var data = res.data;
					$.cookie('token', data.token, { expires: 7 });
					$.cookie('name', data.name, { expires: 7 });
					window.location.href = '#/project';
				});
			},
			keyUp (e) {
				var keyCode = e.keyCode;
				if (keyCode == 13) {
					$('button').trigger('click');
				}
			}
		}
	}
</script>
<style scoped>
	
</style>