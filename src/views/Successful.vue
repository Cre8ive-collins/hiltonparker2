<template>
    <div class="flex">
        <div class="h-screen bg-orange-300 md:w-[25em] w-1/2 md:p-10 pt-10 pl-5">
            <h3 class="md:text-center text-left md:text-2xl text-lg">You've Successfully Submitted Your Application</h3>
        </div>
        <div class=" fixed border bg-orange-100 top-40 left-16 md:top-40 md:left-72 md:w-[30em] w-[18em]">
            <div class="flex">
                <div class="w-1/4"></div>
                <div class="w-3/4">
                    <p class="md:mt-16 mt-5 md:mr-10 mr-5 text-base md:text-xl">Congratulations, your application has been successfully submitted! No further action is needed for you to complete
                        your submission during the application period. </p>

                    <p class="mt-5 mr-10text-base md:text-xl">
                        Our Admission officers will attend to this application swiftly. Keep an eye on your Email as we will update you on further steps 
                    </p>

                    <p class="md:mb-16 mb-5 mt-5 mr-10 text-base md:text-xl">If you need further assistance, please reach out to through chat or email via
                        <a href="mailto:support@hiltonparkerng.com" class="text-brand-blue md:text-base text-xs">Support@hiltonparkerng.com</a>
                    </p>
                </div>
            </div>
        </div>
        <div class="fixed bottom-5 p-3 w-full text-brand-blue">
           <p class="text-center w-full"> 
               <router-link to="/">Back Home </router-link> </p>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>