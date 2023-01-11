<script setup>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import { ref } from 'vue';

let phone=ref('')
let events=ref([])
async function fetchData() {
    const res =await fetch('http://localhost:2022/events/phone/'+phone.value)
        .then(res => res.json())
        .then(data => data)
        .catch(err => console.log(err))
    events.value=res   
}

</script>
<template>
    <Header />
    <main dir="rtl">
        <div>
            <div class="container my-5">
                <form  @submit.prevent="fetchData()" class="bg-white p-3 rounded">
  <div class="form-group">
    <label for="exampleInputEmail1">موبایل</label>
    <input v-model="phone" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="09.....">
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  
  <button type="submit" class="btn btn-primary">پیگیری</button>
  <div class="mt-4 d-flex flex-row justify-content-between">
  <p>عنوان</p>
  <p>نام کامل</p>
  <p>وضعیت</p>
  </div>
  <div class="mt-4 d-flex flex-row justify-content-between" v-for="event in events" v-key="event?.id">
  <p>{{event?.title}}</p>
  <p>{{ event?.first_name }} {{ event?.last_name }}</p>
  <p>{{ event?.published }} </p>
  </div>
  <div v-if="events.length<1">
  <p>لیست خالی است</p>

  </div>
</form>
            </div>
        </div>
    </main>
    <Footer />
</template>

<style scoped>
main {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 84vh;
    background-color: #E1E0E0;
}

main div {
    display: flex;
    flex-direction: column;
}

a {
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

a:hover {
    background-color: tomato;
    color: #fff;
}
</style>