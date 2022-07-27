<template>
  <header-panel>
    <template #name>
      <div class="name clickable" @click="router.push('/')">TODO</div>
    </template>
    <div class="clickable" @click="router.push('/sign_in')">Sign In</div>
    <button class="clickable" @click="router.push('/sign_up')">Start For Free</button>
  </header-panel>
  <div class="content">
    <div style="font-weight: 700; font-size: 40px;margin-bottom: 25px;text-transform: uppercase">Organize your work and life, finally.</div>
    <div style="font-size: 20px;font-weight: 500">Become focused, organized, and calm with Todoist.</div>
    <div style="font-size: 20px;font-weight: 500">
      The world's #1 to-do list and task management app from the bottom up.
    </div>
    <button class="btn-signup" @click="router.push('/sign_up')">Start For Free</button>
  </div>
</template>

<script setup>
import HeaderPanel from "@/components/Layouts/HeaderPanel";
import {useRouter} from "vue-router";
const router = useRouter();
</script>

<style lang="scss" scoped>
.content{
  text-align: center;
  display: flex;
  flex-direction:column;
  align-items: center;
  justify-content: center;
  height: 100ch;color: linen;
  background-image: url('../../assets/back_ground.jpg');
  background-size: 100% 100vh;
  .btn-signup{
    margin-top: 20px;
    padding: 20px 50px;
    border-radius: 10px;
    font-size: 20px;
    background-color: bisque;
    color: darkred;
    font-weight: 700;
  }
}

</style>