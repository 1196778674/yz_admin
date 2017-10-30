<template>
	<div>
		<div v-if="type == 'project'">
			<projectform></projectform>
		</div>
		<div v-else>
			<articlesform></articlesform>
		</div>
	</div>
</template>

<script>
	import Projectform from './Projectform';
	import Articlesform from './Articlesform';
	export default {
		name: 'Form',
		data () {
			return {
				type: ''
			}
		},
		created () {
			this.type = this.$route.query.id;
		},
		components: {
			"projectform" : Projectform,
			"articlesform" : Articlesform,
		},
	}
</script>

<style scoped>
	
</style>