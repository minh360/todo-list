<template>
  <router-view v-slot="{ Component }">
    <keep-alive>
      <component :is="Component" />
    </keep-alive>
  </router-view>
  <footer-panel />
</template>

<script setup>
import FooterPanel from "@/components/Layouts/FooterPanel";
</script>

<style lang="scss">
#app{
  background-image: url('../public/back_ground.jpg');
  background-size: 100% 100vh;
}
</style>
