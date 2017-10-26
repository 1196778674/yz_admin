<template>
  <div class="am-g tpl-g">
      <vheader></vheader>
      <div>
        <left></left>
        <right></right>
      </div>
  </div>
</template>

<script>
import header from '@/tpls/Header'
import left from '@/tpls/Left'
import right from '@/tpls/Right'
export default {
  name: 'Home',
  data () {
    return {
      
    }
  },
  components: {
    "vheader": header,
    "left": left,
    "right": right
  }
}
</script>

<style scoped>

</style>