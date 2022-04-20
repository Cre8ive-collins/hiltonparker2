<template>
    <div class="px-8">
        <div class="pt-28 text-center">
            <h2 class="font-bold text-lg mb-5">
                {{ AdmissionOfficer.info().first_name }}
                {{ AdmissionOfficer.info().last_name }}
            </h2>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat officiis dignissimos deleniti voluptatibus neque consequuntur ex sed! Sunt temporibus neque, hic dolore, fugiat odit nobis doloremque, quasi amet consectetur similique.
        </div>
        <h2 class="text-center mt-10">Complete your setup by setting a password</h2>
            <Form @submit="addPass">
                <div class="md:flex w-full mx-auto gap-4  mt-16">
                    <div class="relative  border-b border-brand-major focus-within:border-brand-major md:w-1/2 w-full mx-auto rounded-lg px-3">
                        <Field rules="required" name="password" type="password" class="block w-full appearance-none focus:outline-none bg-transparent" placeholder=" "   />
                        <label for="Password" class="absolute top-0 -z-1 origin-0 text-brand-major opacity-50">Password</label>
                        <ErrorMessage name="password" class="text-red-500 text-[0.6em] absolute mt-2"/>
                    </div>
                </div>
                <div class="md:w-1/2 mt-16 w-full mx-auto bg-brand-major z-50 border text-white  hover:text-white rounded rounded-input hover:bg-brand-major hover:border  cursor-pointer ransition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110 duration-300 ">
                    <input type="submit" value="Submit" class="mx-auto w-full text-white p-3 ">
                </div>
            </Form>
    </div>
</template>

<script>
import { useRoute, useRouter } from 'vue-router'
import { AdmissionOfficer } from '../store/models'
import { Form, Field, ErrorMessage } from 'vee-validate';
import { watch } from 'vue'


export default {
    data(){
        let router = useRouter()
        let route = useRoute()
        let stats = 0
        return {
            router,
            route ,
            stats,
        }
    },

      components: {
        Form, 
        Field, 
        ErrorMessage
    },

  

    async created(){
        let code = this.route.query.code
        console.log(code)
        AdmissionOfficer.api().setup(code)
        
    },

    methods: {
        addPass(values){
            values.id = AdmissionOfficer.info().id
            AdmissionOfficer.api().setPassword(values)
        }
    }, 

    setup(){
        let router = useRouter()
        watch(
            () => AdmissionOfficer.exists(),
            () => {
                console.log("watch they see")
                if(AdmissionOfficer.info().role){
                    router.push('/officer/dashboard')
                }
            },

            { immediate : true }
        )
        return {
            AdmissionOfficer
        }
    }
    
}
</script>