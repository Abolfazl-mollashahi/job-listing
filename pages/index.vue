<template>
    <div class=" h-full bg-sky-200">
        <div
            class=" w-full h-[150px] relative flex justify-center items-end  bg-[url('/images/bg-header-mobile.svg')] md:bg-[url('/images/bg-header-desktop.svg')] bg-sky-700 ">

            <div v-if="users.length" class=" w-[90%] p-3 px-4 absolute -bottom-6 flex gap-5 justify-between items-center bg-white  rounded-lg">
                <div class=" flex flex-wrap gap-2">
                    <!--  -->
                    <div class=" text-[15px] font-bold flex " v-for="item in users" :key="item">
                        <p class=" px-2 py-1 rounded-l-md text-sky-800 bg-sky-200">{{ item }}</p>
                        <i @click="state.remov(item)" class=" px-2 py-1 rounded-r-md text-white bg-sky-500 cursor-pointer hover:bg-sky-700">x</i>
                    </div>
                    

                </div>
                <i @click=" state.userfind = []" class=" w-max p-1 font-bold cursor-pointer hover:bg-sky-400 rounded-lg text-white bg-sky-600">Clear</i>
            </div>

        </div>
        <div class=" w-full pb-10 ">
            <div class="w-full pt-10 flex flex-col justify-center items-center gap-2 lg:w-[70%] md:mx-auto bg-sky-200">
                <Users />
            </div>
        </div>
        <div class=" flex flex-col justify-center shadow-lg  items-center p-2 pb-10 gap-2 md:text-[20px] ">
        <h1 class=" text-white bg-sky-700 p-2 px-5 rounded-xl">Front-End Developer : Abolfazl mollashahi</h1>
        <h3 class="text-white bg-sky-700 p-2 px-5 rounded-xl">Nuxt.js And Tailwindcss</h3>
    </div>
    </div>
</template>

<script setup>
import { usedb } from '~/stores/userstore';
const state = usedb()

const users = computed(() => {
    return state.userfind
})



</script>
