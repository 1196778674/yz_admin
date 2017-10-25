<template>
	<div class="yx_left">
		<div>
            <a href="javascript:;" class="tpl-logo">
                <img src="../assets/images/logo.png" alt="">
            </a>
        </div>
		<ul class="yx_left_ul">
			<li>
				<router-link to="#" class="active"><span class="am-icon-tasks"></span>项目管理</router-link>
			</li>
			<li>
				<router-link to="#"><span class="am-icon-bars"></span>模块管理</router-link>
			</li>
			<li>
				<router-link to="#"><span class="am-icon-home"></span>中心管理</router-link>
			</li>
			<li>
				<router-link to="#"><span class="am-icon-steam"></span>设备管理</router-link>
			</li>
			<li>
				<router-link to="#"><span class="am-icon-user-md"></span>人员管理</router-link>
			</li>
			<li>
				<router-link to="#"><span class="am-icon-flask"></span>用品管理</router-link>
			</li>
			<li>
				<router-link to="#"><span class="am-icon-tags"></span>标签管理</router-link>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: 'Left',
		data(){
			return{

			}
		},
		created: function () {
			console.log(Public.Ajax());
		}
	}
</script>
<style scoped>
	
</style>