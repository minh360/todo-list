<template>
  <div style="padding: 0 30px;font-weight: 600;display: flex;gap: 20px;flex-direction: column">
    <p style="font-size: 25px;font-weight: 700;font-style: italic">EDIT TODO</p>
    <div>Miêu tả</div>
    <input type="text" v-model="title" style="height: 25px">
    <div>Khi nào xảy ra</div>
    <input type="date" v-model="time" style="height: 50px">
    <div>Chi tiết</div>
    <textarea v-model="describe" style="height: 300px"></textarea>
    <div>Status :<input type="checkbox" v-model="done" style="line-height: 50px"></div>
    <div>{{message}}</div>
    <button style="width: 200px;border-radius: 16px;height: 50px;background-color: darkred;color: white" class="clickable" @click="editTodo">Edit Todo</button>
  </div>
</template>

<script setup>
import {defineProps,ref} from "vue";
import axios from "axios";
const props = defineProps({
  selectedTodo: Object
})
const title = ref(props.selectedTodo.title)
const time = ref(props.selectedTodo.time)
const describe = ref(props.selectedTodo.describe)
const done = ref(props.selectedTodo.done)
const message = ref('')
const editTodo = async ()=>{
  if (title.value === '' && time.value === ''){
    message.value = 'Yêu cầu điền đủ thông tin'
  }
  else {
    await axios.request({
      method: "put",
      url: "http://localhost:3000/todo/"+props.selectedTodo._id,
      headers: {
        'Authorization': 'token'
      },
      data: {title: title.value, describe: describe.value, time: time.value, done: done.value},
      timeout: 3000
    }).then(() => location.reload())
        .catch(err => console.log(err))
  }
}
</script>

<style scoped>

</style>