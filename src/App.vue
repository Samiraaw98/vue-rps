<template>
 <div id="app">
  
   <nav>
      <router-link to="/">Log In</router-link> |
       <router-link to="/game">Game</router-link>
   </nav>
   <router-view/>

 </div>


</template>


<script>
  export default {
    name: 'App',
  }
</script>



<style lang="scss"  >
nav {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
  background-color:#222629;
   padding: 30px;
}



  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
  html{
    background-color: antiquewhite;
  }


</style>




