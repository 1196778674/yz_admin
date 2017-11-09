<template>
	<animated-fade-in-up-big>
		<div>
			<div v-if="type == 'project'">
				<projectform></projectform>
			</div>
			<div v-if="type == 'articles'">
				<articlesform></articlesform>
			</div>
			<div v-if="type == 'category'">
				<categoryform></categoryform>
			</div>
			<div v-if="type == 'center'">
				<centerform></centerform>
			</div>
			<div v-if="type == 'consultation'">
				<consultationform></consultationform>
			</div>
			<div v-if="type == 'equipment'">
				<equipmentform></equipmentform>
			</div>
			<div v-if="type == 'modular'">
				<modularform></modularform>
			</div>
			<div v-if="type == 'personnel'">
				<personnelform></personnelform>
			</div>
			<div v-if="type == 'tags'">
				<tagsform></tagsform>
			</div>
		</div>
	</animated-fade-in-up-big>
</template>

<script>
	import Projectform from './Projectform';
	import Articlesform from './Articlesform';
	import Categoryform from './Categoryform';
	import Centerform from './Centerform';
	import Consultationform from './Consultationform';
	import Equipmentform from './Equipmentform';
	import Modularform from './Modularform';
	import Personnelform from './Personnelform';
	import Tagsform from './Tagsform'

	export default {
		name: 'Form',
		data () {
			return {
				type: ''
			}
		},
		created () {
			this.type = this.$route.query.type;
		},
		components: {
			"projectform" : Projectform,
			"articlesform" : Articlesform,
			"categoryform" : Categoryform,
			"centerform" : Centerform,
			"consultationform" : Consultationform,
			"equipmentform" : Equipmentform,
			"modularform" : Modularform,
			"personnelform" : Personnelform,
			"tagsform" : Tagsform,
		},
	}
</script>

<style scoped>
	
</style>