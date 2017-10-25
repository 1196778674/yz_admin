<template>
	<div id="left">
        <div class="left-sidebar">
            <!-- 菜单 -->
            <ul class="sidebar-nav">
            	<li class="sidebar-nav-link">
					<router-link to="#" class="active"><span class="am-icon-tasks"></span>项目管理</router-link>
				</li>
				<li class="sidebar-nav-link">
					<router-link to="#"><span class="am-icon-bars"></span>模块管理</router-link>
				</li>
				<li class="sidebar-nav-link">
					<router-link to="#"><span class="am-icon-home"></span>中心管理</router-link>
				</li>
				<li class="sidebar-nav-link">
					<router-link to="#"><span class="am-icon-steam"></span>设备管理</router-link>
				</li>
				<li class="sidebar-nav-link">
					<router-link to="#"><span class="am-icon-user-md"></span>人员管理</router-link>
				</li>
				<li class="sidebar-nav-link">
					<router-link to="#"><span class="am-icon-flask"></span>用品管理</router-link>
				</li>
				<li class="sidebar-nav-link">
					<router-link to="#"><span class="am-icon-tags"></span>标签管理</router-link>
				</li>

            </ul>
        </div>
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