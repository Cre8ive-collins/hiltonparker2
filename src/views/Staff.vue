<template>
<div>
     <div class="justify-center flex  items-center h-screen  hero">
      <div class="md:w-1/2 w-full z-20 text-black px-8 "  v-if="login">
        <img
          class="absolute bottom-0 left-0 object-contain "
          alt="PayedIn"
          src="../assets/images/icons/loginggliph.svg"
        />
          <h2
          class="text-gray-700 uppercase font-bold tracking-wider mb-2 text-xl w-full text-center"
        >
          Select your role
        </h2>
          <hr class="md:w-2/3 w-full mx-auto border-brand-major  mt-5"> 
           <Form @submit="signIn">
            <div class="flex md:w-2/3 w-full mx-auto gap-4 mt-12">
             <div class="relative  w-full mx-auto rounded-lg px-3">
                        <Field rules="required" name="role" as="select" class=" block p-2 border-brand-major border rounded-lg w-full text-brand-omajor" placeholder=" ">
                            <option value="officer">Admission Officer</option>
                            <option value="admin">Admin</option>
                            <!-- <option value="PGD">PGD Program</option> -->
                        </Field>
                        <ErrorMessage name="role" class="text-red-500 text-[0.6em] absolute mt-2"/>
            </div>
            </div>
             <div class="md:w-2/3 mt-16 w-full mx-auto bg-brand-major z-50 border text-white  hover:text-white rounded rounded-input hover:bg-brand-major hover:border  cursor-pointer ransition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110 duration-300 ">
              <input type="submit" value="Submit" class="mx-auto w-full text-white p-3 ">
            </div>
          </Form>

         



      <p class="text-brand-gray text-center mt-14 text-xs ">Go back <router-link to="/" class="cursor-alias"> <u>Home</u> </router-link></p>

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
import { User } from '../store/models'




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
    },

    async signIn(values){
         console.log(values)
    //   values.role == 'admin' ? router.push('/admin') : ''
        switch(values.role){
            case 'admin':
                this.router.push('/admin')
                break
            case 'officer':
                this.router.push('/officer/dashboard')
        }
    },

   
     sendResetMail (values){ 
      User.api().resetPassword(values)
    }

  },


 

  setup(){


  }
 
}
</script>

