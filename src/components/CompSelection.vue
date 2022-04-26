<template>
    <div>
        <v-btn>rock</v-btn>
        <h1>  </h1>
    </div>
</template>

<script>
    export default {
         name : "CompSelection",
         data() {
             return {
                 compChoice: undefined,
                 compPoints : 0,
             }
         },
             methods: {
                 compFunc(options) {
                     this.compChoice = options,
                     options = ['rock', 'paper' , 'scissors'];
                     options[Math.floor(Math.random() * options.length)];
                     this.scoreCount();
                     
                 },
                                 
                 },
                 computed: {
                     compRand() {
                         return {
                          "sign": this.compChoice === undefined,
                          "rock-sign": this.compChoice === "rock",
                          "paper-sign" :this.compChoice ==="paper",
                          "scissors-sign" :this.compChoice === "scissors"


                     }
                 },
             }
    }         
    
</script>

<style lang="scss" scoped>


</style>