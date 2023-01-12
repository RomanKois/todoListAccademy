<template>
    <h1 class="text-center title">ToDoList</h1>
    <div class="colum"></div>
    <Main></Main>
</template>



<script setup>
  import Main from './components/Main.vue';
</script>



<style scoped>
.title{
    top: 0;
    position: absolute;
    margin: 0 auto;
    margin-bottom: 10px;
}

.colum{
  margin-top: 45px;
}
  
</style>
