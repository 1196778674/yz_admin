<template>
	<div class="tags">
		<ul>
			<li></li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: 'Tags',
		data () {
			return {
				list: ''
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
			}
		}
	}
</script>

<style scoped>
	
</style>