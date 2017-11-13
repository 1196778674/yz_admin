<template>
	<div id="left">
        <div class="left-sidebar">
            <!-- 菜单 -->
            <ul class="sidebar-nav">
            	<li class="sidebar-nav-link" @click="isActive(0)">
					<router-link to="project" :class="{'active': is_active == 0}"><span class="am-icon-tasks"></span>项目管理</router-link>
				</li>
				<li class="sidebar-nav-link" @click="isActive(1)">
					<router-link to="modular" :class="{'active': is_active == 1}"><span class="am-icon-bars"></span>模块管理</router-link>
				</li>
				<li class="sidebar-nav-link" @click="isActive(2)">
					<router-link to="center" :class="{'active': is_active == 2}"><span class="am-icon-home"></span>中心管理</router-link>
				</li>
				<li class="sidebar-nav-link" @click="isActive(8)">
					<router-link to="category" :class="{'active': is_active == 8}"><span class="am-icon-list-alt"></span>类别管理</router-link>
				</li>
				<li class="sidebar-nav-link" @click="isActive(4)">
					<router-link to="personnel" :class="{'active': is_active == 4}"><span class="am-icon-user-md"></span>人员管理</router-link>
				</li>
				<li class="sidebar-nav-link" @click="isActive(7)">
					<router-link to="consultation" :class="{'active': is_active == 7}"><span class="am-icon-stethoscope"></span>诊室管理</router-link>
				</li>
				<li class="sidebar-nav-link" @click="isActive(3)">
					<router-link to="equipment" :class="{'active': is_active == 3}"><span class="am-icon-steam"></span>设备管理</router-link>
				</li>
				<li class="sidebar-nav-link" @click="isActive(5)">
					<router-link to="articles" :class="{'active': is_active == 5}"><span class="am-icon-flask"></span>用品管理</router-link>
				</li>
				<li class="sidebar-nav-link" @click="isActive(6)">
					<router-link to="tags" :class="{'active': is_active == 6}"><span class="am-icon-tags"></span>标签管理</router-link>
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
				is_active: 0
			}
		},
		created () {
			var name = this.$route.name;
			// console.log(name);
			// return;
			var hash = window.location.hash.split('/')[1];
            if (!hash) {
                window.location.href = '#/project';
                name = 'Project';
            }
			switch(name) {
				case 'Project':
					this.is_active = 0;
					break;
				case 'Projectdetail':
					this.is_active = 0;
					break;
				case 'Modular':
					this.is_active = 1;
					break;
				case 'Modulardetail':
					this.is_active = 1;
					break;
				case 'Center':
					this.is_active = 2;
					break;
				case 'Equipment':
					this.is_active = 3;
					break;
				case 'Equipmentdetail':
					this.is_active = 3;
					break;
				case 'Personnel':
					this.is_active = 4;
					break;
				case 'Personneldetail':
					this.is_active = 4;
					break;
				case 'Articles':
					this.is_active = 5;
					break;
				case 'Articlesdetail':
					this.is_active = 5;
					break;
				case 'Tags':
					this.is_active = 6;
					break;
				case 'Consultation':
					this.is_active = 7;
					break;
				case 'Category':
					this.is_active = 8;
					break;
				default :
					this.is_active = '-1';
					break;
			}
		},
		methods: {
			isActive (id) {
				this.is_active = id;
			}
		}
	}
</script>
<style scoped>

</style>