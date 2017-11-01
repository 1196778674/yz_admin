<template>
	<div class="list_header am-form">
		<div class="list_left" v-if="search == 'true'">
			<select data-am-selected id="center">
				<option value="-1" selected>中心选择</option>
		  		<option value="a">Apple</option>
			  	<option value="b">Banana</option>
			  	<option value="o">Orange</option>
			  	<option value="m">Mango</option>
			</select>
		</div>
		<div class="list_left" v-if="search == 'true'">
			<select data-am-selected id="tags">
				<option value="-1" selected>标签选择</option>
		  		<option value="a">Apple</option>
			  	<option value="b">Banana</option>
			  	<option value="o">Orange</option>
			  	<option value="m">Mango</option>
			</select>
		</div>
		<div class="list_left" v-if="search == 'true'">
			<select data-am-selected id="keywrod">
				<option value="-1">关键字选择</option>
		  		<option value="a">Apple</option>
			  	<option value="b">Banana</option>
			  	<option value="o">Orange</option>
			  	<option value="m">Mango</option>
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
					center: '',
					tag: '',
					keywrod: ''
				}
			}
		},
		created: function () {
			// console.log(this);
		},
		methods: {
			addEditFn (e) {
				this.$emit('addEditFn', e);
			},
			searchFn () {
				this.params = {
					center: $('#center').val(),
					tags: $('#tags').val(),
					keywrod: $('#keywrod').val()
				};
				this.$emit('searchFn', this.params);
			}
		}
	}
</script>

<style scoped>
	
</style>

