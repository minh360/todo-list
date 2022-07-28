<template>
  <div style="padding: 0 30px;font-weight: 600;display: flex;gap: 20px;flex-direction: column">
    <p style="font-size: 25px;font-weight: 700;font-style: italic">CREATE TODO</p>
    <div>Miêu tả</div>
    <input type="text" v-model="title" style="height: 25px">
    <div>Khi nào xảy ra</div>
    <input type="date" v-model="time" style="height: 50px">
    <div>Chi tiết</div>
    <textarea v-model="describe" style="height: 300px"></textarea>
    <div>{{message}}</div>
    <button style="width: 200px;border-radius: 16px;height: 50px;background-color: darkred;color: white" class="clickable" @click="createTodo">Create Todo</button>
  </div>
</template>

<script setup>
import {ref} from "vue";
import axios from "axios";
const describe = ref('')
const title = ref('')
const time = ref('')
const message = ref('')
const clearTodo = () => {
  time.value = ''
  title.value = ''
  describe.value = ''
}
const createTodo = async () => {
  if (describe.value === '' && title.value === '' && time.value === ''){
    message.value = 'Yêu cầu điền đủ thông tin'
  }
  else {
    message.value = ''
    await axios.request({
      method: "post",
      url: "http://localhost:3000/todo",
      headers: {
        'Authorization': 'token'
      },
      data: {title: title.value, describe: describe.value, time: time.value, id_user: localStorage.getItem('id_user')},
      timeout: 3000
    }).then(() =>{
        clearTodo()
        message.value = 'Đã tạo thành công'
      setTimeout(() =>location.reload(),2000)
    }).catch(err => console.log(err))
  }
}
</script>

<style scoped>

</style>