<template>
 <div>
   <!-- $route: 获取处于活跃状态的路由对象 params: 获取到该路由对象的动态属性 -->
   <h2>这是{{$route.params.id}}的个人主页</h2>
 </div>
</template>

<script>
export default {
  mounted() {
    
  },
}
</script>

<style scoped>

</style>
