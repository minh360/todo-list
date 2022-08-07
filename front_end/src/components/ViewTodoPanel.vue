<template>
  <div style="padding: 0 30px;font-weight: 600;display: flex;gap: 20px;flex-direction: column">
    <p style="font-size: 25px;font-weight: 700;font-style: italic">{{title}}</p>
    <div>Deadline</div>
    <input type="date" :value="time" :disabled="true" style="height: 50px">
    <div>Mô tả</div>
    <textarea :value="describe" style="height: 300px" :disabled="true"></textarea>
    <div>Status : {{done ? 'Done' : 'Nope'}}</div>
  </div>
</template>

<script setup>
import {defineProps, ref} from "vue";

const props = defineProps({
  selectedTodo: Object
})
const title = ref(props.selectedTodo.title)
const time = ref(props.selectedTodo.time)
const describe = ref(props.selectedTodo.describe)
const done = ref(props.selectedTodo.done)
</script>

<style scoped>

</style>