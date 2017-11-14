<template>
	<animated-zoom-in>
		<div class="detail">
			<button class="am-btn am-btn-secondary return-go" @click="goHistory"><i class="am-icon-arrow-left"></i>返回</button>
			<table class="am-table" id="print_table">
			    <tbody>
			        <tr>
			            <td class="title no-right space">项目编码</td>
			            <td class="space">{{detail.code}}</td>
			            <td class="title no-right space">项目中心</td>
			            <td class="space">{{detail.center_name}}</td>
			            <td class="title no-right space">项目名称</td>
			            <td class="no-right space">{{detail.name}}</td>
			        </tr>
			        <tr>
			            <td class="title no-right space">成本</td>
			            <td class="space">{{detail.expected_cost}}</td>
			            <td class="title no-right space">会员价</td>
			            <td class="space">{{detail.member_price}}</td>
			            <td class="title no-right space">市场价</td>
			            <td class="no-right space">{{detail.market_price}}</td>
			        </tr>
			        <tr>
			            <td class="title no-right space">年龄限制</td>
			            <td class="space">{{detail.age_limit}}</td>
			            <td class="title space no-right">性别限制</td>
			            <td class="space">{{detail.gender_limit_name}}</td>
			            <td class="title no-right space">是否医疗</td>
			            <td class="no-right space">{{detail.whether_medical_name}}</td>
			        </tr>
			        <tr>
			            <td class="title no-right space">项目时间</td>
			            <td class="space">{{detail.time}}</td>
			            <td class="title no-right space">诊室</td>
			            <td>
			            	<span v-for="item in detail.module_clinics">{{item.name}}</span>
			            </td>
			            <td class="title no-right space">执行人等级</td>
			            <td class="space">
			            	<span v-for="item in detail.job_grades">{{item.name}}</span>
			            </td>
			        </tr>
			        <tr>
			            <td class="title no-right">项目类别</td>
			            <td colspan="5" class="no-right">{{detail.category_name}}</td>
			        </tr>
			        <tr>
			            <td class="title no-right">作用部位</td>
			            <td colspan="5" class="no-right">
			            	<span v-for="item in detail.module_working_part_labels">{{item.name}}</span>
			            </td>
			        </tr>
			        <tr>
			            <td class="title no-right">作用功能</td>
			            <td colspan="5" class="no-right">
			            	<span v-for="item in detail.module_function_labels">{{item.name}}</span>
			            </td>
			        </tr>
			        <tr>
			            <td class="title no-right">项目模板</td>
			            <td colspan="5" class="no-right">
			            	<p v-for="item in detail.module_list_view">{{item.index}}:{{item.name}}</p>
			            </td>
			        </tr>
			        <tr>
			            <td class="title no-right">项目描述</td>
			            <td colspan="5" class="no-right">{{detail.description}}</td>
			        </tr>
			        <tr>
			            <td class="title no-right">适应症</td>
			            <td colspan="5" class="no-right">
			            	<span v-for="item in detail.module_indications_labels">{{item.name}}</span>
			            </td>
			        </tr>
			        <tr>
			            <td class="title no-right">禁忌症</td>
			            <td colspan="5" class="no-right">
			            	<span v-for="item in detail.module_contraindications_labels">{{item.name}}</span>
			            </td>
			        </tr>
			        <tr>
			            <td class="title no-right">设备</td>
			            <td colspan="5" class="no-right">
			            	<span v-for="item in detail.module_equipment">{{item.name}}</span>
			            </td>
			        </tr>
			        <tr>
			            <td class="title no-right">用品</td>
			            <td colspan="5" class="no-right">
			            	<span v-for="item in detail.module_supplies">{{item.name}}</span>
			            </td>
			        </tr>
			        <tr>
			            <td class="title no-right">注意事项</td>
			            <td colspan="5" class="no-right">{{detail.considerations}}</td>
			        </tr>
			        <tr>
			            <td class="title no-right">不良反应</td>
			            <td colspan="5" class="no-right">{{detail.adverse_reaction}}</td>
			        </tr>
			        <tr>
			            <td class="title no-right">备注</td>
			            <td colspan="5" class="no-right">{{detail.remark}}</td>
			        </tr>
			    </tbody>
			</table>
			<ul class="am-pagination">
				
				<ul>
					<li><button :disabled="!last_id" type="button" class="am-btn am-btn-secondary" @click="prevPage()">上一页</button></li>
					<li><button type="button" class="am-btn am-btn-secondary" @click="editPage(edit_id)">编辑</button></li>
					<li><button type="button" class="am-btn am-btn-secondary" @click="deletePage($event)">删除</button></li>
					<li><button type="button" class="am-btn am-btn-secondary" @click="printPage()">打印</button></li>
					<li><button :disabled="!next_id" type="button" class="am-btn am-btn-secondary" @click="nextPage()">下一页</button></li>
				</ul>
				
			</ul>
		</div>
	</animated-zoom-in>
</template>

<script>
	export default {
		name: 'Projectdetail',
		data () {
			return {
				detail: {},
				edit_id: this.$route.query.id,
				last_id: '',
				next_id: ''
			}
		},
		created () {
			this.getDetail(this.edit_id);
		},
		methods: {
			goHistory () {
				window.history.go(-1);
			},
			getDetail (id) {
				var self = this;
				var params = {
					project_id: id
				}
				Public.Ajax('project/detail', params, 'GET', function(res){
					self.detail = res.data;
					self.last_id = res.data.last_id;
					self.next_id = res.data.next_id;
				});
			},
			prevPage () {
				if (!!this.last_id) {
					this.getDetail(this.last_id);
				} else {
					Public.dialog('已是第一条项目数据!');
				}
			},
			editPage (id) {
				window.location.href = '#/form' + '?type=project&project_id=' +  id;
			},
			deletePage (e) {
				var id = this.$route.query.id;
				Public.deleteModal(e, id, function () {
					Public.Ajax('project/del', {project_id: id}, 'GET', function(res){
						window.location.href = '#/project';
					});
				});
			},
			printPage () {
				Public.print('#print_table');
			},
			nextPage () {
				if (!!this.next_id) {
					this.getDetail(this.next_id);
				} else {
					Public.dialog('已是最后一条项目数据!');
				}
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
	table tr td p{
		margin: 0;
		line-height: 25px;
	}
	table tr td.space{
		text-overflow:ellipsis;
		word-break:keep-all; 
		white-space:nowrap;
	}
	table tr td span{
		/* margin-right: 10px; */
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