<template>
	<div id="right" class="tpl-content-wrapper">
        <div class="container-fluid">
            <div class="">
                fsfsfs
            </div>
        </div>
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