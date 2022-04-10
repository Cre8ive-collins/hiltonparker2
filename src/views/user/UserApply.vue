<template>
    <div class="flex overflow-auto pr-14 pl-8 ease-in-out duration-300 " :class="showSidebar ? ' md:pr-96  ' : '  md:pr-28'">
        <div class="w-full">
          <titler :routeName="route.name"/>
          <!-- <hr class="border-2 w-full mt-5"> -->
          <div class="mt-16">
              <p>Complete the registeration with valid information</p>
              <Form @submit="apply">
                <div class="md:flex w-full mx-auto gap-4  mt-16">
                <div class="relative  border-b border-brand-major focus-within:border-brand-major md:w-1/2 w-full mx-auto rounded-lg px-3">
                    <Field rules="required" name="First Name" type="text" class="block w-full appearance-none focus:outline-none bg-transparent" placeholder=" "   />
                    <!-- <input type="text" name="username" placeholder=" " v-model="first_name" class="block w-full appearance-none focus:outline-none bg-transparent" /> -->
                    <label for="First Name" class="absolute top-0 -z-1 origin-0 text-brand-major opacity-50">First Name</label>
                    <ErrorMessage name="First Name" class="text-red-500 text-[0.6em] absolute mt-2"/>
                </div>
                <div class="relative mt-14 md:mt-0 border-b border-brand-major focus-within:border-brand-major  md:w-1/2 w-full mx-auto rounded-lg px-3">
                    <Field rules="required" name="Last Name" type="text" class="block w-full appearance-none focus:outline-none bg-transparent" placeholder=" "   />
                    <!-- <input type="text" name="username" placeholder=" " v-model="first_name" class="block w-full appearance-none focus:outline-none bg-transparent" /> -->
                    <label for="Last Name" class="absolute top-0 -z-1 origin-0 text-brand-major opacity-50">Last Name</label>
                    <ErrorMessage name="Last Name" class="text-red-500 text-[0.6em] absolute mt-2"/>
                </div>
                </div>
                <div class="md:flex w-full mx-auto gap-4  mt-16">
                <div class="relative  border-b border-brand-major focus-within:border-brand-major  w-full mx-auto rounded-lg px-3">
                    <Field rules="required" name="Address" type="text" class="block w-full appearance-none focus:outline-none bg-transparent" placeholder=" "   />
                    <label for="Address" class="absolute top-0 -z-1 origin-0 text-brand-major opacity-50">Address</label>
                    <ErrorMessage name="Address" class="text-red-500 text-[0.6em] absolute mt-2"/>
                </div>
                </div>
                <div class="md:flex w-full mx-auto gap-4  mt-16">
                <div class="relative  border-b border-brand-major focus-within:border-brand-major md:w-1/2 w-full mx-auto rounded-lg px-3">
                    <Field rules="required|email" name="Email" type="text" class="block w-full appearance-none focus:outline-none bg-transparent" placeholder=" "   />
                    <!-- <input type="text" name="username" placeholder=" " v-model="first_name" class="block w-full appearance-none focus:outline-none bg-transparent" /> -->
                    <label for="Email" class="absolute top-0 -z-1 origin-0 text-brand-major opacity-50">Email</label>
                    <ErrorMessage name="Email" class="text-red-500 text-[0.6em] absolute mt-2"/>
                </div>
                <div class="relative mt-14 md:mt-0 border-b border-brand-major focus-within:border-brand-major  md:w-1/2 w-full mx-auto rounded-lg px-3">
                    <Field rules="required" name="Phone Number" type="text" class="block w-full appearance-none focus:outline-none bg-transparent" placeholder=" "   />
                    <!-- <input type="text" name="username" placeholder=" " v-model="first_name" class="block w-full appearance-none focus:outline-none bg-transparent" /> -->
                    <label for="Last Name" class="absolute top-0 -z-1 origin-0 text-brand-major opacity-50">Phone Number</label>
                    <ErrorMessage name="Phone Number" class="text-red-500 text-[0.6em] absolute mt-2"/>
                </div>
                </div>
                <div class="md:flex w-full mx-auto gap-4  mt-16">
                <div class="relative  border-b border-brand-major focus-within:border-brand-major md:w-1/2 w-full mx-auto rounded-lg px-3">
                    <Field rules="required" name="Date of Birth" type="date" class="block w-full appearance-none focus:outline-none bg-transparent text-brand-omajor" placeholder=" "   />
                    <!-- <input type="text" name="username" placeholder=" " v-model="first_name" class="block w-full appearance-none focus:outline-none bg-transparent" /> -->
                    <label for="Date of Birth" class="absolute top-0 -z-1 origin-0 text-brand-major opacity-50">Date of Birth</label>
                    <ErrorMessage name="Date of Birth" class="text-red-500 text-[0.6em] absolute mt-2"/>
                </div>
                <div class="relative mt-14 md:mt-0 border-b border-brand-major focus-within:border-brand-major  md:w-1/2 w-full mx-auto rounded-lg px-3">
                    <Field rules="required" name="Place of Birth" type="text" class="block w-full appearance-none focus:outline-none bg-transparent" placeholder=" "   />
                    <!-- <input type="text" name="username" placeholder=" " v-model="first_name" class="block w-full appearance-none focus:outline-none bg-transparent" /> -->
                    <label for="Place of Birth" class="absolute top-0 -z-1 origin-0 text-brand-major opacity-50">Place of Birth</label>
                    <ErrorMessage name="Place of Birth" class="text-red-500 text-[0.6em] absolute mt-2"/>
                </div>
                </div>
                <div class="md:flex w-full mx-auto gap-4  mt-16">
                    
                <div class="relative  border-b border-brand-major focus-within:border-brand-major md:w-1/2 w-full mx-auto rounded-lg px-3">
                   <select name="gender" id="" class="block w-full appearance-none focus:outline-none bg-transparent text-brand-omajor" >
                        <option selected>Gender</option>
                        <option>Male</option>
                        <option>Female</option>
                        <option>Other</option>
                   </select>
                    <!-- <input type="text" name="username" placeholder=" " v-model="first_name" class="block w-full appearance-none focus:outline-none bg-transparent" /> -->
                    <!-- <label for="Gender" class="absolute top-0 -z-1 origin-0 text-brand-major opacity-50">Gender</label> -->
                </div>
                <div class="relative mt-14 md:mt-0 border-b border-brand-major focus-within:border-brand-major  md:w-1/2 w-full mx-auto rounded-lg px-3">
                     <select name="marital status" id="" class="block w-full appearance-none focus:outline-none bg-transparent text-brand-omajor" >
                        <option selected>Marital Status</option>
                        <option>Single</option>
                        <option>Married</option>
                        <option>Divorced</option>
                   </select>
                </div>
                </div>
                <div class="md:flex w-full mx-auto gap-4  mt-16">
                    
                <div class="relative  border-b border-brand-major focus-within:border-brand-major md:w-1/2 w-full rounded-lg px-3">
                   <select name="gender" id="" class="block w-full appearance-none focus:outline-none bg-transparent text-brand-omajor" >
                        <option selected>Program</option>
                        <option>Bsc / Certificate Program</option>
                        <option>Msc</option>
                        <option>PGD</option>
                   </select>
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
        }

    },

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
