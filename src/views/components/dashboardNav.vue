<template>
     <div :class="showSidebar ? 'bg-brand-major shadow-xl  translate-x-0 ' : ' translate-x-full'" class="ease-in-out duration-300 top-0 right-0 md:w-[20vw] w-[50vw] p-5 text-white fixed h-screen  sm:inline xm:inline xxm:inline overflow-auto pt-40">
             <img src="../assets/images/icons/application.svg" alt="" @click="closeSideBar" class="fixed top-5 right-5">
            <div class="flex">
             <img src="../assets/images/icons/status.svg" alt="" @click="showSidebar = !showSidebar" class="mr-3 w-5 md:w-10" >
             <h2 className=" text-white flex md:text-2xl text-base md:mt-1 " @click="closeSideBar"  >
                  Dashboard
             </h2>
            </div>
            <div class="flex mt-10">
             <img src="../assets/images/icons/documentstatus.svg" alt="" @click="showSidebar = !showSidebar" class="mr-3 w-5 md:w-10" >
             <h2 className=" text-white flex md:text-2xl text-base md:mt-1 " @click="closeSideBar"  >
                  Documents
             </h2>
            </div>
              <div class="flex mt-10">
             <img src="../assets/images/icons/status.svg" alt="" @click="showSidebar = !showSidebar" class="mr-3 w-5 md:w-10" >
             <h2 className=" text-white flex md:text-2xl text-base md:mt-1 " @click="closeSideBar"  >
                  Registeration
             </h2>
            </div>
              <div class="flex mt-10">
             <img src="../assets/images/icons/payment.svg" alt="" @click="showSidebar = !showSidebar" class="mr-3 w-5 md:w-10" >
             <h2 className=" text-white flex md:text-2xl text-base md:mt-1 " @click="closeSideBar"  >
                  Payments
             </h2>
            </div>
              <div class="flex mt-40">
             <img src="../assets/images/icons/logout.svg" alt="" @click="showSidebar = !showSidebar" class="mr-3 w-5 md:w-10" >
             <h2 className=" text-white flex md:text-2xl text-base md:mt-1 " @click="closeSideBar"  >
                  Logout
             </h2>
            </div>
            
            </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue'

export default {
    name: 'dashboardNav',
    props : ['showSidebar'],

    data(){
       return {

       }

    },

    methods: {
        closeSideBar(){
            this.$emit('closeSideBar')
        }
        
    },
    
    setup(){
        const windowSize = ref(window.innerWidth)
        onMounted(() => {
            window.addEventListener('resize', () => {windowSize.value = window.innerWidth} )
        })
        onUnmounted(() => {
            window.removeEventListener('resize', () => {windowSize.value = window.innerWidth})
        })
        return {
            windowSize
        }
    }
}
</script>
