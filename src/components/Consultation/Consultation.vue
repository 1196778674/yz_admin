<template>
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
			<span class="plus am-icon-plus-square-o" @click="addConsultation($event, item.id)"></span>
		</ul>
	</div>
</template>

<script>
	export default {
		name: 'Consultation',
		data () {
			return {
				list: '',
				consultation: {
					name: '',
					center_id: '',
					clinics_id: ''
				}
			}
		},
		created () {
			this.getList();
		},
		methods: {
			getList () {
				var self = this;
				Public.Ajax('clinics/list', {}, 'GET', function(res){
					self.list = res.data;
				});
			},
			addConsultation (e, id) {
				var self = this;
				this.consultation = {
					name: ''
				};
				Public.addEditFn(e, '', self.htm(this.consultation), function(){
					self.consultation = {
						name: $('#name').val(),
						center_id: id
					};
					console.log(self.consultation);
					return;
					Public.Ajax('clinics/add', self.consultation, 'POST', function(){
						self.getList();
					});
				});
			},
			edit (e, id, item) {
				var self = this;
				this.consultation = {
					name: item.name,
					clinics_id: item.id,
					center_id: id
				};
				Public.addEditFn(e, '', self.htm(this.consultation), function(){
					self.consultation = {
						name: $('#name').val(),
						clinics_id: item.id,
						center_id: id
					};
					console.log(self.consultation);
					return;
					Public.Ajax('clinics/edit', self.consultation, 'POST', function(){
						self.getList();
					});
				});
			},
			deleteBtn (e, id, center_id) {
				var self = this;
				Public.deleteModal(e, '', function(){
					console.log(id, center_id);
					return;
					Public.Ajax('clinics/del', {clinics_id: id, center_id: center_id}, 'GET', function(){
						self.getList();
					});
				});
			},
			htm (obj) {
				return '<div class="am-modal am-modal-prompt" tabindex="-1" id="add-edit-modal">'+
						'<div class="am-modal-dialog">'+
						'<div class="am-modal-hd" style="padding: 20px;padding-bottom: 0px;"><div action="" class="am-form">'+
						'<div class="am-form-group">'+
						'<input type="text" id="name" value="'+obj.name+'" class="am-form-field" placeholder="请输入诊室名称">'+
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