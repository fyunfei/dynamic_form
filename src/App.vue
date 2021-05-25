<template>
  <div id="app">
    <div class="content">
      <router-view class="item item-widgets" name="widgets" />
      <router-view class="item item-views" name="views" />
      <router-view class="item item-config" name="config" />
    </div>
  </div>
</template>

<style lang="scss">
html,
body {
  height: 100%;
}
#app {
  overflow: hidden;
  height: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background-color: #f5f5f5;
}
.content {
  height: 100%;
  display: flex;
  .item {
    padding: 10px;
    height: 100%;
  }
  .item-views{
    width: 100%;
    flex-grow: 1;
  }
  .item-widgets,
  .item-config {
    flex: 0 0 300px;
    max-width: 300px;
    background-color: #fff;
  }
}
</style>
