<template>
	<animated-fade-in-right>
		<div class="category">
			<ul v-for="item in list">
				<h3>{{item.name}}</h3>
				<li v-for="val in item.list">
					{{val.name}}
					<div class="btns">
						<div class="centers">
							<span class="am-icon-edit edit" @click="edit($event, item.id, val)"></span>
							<span class="am-icon-trash delete" @click="deleteBtn($event, val.id, item.id)"></span>
						</div>
					</div>
				</li>
				<span class="plus am-icon-plus-square-o" @click="addlabels($event, item.id)"></span>
			</ul>
		</div>
	</animated-fade-in-right>
</template>

<script>
	export default {
		name: 'Tags',
		data () {
			return {
				list: '',
				labels: {
					name: '',
					label_category_id: '',
					label_id: ''
				}
			}
		},
		created () {
			this.getList();
		},
		methods: {
			getList () {
				var self = this;
				Public.Ajax('label/list', {}, 'GET', function(res){
					self.list = res.data;
				});
			},
			addlabels (e, id) {
				var self = this;
				this.labels = {
					name: ''
				};
				Public.addEditFn(e, '', self.htm(this.labels), function(){
					self.labels = {
						name: $('#name').val(),
						label_category_id: id
					};
					// console.log(self.labels);
					// return;
					Public.Ajax('label/add', self.labels, 'POST', function(){
						self.getList();
					});
				}, function(){
					Public.keyEnter();
				});
			},
			edit (e, id, item) {
				var self = this;
				this.labels = {
					name: item.name,
					label_id: item.id,
					label_category_id: id
				};
				Public.addEditFn(e, '', self.htm(this.labels), function(){
					self.labels = {
						name: $('#name').val(),
						label_id: item.id,
						label_category_id: id
					};
					// console.log(self.labels);
					// return;
					Public.Ajax('label/edit', self.labels, 'POST', function(){
						self.getList();
					});
				}, function(){
					Public.keyEnter();
				});
			},
			deleteBtn (e, id, label_category_id) {
				var self = this;
				Public.deleteModal(e, '', function(){
					// console.log(id, label_category_id);
					// return;
					Public.Ajax('label/del', {label_id: id, label_category_id: label_category_id}, 'GET', function(){
						self.getList();
					});
				});
			},
			htm (obj) {
				if (!!obj.name) {
					var title = '编辑';
				} else {
					var title = '添加';
				}
				return '<div class="am-modal am-modal-prompt" tabindex="-1" id="add-edit-modal">'+
						'<div class="am-modal-dialog">'+
						'<div class="am-modal-hd">'+title+'</div>'+
						'<div class="am-modal-hd" style="padding: 20px;padding-bottom: 0px;"><div action="" class="am-form">'+
						'<div class="am-form-group">'+
						'<input type="text" id="name" value="'+obj.name+'" class="am-form-field" placeholder="请输入标签名称">'+
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