<template>
	<div class="yx_body">
		body
	</div>
</template>

<script>
	export default {
		name: 'Body',
		data(){
			return{

			}
		},
		created: function(){
			var self = this;
		},
		methods: {
			test: function (e) {
				Public.btnDialog(e);
				Public.dialog('etst');
			}
		}
	}
</script>
<style scoped>
	
</style>