<template>
  <section class="header-wrapper">
    <div class="name" @click="router.push('/')">TODO</div>
    <div class="account-wrapper">
      <div>Sign Up</div>
      <button>Start For Free</button>
    </div>
  </section>
</template>

<script setup>
import {useRouter} from "vue-router";
const router = useRouter();
</script>

<style lang="scss" scoped>
.header-wrapper{
  display: flex;
  align-items: center;
  background-color: firebrick;
  justify-content: space-between;
  padding: 0 25px;
  height: 50px;
  font-weight: 700;
  .name{
    color: white;
    font-size: 25px;
  }
  .account-wrapper{
    display: flex;
    color: white;
    gap: 20px;
    align-items: baseline;
    button{
      height: 25px;
      border-radius: 10px;
      background-color: bisque;
      color: darkred;
      font-weight: 700;
    }
  }
}
</style>