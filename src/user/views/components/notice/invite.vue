<template>
  <div
    class="fixed bg-black bg-opacity-50 h-screen w-screen top-0 left-0 z-2000"
  >
  
    <div class="flex flex-wrap content-center h-screen justify-center">
      <div class="inline-block bg-white py-8 px-8 rounded-md w-144"  >        
                <p class="text-base ">
                    You are now listed as a team member on {{ bizName }}
                </p>
                <p class="text-base mt-5">
                    Being a team member on a business account allows you to view and confirm payments made to that business. 
                </p>
                <p class="text-base mt-5">
                    You can exit a team at anytime from team member under the business page.
                </p>
                <p class="text-brand-blue text-center mt-16 cursor-pointer" @click="$emit('closeIvPop')">Ok</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        bizName: String,
  }
}
</script>