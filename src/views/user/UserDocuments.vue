<template>
    <div class="flex overflow-auto pr-14 pl-8 ease-in-out duration-300 " :class="showSidebar ? ' md:pr-96  ' : '  md:pr-28'">
        <div :class="showSidebar ? 'w-screen h-screen '  : 'w-full  h-screen '  ">
          <titler :routeName="route.name"/>
        </div>
        </div>
        <SmallNav @openSideBar="showSidebar = !showSidebar"/>
        <dashboardNav :showSidebar="showSidebar" @closeSideBar="showSidebar = !showSidebar "/>
</template>

<script>
import dashboardNav from "../../components/dashboardNav.vue" 
import SmallNav from "../../components/SmallNav.vue" 
import titler from "../../components/titler.vue" 
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'




export default {
    components: {
        dashboardNav,
        SmallNav,
        titler
    },

    data(){
        const windowSize = window.innerWidth
        let showSidebar
        windowSize < 500 ? showSidebar = false : showSidebar = true
        let router = useRouter()
        let route = useRoute()
        return {
            showSidebar,
            windowSize,
            router,
            route
        }
    },

    // methods: {
    //     continueApplication(){
    //         this.router.push('/user/application')
    //     },
    //     documents(){
    //         this.router.push('/user/documents')
    //     },
    //     chat(){
    //         this.router.push('/user/admissionofficer')
    //     }

    // },

    // mounted(){
    //     window.addEventListener('resize', () => 
    //     {this.windowSize = window.innerWidth} )
    // },

    // unmounted(){
    //     window.removeEventListener('resize', () => 
    //     {this.windowSize = window.innerWidth})
    // },
    
    setup(){
     
        return {
        }
    }
}
</script>
