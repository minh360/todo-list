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
.clickable{
  cursor: pointer;
}
</style>
