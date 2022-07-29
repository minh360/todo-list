<template>
  <header-panel>
    <template #name>
      <div class="name clickable" @click="router.push('/')">TODO</div>
    </template>
    <div class="clickable" @click="router.push('/sign-up')">Sign Up</div>
  </header-panel>
  <SignPanel @check-error="checkError" style="height: 100vh">
    <div style="color: black">Email</div>
    <input type="email" v-model="email" @focusout="checkError"/>
    <div style="color: black">Password</div>
    <input type="password" v-model="password" @focusout="checkError"/>
    <div>{{message}}</div>
    <button @click="signIn" class="clickable">Sign In</button>
    <hr style="width: 100%">
    <div>Don’t have an account? <span style="text-decoration: underline" class="clickable" @click="router.push('/sign-up')">Sign up</span></div>
  </SignPanel>

</template>

<script setup>
import { ref } from 'vue'
import axios from "axios";
import {useRouter} from "vue-router";
import SignPanel from "@/components/SignPanel";
import HeaderPanel from "@/components/Layouts/HeaderPanel";
const router = useRouter();
const email = ref('')
const password = ref('')
const message = ref('')
const checkError = () =>{
  if(email.value === '')
    message.value = 'Vui lòng nhập Email!!!'
  else if(password.value === '')
    message.value = 'Vui lòng nhập Password!!!'
  else message.value = ''
}
const signIn = async () => {
  if(email.value !== '' && password.value !== ''){
    await axios.request({
      method: "POST",
      url: "http://localhost:3000/user/sign_in",
      headers: {
        'Authorization': 'token'
      },
      data: {
        email: email.value,
        password: password.value
      },
      timeout: 3000
    })
        .then(user =>{
          clearUser()
          message.value = user.data ? 'Đăng nhập thành công' : 'Đăng nhập thất bại'
          if(user.data){
            localStorage.setItem('id_user',user.data._id)
            setTimeout(() => router.push({name: 'home'}),1000)
          }
        })
        .catch((err) =>
           console.log(err.response.data)
        );
  }
}
const clearUser = () =>{
  email.value =''
  password.value = ''
}
</script>

<style lang="scss" scoped>
input{
  height: 50px;
  padding: 10px;
  margin-top: 10px;
  border-radius: 8px;
  border-color: darkred
}
button{
  height: 50px;
  font-size:15px;
  border-radius: 16px;
  background-color: darkred;
  color: white;
  margin-top: 25px;
  text-align: center;
}
@media screen and (min-width: 800px){
  input, button{
    box-sizing: border-box;
    max-width: 500px;
  }
}
</style>