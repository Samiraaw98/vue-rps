<template>
    <div>
       
    </div>
    
</template>

<script>
    export default {
        name : "UserSelection",
       data() {
           return {
               userChoice: undefined,
               userPoints: 0
           }
       },
       methods: {
           userFunc(options) {
               this.userChoice = options,
               options = ['rock', 'paper' , 'scissors'];
           }
       },
    }
</script>

<style lang="scss" scoped>

</style>