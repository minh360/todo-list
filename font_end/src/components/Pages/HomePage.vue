<template>
  <header-panel />
  <div style="text-align: center;display: flex;flex-direction:column; align-items: center; justify-content: center;height: 100ch;color: linen">
    <div style="font-weight: 700; font-size: 40px;margin-bottom: 25px;text-transform: uppercase">Organize your work and life, finally.</div>
    <div style="font-size: 20px;font-weight: 500">Become focused, organized, and calm with Todoist.</div>
    <div style="font-size: 20px;font-weight: 500">
      The world's #1 to-do list and task management app from the bottom up.
    </div>
    <button>Start For Free</button>
  </div>
</template>

<script setup>
import HeaderPanel from "@/components/Layouts/HeaderPanel";
</script>

<style lang="scss" scoped>
button{
  margin-top: 20px;
  padding: 20px 50px;
  border-radius: 10px;
  font-size: 20px;
  background-color: bisque;
  color: darkred;
  font-weight: 700;
}
</style>