<template>
	<div class="list_header am-form">
		<div class="list_left">
			<select data-am-selected>
				<option value="-1" selected>中心选择</option>
		  		<option value="a">Apple</option>
			  	<option value="b">Banana</option>
			  	<option value="o">Orange</option>
			  	<option value="m">Mango</option>
			</select>
		</div>
		<div class="list_left">
			<select data-am-selected>
				<option value="-1" selected>标签选择</option>
		  		<option value="a">Apple</option>
			  	<option value="b">Banana</option>
			  	<option value="o">Orange</option>
			  	<option value="m">Mango</option>
			</select>
		</div>
		<div class="list_left">
			<select data-am-selected>
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
	  	<button type="button" class="am-btn am-btn-primary list_left">查询</button>
	  	<div class="list_btn">
	  		<button type="button" class="am-btn am-btn-primary" v-if="modal == 'false'">
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
			}
		},
		data () {
			return {

			}
		},
		created: function () {
			// console.log(this);
		}
	}
</script>

<style scoped>
	
</style>

