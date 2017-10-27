<template>
	<div class="yx_page">
		<ul class="am-pagination am-pagination-right">
			<li><a href="javascript:;">&laquo; 上一页</a></li>
  			<li><a href="javascript:;">下一页 &raquo;</a></li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: 'Page',
		data () {
			return {

			}
		}
	}
</script>

<style scoped>
	.yx_page{
		padding: 0px 10px;
	}
	.yx_page a{
		color: #20A8BB;
	}
</style>