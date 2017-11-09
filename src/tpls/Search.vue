<template>
	<div class="list_header am-form">
		<div class="list_left" v-if="search == 'true'">
			<select data-am-selected="{btnWidth: '120', maxHeight: 300}" id="center_name">
			</select>
		</div>
		<div class="list_left" v-if="search == 'true'">
			<select data-am-selected="{btnWidth: '100', maxHeight: 200}" id="category_name">
				<option value="0">标签选择</option>
		  		<option value="1">适应症</option>
			  	<option value="2">禁忌症</option>
			  	<option value="3">作用功能</option>
			  	<option value="4">作用部位</option>
			</select>
		</div>
		<div class="list_left" v-if="search == 'true'">
			<select data-am-selected="{btnWidth: '120', maxHeight: 300}" id="keyword_name">
			</select>
		</div>
		<!-- <div class="am-form-group am-form-icon list_left">
		    <i class="am-icon-search"></i>
		    <input type="text" class="am-form-field" placeholder="搜索">
	  	</div> -->
	  	<button type="button" class="am-btn am-btn-primary list_left" v-if="search == 'true'" @click="searchFn()">查询</button>
	  	<div class="list_btn">
	  		<router-link :to="{ path: 'form', query: { type: fromtype }}" class="am-btn am-btn-primary" v-if="modal == 'false'">
	  			<i class="am-icon-plus"></i>
	  			添加
	  		</router-link>
	  		<button type="button" class="am-btn am-btn-primary" v-else @click="addEditFn($event)">
	  			<i class="am-icon-plus"></i>
	  			添加
	  		</button>
	  	</div>
	  	<div class="clear"></div>
	</div>
</template>

<script>
	export default {
		name: 'Search',
		props: {
			'modal':{
				type: String,
				default: false
			},
			'fromtype': {
				type: String,
				default: 'project'
			},
			'search': {
				type: String,
				default: 'true'
			}
		},
		data () {
			return {
				params: {
					center_id: '',
					label_category_id: '',
					label_key_word: ''
				},
				center_list: [],
				keyword_list: []
			}
		},
		created: function () {
			this.getCenter();
			this.changeCategory();
			this.getKeyword(0);
		},
		methods: {
			getCenter () {
				var self = this;
				Public.Ajax('center/list', {}, 'GET', function(res){
					self.center_list = res.data;
					var options = '<option value="0">中心选择</option>';
					for (var i = 0; i < self.center_list.length; i++) {
						options += '<option value="'+self.center_list[i].id+'">'+self.center_list[i].name+'</option>';
					};
					$('#center_name').append(options);
					Public.initSelect();
				});
			},
			changeCategory () {
				var self = this;
				$(function(){
					$('#category_name').on('change', function(e){
						self.getKeyword(e.target.value);
					});
				});
			},
			getKeyword (id) {
				var self = this;
				self.keyword_list = [{id: 0, name: '关键字选择'}];
				Public.Ajax('label/selectList', {label_category_id: id}, 'GET', function(res){
					self.keyword_list = self.keyword_list.concat(res.data);
					var options = '';
					for (var i = 0; i < self.keyword_list.length; i++) {
						options += '<option value="'+self.keyword_list[i].id+'">'+self.keyword_list[i].name+'</option>';
					};
					$('#keyword_name').html('').append(options);
					Public.initSelect();
				});
			},	
			addEditFn (e) {
				this.$emit('addEditFn', e);
			},
			searchFn () {
				this.params = {
					center_id: $('#center_name').val(),
					label_category_id: $('#category_name').val(),
					label_key_word: $('#keyword_name').val()
				};
				this.$emit('searchFn', this.params);
			}
		}
	}
</script>

<style scoped>
	
</style>

