<template>
 <div id="app">
  
   <nav>
      <router-link to="/login">Log In</router-link> |
       <router-link to="/game">Game</router-link>
   </nav>
  
   
 </div>

   

     
</template>

<!-- <script>
// import HelloWorld from '@/components/HelloWorld.vue'
//   export default {
//     name : ""
//     components: {
//     LoginView,
//      },
    
//   }
// </script>
-->



<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
  background-color:#222629;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
#form{
 padding-left: 200px;
 font: white;
}
</style>




