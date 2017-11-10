<template>
	<animated-fade-in-right>
		<div class="category">
			<ul v-for="item in list">
				<h3>{{item.name}}</h3>
				<div class="list_container">
					<li v-for="val in item.clinics_list">
						{{val.name}}
						<div class="btns">
							<div class="centers">
								<span class="am-icon-edit edit" @click="edit($event, item.id, val)"></span>
								<span class="am-icon-trash delete" @click="deleteBtn($event, val.id, item.id)"></span>
							</div>
						</div>
					</li>
					<span class="plus am-icon-plus-square-o" @click="addConsultation($event, item.id)"></span>
					<span class="plus am-icon-bars" @click="addParallelConsultation($event, item.id)"></span>
				</div>
				<div class="list_containers" v-if="item.parallel_clinics_list.length">
					<p>平行诊室</p>
					<ul>
						<li v-for="v in item.parallel_clinics_list">
							{{v.name}}
							<div class="btns">
								<div class="centers" style="margin-left: -5px;">
									<span class="am-icon-trash" @click="deleteBtn($event, v.id, item.id)"></span>
								</div>
							</div>
							<div class="tips">
								<div class="triangle"></div>
								<dd v-for="vv in v.list">{{vv.name}}</dd>
							</div>
						</li>
					</ul>
				</div>
				<div class="clear"></div>
			</ul>
		</div>
	</animated-fade-in-right>
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
				},
				consultations: {
					name: '',
					center_id: '',
					clinics_list: []
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
					// console.log(self.consultation);
					// return;
					Public.Ajax('clinics/add', self.consultation, 'POST', function(){
						self.getList();
					});
				}, function(){
					Public.keyEnter();
				});
			},
			addParallelConsultation (e, id) {
				var self = this;
				var list;
				$.each(self.list, function(index, val) {
					if (val.id == id) {
						list = val.clinics_list;
					}
				});
				this.consultations = {
					name: ''
				};
				Public.addEditFn(e, '', self.htms(list), function(){
					var clinics_list = [];
					$.each($('.label_check'), function(index, val) {
						if ($(val).find('input').prop('checked')) {
							clinics_list.push({id: $(val).find('input').val(), name: $(val).text()});
						}
					});
					// console.log(clinics_list);
					self.consultations = {
						name: $('#names').val(),
						center_id: id,
						clinics_list: JSON.stringify(clinics_list)
					};
					if (!self.consultations.name) {
						Public.dialog('请输入平行诊室名称!');
						return false;
					}
					if (self.consultations.clinics_list.length <= 2) {
						Public.dialog('请选择诊室!');
						return false;
					}
					// console.log(self.consultations);
					// return;
					Public.Ajax('clinics/addParallel', self.consultations, 'POST', function(){
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
					// console.log(self.consultation);
					// return;
					Public.Ajax('clinics/edit', self.consultation, 'POST', function(){
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
					Public.Ajax('clinics/del', {clinics_id: id, center_id: center_id}, 'GET', function(){
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
						'<input type="text" id="name" value="'+obj.name+'" class="am-form-field" placeholder="请输入诊室名称">'+
						'</div>'+
						'</div></div>'+
						'<div class="am-modal-footer">'+
				      	'<span class="am-modal-btn" data-am-modal-cancel>取消</span>'+
				      	'<span id="modal_confirm" class="am-modal-btn" data-am-modal-confirm>确认</span>'+
					    '</div>'+
					  	'</div>'+
						'</div>';
			},
			htms (list) {
				var labels = '';
				for (var i = 0; i < list.length; i++) {
					labels += '<label class="label_check" style="font-size: 14px; margin-right: 10px; font-weight: 100; margin-bottom: 10px;"><input style="margin-right: 5px;" value="'+list[i].id+'" type="checkbox">'+list[i].name+'</label>';
				}
				
				return '<div class="am-modal am-modal-prompt" tabindex="-1" id="add-edit-modal">'+
						'<div class="am-modal-dialog">'+
						'<div class="am-modal-hd">添加平行诊室</div>'+
						'<div class="am-modal-hd" style="padding: 20px;padding-bottom: 0px;"><div action="" class="am-form">'+
						'<div class="am-form-group" style="margin-bottom: 5px;">'+
						'<input type="text" id="names" value="" class="am-form-field" placeholder="请输入平行诊室名称">'+
						'</div>'+
						labels +
						'</div>'+
						'</div>'+
						'<div class="am-modal-footer">'+
				      	'<span class="am-modal-btn" data-am-modal-cancel>取消</span>'+
				      	'<span class="am-modal-btn" data-am-modal-confirm>确认</span>'+
					    '</div>'+
					  	'</div>'+
						'</div>';
			},
		}
	}
</script>

<style scoped>
.category ul{
	overflow: inherit;
}
.list_container,.list_container{
	width: 100%;
	float: left;
}
.list_containers{
	padding-left: 10px;
}
.list_containers ul{
	margin-left: -10px;
}
.list_containers ul li{
	position: relative;
}
.list_containers p{
	margin-bottom: 0;
	font-size: 15px;
	font-weight: 600;
	color: #888;
}
.tips{
	position: absolute;
	padding: 5px;
	background-color: rgb(0,0,0);
	border: 1px solid #000;
	border-radius: 5px;
	left: 110%;
	top: 0px;
	z-index: 10000;
	color: #fafafa;
}
</style>