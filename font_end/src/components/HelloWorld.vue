<script setup>
import {onMounted, ref} from "vue";
import axios from 'axios';
const todos = ref([])
const fetchTodo = async function () {
  await axios.get("http://localhost:3000/todo").then(response => {
    todos.value = response.data;
  });
}
onMounted(() =>
  fetchTodo()
)
</script>

<template>
  <div v-show="todos.length>0">
    {{todos}}
  </div>
</template>

<style lang="scss" scoped>
</style>
