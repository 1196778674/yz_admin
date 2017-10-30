<template>
	<div class="yx_login">
		<div class="login_logo"></div>
		<div class="am-form am-form-horizontal login_form">
			<h2>{{title}}</h2>
			<h3>{{title1}}</h3>
			<div class="am-form-group am-form-icon">
			    <i class="am-icon-user"></i>
			    <input type="text" class="am-form-field" v-model="params.user_name" placeholder="请输入您的用户名">
		  	</div>

		  	<div class="am-form-group am-form-icon">
			    <i class="am-icon-unlock-alt"></i>
			    <input type="password" class="am-form-field" v-model="params.password" placeholder="请输入密码">
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
					user_name: '',
					password: ''
				}
			}
		},
		methods: {
			login (e) {
				var $btn = $(e.target),
					params = this.params;
				$btn.button('loading');
				if (!$.trim(params.user_name)) {
					Public.dialog('请输入正确的用户名!');
					$btn.button('reset');
					return false;
				}
				if (!$.trim(params.password)) {
					Public.dialog('请输入正确的密码!');
					$btn.button('reset');
					return false;
				}
				setTimeout(function(){
				    $btn.button('reset');
				    window.location.href = '#/module';
				}, 3000);
				// Public.Ajax('', params, 'POST', function(res){
				// 	$btn.button('reset');
				// });
			}
		}
	}
</script>
<style scoped>
	
</style>