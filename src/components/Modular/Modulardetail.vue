<template>
	<div class="detail">
		<table class="am-table" id="print_table">
		    <tbody>
		        <tr>
		            <td class="title no-right space">模块编码</td>
		            <td class="space">{{detail.code}}</td>
		            <td class="title no-right space">所属中心</td>
		            <td class="space">{{detail.center_name}}</td>
		            <td class="title no-right space">模块名称</td>
		            <td class="no-right space">{{detail.name}}</td>
		        </tr>
		        <tr>
		            <td class="title no-right space">成本</td>
		            <td class="space">{{detail.expected_cost}}</td>
		            <td class="title no-right space">时间</td>
		            <td class="space">{{detail.service_time}}</td>
		            <td class="title no-right space">服务后时间</td>
		            <td class="no-right space">{{detail.service_after_time}}</td>
		        </tr>
		        <tr>
		            <td class="title no-right space">年龄限制</td>
		            <td class="space">{{detail.age_limit}}</td>
		            <td class="title space no-right">性别限制</td>
		            <td class="space">{{detail.gender_limit_name}}</td>
		            <td class="title no-right space">是否医疗</td>
		            <td class="no-right space">{{detail.whether_medical}}</td>
		        </tr>
		        <tr>
		            <td class="title no-right space">诊室</td>
		            <td class="space">
		            	<span v-for="clinics in detail.module_clinics">
		            		{{clinics.name}}
		            	</span>
		            </td>
		            <td class="title no-right space">执行人等级</td>
		            <td colspan="3" class="no-right">
		            	<span v-for="grades in detail.job_grades">
		            		{{grades.name}}
		            	</span>
		            </td>
		        </tr>
		        <tr>
		            <td class="title no-right">执行人</td>
		            <td colspan="5" class="no-right">
		            	<span v-for="person in detail.personnel_list">
		            		{{person.name}}
		            	</span>
		            </td>
		        </tr>
		        <tr>
		            <td class="title no-right">作用部位</td>
		            <td colspan="5" class="no-right">腰，腿</td>
		        </tr>
		        <tr>
		            <td class="title no-right">作用功能</td>
		            <td colspan="5" class="no-right">检测、报告</td>
		        </tr>
		        <tr>
		            <td class="title no-right">描述</td>
		            <td colspan="5" class="no-right">进行精准运动诊疗的基础。量化、科学的评估可综合而深度的反映出受评者的体脂率、姿势表现、平衡能力、本体感觉、肌肉能量、关节灵活度等，在测试中发现已经存在或潜在的问题，从而有针对性的设计解决方案。</td>
		        </tr>
		        <tr>
		            <td class="title no-right">禁忌症</td>
		            <td colspan="5" class="no-right">孕妇、骨质疏松、心血管疾病、损伤达手术要求、静脉曲张(严重)、脊髓压迫(严重)、皮肤疾病、皮肤破损、骨折</td>
		        </tr>
		        <tr>
		            <td class="title no-right">设备</td>
		            <td colspan="5" class="no-right">空气置换身体成分测试系统、FMS功能性运动筛查套件、Y 平衡检测仪、便携式肌力测试与关节活动度计</td>
		        </tr>
		        <tr>
		            <td class="title no-right">用品</td>
		            <td colspan="5" class="no-right">BODPOD呼吸管、 一次性拖鞋</td>
		        </tr>
		        <tr>
		            <td class="title no-right">注意事项</td>
		            <td colspan="5" class="no-right">空气置换身体成分测试系统、FMS功能性运动筛查套件、Y 平衡检测仪、便携式肌力测试与关节活动度计</td>
		        </tr>
		        <tr>
		            <td class="title no-right">不良反应</td>
		            <td colspan="5" class="no-right">空气置换身体成分测试系统、FMS功能性运动筛查套件、Y 平衡检测仪、便携式肌力测试与关节活动度计</td>
		        </tr>
		        <tr>
		            <td class="title no-right">备注</td>
		            <td colspan="5" class="no-right">进行精准运动诊疗的基础。量化、科学的评估可综合而深度的反映出受评者的体脂率、姿势表现、平衡能力、本体感觉、肌肉能量、关节灵活度等，在测试中发现已经存在或潜在的问题，从而有针对性的设计解决方案。</td>
		        </tr>
		    </tbody>
		</table>
		<ul class="am-pagination">
			
			<ul>
				<li><button type="button" class="am-btn am-btn-secondary" @click="prevPage()">上一页</button></li>
				<li><button type="button" class="am-btn am-btn-secondary" @click="editPage()">编辑</button></li>
				<li><button type="button" class="am-btn am-btn-secondary" @click="deletePage($event)">删除</button></li>
				<li><button type="button" class="am-btn am-btn-secondary" @click="printPage()">打印</button></li>
				<li><button type="button" class="am-btn am-btn-secondary" @click="nextPage()">下一页</button></li>
			</ul>
			
		</ul>
	</div>
</template>

<script>
	export default {
		name: 'Modulardetail',
		data () {
			return {
				detail: {
					"id": '',
			        "code": "",
			        "name": "",
			        "center_id": '',
			        "service_time": '',
			        "service_after_time": '',
			        "whether_medical": "",
			        "min_age_limit": '',
			        "max_age_limit": '',
			        "gender_limit": '',
			        "considerations": "",
			        "adverse_reaction": "",
			        "description": "",
			        "expected_cost": "",
			        "remark": "",
			        "created_at": "",
			        "updated_at": "",
			        "deleted_at": '',
			        "center_name": "",
			        "job_grades": [],
			        "personnel_list": [],
			        "module_equipment": [],
			        "module_supplies": [],
			        "module_clinics": [],
			        "module_working_part_labels": [],
			        "module_contraindications_labels": [],
			        "equipment_indications_labels": [],
			        "module_function_labels": [],
			        "gender_limit_name": "",
			        "last_id": '',
			        "next_id": ''
				}
			}
		},
		created () {
			this.getDetail();
		},
		methods: {
			getDetail () {
				var self = this;
				var params = {
					module_id: this.$route.query.id
				}
				Public.Ajax('module/detail', params, 'GET', function(res){
					self.detail = res.data;
				});
			},
			prevPage () {
				console.log('prevPage');
			},
			editPage () {
				window.location.href = '#/form' + '?type=modular';
			},
			deletePage (e) {
				var id = this.$route.query.id;
				Public.deleteModal(e, id, function () {
					console.log(id);
				});
			},
			printPage () {
				Public.print('#print_table');
			},
			nextPage () {
				console.log('nextPage');
			}
		}
	}
</script>

<style scoped>
	table{
		border: 1px solid #F2F5F8;
		border-top: 0;
	}
	table tr td{
		color: #555;
		border-right: 1px solid #F2F5F8;
		text-align: left;
		border-top: 1px solid #F2F5F8;
		width: 20%;
	}
	table tr td.space{
		text-overflow:ellipsis;
		word-break:keep-all; 
		white-space:nowrap;
	}
	table tr td.no-right{
		border-right: 0;
	}
	table tr td.title{
		width: 8%;
		font-weight: bolder;
		color: #333;
	}
</style>