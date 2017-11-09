<template>
	<animated-fade-in-up-big>
		<div class="detail">
			<table class="am-table" id="print_table">
			    <tbody>
			        <tr>
			            <td class="title no-right space">用品编码</td>
			            <td class="space">{{detail.code}}</td>
			            <td class="title no-right space">所属中心</td>
			            <td class="space" colspan="3">{{detail.center_name}}</td>
			        </tr>
			        <tr>
			            <td class="title no-right space">用品名称</td>
			            <td class="space">{{detail.name}}</td>
			            <td class="title no-right space">库存名字</td>
			            <td class="space">{{detail.storage_name}}</td>
			            <td class="title no-right space">英文名字</td>
			            <td class="no-right space">{{detail.english_name}}</td>
			        </tr>
			        <tr>
			            <td class="title no-right space">年龄限制</td>
			            <td class="space">{{detail.min_age_limit}}-{{detail.max_age_limit}}</td>
			            <td class="title space no-right">性别限制</td>
			            <td class="space">{{detail.gender_limit_name}}</td>
			            <td class="title space no-right">计量单位</td>
			            <td class="space">{{detail.unit}}</td>
			        </tr>
			        <tr>
			            <td class="title no-right space">单次成本</td>
			            <td class="space">{{detail.once_cost}}</td>
			            <td class="title space no-right">市场价格</td>
			            <td class="space">{{detail.market_price}}</td>
			            <td class="title no-right space">采购价格</td>
			            <td class="no-right space">{{detail.purchase_price}}</td>
			        </tr>
			        <tr>
			            <td class="title no-right space">品牌</td>
			            <td class="space">{{detail.brands}}</td>
			            <td class="title space no-right">产地</td>
			            <td class="space">{{detail.production_area}}</td>
			            <td class="title no-right space">规格型号</td>
			            <td class="no-right space">{{detail.specifications}}</td>
			        </tr>
			        <tr>
			            <td class="title no-right">用品描述</td>
			            <td colspan="5" class="no-right">{{detail.description}}</td>
			        </tr>
			        <tr>
			            <td class="title no-right">适应症</td>
			            <td colspan="5" class="no-right">
			            	<span v-for="item in detail.equipment_indications_labels">{{item.name}}</span>
			            </td>
			        </tr>
			        <tr>
			            <td class="title no-right">禁忌症</td>
			            <td colspan="5" class="no-right">
			            	<span v-for="item in detail.equipment_contraindications_labels">{{item.name}}</span>
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
					<li><button type="button" class="am-btn am-btn-secondary" @click="prevPage()">上一页</button></li>
					<li><button type="button" class="am-btn am-btn-secondary" @click="editPage(edit_id)">编辑</button></li>
					<li><button type="button" class="am-btn am-btn-secondary" @click="deletePage($event)">删除</button></li>
					<li><button type="button" class="am-btn am-btn-secondary" @click="printPage()">打印</button></li>
					<li><button type="button" class="am-btn am-btn-secondary" @click="nextPage()">下一页</button></li>
				</ul>
				
			</ul>
		</div>
	</animated-fade-in-up-big>
</template>

<script>
	export default {
		name: 'Articlesdetail',
		data () {
			return {
				detail: '',
				edit_id: this.$route.query.id
			}
		},
		created () {
			this.getDetail();
		},
		methods: {
			getDetail () {
				var self = this;
				Public.Ajax('supplies/detail', {supplies_id: this.edit_id}, 'GET', function(res){
					self.detail = res.data;
				});
			},
			prevPage () {
				console.log('prevPage');
			},
			editPage (id) {
				window.location.href = '#/form' + '?type=articles&supplies_id=' +  id;
			},
			deletePage (e) {
				var id = this.$route.query.id;
				Public.deleteModal(e, id, function () {
					// console.log(id);
					// return;
					Public.Ajax('supplies/del', {supplies_id: id}, 'GET', function(res){
						window.location.href = '#/articles';
					});
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
	table tr td p{
		margin: 0;
		line-height: 25px;
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