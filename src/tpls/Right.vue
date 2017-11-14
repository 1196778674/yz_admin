<template>
	<div id="right" class="tpl-content-wrapper">
        <div class="container-fluid" :style="bodyHeight">
            <router-view/>
        </div>
	</div>
</template>

<script>
	export default {
		name: 'Right',
		data(){
			return{
				bodyHeight: {
					'min-height': 0,
					'overflow-y': 'scroll'
				}
			}
		},
		created () {
			var body_height = ($(window).height() - 90) + 'px';
			this.bodyHeight.minHeight = body_height;
		}
	}
</script>
<style scoped>
	
</style>