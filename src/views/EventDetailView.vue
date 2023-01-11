<script setup>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
const route=useRoute()
let event = ref({})
onMounted(async() => {

    const res =await fetch('http://localhost:2022/event/'+route.params.id)
        .then(res => res.json())
        .then(data => data)
        .catch(err => console.log(err))
    event.value=res[0] 
    console.log(res[0]);
})
</script>
<template>
    <Header />
    <div class="container mt-5 main pb-5">
        <div class="row p-3 bg-white shadow-lg">
            <div class="col-12 col-md-6">
                <div style="background-color: #E1E0E0;" class="p-1 mb-2">
                    <p class="text-center my-3 fs-4 pb-2 title ">{{event.title}}</p>
                    <div class="container" dir="rtl">
                        <div>
                            <p> {{ event?.price }} تومان</p>
                            <div class="d-flex justify-content-between align-items-center">
                                <div>
                                    <p>{{ new Date(event?.holding_at).getDate() }} / {{ new Date(event?.holding_at).getMonth()+1 }} /
                            {{
                                new
                                                        Date(event?.holding_at).getFullYear()
                            }}</p>
                                    <p> {{event?.address}}</p>
                                </div>
                                <a :href="event?.url" target="_blank">ثبت نام در رویداد</a>

                            </div>
                            <p>  {{ event?.time }}</p>
                        </div>
                    </div>
                </div>
                <p dir="rtl" class="lh-lg">
                    <p>  {{ event?.description }}</p>
                    
                </p>
            </div>
            <div class="col-12 col-md-6">
                <img src="../assets/156989908.jpg" alt="">
            </div>
        </div>
    </div>
<Footer/>

</template>

<style scoped>
a {
    cursor: pointer;
    font-size: 15px;
    padding: 10px 50px;
    background-color: rgba(0, 0, 0, 0);
    margin-top: 20px;
    color: #fff !important;
    border: 2px solid tomato;
    text-align: center;
    outline: 0px;
    border-radius: 10px;
    transition: all 0.25s;
    background-color: tomato;
}
.main{
    height: 78vh;
}
</style>