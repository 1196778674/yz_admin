<template>
	<animated-fade-in-right>
		<div class="category">
			<ul v-for="item in list">
				<h3>{{item.name}}</h3>
				<li v-for="val in item.list">
					{{val.code}}-{{val.name}}
					<div class="btns">
						<div class="centers">
							<span class="am-icon-edit edit" @click="edit($event, item.id, val)"></span>
							<span class="am-icon-trash delete" @click="deleteBtn($event, val.id, item.id)"></span>
						</div>
					</div>
				</li>
				<span class="plus am-icon-plus-square-o" @click="addCategory($event, item.id)"></span>
			</ul>
		</div>
	</animated-fade-in-right>
</template>

<script>
	export default {
		name: 'Category',
		data () {
			return {
				list: '',
				category: {
					name: '',
					code: '',
					center_id: '',
					category_id: ''
				}
			}
		},
		created () {
			this.getList();
		},
		methods: {
			getList () {
				var self = this;
				Public.Ajax('category/list', {}, 'GET', function (res) {
					self.list = res.data;
				});
			},
			addCategory (e, id) {
				var self = this;
				this.category = {
					code: '',
					name: ''
				};
				Public.addEditFn(e, '', self.htm(this.category), function(){
					self.category = {
						code: $('#code').val(),
						name: $('#name').val(),
						center_id: id
					};
					// console.log(self.category);
					// return;
					Public.Ajax('category/add', self.category, 'POST', function(){
						self.getList();
					});
				}, function(){
					Public.keyEnter();
				});
			},
			edit (e, id, item) {
				var self = this;
				this.category = {
					code: item.code,
					name: item.name,
					category_id: item.id,
					center_id: id
				};
				Public.addEditFn(e, '', self.htm(this.category), function(){
					self.category = {
						code: $('#code').val(),
						name: $('#name').val(),
						category_id: item.id,
						center_id: id
					};
					// console.log(self.category);
					// return;
					Public.Ajax('category/edit', self.category, 'POST', function(){
						self.getList();
					});
				}, function(){
					Public.keyEnter();
				});
			},
			deleteBtn (e, id, center_id) {
				var self = this;
				Public.deleteModal(e, '', function(){
					// console.log(id, center_id);
					// return;
					Public.Ajax('category/del', {category_id: id, center_id: center_id}, 'GET', function(){
						self.getList();
					});
				});
			},
			htm (obj) {
				if (!!obj.code) {
					var title = '编辑';
				} else {
					var title = '添加';
				}
				return '<div class="am-modal am-modal-prompt" tabindex="-1" id="add-edit-modal">'+
						'<div class="am-modal-dialog">'+
						'<div class="am-modal-hd">'+title+'</div>'+
						'<div class="am-modal-hd" style="padding: 20px;padding-bottom: 0px;"><div action="" class="am-form">'+
						'<div class="am-form-group">'+
						'<input type="text" id="code" value="'+obj.code+'" class="am-form-field" placeholder="请输入类别编码">'+
						'</div>'+
						'<div class="am-form-group">'+
						'<input type="text" id="name" value="'+obj.name+'" class="am-form-field" placeholder="请输入类别名称">'+
						'</div>'+
						'</div></div>'+
						'<div class="am-modal-footer">'+
				      	'<span class="am-modal-btn" data-am-modal-cancel>取消</span>'+
				      	'<span id="modal_confirm" class="am-modal-btn" data-am-modal-confirm>确认</span>'+
					    '</div>'+
					  	'</div>'+
						'</div>';
			}
		}
	}
</script>

<style scoped>
	
</style>