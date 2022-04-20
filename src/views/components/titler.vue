<template>
     <div class="mt-10 flex" >
         <img 
         @click="router.back()"
         src="../../assets/images/icons/backa.svg" 
         class="bg-brand-major p-3 rounded-full  cursor-pointer mr-5">
                <div class="">
                <h2 class=" text-lg mb-2">Welcome >>
                     </h2>
                <h1 class=" text-3xl">{{ name }}</h1>
                </div>
    </div>
</template>

<script>
import { useRouter } from 'vue-router'
import { Admin } from '../../store/models'

export default {
    name: 'titler',
    props : ['name'],

    data(props){
        let router = useRouter()
        let p = props
        return {p, router}
    },



    methods: {
        
    },

    setup(props) {

        return {
            Admin
        }
    }
    
    }
</script>