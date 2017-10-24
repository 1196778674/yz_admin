<template>
  <div class="yz_home">
      <left></left>
      <right></right>
  </div>
</template>

<script>
import left from '@/tpls/Left'
import right from '@/tpls/Right'
export default {
  name: 'Home',
  data () {
    return {
      
    }
  },
  created: function(){

  },
  methods: {
    
  },
  components: {
    "left": left,
    "right": right
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>