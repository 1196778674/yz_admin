<template>
	<div class="yx_right">
		<header class="am-topbar am-topbar-inverse am-topbar-fixed-top">
	        <div class="am-collapse am-topbar-collapse">
	            <ul class="am-nav am-nav-pills am-topbar-nav am-topbar-right admin-header-list tpl-header-list">
	                <!-- <li class="am-hide-sm-only"><a href="javascript:;" id="admin-fullscreen" class="tpl-header-list-link"><span class="am-icon-arrows-alt"></span> <span class="admin-fullText">开启全屏</span></a></li> -->

	                <li class="am-dropdown" data-am-dropdown data-am-dropdown-toggle>
	                    <a class="am-dropdown-toggle tpl-header-list-link" href="javascript:;">
	                        <span class="tpl-header-list-user-ico">
	                        	<img src="../assets/images/user01.png" height="35" width="35" alt="用户名">
	                        </span>
	                        <span class="tpl-header-list-user-nick">hi, 小灰灰</span>
	                    </a>
	                    <ul class="am-dropdown-content">
	                        <!-- <li><a href="#"><span class="am-icon-bell-o"></span> 资料</a></li>
	                        <li><a href="#"><span class="am-icon-cog"></span> 设置</a></li> -->
	                        <li><a href="#" class="logout"><span class="am-icon-power-off"></span> 退出</a></li>
	                    </ul>
	                </li>
	            </ul>

	        </div>
	    </header>
		<bodys></bodys>
	</div>
</template>

<script>
	import body from '@/tpls/Body'
	export default {
		name: 'Right',
		data(){
			return{

			}
		},
		components: {
			"bodys": body
		}
	}
</script>
<style scoped>
	
</style>