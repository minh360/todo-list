<script setup>
import HeaderPanel from "@/components/Layouts/HeaderPanel";
import {useRouter} from "vue-router";
import {ref, onActivated} from "vue";
import NotePanel from "@/components/NotePanel";
import {TABS} from "@/components/tabs";
import axios from "axios";
import TodoPanel from "@/components/TodosPanel";
import CreateTodoPanel from "@/components/CreateTodoPanel";
import EditTodoPanel from "@/components/EditTodoPanel";
import ViewTodoPanel from "@/components/ViewTodoPanel";
const router = useRouter();
const id_user = ref('')
const todos = ref([])
const tab = ref(TABS.TODOS)
const selectedTodo = ref('')
const selectTodo = todo =>{
  selectedTodo.value = todo
  tab.value = TABS.VIEW
}
const editTodo = todo =>{
  selectedTodo.value = todo
  tab.value = TABS.EDIT
}
const LogOut = () =>{
  localStorage.removeItem('id_user')
  location.reload();
}
const selectTab = number => {
  tab.value = number
}
const getAllTodo = async ()=>{
  await axios.request({
    method: "get",
    url: "http://localhost:3000/todo/"+localStorage.getItem('id_user'),
    headers: {
      'Authorization': 'token'
    },
    timeout: 3000
  }).then((todo) => {
    todos.value = todo.data
  })
}
onActivated(()=>{
  getAllTodo()
  id_user.value = localStorage.getItem('id_user')
})
</script>
<template>
  <header-panel>
    <template #name>
        <div class="name clickable" @click="router.push('/')">TODO</div>
    </template>
      <div class="clickable" @click="router.push('/sign-in')" v-if="!id_user">Sign In</div>
      <button class="clickable" @click="router.push('/sign-up')" v-if="!id_user">Start For Free</button>
      <div v-if="id_user">Hello, User</div>
      <button class="clickable" @click="LogOut" v-if="id_user">Log out</button>
  </header-panel>
  <div class="content" v-if="!id_user">
    <div style="font-weight: 700; font-size: 40px;margin-bottom: 25px;text-transform: uppercase">Organize your work and life, finally.</div>
    <div style="font-size: 20px;font-weight: 500">Become focused, organized, and calm with Todoist.</div>
    <div style="font-size: 20px;font-weight: 500">
      The world's #1 to-do list and task management app from the bottom up.
    </div>
    <button class="btn-signup" @click="router.push('/sign-up')">Start For Free</button>
  </div>
  <div v-else>
    <NotePanel :tab="tab" @select-tab="selectTab">
      <todo-panel v-if="tab === TABS.TODOS" :todos = "todos" @select-todo="selectTodo" @edit-todo="editTodo"/>
      <create-todo-panel v-if="tab === TABS.CREATE" />
      <edit-todo-panel :selected-todo="selectedTodo" v-if="tab === TABS.EDIT"/>
      <view-todo-panel :selected-todo="selectedTodo" v-if="tab === TABS.VIEW"/>
    </NotePanel>
  </div>
</template>

<style lang="scss" scoped>
.content{
  text-align: center;
  display: flex;
  flex-direction:column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  color: linen;
  background-image: url('../assets/back_ground.jpg');
  background-size: 100% 100vh;
  padding: 0 25px;
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