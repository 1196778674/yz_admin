<template>
	<div class="category">
		<ul>
			<li>
				类别名称1
				<p>12313</p>
				<p>中心</p>
			</li>
			<li>
				类别名称1
				<small>12313</small>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: 'Category',
		data () {
			return {
				list: '[{"id":1,"name":"医学检测中心","list":[{"id":1,"name":"类别名称2","center_id":1,"code":"XXXX","created_at":"2017-10-30 05:42:42","updated_at":"2017-10-30 05:45:11","deleted_at":null},{"id":4,"name":"名称","center_id":1,"code":"XXX","created_at":null,"updated_at":null,"deleted_at":null}]},{"id":2,"name":"会员医疗中心","list":[{"id":2,"name":"类别名称3","center_id":2,"code":"XXX","created_at":null,"updated_at":null,"deleted_at":null}]},{"id":3,"name":"口腔健康中心","list":[{"id":3,"name":"类别名称4","center_id":3,"code":"xxxx","created_at":null,"updated_at":null,"deleted_at":null},{"id":5,"name":"mingch","center_id":3,"code":"XXXX","created_at":null,"updated_at":null,"deleted_at":null}]}]'
			}
		}
	}
</script>

<style scoped>
	
</style>