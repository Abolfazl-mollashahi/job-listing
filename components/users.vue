<template>
    <div class=" w-[95%] h-[300px] mt-12 md:h-[130px] md:mt-2 flex justify-end bg-sky-800 rounded-xl shad" v-for="user in users" :key="user.id">
        <div class=" w-[99%] p-2 relative flex flex-col md:grid md:grid-cols-10 md:items-center  rounded-xl bg-white ">
            <div class="h-6 mb-3 md:w-[60px] md:h-[60px] relative ">
                <img class=" w-[80px] h-[80px] absolute -bottom-5 md:block md:w-full md:h-full md:bottom-0 " :src="user.logo" alt="">
            </div>
            <div class=" w-max p-5 md:col-span-4  md:p-1 md:text-[14px]">
                <p class=" flex gap-6"> <span class=" font-bold text-sky-500">{{ user.company }}</span> <span
                        class=" text-white bg-sky-600 font-bold uppercase p-0.3 px-2 rounded-xl" v-if="user.new">New!</span>
                    <span class="text-white bg-black uppercase font-bold p-0.3 px-2 rounded-xl"
                        v-if="user.featured">featured</span></p>
                <h2 class=" font-bold py-3 text-[17px] md:p-1 hover:text-sky-800 cursor-pointer">{{ user.position }}</h2>
                <p class=" flex justify-start gap-3 text-gray-600"><span>{{ user.postedAt }}</span> - <span>{{ user.contract
                }}</span> - <span>{{ user.location }}</span></p>
            </div>
            <hr class="h-[2px] w-[70%] mx-auto md:hidden bg-sky-700">
            <div class=" p-5 pb-4 flex flex-wrap justify-start items-center gap-3 md:justify-end bg-red- md:p-1 md:text-xs md:col-span-5 md:w-full">
                <span @click="state.userfind.unshift(user.level)" class=" cursor-pointer w-max py-1 px-4 md:px-2 rounded-xl text-sky-700 bg-sky-200">{{ user.level }}</span>
                <span @click="state.userfind.unshift(user.role)" class=" cursor-pointer w-max py-1 px-4 md:px-2 rounded-xl text-sky-700 bg-sky-200">{{ user.role }}</span>
                <span @click="state.userfind.unshift(user.languages[ind])" class=" cursor-pointer w-max py-1 px-4 md:px-2 rounded-xl text-sky-700 bg-sky-200" v-for="(lang,ind) in user.languages" :key="lang">{{ lang }}</span>
                <span @click="state.userfind.unshift(user.tools[ind])" class=" cursor-pointer w-max py-1 px-4 md:px-2 rounded-xl text-sky-700 bg-sky-200" v-for="(to,ind) in user.tools" :key="to">{{ to }}</span>
            </div>
            <p class=" w-[25px] h-[25px] text-center absolute bottom-1 right-1 rounded-full text-white bg-sky-600">{{ user.id }}</p>
        </div>
    </div>
</template>

<script setup>
import { usedb } from '~/stores/userstore';
const state = usedb()

const users = computed(() => {
    return state.getallusers
})

</script>

<style scoped>
.shad {
    box-shadow: 0 10px 30px skyblue;
}
</style>