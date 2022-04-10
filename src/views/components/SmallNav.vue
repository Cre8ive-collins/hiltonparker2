<template>
     <div class="fixed top-0 right-0 bg-brand-major h-screen px-2 py-5 md:p-5  ">
            <img src="../assets/images/icons/application.svg" alt="" @click="openSideBar" class=" md:w-10 w-5"  >
            <div class=" mt-40">
                <img src="../assets/images/icons/status.svg" alt="" @click="showSidebar = !showSidebar" class="  md:w-10 w-5" >
                <img src="../assets/images/icons/documentstatus.svg" alt="" @click="showSidebar = !showSidebar" class="mt-10  md:w-10 w-5" >
                <img src="../assets/images/icons/application.svg" alt="" @click="showSidebar = !showSidebar" class="mt-10 md:w-10 w-5">
                <img src="../assets/images/icons/payment.svg" alt="" @click="showSidebar = !showSidebar" class="mt-10 md:w-10 w-5">
            </div>    
            <img src="../assets/images/icons/logout.svg" alt="" @click="showSidebar = !showSidebar" class="mt-40 md:w-10 w-5">
        </div>
</template>

<script>
export default {
    name: 'SmallNav',
    props : ['showSidebar'],

    methods: {
        openSideBar(){
            this.$emit('openSideBar')
        }
    }
    
    }
</script>