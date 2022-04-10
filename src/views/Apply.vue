<template>
    <div class="">
        <div class="justify-center flex  items-center h-screen">
          <div class="w-1/2  h-screen pt-20 img">
          <div class="trapez hidden md:flex justify-center ">
            <h2 class="md:text-white z-20 text-5xl font-extrabold  ">
              Opportunity  <br> Starts Here. 
            </h2>
          </div>
          <div class="trapez-b hidden md:flex">
          </div>
          </div>
           <div class="md:w-1/2 w-full z-20 text-black px-8 ">
        <img
          class="absolute bottom-0 left-0 object-contain w-56 "
          alt="PayedIn"
          src="../assets/images/icons/loginggliph.svg"
        />
         <h1 class="text-center font-bold tracking-wider md:text-xl text-sm text-brand-gray">
            Start your application
          </h1>   
          <hr class="md:w-2/3 w-full mx-auto border-brand-major  mt-5"> 

          <Form @submit="submit">
            <div class="md:flex md:w-2/3 w-full mx-auto gap-4 mt-12">
            <div class="relative  border-b border-brand-major focus-within:border-brand-major md:w-1/2  w-full mx-auto rounded-lg px-3">
                <Field rules="required" name="first_name" type="text" class="block w-full appearance-none focus:outline-none bg-transparent" placeholder=" "   />
                <label for="first_name" class="absolute top-0 -z-1 origin-0 text-brand-major opacity-50">First Name</label>
                <ErrorMessage name="first_name" class="text-red-500 text-[0.6em] absolute mt-2"/>
            </div>
            <div class="relative border-b border-brand-major focus-within:border-brand-major md:w-1/2  w-full mx-auto rounded-lg px-3">
                <Field rules="required" name="last_name" type="text" class="block w-full appearance-none focus:outline-none bg-transparent md:mt-0 mt-14" placeholder=" "   />
                <label for="last_name" class="absolute top-0 -z-1 origin-0 text-brand-major">Last Name</label>
                <ErrorMessage name="last_name" class="text-red-500 text-[0.6em] absolute mt-2 "/>

            </div>
            </div>

            <div class="relative mt-14 border-b border-brand-major focus-within:border-brand-major md:w-2/3 w-full mx-auto rounded-lg px-3">
                <Field rules="required|email" name="email" type="email" class="block w-full appearance-none focus:outline-none bg-transparent" placeholder=" "   />
                <label for="email" class="absolute top-0 -z-1 origin-0 text-brand-major">Email</label>
                <ErrorMessage name="email" class="text-red-500 text-[0.6em] absolute mt-2"/>
            </div>
            <div class="relative mt-14 border-b border-brand-major focus-within:border-brand-major md:w-2/3 w-full mx-auto rounded-lg px-3">
                <Field rules="digits:11|required" name="phone" type="text" class="block w-full appearance-none focus:outline-none bg-transparent" placeholder=" "   />
                <label for="phone" class="absolute top-0 -z-1 origin-0 text-brand-major">Phone Number</label>
                <ErrorMessage name="phone" class="text-red-500 text-[0.6em] absolute mt-2"/>
            </div>

            <div class="md:w-2/3 mt-16 w-full mx-auto bg-brand-major z-50 border text-white  hover:text-white rounded rounded-input hover:bg-brand-major hover:border  cursor-pointer ransition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110 duration-300 ">
              <input type="submit" value="Submit" class="mx-auto w-full text-white p-3 ">
            </div>
          </Form>

      <p class="text-brand-gray text-center mt-14 text-xs ">Already have an application <router-link to="/sign-in" class="cursor-alias"> <u>Sign-in </u> </router-link> to continue</p>

      </div>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
import { Form, Field, ErrorMessage } from 'vee-validate';
import { useRouter } from 'vue-router'
import { User } from '../store/models'





export default {
  name: 'SignIn',
  
  data() {

    let router = useRouter()
    return {
      router
    }
  },
  components: {
    Form,
    Field,
    ErrorMessage,
  },

  methods: {
   
    async submit (values){ 
     User.api().submit(values, this.router)
    }
  },

  setup(){
    return {
      
    }
  }
 
}
</script>

<style scoped>
.trapez {
 width: 0;
  height: screen;
  border-right: 30rem solid transparent;
  border-top: 0;
  border-bottom: 30rem solid rgba(246, 150, 21, 0.7);
  position: absolute;
  bottom: 0;
}
.trapez-b {
 width: 0;
  height: screen;
  border-left: 30rem solid transparent;
  border-top: 30rem solid rgba(255, 255, 255, 0.333);
  border-bottom: 0;
  position: absolute;
  /* bottom: 0; */
  top: 5%;
  right: 50%;
}
.trapez h2{
  position: fixed;
  bottom: 5%;
  left: 1.5%;

}

.img{
  /* border : 1px solid blue; */
  background-image: url('../assets/images/studentbg.jpg');
  background-size: cover;
  background-position: center; 
  background-repeat: no-repeat;
}
</style>