<template>
  <div id="app">
    <!-- 路由显示的内容 可以配合router-link使用 可以切换路由-->
    <!-- <router-link to="/">首页</router-link> -->
    <!-- <router-link to="/Overview">111</router-link> -->
    <router-view></router-view>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}