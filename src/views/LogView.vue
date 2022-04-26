<template>
    <div>
<h1> Rock-Paper-Scissors</h1>
    <img alt="rps logo" height="300px"  src="../assets/rock-paper-scissors.png"  >
    <app msg="Welcome to Your rps App"/>
    <p>Log in below to start your game!</p>
    <v-form id="form">
    <v-container fluid >
      <v-alert v-if="isAlert" type="error"> Wrong username or password</v-alert>
      <v-alert v-if="isLoggedIn" type="success">
        Login successful
      </v-alert>
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
            :rules="[rules.required, rules.min]"
            :type="show1 ? 'text' : 'password'"
            name="input-10-1"
            label="Password"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-btn
      elevation="2"
      color="yellow"
      @click="login">
      Log in 
      </v-btn>
      <v-btn
      elevation="2"
      color="green"
      @click="logout"
      >Logout</v-btn>
    </v-container>
    </v-form>
  

  </div>


</template>



<script>

import axios from 'axios';
import cookies from 'vue-cookies';
// import router from '@/router';

export default {
 name : 'LogView',
    data () {
      return {
        show1: false,
        show2: true,
        show3: false,
        show4: false,
        password: 'Password',
        isAlert : false,
        isLoggedIn : false,
        rules: {
          emailMatch: () => (`The email and password you entered don't match`),
        },
      
         email: '',
      emailRules: [
        v => /.+@.+/.test(v) || 'E-mail must be valid',
      ],
      }
      
    },
    methods: {
      async login() {
        axios.request({
          url:"https://reqres.in/api/login",
          method:"POST",
          header :{
            'Content-Type':'application/json'
          },
          data:{
            "email":"eve.holt@reqres.in",
            "password": "cityslicka"
          }
        }).then((response)=>{
          cookies.set('sessionToken',response.data.token );
          this.isAlert = false;
          this.isLoggenIn = true;
          console.log(response);
          //  if (this.isLoggedIn.success){
          //   this.$router.push('./game');
           
          
          
         
        }).catch(()=>{
          this.isAlert = true;
        })
      },
        logout() {
          cookies.remove('sessionToken')
        },
       
          }
        }
       
        
      

  




</script>



<style  scoped>

p{
  padding-left: 250px;
}


</style>

