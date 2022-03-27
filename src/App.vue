<template>
  <div id="app">
	  <!-- <router-link  to="/about">About</router-link> -->
    <!-- <router-link  to="/home">Home</router-link> -->
    <!-- <router-view></router-view> -->
    <Main></Main>
    
  </div>
</template>

<script>
  import Main from './view/Main.vue'

	export default {
    components: { Main },
		name:'App',
	}
</script>

<style >
  html, body {
    margin: 0;
    padding: 0;
  }
  #app {
    height: 100vh;
  }
</style>
