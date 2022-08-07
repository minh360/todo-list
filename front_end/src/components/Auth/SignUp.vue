<template>
  <header-panel>
    <template #name>
      <div class="name clickable" @click="router.push('/')">TODO</div>
    </template>
    <div class="clickable" @click="router.push('/sign-in')">Sign In</div>
  </header-panel>
  <SignPanel @check-error="checkError" style="height: 100vh">
    <div style="color: black">Email</div>
    <input type="email" v-model="email" @focusout="checkError"/>
    <div style="color: black">Password</div>
    <input type="password" v-model="password" @focusout="checkError"/>
    <div>{{message}}</div>
    <button @click="addNewUser" class="clickable">Sign up with Email</button>
    <hr style="width: 100%"/>
    <div>Already signed up? <span style="text-decoration: underline" class="clickable" @click="router.push('/sign-in')">Go to login</span></div>
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
const addNewUser = async () => {
  if(email.value !== '' && password.value !== ''){
    let user_exits
    await axios.request({
      method: "POST",
      url: "http://localhost:3000/user/sign_up/check",
      headers: {
        'Authorization': 'token'
      },
      data: {
        email: email.value,
        password: password.value
      },
      timeout: 3000
    })
        .then((message) => {
          user_exits = message.data
        })
        .catch((err) =>
            console.log(err.response.data)
        );
    message.value = user_exits ? 'Email đã được đăng ký' : ''
    if(!user_exits){
      axios.request({
        method: "POST",
        url: "http://localhost:3000/user/sign_up",
        headers: {
          'Authorization': 'token'
        },
        data: {
          email: email.value,
          password: password.value
        },
        timeout: 3000
      })
          .then(() => {
            clearUser()
            message.value = 'Đăng ký thành công'
            setTimeout(()=>router.push('/sign-in'),1000)
          })
          .catch((err) =>
              console.log(err.response.data)
          );
    }
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