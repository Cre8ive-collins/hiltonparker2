<template>
    <div class=" mt-48">
        <h1 class="text-xl text-center">
           Ooops!!
        </h1>
        <h3 class="text-center mt-5">
            The page you're looking for is not here
        </h3>
         <h3 class="text-center mt-5">
            Go back <router-link to="/" class="text-brand-blue">Home</router-link>
        </h3>
        
    </div>
</template>

<script>
export default {
    name : 'NotFound',
    setup() {
        
    },
}
</script>