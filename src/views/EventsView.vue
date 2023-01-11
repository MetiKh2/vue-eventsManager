
<script setup>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import EventCard from '../components/EventCard.vue'
import { onMounted, ref } from 'vue';
let events = ref([])
onMounted(async() => {

    const res =await fetch('http://localhost:2022/events')
        .then(res => res.json())
        .then(data => data)
        .catch(err => console.log(err))
    events.value=res   
})
</script>

<template>
    <Header></Header>
    <div class="container mt-4 main pb-5">
        <div v-if="events.length>0" class="row">
            <EventCard v-for="event in events" :event="event"/>
           
        </div>
        <div v-else>
            <h1>Loading . . .</h1>
        </div>
    </div>
    <Footer />
</template>

<style scoped>

</style>