<template>
	<div class="center_admin">
		<ul>
			<li v-for="item in list">
				<p class="code">{{item.code}}-{{item.id}}</p>
				<p class="title">{{item.name}}</p>
				<span class="trash am-icon-trash" @click="deletes($event, item.id)"></span>
				<span class="edit am-icon-edit" @click="edit($event, item.id, item.code, item.name)"></span>
			</li>
			<li>
				<span class="plus am-icon-plus" @click="addCenter($event)"></span>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: 'Center',
		data () {
			return {
				list: '',
				center: {
					code: '',
					name: ''
				}
			}
		},
		created () {
			this.getList();
		},
		methods: {
			getList () {
				var self = this;
				Public.Ajax('center/list', {}, 'GET', function (res) {
					self.list = res.data;
				});
			},
			edit (e, id, code, name) {
				var self = this;
				this.center = {
					code: code,
					name: name
				};
				Public.addEditFn(e, '', self.htm(this.center), function(){
					self.center = {
						code: $('#code').val(),
						name: $('#name').val()
					};
					self.center.id = id;
					console.log(self.center);
					return;
					Public.Ajax('center/edit', self.center, 'POST', function(){
						self.getList();
					});
				});
			},
			deletes (e, id) {
				var self = this;
				Public.deleteModal(e, id, function(){
					console.log(id);
					return;
					Public.Ajax('center/del', {center_id: id}, 'GET', function(){
						self.getList();
					});
				});
			},
			addCenter (e) {
				var self = this;
				this.center = {
					code: '',
					name: ''
				};
				Public.addEditFn(e, '', self.htm(this.center), function(){
					self.center = {
						code: $('#code').val(),
						name: $('#name').val()
					};
					console.log(self.center);
					return;
					Public.Ajax('center/add', self.center, 'POST', function(){
						self.getList();
					});
				});
			},
			htm (obj) {
				return '<div class="am-modal am-modal-prompt" tabindex="-1" id="add-edit-modal">'+
						'<div class="am-modal-dialog">'+
						'<div class="am-modal-hd" style="padding: 20px;padding-bottom: 0px;"><div action="" class="am-form">'+
						'<div class="am-form-group">'+
						'<input type="text" id="code" value="'+obj.code+'" class="am-form-field" placeholder="请输入中心编码">'+
						'</div>'+
						'<div class="am-form-group">'+
						'<input type="text" id="name" value="'+obj.name+'" class="am-form-field" placeholder="请输入中心名称">'+
						'</div>'+
						'</div></div>'+
						'<div class="am-modal-footer">'+
				      	'<span class="am-modal-btn" data-am-modal-cancel>取消</span>'+
				      	'<span class="am-modal-btn" data-am-modal-confirm>确认</span>'+
					    '</div>'+
					  	'</div>'+
						'</div>';
			}
		}
	}
</script>

<style scoped>

</style>