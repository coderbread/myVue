<template>
 <div>
   <h2>this is Home page</h2>
   <router-link to="/home/singers">&lt;我是歌手&gt;</router-link>
   <h5>选手名单:</h5>
   <router-view></router-view>
 </div>
</template>

<script>
 export default {
   data () {
     return {
     }
   },
   components: {

   }
 }
</script>

<style scoped>

 
</style>
