<script>
import { RouterLink } from 'vue-router';
</script>

<template>
    <header>
        <RouterLink to="/add-or-follow">
            <button>+</button>
        </RouterLink>
        <RouterLink to="/" class="mt-3">
            <img src="../assets/logo.png" alt="logo" width=50>
        </RouterLink>
        <p></p>
    </header>
</template>
<style scoped>
header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    box-shadow: 0 0 10px 5px #00000010;
}
button{
  font-size: 20px;
  background-color: rgba(0, 0, 0, 0);
  color: tomato;
  border: 3px solid tomato;
  outline: 0px;
  border-radius: 50%;
  margin-left: 50px;
  padding: 5px 13px;
  font-weight: bold;
}
</style>