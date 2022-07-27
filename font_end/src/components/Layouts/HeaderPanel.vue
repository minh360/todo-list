<template>
  <section class="header-wrapper">
    <slot name="name" />
    <div class="account-wrapper">
      <slot />
    </div>
  </section>
</template>

<script setup>

</script>

<style lang="scss">
.header-wrapper{
  display: flex;
  align-items: center;
  background-color: firebrick;
  justify-content: space-between;
  padding: 0 25px;
  height: 50px;
  font-weight: 700;
  .name{
    color: white;
    font-size: 25px;
  }
  .account-wrapper{
    display: flex;
    color: white;
    gap: 20px;
    align-items: baseline;
    button{
      height: 25px ;
      border-radius: 10px;
      background-color: bisque;
      color: darkred;
      font-weight: 700;
    }
  }
}
</style>