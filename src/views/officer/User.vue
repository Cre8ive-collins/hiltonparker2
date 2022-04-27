<template>
<div class="w-screen flex md:hidden bg-black h-screen fixed top-0 z-1000">
    <h3 class="text-white text-center mt-24 p-2 ">
        You seem to be accessing this app from a mobile device,
        please use a computer instead 
    </h3>
</div>
    <div v-if="User.exists()" class="flex overflow-auto  pl-8 ease-in-out duration-300 " :class="showSidebar ? ' md:pr-64  ' : '  md:pr-28'">
        <div :class="showSidebar ? 'w-screen h-screen '  : 'w-full  h-screen '  ">
          <titler :name="AdmissionOfficer.info().first_name +  ' ' + AdmissionOfficer.info().last_name"/>

          <div class=" mt-16 flex">
              <h2 class="text-3xl w-1/2">{{ User.info().first_name }}&nbsp;{{ User.info().last_name }}&nbsp; <span class="text-base " v-if=" User.info().other_name"> ( {{ User.info().other_name }} ) </span> </h2>
              <h2 class="text-lg  w-1/2 text-right">Registered on : {{ date_only(User.info().createdAt) }} </h2>
          </div>
           <div class="grid grid-cols-3 gap-4 mt-5">
                <div></div>
                <div class="">
                    <img
                    :src="src"
                    :alt="src"
                    class="rounded-full w-40 h-40 mx-auto"
                    />
                    <h3 class="text-lg text-center mt-3">
                    </h3>
                    <h3 class="text-sm mb-2 text-center font-normal ">Phone Number : {{ User.info().phone }} 
                    </h3>
                     <h3 class="text-sm mb-2 text-center font-normal ">Email : {{ User.info().email }}
                    </h3>
                    <h3 class="text-sm text-center font-normal" v-if="User.info().date_of_birth">Date of Birth: {{ date_only(User.info().date_of_birth) }}</h3>
                    <h3 class="text text-center text-brand-major my-10">Status : {{ application_stats( User.info().applications_status ) }}
                    <span class="p-2 cursor-pointer bg-brand-major text-white rounded hover:bg-white hover:border-brand-major border hover:text-brand-major" @click="reminder(User.info().applications_status  )">Send reminder</span> </h3>
                </div>
                <div class="text-sm"></div>
                </div>
        <!-- <hr class="border-orange-500 w-full  border"> -->
        <div class=" mt-5">
            <div class="flex gap-5">
                <div class="w-1/3 cursor-pointer" @click="tab = 'program'">
                    <h2 class=" text-center w-full ">Program</h2>
                    <hr class="w-full mt-3 border" :class="tab == 'program' ? 'border-orange-500 ' : 'border-gray-500 '">
                </div>
                <div class="w-1/3 text-center cursor-pointer" @click="tab = 'document'">
                    <h2 class=" text-center w-full ">Documents</h2>
                    <hr class="w-full mt-3 border" :class="tab == 'document' ? 'border-orange-500 ' : 'border-gray-500 '">
                </div>
                <div class="w-1/3 text-center cursor-pointer" @click="tab = 'other'">
                    <h2 class=" text-center w-full ">Other Information</h2>
                    <hr class="w-full mt-3 border" :class="tab == 'other' ? 'border-orange-500 ' : 'border-gray-500 '">
                </div>
            </div>

              <div class="w-full border mt-10" v-if="tab == 'program'">
                  <div v-if="User.info().program">
                    <h2 class="text-brand-major">Program</h2>
                    <h2 class=" mt-5 ">{{ User.info().program }}</h2>
                    <h2 class="text-brand-major mt-5">Course</h2>
                    <div class="flex gap-10">
                        <h2 class=" mt-5 capitalize" v-for="m in course_spliter(User.info().courses)" :key="m">{{ m }}</h2>
                    </div>
                    <div class="flex gap-10">
                        <h2 class="text-brand-major mt-5 capitalize" v-for="(m, i) in course_spliter(User.info().courses)" :key="m">Course {{ i+1 }}</h2>
                    </div>
                  </div>
                  <div v-else>
                      <h2 class="w-full text-center text-gray-500">Application not updated </h2>
                  </div>
                </div>
                <div class="w-full mt-10" v-if="tab == 'document'">
                    <div  v-if="User.info().passport_photo">
                        <div class="flex gap-5">
                            <div class="w-1/3">
                                <h2 class="text-brand-major text-center">Passport photograph</h2>
                                <img :src="src" :alt="src" class="rounded-full w-40 h-40 mx-auto mt-5"/>
                                <a :href="src" target="blank"><h2  class="text-white bg-brand-major p-2 text-center rounded mt-5 cursor-pointer">Download</h2></a>
                            </div>
                            <div  class="w-1/3" v-if="User.info().international_passport">
                                <h2 class="text-brand-major text-center">Internation Passport</h2>
                                <img :src="ip" :alt="ip" class="rounded-full w-40 h-40 mx-auto mt-5"/>
                                <a :href="ip" target="blank"><h2  class="text-white bg-brand-major p-2 text-center rounded mt-5 cursor-pointer">Download</h2></a>
                            </div>
                        </div>
                        <hr class="my-5 border border-brand-omajor bg-brand-omajor "> {{dcs}}
                        <h2 class="text-brand-major text-center mt-auto">Supporting Documents</h2>
                        <hr class="my-5 border border-brand-omajor bg-brand-omajor ">
                        <div v-if="User.info().supporting_docs" class="flex flex-wrap gap-5">
                            <div class="w-1/2  mb-28" v-for="(item, index) in dcs" :key="index">
                                <h2 class="text-brand-major text-center mt-t">{{ index }} {{ }}</h2>
                                <h2 class="text-brand-major text-center mt-t">{{ src }} {{ }}</h2>
                                <img :src="item" :alt="item" class="rounded-full w-40 h-40 mx-auto mt-5"/>
                                <a :href="item" target="blank"><h2  class="text-white bg-brand-major p-2 text-center rounded mt-5 cursor-pointer">Download</h2></a>
                            </div>
                        </div>
                        <div v-else>
                            <h2 class="w-full text-center text-gray-500">Document not uploaded yet </h2>
                        </div>
                    </div>
                     <div v-else>
                      <h2 class="w-full text-center text-gray-500">Document not uploaded yet </h2>
                  </div>
                </div>
                <div class="w-full mt-10" v-if="tab == 'other'">
                    <div v-if="User.info().marital_status">
                        <h2 class="text-brand-major">Marital Status</h2>
                        <h2 class=" mt-5 capitalize">{{ User.info().marital_status }}</h2>
                        <h2 class="text-brand-major mt-5">Nationality</h2>
                        <h2 class=" mt-5 capitalize">{{ User.info().nationality }}</h2>
                        <h2 class="text-brand-major mt-5">Place of Birth</h2>
                        <h2 class=" mt-5 capitalize">{{ User.info().place_of_birth }}</h2>
                    </div>
                     <div v-else>
                      <h2 class="w-full text-center text-gray-500">Information not uopdated </h2>
                  </div>
                </div>
        </div>
        </div>
    </div>

  

    <SmallNav @openSideBar="showSidebar = !showSidebar"/>
    <dashboardNav :showSidebar="showSidebar" @closeSideBar="showSidebar = !showSidebar "/>
