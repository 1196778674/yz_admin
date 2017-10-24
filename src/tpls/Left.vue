<template>
	<div class="yx_left">
		<ul>
			<li>
				<router-link to="#">link</router-link>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: 'Left',
		data(){
			return{

			}
		},
		created: function () {
			console.log(Public.Ajax());
		}
	}
</script>
<style scoped>
	
</style>