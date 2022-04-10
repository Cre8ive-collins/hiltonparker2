<template>
    <div class="flex overflow-auto pr-14 pl-8 ease-in-out duration-300 " :class="showSidebar ? ' md:pr-96  ' : '  md:pr-28'">
        <div :class="showSidebar ? 'w-screen h-screen '  : 'w-full  h-screen '  ">
          <titler :routeName="route.name"/>
            <div class="mt-5 border gap-10 md:flex">
                <!-- <div class="md:w-1/2 w-full border border-brand-major  rounded-2xl"></div> -->
                 <div class="md:w-1/2 w-full border-brand-major border rounded-lg  h p-5">
                    <img src="../../assets/images/icons/exam.svg" alt="" class="bg-blue-500 p-3 rounded-full bg-opacity-30  md:m-0 mx-auto cursor-pointer">
                    <h2 class="md:text-xl border text-center md:text-left font-bold my-5">Application Status</h2>
                    <p class="text-center md:text-left mb-10 ">Pending</p>
                    <div class="p-2 rounded-lg md:w-1/2 w-full flex cursor-pointer transition ease-in-out delay-150  hover:translate-x-5 hover:scale-10  duration-200 border-brand-major border" @click="continueApplication">
                        <p class="text-center w-full">Continue</p>
                    </div>       
                    </div>
                 <div class="md:w-1/2 w-full border-brand-major border rounded-lg mt-5 md:mt-0  h p-5">
                    <img src="../../assets/images/icons/exam.svg" alt="" class="bg-blue-500 p-3 rounded-full bg-opacity-30  md:m-0 mx-auto cursor-pointer">
                    <h2 class="md:text-xl border text-center md:text-left font-bold my-5">Documents Uploaded</h2>
                    <p class="text-center md:text-left mb-10 ">4</p>
                     <div 
                     @click="documents"
                     class="p-2 rounded-lg md:w-1/2 w-full flex cursor-pointer transition ease-in-out delay-150  hover:translate-x-5 hover:scale-10  duration-200 border-brand-major border">
                        <p class="text-center w-full">Veiw/upload Documents</p>
                        
                    </div> 
                    </div>
            </div>
            <div class="md:mt-16 mt-5  border gap-10 md:flex ">
                 <div class="md:w-1/2 w-full border-brand-major border rounded-lg  h p-5">
                    <img src="../../assets/images/icons/exam.svg" alt="" class="bg-blue-500 p-3 rounded-full bg-opacity-30  md:m-0 mx-auto cursor-pointer">
                    <h2 class="md:text-xl border text-center md:text-left font-bold my-5">Next Steps</h2>
                    <p class="text-center md:text-left mb-10 ">Pending</p>
                    <div class="p-2 rounded-lg md:w-1/2 w-full flex cursor-pointer transition ease-in-out delay-150  hover:translate-x-5 hover:scale-10  duration-200 border-brand-major border">
                        <p class="text-center w-full">Continue</p>
                        
                    </div>        
                    </div>
                 <div class="md:w-1/2 w-full border-brand-major border rounded-lg mt-5 md:mt-0  h p-5">
                    <img src="../../assets/images/icons/exam.svg" alt="" class="bg-blue-500 p-3 rounded-full bg-opacity-30  md:m-0 mx-auto cursor-pointer">
                    <h2 class="md:text-xl border text-center md:text-left font-bold my-5">Admission Officer</h2>
                    <p class="text-center md:text-left mb-10 ">Bayo Salako</p>
                     <div 
                     @click="chat"
                     class="p-2 rounded-lg md:w-1/2 w-full flex cursor-pointer transition ease-in-out delay-150  hover:translate-x-5 hover:scale-10  duration-200 border-brand-major border">
                        <p class="text-center w-full">Chat with bayo </p>
                        
                    </div> 
                    </div>
            </div>
                
        </div>
        </div>
        <SmallNav @openSideBar="showSidebar = !showSidebar"/>
        <dashboardNav :showSidebar="showSidebar" @closeSideBar="showSidebar = !showSidebar "/>
</template>

<script>
import dashboardNav from "../components/dashboardNav.vue" 
import SmallNav from "../components/SmallNav.vue" 
import titler from "../components/titler.vue" 
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

    methods: {
        continueApplication(){
            this.router.push('/user/application')
        },
        documents(){
            this.router.push('/user/documents')
        },
        chat(){
            this.router.push('/user/admissionofficer')
        }

    },

    mounted(){
        window.addEventListener('resize', () => 
        {this.windowSize = window.innerWidth} )
    },

    unmounted(){
        window.removeEventListener('resize', () => 
        {this.windowSize = window.innerWidth})
    },
    
    setup(){
     
        return {
        }
    }
}
</script>
