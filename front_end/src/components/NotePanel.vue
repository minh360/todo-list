<template>
  <div class="note-wrapper">
    <div class="col-1">
      <p style="font-size: 25px;font-style: italic;text-decoration: underline;font-weight: 700;color: darkred">TODO LIST</p>
      <ul>
        <li class="clickable" @click="emits('selectTab',TABS.TODOS)">ToDos</li>
        <li class="clickable" @click="emits('selectTab',TABS.CREATE)">Create ToDo</li>
      </ul>
    </div>
    <div style="flex: 1">
      <slot />
    </div>
  </div>
</template>

<script setup>
import {defineEmits,defineProps} from 'vue'
import {TABS} from "@/components/tabs";
const emits = defineEmits(['selectTab'])
defineProps({tab: Number})
</script>

<style lang="scss" scoped>
.note-wrapper{
  display: flex;
  flex-direction: row;
  .col-1{
    width: 20%;
    text-align: center;
    background-color: linen;
    height: 100vh;
    ul{
      text-align: left;
      font-weight: 600;
      font-size: 20px;
      list-style-type: none;
      padding: 0;
      li{
        padding: 10px 5%;
        border-bottom: 1px solid black;
        &:hover{
          padding-left: 30px;
        }
      }
    }
  }
}
</style>