<template>
    <div class="w-full 	h-screen bg-cover bg-[url('./assets/02背景.jpg')] bg-no-repeat bg-center">

        <div
            class="w-[500px] h-[350px] backdrop-blur-sm bg-white/30 backdrop-opacity-10 absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 rounded-xl flex items-center flex-col text-white pt-[10px]">
            <p class="text-2xl"><strong>Have an Count ?</strong></p>

            <div class="rounded w-[220px] h-[30px] bg-white mt-[45px]  flex items-center">
                <img src="../assets/zhanghao.svg" class="w-[22px] h-full " />
                <input type="text" class=" outline-none text-black pl-[10px]" />
            </div>
            <div class="rounded w-[220px] h-[30px] bg-white mt-[10px]  flex items-center">
                <img src="../assets/mima.svg" class="w-[20px] h-full " />
                <input type="text" class=" outline-none text-black pl-[10px] font-mono" />
            </div>
            <button class="w-[220px] bg-cyan-600 h-[30px] mt-[15px] rounded hover:bg-cyan-500" @click="login">登录</button>
            <button class="w-[220px] bg-cyan-600 h-[30px] mt-[5px] rounded hover:bg-cyan-500">重置</button>

        </div>
    </div>
</template> 
<script  setup>
import { useRouter } from "vue-router";
const $router = useRouter();
const login = () => {
    $router.push("/HelloWorld");
}
</script>