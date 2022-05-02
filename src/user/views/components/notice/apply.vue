<template>
  <div
    class="fixed bg-black bg-opacity-50 h-screen w-screen top-0 left-0 z-50"
  >
  
    <div class="flex flex-wrap content-center h-screen justify-center">
      <div class=" bg-white py-8 px-8 rounded-md w-2/3"  >        
                <p class=" font-bold text-xl">
                    Start your application
                </p>
                <hr class="my-2">
               <div class=" w-full my-16">
                     <Form @submit="submit">
            <div class="md:flex md:w-2/3 w-full gap-4 mt-12">
            <div class="relative  border-b border-brand-major focus-within:border-brand-major md:w-1/2  w-full mx-auto rounded-lg px-3">
                <Field rules="required" name="first_name" type="text" class="block w-full appearance-none focus:outline-none bg-transparent" placeholder=" "   />
                <label for="first_name" class="absolute top-0  origin-0 text-brand-major opacity-50">First Name</label>
                <ErrorMessage name="first_name" class="text-red-500 text-[0.6em] absolute mt-2"/>
            </div>
            <div class="relative border-b border-brand-major focus-within:border-brand-major md:w-1/2  w-full  rounded-lg px-3">
                <Field rules="required" name="last_name" type="text" class="block w-full appearance-none focus:outline-none bg-transparent md:mt-0 mt-14" placeholder=" "   />
                <label for="last_name" class="absolute top-0  origin-0 text-brand-major">Last Name</label>
                <ErrorMessage name="last_name" class="text-red-500 text-[0.6em] absolute mt-2 "/>

            </div>
            </div>

            <div class="relative mt-14 border-b border-brand-major focus-within:border-brand-major md:w-2/3 w-full  rounded-lg px-3">
                <Field rules="required|email" name="email" type="email" class="block w-full appearance-none focus:outline-none bg-transparent" placeholder=" "   />
                <label for="email" class="absolute top-0  origin-0 text-brand-major">Email</label>
                <ErrorMessage name="email" class="text-red-500 text-[0.6em] absolute mt-2"/>
            </div>
            <div class="relative mt-14 border-b border-brand-major focus-within:border-brand-major md:w-2/3 w-full  rounded-lg px-3">
                <Field rules="digits:11|required" name="phone" type="text" class="block w-full appearance-none focus:outline-none bg-transparent" placeholder=" "   />
                <label for="phone" class="absolute top-0  origin-0 text-brand-major">Phone Number</label>
                <ErrorMessage name="phone" class="text-red-500 text-[0.6em] absolute mt-2"/>
            </div>
            <div class="flex gap-5  mt-16 w-1/2" >
                <input type="submit" value="Submit" class="mx-auto  text-white bg-brand-major p-3 w-1/2 ">
                <div @click="$emit('close')" type="cancel"  class="mx-auto w-1/2 text-white p-3 bg-brand-gray rounded cursor-pointer text-center" > Cancel</div>  
            </div>
          </Form>
               </div>
            </div>
        </div>
    </div>
</template>

<script>
import { Form, Field, ErrorMessage } from 'vee-validate';
import { useRouter } from 'vue-router'
import { User } from '../../../store/models'

export default {
    props: {
        bizName: String,
  }, 
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
      close () {
          console.log("closed")
      },
       async submit (values){ 
     User.api().submit(values, this.router)
    }
  }
}
</script>