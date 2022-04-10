<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
// import HelloWorld from './components/HelloWorld.vue'
// import NavBar from "./components/Navbar.vue"
import NavBar from "./views/components/Navbar.vue"
import Fotter from "./views/components/fotter.vue";
// import NProgress from 'nprogress'
// NProgress.configure({ parent: '#container' });


</script>

<template>
<div class="overflow-auto">
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <!-- <HelloWorld msg="Hello Vue 3 + Vite" /> -->
  <!-- <div id="container" class=" w-full border-red-700 border mt-28 top-0 right-0 h-10 relative z-50 "></div> -->
  <div class=" z-20 w-full"> 

  <router-view></router-view>
  </div>
  <!-- <Fotter/> -->
</div>
</template>

<style>
/* @import url('https://fonts.googleapis.com/css2?family=Comfortaa&display=swap'); */


#app {
  
}
</style>