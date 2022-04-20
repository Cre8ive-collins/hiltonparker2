<template>
<div>
     <div class="justify-center flex  items-center h-screen  hero">
      <div class="md:w-1/2 w-full z-20 text-black px-8 "  v-if="login">
        <img
          class="absolute bottom-0 left-0 object-contain "
          alt=""
          src="../../assets/images/icons/loginggliph.svg"
        />
          <h2
          class="text-gray-700 uppercase font-bold tracking-wider mb-2 text-xl w-full text-center"
        >
         ADMIN LOGIN
        </h2>
          <hr class="md:w-2/3 w-full mx-auto border-brand-major  mt-5"> 
           <Form @submit="signIn">
            <div class="flex md:w-2/3 w-full mx-auto gap-4 mt-12">
             <div class="relative  border-b border-brand-major focus-within:border-brand-major   w-full mx-auto rounded-lg px-3">
                <Field rules="required|email" name="email" type="text" class="block w-full appearance-none focus:outline-none bg-transparent" placeholder=" "   />
                <!-- <input type="text" name="username" placeholder=" " v-model="first_name" class="block w-full appearance-none focus:outline-none bg-transparent" /> -->
                <label for="first_name" class="absolute top-0 -z-1 origin-0 text-brand-major opacity-50">Email</label>
                <ErrorMessage name="email" class="text-red-500 text-[0.6em] absolute mt-2"/>
            </div>
            </div>
            <div class="flex md:w-2/3 w-full mx-auto gap-4 mt-12">
             <div class="relative  border-b border-brand-major focus-within:border-brand-major   w-full mx-auto rounded-lg px-3">
                <Field rules="required" name="password" type="password" class="block w-full appearance-none focus:outline-none bg-transparent" placeholder=" "   />
                <!-- <input type="text" name="username" placeholder=" " v-model="first_name" class="block w-full appearance-none focus:outline-none bg-transparent" /> -->
                <label for="password" class="absolute top-0 -z-1 origin-0 text-brand-major opacity-50">Passowrd </label>
                <ErrorMessage name="password" class="text-red-500 text-[0.6em] absolute mt-2"/>
            </div>
            </div>
             <div class="md:w-2/3 mt-16 w-full mx-auto bg-brand-major z-50 border text-white  hover:text-white rounded rounded-input hover:bg-brand-major hover:border  cursor-pointer ransition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110 duration-300 ">
              <input type="submit" value="Submit" class="mx-auto w-full text-white p-3 ">
            </div>
             <div class="flex  md:w-2/3 w-full mx-auto gap-4 mt-10">
            <p class="text-brand-gray text-xs w-1/2">
              <Field type="checkbox" name="signed" class="mt-1 " checked id=""/>  Stay signed in</p>
            <p class="text-brand-gray text-right text-xs cursor-pointer w-1/2 hover:text-brand-blue" @click="resetPassword" v-text=" login ? 'Forgot Passowrd' : 'Login'"></p>
          </div>
          </Form>

         



      <p class="text-brand-gray text-center mt-14 text-xs ">Dont have an application <router-link to="/apply" class="cursor-alias"> <u>Get Started</u> </router-link></p>

      </div>
      <div class="md:w-1/2 w-full z-20 text-black px-8 "  v-if="!login">
        <img
          class="absolute bottom-0 left-0 object-contain "
          alt=""
          src="../../assets/images/icons/loginggliph.svg"
        />
         <h1 class="text-center font-bold tracking-wider text-xl text-brand-gray">
            Enter email to reset password
          </h1>   
          <hr class="md:w-2/3 w-full mx-auto border-brand-major  mt-5"> 
          <Form @submit="sendResetMail">
            <div class="flex md:w-2/3 w-full mx-auto gap-4 mt-12">
             <div class="relative  border-b border-brand-major focus-within:border-brand-major   w-full mx-auto rounded-lg px-3">
                <Field rules="required|email" name="email" type="text" class="block w-full appearance-none focus:outline-none bg-transparent" placeholder=" "   />
                <!-- <input type="text" name="username" placeholder=" " v-model="first_name" class="block w-full appearance-none focus:outline-none bg-transparent" /> -->
                <label for="first_name" class="absolute top-0 -z-1 origin-0 text-brand-major opacity-50">Email</label>
                <ErrorMessage name="email" class="text-red-500 text-[0.6em] absolute mt-2"/>
            </div>
            </div>
             <div class="md:w-2/3 mt-16 w-full mx-auto bg-brand-major z-50 border text-white  hover:text-white rounded rounded-input hover:bg-brand-major hover:border  cursor-pointer ransition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110 duration-300 ">
              <input type="submit" value="Submit" class="mx-auto w-full text-white p-3 ">
            </div>
          </Form>



      <p class="text-brand-gray text-center mt-14 text-xs cursor-pointer" @click="resetPassword">Login Here</p>

      </div>
      <div class="md:w-1/2 sm:hidden xxm:hidden  xm:hidden md:inline-block z-20 text-black h-full bg-brand-major"></div>

  </div>
  <div class="w-screen h-5 bg-brand-major md:hidden inline-block -mt-32">

  </div>
</div>
</template>

<script>
import { Form, Field, ErrorMessage } from 'vee-validate';
import { useRouter } from 'vue-router'
import { Admin } from '../../store/models';




export default {
  name: 'Apply',
  components: {
    Form, Field, ErrorMessage
  },

  data() {

     let router = useRouter()
     let login = true

    return {
      router, login
    }
  },

  methods: {
    resetPassword(){
      this.login = !this.login
      console.log('reset adin pass')
    },

    async signIn(values){
      let res = await Admin.api().login(values)
      if(res && res.response && res.response.data){
        let token = res.response.data.data.token
        window.localStorage.setItem("admin_token" , token)
        this.router.push('/admin')
      }
    },

   
     async sendResetMail (values){ 
        await Admin.api().resetPassword(values)
        this.login = !this.login
        console.log('reset adin pass')
    }

  },


 

  setup(){


  }
 
}
</script>

