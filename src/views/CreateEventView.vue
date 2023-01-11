<script setup>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import Rules from '../components/CreateEvent/Rules.vue'
import Information from '../components/CreateEvent/Information.vue'
import PhoneValidation from '../components/CreateEvent/PhoneValidation.vue'
import { ref } from 'vue'
import { useRoute } from 'vue-router'
let router = useRoute()
let index = ref(0)
let formData = ref({
    first_name: '',
    last_name: '',
    title: '',
    price: '',
    holding_at: '',
    time: '',
    url: '',
    image: '',
    address: '',
    description: '',
    phone: '',
})

function changeForm(state) {
    if (state) {
        if (index.value < 2) {
            index.value++
        } else {
            fetch('http://localhost:2022/add_event',
                {
                    method: 'POST', body: JSON.stringify(formData.value), headers: {
                        'Content-Type': 'application/json'
                    }
                })
                .then(res => {
                    alert('Added Successfully')
                    window.location.replace('/')
                })
                .catch(err => alert('Error in the server'))

        }
    }
    else {
        if (index.value > 0) {
            index.value--;
        }
    }
}
function phoneHandler(data) {
    formData.value.phone = data;
    console.log(formData.value);
    // console.log(JSON.parse(formData.value));
}
function setImage(image) {
    formData.value.image = image
    console.log(formData.value);
}
</script>
<template>
    <Header />
    <main class="py-5 ">
        <div class="container mc bg-white p-4" dir="rtl">
            <div class="text-center">
                <h2 class="fs-5 fw-bold">افزودن رویداد جدید</h2>
            </div>
            <div class="EventForm_form_body__progress_bar__QrmTH">
                <div class="aepb__container">
                    <div class="aepb__item active"><span class="aepb__item__counter">1</span><span
                            class="aepb__item__name">قوانین</span></div>
                    <div v-bind:class="(index >= 1) ? 'aepb__item active' : 'aepb__item'"><span
                            class="aepb__item__counter">2</span><span class="aepb__item__name">اطلاعات رویداد</span>
                    </div>
                    <div v-bind:class="(index >= 2) ? 'aepb__item active' : 'aepb__item'"><span
                            class="aepb__item__counter">3</span><span class="aepb__item__name">شماره تماس</span></div>
                </div>
            </div>
            <div v-if="index == 0">
                <Rules />
            </div>

            <div v-if="index == 1">
                <Information :formData="formData" @setImage="setImage" @formHandler="formHandler" />
            </div>

            <div v-if="index == 2">
                <PhoneValidation @phoneHandle="phoneHandler" />
            </div>

            <!-- <div v-if="index==3">
                <Rules/>
            </div>
            
            <div v-if="index==4">
                <Rules/>
            </div> -->
            <div class="d-flex justify-content-between"> <button @click="changeForm(true)">مرحله بعد</button>
                <button @click="changeForm(false)">مرحله قبل</button>
            </div>
        </div>
    </main>
    <Footer />
</template>
<style scoped>
main {
    min-height: 83vh;
    background: #E1E0E0 !important;
}

.EventForm_form_body__buttons__Yc-ZF,
.EventForm_form_body__main_form__PJG8u,
.EventForm_form_body__progress_bar__QrmTH {
    width: 100%;
}

.aepb__item__name {
    line-height: 15px;
    padding: 0 2px;
    text-align: center;
    font-size: 14px;
}

.aepb__container {
    margin-top: 50px;
    display: flex;
    flex-direction: row-reverse;
    -webkit-user-select: none;
    user-select: none;
}

.aepb__item {
    align-items: center;
    display: flex;
    flex: 1 1;
    flex-direction: column;
    position: relative;
}

.aepb__item.active .aepb__item__counter {
    -webkit-animation: pulse 2s infinite;
    animation: pulse 2s infinite;
    background-color: #ff2800;
    color: #fff;
}

.aepb__item .aepb__item__counter {
    align-items: center;
    background: #e1e0e0;
    border-radius: 50%;
    display: flex;
    height: 40px;
    justify-content: center;
    margin-bottom: 10px;
    position: relative;
    transition: all .3s;
    width: 40px;
    z-index: 2;
}

.aepb__item:after {
    left: 50%;
    z-index: 1;
}

.aepb__item:after,
.aepb__item:before {
    border-bottom: 2px solid #e1e0e0;
    content: "";
    position: absolute;
    top: 20px;
    transition: all .3s;
    width: 100%;
}
</style>