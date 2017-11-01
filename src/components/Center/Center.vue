<template>
	<div class="center_admin">
		<ul>
			<li v-for="item in list">
				<p class="code">{{item.code}}-{{item.id}}</p>
				<p class="title">{{item.name}}</p>
				<span class="trash am-icon-trash"></span>
				<span class="edit am-icon-edit"></span>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: 'Center',
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
				Public.Ajax('center/list', {}, 'GET', function (res) {
					self.list = res.data;
				});
			}
		}
	}
</script>

<style scoped>

</style>