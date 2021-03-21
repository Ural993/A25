<template>
  <div id="app">
    <div class="container">
      <router-link to="/"></router-link>
      <router-link to="/edit/:id"></router-link>
      <router-view />
    </div>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
