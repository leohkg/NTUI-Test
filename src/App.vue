<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <hr>
    <nt-button size="large" @click="clickFn">
        button
    </nt-button>
  </div>
</template>

<script>

export default {
  name: 'App',
  methods: {
    clickFn () {
        console.log('123');
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
