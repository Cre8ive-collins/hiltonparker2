<template>
<div class="w-screen flex md:hidden bg-black h-screen fixed top-0 z-1000">
    <h3 class="text-white text-center mt-24 p-2 ">
        You seem to be accessing this app from a mobile device,
        please use a computer instead 
    </h3>
</div>


 <div class="flex overflow-auto pr-14 pl-8 ease-in-out duration-300 " :class="showSidebar ? ' md:pr-64  ' : '  md:pr-28'">
        <div :class="showSidebar ? 'w-screen h-screen '  : 'w-full  h-screen '  ">
          <titler :name="AdmissionOfficer.info().first_name +  ' ' + AdmissionOfficer.info().last_name"/>
          <div class="flex w-full mt-10 pt-5 gap-5">
              <div class="bg-brand-omajor w-1/4 rounded flex p-5 content-center justify-center">
                <div class="w-1/3">
                       <svg width="62" height="62" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 20.5C26.3125 20.5 31.4286 15.9115 31.4286 10.25C31.4286 4.58848 26.3125 0 20 0C13.6875 0 8.57143 4.58848 8.57143 10.25C8.57143 15.9115 13.6875 20.5 20 20.5ZM28.5536 23.1105L24.2857 38.4375L21.4286 27.5469L24.2857 23.0625H15.7143L18.5714 27.5469L15.7143 38.4375L11.4464 23.1105C5.08036 23.3828 0 28.0514 0 33.825V37.1562C0 39.2783 1.91964 41 4.28571 41H35.7143C38.0804 41 40 39.2783 40 37.1562V33.825C40 28.0514 34.9196 23.3828 28.5536 23.1105Z" fill="white"/>
                    </svg>
                </div>
                <div class="w-2/3">
                    <h2 class="text-center text-5xl "  > 33 </h2> 
                    <h4 class="text-sm text-center">Pending</h4>
                </div>
              </div>
               <div class="bg-brand-omajor w-1/4 rounded flex p-5 content-center justify-center">
                <div class="w-1/3">
                        <svg width="62" height="62" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 20.5C26.3125 20.5 31.4286 15.9115 31.4286 10.25C31.4286 4.58848 26.3125 0 20 0C13.6875 0 8.57143 4.58848 8.57143 10.25C8.57143 15.9115 13.6875 20.5 20 20.5ZM28.5536 23.1105L24.2857 38.4375L21.4286 27.5469L24.2857 23.0625H15.7143L18.5714 27.5469L15.7143 38.4375L11.4464 23.1105C5.08036 23.3828 0 28.0514 0 33.825V37.1562C0 39.2783 1.91964 41 4.28571 41H35.7143C38.0804 41 40 39.2783 40 37.1562V33.825C40 28.0514 34.9196 23.3828 28.5536 23.1105Z" fill="white"/>
                    </svg>
                </div>
                <div class="w-2/3">
                    <h2 class="text-center text-5xl "  > 33 </h2> 
                    <h4 class="text-sm text-center">Documents</h4>
                </div>
              </div>
               <div class="bg-brand-omajor w-1/4 rounded flex p-5 content-center justify-center">
                <div class="w-1/3">
                        <svg width="62" height="62" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 20.5C26.3125 20.5 31.4286 15.9115 31.4286 10.25C31.4286 4.58848 26.3125 0 20 0C13.6875 0 8.57143 4.58848 8.57143 10.25C8.57143 15.9115 13.6875 20.5 20 20.5ZM28.5536 23.1105L24.2857 38.4375L21.4286 27.5469L24.2857 23.0625H15.7143L18.5714 27.5469L15.7143 38.4375L11.4464 23.1105C5.08036 23.3828 0 28.0514 0 33.825V37.1562C0 39.2783 1.91964 41 4.28571 41H35.7143C38.0804 41 40 39.2783 40 37.1562V33.825C40 28.0514 34.9196 23.3828 28.5536 23.1105Z" fill="white"/>
                    </svg>
                </div>
                <div class="w-2/3">
                    <h2 class="text-center text-5xl "  > 33 </h2> 
                    <h4 class="text-sm text-center">Payment</h4>
                </div>
              </div>
                <div class="bg-brand-omajor w-1/4 rounded flex p-5 content-center justify-center">
                <div class="w-1/3">
                    <svg width="62" height="62" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 20.5C26.3125 20.5 31.4286 15.9115 31.4286 10.25C31.4286 4.58848 26.3125 0 20 0C13.6875 0 8.57143 4.58848 8.57143 10.25C8.57143 15.9115 13.6875 20.5 20 20.5ZM28.5536 23.1105L24.2857 38.4375L21.4286 27.5469L24.2857 23.0625H15.7143L18.5714 27.5469L15.7143 38.4375L11.4464 23.1105C5.08036 23.3828 0 28.0514 0 33.825V37.1562C0 39.2783 1.91964 41 4.28571 41H35.7143C38.0804 41 40 39.2783 40 37.1562V33.825C40 28.0514 34.9196 23.3828 28.5536 23.1105Z" fill="white"/>
                    </svg>
                </div>
                <div class="w-2/3">
                    <h2 class="text-center text-5xl "  > 33 </h2> 
                    <h4 class="text-sm text-center">Successfull</h4>
                </div>
              </div>
          </div>

          <div class="my-10 py-4 bg-orange-300 bg-opacity-50 rounded flex text-black">
        <img
          src="../../assets/images/icons/search.svg"
          class="pl-4 h-5 opacity-50"
        />

        <input
          @keyup="search"
          v-model="serachInput"
          type="text"
          placeholder="Search for Client by Name or Email"
          class="
            text-lg
            text-black
            search
            border-0
            rounded-none
            mx-3
            w-full
            bg-brand-blue bg-opacity-0
          "
        />
      </div>

         <div class="w-full flex py-3 mb-2">
        <div class="w-1/6">
          <h5 class="text-brand-major text-center">Name</h5>
        </div>
        <div class="w-1/6">
          <h5 class="text-brand-major text-center">Phone Number</h5>
        </div>
        <div class="w-2/6">
          <h5 class="text-brand-major text-center">Email Address</h5>
        </div>
        <div class="w-1/6">
          <h5 class="text-brand-major text-center">Status</h5>
        </div>
        <div class="w-1/6">
          <h5 class="text-brand-major text-center"></h5>
        </div>
      </div>  
      <div class="w-full mt-10" v-if="!Client.exists()">
          <h1 class="w-full text-2xl text-center text-gray-500">No clients yet </h1>
      </div>
            <template v-for="m in Client.all()" :key="m.id">
                  <div class="w-full flex py-3  border-b border-brand-omajor mb-5">
                    <div class="w-1/6">
                        <h5 class="text-center">{{ m.first_name}}&nbsp; {{ m.last_name }}</h5>
                    </div>
                    <div class="w-1/6">
                    <h5 class=" text-center">{{ m.phone}}</h5>
                    </div>
                    <div class="w-2/6">
                    <h5 class=" text-center">{{ m.email }}</h5>
                    </div>
                    <div class="w-1/6">
                    <h5 class="text-center">Status</h5>
                    </div>
                    <div class="w-1/6">
                        <router-link :to="`/officer/user/${m.id}`">
                            <h5 class="text-brand-major text-center"> View > </h5>
                        </router-link>
                    </div>
                </div> 
            </template>
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
import { AdmissionOfficer, Client } from "../../store/models"




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
            serachInput : "",
            showSidebar,
            windowSize,
            router,
            route
        }
    },

    methods: {
       
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
        AdmissionOfficer.api().allclients()
        return {
            AdmissionOfficer, Client
        }
    }
}
</script>

