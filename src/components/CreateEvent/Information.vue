<script setup>
import { watch, ref, onMounted } from 'vue';

let data = ref({
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
const emit = defineEmits(['formHandler','setImage'])
let {formData}=defineProps(['formData'])
onMounted(()=>{
    data.value=formData;
})
const ChangeImage=(e)=>{
    var file = e.target.files[0];
  var reader = new FileReader();
  reader.onloadend = function() {
    emit('setImage',reader.result)

  }
  reader.readAsDataURL(file);
    }
// setInterval(() => {
//         console.log(data.value);
// }, 3000);
</script>

<template>
    <div class="EventForm_form_body__main_form__PJG8u mt-4">
        <div class="efed__container">
            <div class="efed__container__top">
                <div class="efed__container__top__column">
                    <span class="efed__container__top__column__item">
                        <label for="fname" class="efed__container__top__column__item__label">نام:</label>
                        <input v-model="data.first_name" placeholder="مثلا: امید" type="text" id="fname"
                            class="efed__container__top__column__item__input normal_input ">
                        <p class="efed__container__top__column__item__error"></p>
                    </span><span class="efed__container__top__column__item"><label for="lname"
                            class="efed__container__top__column__item__label">نام خانوادگی:</label><input
                            placeholder="مثلا: احمدی" type="text" id="lname"
                            class="efed__container__top__column__item__input normal_input " v-model="data.last_name">
                        <p class="efed__container__top__column__item__error"></p>
                    </span><span class="efed__container__top__column__item"><label
                            class="efed__container__top__column__item__label">تاریخ برگزاری:</label>
                        <div class="rmdp-container " style="display: inline-block; height: max-content;"><input
                                type="text" class="normal_input ltr " placeholder="برای انتخاب تاریخ کلیک کنید"
                                autocomplete="off" inputmode="none" v-model="data.holding_at">
                            <div class=""
                                style="position: absolute; left: 0px; top: 0px; will-change: transform; visibility: hidden; z-index: 100;">
                                <div></div>
                            </div>
                        </div>
                        <p class="efed__container__top__column__item__error"></p>
                    </span><span class="efed__container__top__column__item"><label for="link"
                            class="efed__container__top__column__item__label">لینک شرکت در رویداد:</label><input
                            inputmode="url" placeholder="... مثل لینک صفحه ثبت نام رویداد یا" type="url" id="link"
                            class="efed__container__top__column__item__input normal_input ltr " v-model="data.url">
                        <p class="efed__container__top__column__item__error"></p>
                    </span>
                </div>
                <div class="efed__container__top__column"><span class="efed__container__top__column__item"><label
                            for="title" class="efed__container__top__column__item__label">عنوان رویداد:</label><input
                            placeholder="مثلا: رویداد سالانه کامپیوتر" type="text" id="title"
                            class="efed__container__top__column__item__input normal_input " v-model="data.title">
                        <p class="efed__container__top__column__item__error"></p>
                    </span><span class="efed__container__top__column__item"><label for="price"
                            class="efed__container__top__column__item__label">قیمت بلیت:</label><input
                            placeholder="مثلا: 200,000" type="text" pattern="\d*" inputmode="numeric" id="price"
                            class="efed__container__top__column__item__input efed__container__top__column__item__input__unit  normal_input ltr "
                            v-model="data.price"><span class="efed__container__top__column__item__unit">تومان</span>
                        <p class="efed__container__top__column__item__error"></p>
                    </span><span class="efed__container__top__column__item"><label
                            class="efed__container__top__column__item__label">ساعت شروع:</label>
                        <div class="rmdp-container time_picker" style="display: inline-block; height: max-content;">
                            <input type="text" class="normal_input ltr " placeholder="برای تعیین ساعت شروع کلیک کنید"
                                autocomplete="off" inputmode="none" v-model="data.time">
                            <div class=""
                                style="position: absolute; left: 0px; top: 0px; will-change: transform; visibility: hidden; z-index: 100;">
                                <div></div>
                            </div>
                        </div>
                        <p class="efed__container__top__column__item__error"></p>
                    </span>
                    <span class="efed__container__top__column__item">
                        <label for="fname" class="efed__container__top__column__item__label">تصویر:</label>
                        <input @change="ChangeImage" type="file" id="fname" class="efed__container__top__column__item__input normal_input ">
                        <p class="efed__container__top__column__item__error"></p>
                    </span>
                    <span class="efed__container__top__column__item"><label for="location"
                            class="efed__container__top__column__item__label">محل برگزاری:</label><input
                            placeholder="مثلا: تهران، برج میلاد" type="text" id="location"
                            class="efed__container__top__column__item__input normal_input " v-model="data.address">
                        <p class="efed__container__top__column__item__error"></p>
                    </span>
                </div>
            </div><span class="efed__container__content"><label for="content"
                    class="efed__container__content__label">توضیحات رویداد:</label><textarea rows="3"
                    placeholder="توضیحاتی مختصر در مورد هدف برگزاری رویداد و ..." id="content"
                    class="efed__container__content__input normal_input " v-model="data.description"></textarea>
                <p
                    class="efed__container__top__column__item__error efed__container__top__column__item__error__last_child">
                </p>
            </span>
            <span class="efed__container__content">
                <span>بعد از نوشتن اطلاعات روی دکمه ثبت بزنید
                    
                </span><button class="btn btn-success" @click="emit('formHandler',data)">ثبت اطلاعات</button>
            </span>
        </div>
    </div>
</template>

<style scoped>
.EventForm_form_body__buttons__Yc-ZF,
.EventForm_form_body__main_form__PJG8u,
.EventForm_form_body__progress_bar__QrmTH {
    width: 100%;
}

.efed__container {
    background-color: #e1e0e0;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    padding: 15px;
    width: 100%;
}

.efed__container__top {
    grid-gap: 15px;
    display: grid;
    gap: 15px;
    grid-template-columns: 1fr 1fr;
}

.efed__container__content,
.efed__container__top__column__item {
    display: flex;
    flex-direction: column;
    position: relative;
}

.efed__container__top__column {
    display: flex;
    flex-direction: column;
}

.efed__container__content,
.efed__container__top__column__item {
    display: flex;
    flex-direction: column;
    position: relative;
}

.efed__container__content__label,
.efed__container__top__column__item__label {
    font-size: 12px;
    line-height: 15px;
    margin: 5px 0;
}

.normal_input {
    background-color: #fff;
    border: 1px solid #fff;
    border-radius: 8px;
    caret-color: #ff2800;
    outline: 0;
    padding: 5px 10px;
    transition: all .3s;
    width: 100%;
}

.efed__container__content__input {
    resize: vertical;
}
</style>