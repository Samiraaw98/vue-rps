
<template>
  <div class="home">
    <h1>Welcome to Rock-Paper-Scissors</h1>
    <img alt="rps logo" height="300px"  src="../assets/rock-paper-scissors.png"  >
    <app msg="Welcome to Your rps App"/>
    <p>Log in below to start your game!</p>
     <v-form id="form">
    <v-container fluid >
      <v-col
          cols="8"
          md="8"
        >
          <v-text-field class="text"
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            
          ></v-text-field>
        </v-col>
      <v-row>
        <v-col
          cols="8"
          sm="8"
        >
          <v-text-field class="text"
            v-model="password"
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[rules.required, rules.min]"
            :type="show1 ? 'text' : 'password'"
            name="input-10-1"
            label="Password"
           
            @click:append="show1 = !show1"
          ></v-text-field>
        </v-col>
      </v-row>
       
    </v-container>
  </v-form>

  </div>
</template>


<script>
// @ is an alias to /src



export default {
   name: 'LoginView',
  //  components: {
  //    HelloWorld
  //  },
    data () {
      return {
        show1: false,
        show2: true,
        show3: false,
        show4: false,
        password: 'Password',
        rules: {
          emailMatch: () => (`The email and password you entered don't match`),
        },
      
         email: '',
      emailRules: [
        v => /.+@.+/.test(v) || 'E-mail must be valid',
      ],
      }
      
    },

  }




</script>



<style  scoped>

</style>
