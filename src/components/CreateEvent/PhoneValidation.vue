<script setup>
import { ref } from 'vue';
const emit = defineEmits(['phoneHandle'])

let phone=ref('')
</script>

<template>
    <div dir="rtl" class="EventForm_form_body__main_form__PJG8u mt-5">
        <div class="efpn__container">
            <div class="efpn__container__column "><label for="phone" class="efpn__container__column__label">شماره
                    موبایل:</label>
                <div class="efpn__container__column__input_container"><input type="text" inputmode="numeric"
                        pattern="\d*" class="efpn__container__column__input_container__input normal_input" name="phone"
                        placeholder="09..." v-model="phone"><button
                        class="efpn__container__column__input_container__button solid_button" @click="emit('phoneHandle',phone)">ثبت شماره</button></div>
            </div>
            <div class="m-3">
                <p class="m-1">بعد از نوشتن اطلاعات روی دکمه ثبت بزنید
                    
                </p>
            </div>
            <p class="reCAPTCHA_text efpn__container__captcha_text" style="margin-top: 0px;">این سایت توسط reCAPTCHA
                محافظت شده و <a href="https://policies.google.com/privacy?hl=fa" target="__blank" class="footer_link">خط
                    مشی رازداری گوگل</a> و <a href="https://policies.google.com/terms?hl=fa" target="__blank"
                    class="footer_link">شرایط خدمات</a> اعمال می شود.</p>
        </div>
    </div>
</template>

<style scoped>
.EventForm_form_body__buttons__Yc-ZF, .EventForm_form_body__main_form__PJG8u, .EventForm_form_body__progress_bar__QrmTH {
    width: 100%;
}.efpn__container {
    grid-gap: 15px;
    background: #e1e0e0;
    border-radius: 8px;
    gap: 15px;
    grid-template-columns: 1fr 1fr;
    padding: 15px;
    width: 100%;
}.efpn__container__column {
    display: flex;
    flex-direction: column;
}.efpn__container__column__label {
    font-size: 12px;
    line-height: 15px;
    margin: 0 0 5px;
}.efpn__container__column__input_container {
    display: grid;
    grid-template-columns: auto 140px;
}.efpn__container__column__input_container__input.normal_input {
    border-radius: 0 8px 8px 0;
    direction: ltr;
}.normal_input {
    background-color: #fff;
    border: 1px solid #fff;
    border-radius: 8px;
    caret-color: #ff2800;
    outline: 0;
    padding: 5px 10px;
    transition: all .3s;
    width: 100%;
}.solid_button.deactive, .solid_button:disabled {
    background-color: #ff7f68;
    border: 1px solid #ff7f68;
    color: #fff;
    pointer-events: none;
}.efpn__container__column__input_container__button.solid_button {
    border-radius: 8px 0 0 8px;
    font-size: 12px;
    padding: 0 8px;
}.solid_button {
    margin: 0;
    align-items: center;
    background-color: #ff2800;
    border: 1px solid #ff2800;
    border-radius: 8px;
    color: #fff;
    cursor: pointer;
    display: flex;
    gap: 5px;
    justify-content: center;
    padding: 10px 15px;
    transition: all .3s;
    -webkit-user-select: none;
    user-select: none;
}
</style>