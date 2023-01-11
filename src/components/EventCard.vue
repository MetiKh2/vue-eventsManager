<script setup>
import { RouterLink } from 'vue-router';
let { event } = defineProps(['event'])
console.log(event);
</script>
<template>
    <div class="col-12 col-sm-6 col-md-3 mt-3">
        <RouterLink :to="'/event-detail/' + event?.id">
            <div class="p-3 bg-white shadow-lg rounded">
                <img :src="event?.image" alt="" height="250" class="w-100">
                <p class="text-center my-3 fs-5 pb-2 title">{{event?.title}}</p>
                <div>
                    <div class="d-flex justify-content-between">
                        <p>{{ new Date(event?.holding_at).getDate() }} / {{ new Date(event?.holding_at).getMonth()+1 }} /
                            {{
                                new
                                                        Date(event?.holding_at).getFullYear()
                            }}</p>
                        <p>{{ event?.price }}</p>
                    </div>
                    <p class="text-center">آنلاین</p>
                </div>
            </div>
        </RouterLink>

    </div>
</template>

<style>

</style>