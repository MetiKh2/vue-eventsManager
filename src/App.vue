<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <!-- <header>

    <div class="wrapper">

      <nav>
      </nav>
    </div>
  </header> -->

  <RouterView />
</template>

<style>
@font-face {
  font-family: "IRANSans";
  src: local("IRANSans"),
   url(./assets/IRANSansXFaNum-Regular.7f3680b852ae1c369f77.woff2) format("truetype");
}
*{
  font-family: 'IRANSans' !important;
}
img{
max-width: 100% !important;
}
a{
  color: unset;
}
.title {
    border-bottom: 2px dashed rgba(0, 0, 0, 0.2);
}
</style>
