<template>
     <div class="mt-10 flex" >
         <img 
         @click="router.back()"
         v-if="routeN != 'dashboard'"
         src="../assets/images/icons/backa.svg" 
         class="bg-brand-major p-3 rounded-full  cursor-pointer mr-5">
                <div class="">
                <h2 class=" text-lg mb-2">Welcome >>
                    <u class="text-brand-major"> {{ routeN.toUpperCase() }}</u> 
                     </h2>
                <h1 class=" text-3xl">Collins Wilson  {{  }}</h1>
                </div>
    </div>
</template>

<script>
import { useRouter } from 'vue-router'

export default {
    name: 'titler',
    props : ['routeName'],

    data(props){
        let router = useRouter()
        let p = props
        let routeN = p.routeName?.split('_')[1]
        return {p, routeN, router}
    },

    methods: {
        
    },

    setup(props) {
        // console.log(props)
        
    }
    
    }
</script>