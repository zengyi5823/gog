<template>
  <div id="app">
    <!-- <my-header></my-header> -->

    <!-- <my-footer></my-footer> -->
    <!-- 加载公共的页头组件标签 -->
    <router-view/>
   
  </div>
</template>

<style>
/* 此处引入公共样式css,引入方法？：  @import "./assets/base.css */
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #d8d8d8;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
