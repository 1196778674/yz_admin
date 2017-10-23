<template>
  <div class="hello">
      <button type="button" class="am-btn am-btn-primary">默认样式</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'hello world'
    }
  },
  created: function(){
    this.msg = '优翔客户管理系统'
  },
  methods: {
    change () {
      this.msg = '优翔客户管理系统!'
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>