<template>
  <div style="padding-left: 30px">
    <p style="font-size: 25px;font-weight: 700;font-style: italic">ALL TODO</p>
    <div style="display: flex;flex-direction: column;gap: 25px">
      <div v-for="todo in todos" :key="todo._id" class="clickable">
        <div style="display: flex;gap: 25px;padding-bottom:10px;border-bottom: 1px solid black;align-items: baseline">
          <div style="flex: 1;display: flex;justify-content: space-between" :class="{line: todo.done}" @click="emits('selectTodo',todo)">
            <p><span style="font-weight: 700">Title:</span> {{todo.title}}</p>
            <p><span style="font-weight: 700">Dealine:</span> {{since(todo.time)}}</p>
          </div>
          <div><span style="font-weight: 700">Status :</span> {{todo.done ? 'Done' : 'Nope'}}</div>
          <button style="border-radius: 8px;padding: 10px" @click="emits('editTodo',todo)">Edit</button>
          <button style="background-color: red;color: white;border-radius: 8px;padding: 10px" @click="deleteTodo(todo._id)">Delete</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {defineProps,defineEmits} from 'vue'
import dayjs from 'dayjs'
import axios from "axios";
const relativeTime = require('dayjs/plugin/relativeTime')
const emits = defineEmits(['selectTodo','editTodo'])
dayjs.extend(relativeTime)
defineProps({todos: Array})
const since = time =>{
  return dayjs(time).fromNow()
}
const deleteTodo = async (id) =>{
  await axios.request({
    method: "delete",
    url: "http://localhost:3000/todo/"+ id,
    headers: {
      'Authorization': 'token'
    },
    timeout: 3000
  }).then(() => location.reload())
      .catch(err => console.log(err))
}
</script>

<style scoped>
.line{
  text-decoration: line-through;
}
</style>