<template>
<div class="py-8"> 
    <div class=" mt-48 text-black">
        <h1 class="text-xl text-center">
           One more step 
        </h1>
        <h3 class="text-center mt-5">
           A Link with instructions has been sent to your mail . <br/>
            <b class="text-brand-blue"> {{ User.info().email }} <br/></b>
           Please follow the instruction to verify your email &amp; contine your application.
        </h3>
         <h3 class="text-center mt-5">
            If you didn't receive a mail, <a @click="resendEmail" class="text-brand-blue">tap here to resend  email</a> 
        </h3>
         <h3 class="text-center mt-5">
            or start another <router-link to="/apply" class="text-brand-blue">Application</router-link>
        </h3>
        
    </div>
</div>
</template>

<script>
import { useRoute, useRouter } from 'vue-router'
import { User } from '../../store/models'
export default {
    name : 'Verify',
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

    methods : {
        resendEmail(){
            console.log('email', User.info().email)
            User.api().resendEmail(User.info().email)
        }
    }
,
    async created(){
        // let code = this.route.query.code
        // let res = await User.api().verifyCode(code)
        // console.log(res)
        let res = true
        res ? this.stats = 2 : this.stats = 1
        
    },
    setup() {
        return {
            User
        }
    },
}
</script>