</template>

<script>
import { useRouter, useRoute } from 'vue-router'
import dashboardNav from "../components/dashboardNav.vue" 
import SmallNav from "../components/SmallNav.vue" 
import titler from "../components/titler.vue" 
import { date_only, image, application_stats , course_spliter, interPass, supp_docs } from '../../utils'
import { User, AdmissionOfficer } from '../../store/models'
import { ref } from '@vue/reactivity'
import { watch } from '@vue/runtime-core'

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
        return {
            showSidebar
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
        let dcs = ref("")
        let src = ref("https://ui-avatars.com/api/?name=" + 'hps' + "&background=" + '1046a2' + "&color=FFFFFF&size=256&bold=false&format=svg&font-size=0.35")
        let ip = ref("https://ui-avatars.com/api/?name=" + 'hps' + "&background=" + '1046a2' + "&color=FFFFFF&size=256&bold=false&format=svg&font-size=0.35")
        watch(
            () => User.mode(),
             () => {
                 if(User.info().id){
                     image(User.info()).then(res => src.value = res)
                     interPass(User.info()).then(res => ip.value = res)
                     supp_docs(User.info().supporting_docs).then(res => {
                         dcs.value = res
                     })
                 }
        })
        let tab = ref("program")
        let router = useRouter()
        let route  = useRoute()
        let id = route.params.id
        const reminder = (stat) => {
            User.api().send_reminder(id, stat)
        }
        User.api().find(id)
        return {
            dcs, supp_docs, ip, src, router, route, id, AdmissionOfficer, User, date_only, image, application_stats, reminder, tab, course_spliter
        }
    }
    
}
</script>