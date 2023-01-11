<script setup>
import Header from '../components/Header.vue'
</script>

<template>
<Header></Header>
<main>
   <div>
    <img src="../assets/Events.png" width="350"/>
    <RouterLink to="/followup">پیگیری ایونت</RouterLink>
    <RouterLink to="/event-create">افزودن ایونت</RouterLink>
   </div>
  </main>
</template>


<style scoped>
main{
display: flex;
justify-content: center;
align-items: center;
height: 80vh;

}
main div{
  display: flex;
  flex-direction: column;
}
a{
  font-size: 25px;
  background-color: rgba(0, 0, 0, 0);
  margin-top: 20px;
  color: tomato;
  border: 2px solid tomato;
  text-align: center;
  outline: 0px;
  border-radius: 10px;
  transition: all 0.25s;
}
a:hover{
  background-color: tomato;
  color: #fff;
}
</style>