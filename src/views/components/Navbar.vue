<template>
    <div class=" bg-brand-major fixed z-50 shadow-xl backdrop-filter backdrop-blur-lg w-screen px-6 py-4">
        <div class="grid grid-cols-3">
            <div class="mt-2">
                <router-link to="/"> LOGO</router-link>
            </div>
            <div class="col-span-2 ... ">
                <div class=" md:inline sm:hidden xm:hidden xxm:hidden">
                    <div class="flex flex-row-reverse gap-4 text-white" >
                        <div 
                        @click="apply"
                        class="w-1/5 border text-white  border-white hover:text-brand-major rounded rounded-input hover:bg-white hover:border  cursor-pointer ransition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110 duration-300 ">
                            <p class="text-center m-2   ">
                                Get Started
                            </p>
                        </div>
                        <div class="w-1/5 text-center text-white mt-2  hover:border-b   cursor-pointer ransition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110 duration-300 ">
                           <router-link to="sign-in" class=""> Sign-in</router-link> 
                        </div>
                        <div class="w-1/5 text-center text-white mt-2  hover:border-b   cursor-pointer ransition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110 duration-300">
                             <a href="/#testimonials" class=""> Testimonials</a> 
                        </div>
                        <div class="w-1/5 text-center text-white mt-2  hover:border-b   cursor-pointer ransition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110 duration-300">
                            <a href="/#benefits" class=""> Benefits</a> 
                            <!-- <router-link to="/" class=""> Sign-in</router-link>  -->

                        </div>
                        <!-- <div class="w-1/5 text-center text-white mt-2  hover:border-b   cursor-pointer ransition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110 duration-300 ">
                            About
                        </div> -->
                    </div>
                </div>
                <div class=" md:hidden sm:inline xm:inline xxm:inline">    
                    <div class="flex flex-row-reverse" @click="showSidebar = !showSidebar"> 
                        <img src="../../assets/images/icons/HAMBUGER.svg" alt="HAMBUGER" class="w-10">
                        <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
                    </div>
                </div>
            </div>
        </div>

        <!-- <div class="w-1/3 z-20 fixed  h-screen bg-brand-major"></div> -->
       <div :class="showSidebar ? 'bg-brand-major shadow-xl  translate-x-0 ' : ' translate-x-full'" class="ease-in-out duration-300 top-0 right-0 w-[50vw]  p-5 text-white fixed h-screen md:hidden sm:inline xm:inline xxm:inline" >
             <img src="../../assets/images/icons/close.svg" alt="" @click="showSidebar = !showSidebar" class="fixed top-5 right-5">
             <h2 className=" text-white mt-20" @click="showSidebar = !showSidebar"  >
                 <router-link to="/"> Home</router-link>
             </h2>
             <h2 className=" text-white mt-5" @click="showSidebar = !showSidebar" >About</h2>
             <!-- <hr class="my-5">  -->
             <h2 className=" text-white mt-5"  @click="showSidebar = !showSidebar">Benefits</h2>
             <!-- <hr class="my-5">  -->
             <h2 className=" text-white mt-5" @click="showSidebar = !showSidebar" >Testimonials</h2>
             <!-- <hr class="my-5">  -->
             <h2 className=" text-white mt-5" @click="showSidebar = !showSidebar" >
                 <router-link to="sign-in"> Sign-in</router-link>
             </h2>
             <hr class="my-5"> 
             <h2 className=" text-brand-major bg-white text-center  rounded-lg border border-white p-3" @click="apply" >Get Started</h2>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

export default {
  name: 'NavBar',
  props: {
    msg: String
  },
  data() {
      return {
          router : useRouter(),
          showSidebar : ref(false)
      }
  },

  methods: {
      apply(){
          this.showSidebar = false
          this.router.push('/apply')
      }
      
  },



  setup() {
      
     

      return {
          
      }
  }
}
</script>