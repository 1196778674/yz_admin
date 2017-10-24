<template>
	<div class="yx_body">
		<button type="button" class="am-btn am-btn-primary btn-loading-example" data-am-loading="{spinner: 'circle-o-notch', loadingText: '登录中...', resetText: '登录'}" @click="test($event)">登录</button>
	</div>
</template>

<script>
	export default {
		name: 'Body',
		data(){
			return{

			}
		},
		created: function(){
			var self = this;
		},
		methods: {
			test: function (e) {
				Public.btnDialog(e);
				Public.dialog('etst');
			}
		}
	}
</script>
<style scoped>
	
</style>