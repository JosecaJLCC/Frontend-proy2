<template>
  <Login/>
  <nav>
    <router-link to="/menu">Home</router-link> |
    <router-link to="/login">Login Register</router-link>
  </nav>
  <router-view/>
</template>

<script>
import Login from './views/Login.vue';


export default {
  name: 'App',
  RouterView:Login
  
}
</script>

<style>

*{
    margin:0;
    padding:0;
}

body{
    background-color:rgb(12, 12, 12);
    font-family: 'Quicksand', sans-serif;
    color:white
}
</style>

