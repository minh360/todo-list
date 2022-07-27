<template>
  <header-panel>
    <template #name>
      <div class="name clickable" @click="router.push('/')">TODO</div>
    </template>
    <div class="clickable" @click="router.push('/sign_in')">Sign In</div>
  </header-panel>
  <div style="display: flex;justify-content:center;gap: 5%">
    <div style="display: flex;flex-direction: column;justify-content: center;height: 100ch">
      <input v-model="email"/>
      <input type="password" v-model="password"/>
      <button @click="addNewUser">Sign up with Email</button>
    </div>
    <img src="../../assets/banner.jpg" alt="" style="height: 40%;width: 40%; margin: auto 0;"/>
  </div>

</template>

<script setup>
import { ref } from 'vue'
import axios from "axios";
import {useRouter} from "vue-router";
import HeaderPanel from "@/components/Layouts/HeaderPanel";
const router = useRouter();
const email = ref('')
const password = ref('')
const addNewUser = () => {
  if(email.value !== '' && password.value !== ''){
    axios.request({
      method: "POST",
      url: "http://localhost:3000/user/sign_up",
      headers: {
        'Authorization': 'token'
      },
      data: {
        email: email.value,
        password: password.value
      }
    })
        .then(() => {
          clearUser()
        })
        .catch(error => {
          console.log(error.response.data);
        });
  }
}
const clearUser = () =>{
  email.value =''
  password.value = ''
}
</script>

<style scoped>

</style>