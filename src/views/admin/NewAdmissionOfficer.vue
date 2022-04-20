<template>
<div class="w-screen flex md:hidden bg-black h-screen fixed top-0 z-100">
    <h3 class="text-white text-center mt-24 p-2 ">
        You seem to be accessing this app from a mobile device,
        please use a computer instead 
    </h3>
</div>
    <div class="flex overflow-auto pr-14 pl-8 ease-in-out duration-300 " :class="showSidebar ? ' md:pr-96  ' : '  md:pr-28'">
        <div class="w-full">
          <titler :name="Admin.info().first_name +  ' ' + Admin.info().last_name"/>
          <!-- <hr class="border-2 w-full mt-5"> -->
          <div class="mt-16">
              <p>Complete the registeration with valid information</p>
              <Form @submit="apply">
                <div class="md:flex w-full mx-auto gap-4  mt-16">
                <div class="relative  border-b border-brand-major focus-within:border-brand-major md:w-1/2 w-full mx-auto rounded-lg px-3">
                    <Field rules="required" name="first_name" type="text" class="block w-full appearance-none focus:outline-none bg-transparent" placeholder=" "   />
                    <!-- <input type="text" name="username" placeholder=" " v-model="first_name" class="block w-full appearance-none focus:outline-none bg-transparent" /> -->
                    <label for="First Name" class="absolute top-0 -z-1 origin-0 text-brand-major opacity-50">First Name</label>
                    <ErrorMessage name="first_name" class="text-red-500 text-[0.6em] absolute mt-2"/>
                </div>
                <div class="relative mt-14 md:mt-0 border-b border-brand-major focus-within:border-brand-major  md:w-1/2 w-full mx-auto rounded-lg px-3">
                    <Field rules="required" name="last_name" type="text" class="block w-full appearance-none focus:outline-none bg-transparent" placeholder=" "   />
                    <!-- <input type="text" name="username" placeholder=" " v-model="first_name" class="block w-full appearance-none focus:outline-none bg-transparent" /> -->
                    <label for="Last Name" class="absolute top-0 -z-1 origin-0 text-brand-major opacity-50">Last Name</label>
                    <ErrorMessage name="last_name" class="text-red-500 text-[0.6em] absolute mt-2"/>
                </div>
                </div>
                <div class="md:flex w-full mx-auto gap-4  mt-16">
                <div class="relative  border-b border-brand-major focus-within:border-brand-major md:w-1/2 w-full mx-auto rounded-lg px-3">
                    <Field rules="required|email" name="email" type="text" class="block w-full appearance-none focus:outline-none bg-transparent" placeholder=" "   />
                    <!-- <input type="text" name="username" placeholder=" " v-model="first_name" class="block w-full appearance-none focus:outline-none bg-transparent" /> -->
                    <label for="Email" class="absolute top-0 -z-1 origin-0 text-brand-major opacity-50">Email</label>
                    <ErrorMessage name="email" class="text-red-500 text-[0.6em] absolute mt-2"/>
                </div>
                <div class="relative mt-14 md:mt-0 border-b border-brand-major focus-within:border-brand-major  md:w-1/2 w-full mx-auto rounded-lg px-3">
                    <Field rules="required" name="phone_number" type="text" class="block w-full appearance-none focus:outline-none bg-transparent" placeholder=" "   />
                    <!-- <input type="text" name="username" placeholder=" " v-model="first_name" class="block w-full appearance-none focus:outline-none bg-transparent" /> -->
                    <label for="Last Name" class="absolute top-0 -z-1 origin-0 text-brand-major opacity-50">Phone Number</label>
                    <ErrorMessage name="phone_number" class="text-red-500 text-[0.6em] absolute mt-2"/>
                </div>
                </div>


                
                <div class="md:w-2/3 mt-16 w-full mx-auto bg-brand-major z-50 border text-white  hover:text-white rounded rounded-input hover:bg-brand-major hover:border  cursor-pointer ransition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110 duration-300 ">
                <input type="submit" value="Submit" class="mx-auto w-full text-white p-3 ">
                </div>
              </Form>
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
import { Form, Field, ErrorMessage } from 'vee-validate';
import { useRouter, useRoute } from 'vue-router'
import { Admin } from "../../store/models"





export default {
    components: {
        dashboardNav,
        SmallNav,
        titler,
        Form, 
        Field, 
        ErrorMessage
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
        apply(values){
            console.log(values)
            Admin.api().newAdmissionOfficer(values)
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
            Admin
        }
    }
}
</script>
