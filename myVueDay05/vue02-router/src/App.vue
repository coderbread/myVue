<template>
  <div id="app">
    <router-link to="/home" tag="button" replace>首页</router-link>
    <router-link to="/about" tag="button" replace>关于</router-link>
    <router-link :to="'/user/'+id" tag="button" replace>用户</router-link>
    <router-link :to="{path:'/profile', query:{name: 'Bread'}}" tag="button" replace>档案</router-link>
    <hr>
    <img src="./assets/logo.png" alt="">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: 123,
      name: 'Bread'
    }
  },
}
</script>

<style lang="less">
* {
  margin: 6px
}
a {
  text-decoration: none
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.active {
  color: #42b983;
}
</style>
