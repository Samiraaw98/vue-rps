
<template>
  <div>
    <h1> Rock-Paper-Scissors</h1>
    <img alt="rps logo" height="150px"  src="../assets/rock-paper-scissors.png"  > 
  <UserSelection/>
  <ScoreBoard/>
  <CompSelection/>
 
 
  </div>
</template>

<script>
import UserSelection from '@/components/UserSelection.vue'
import ScoreBoard from '@/components/ScoreBoard.vue'
import CompSelection from '@/components/CompSelection.vue'



  export default {
      name : "GameView",
  components: { 
    UserSelection,
    ScoreBoard,
    CompSelection },
  
  }
</script>

<style lang="scss" scoped>
h1{
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
  background-color:#222629;
}
#form {
 padding-left: 200px;
 font: white;
}
img {
  padding-left: 300px;
}


</style>
