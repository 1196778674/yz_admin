<template>
	<div class="yx_body">
		<button @click="test('你脑子哇咔啦')">dialog</button>
		<button @click="test('这都被你看出来了？')">dialog</button>
	</div>
</template>

<script>
	export default {
		name: 'Body',
		data(){
			return{

			}
		},
		methods: {
			test: function (t) {
				Public.dialog(t);
			}
		}
	}
</script>
<style scoped>
	
</style>