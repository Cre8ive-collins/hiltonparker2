<template>
<div>
      <div class="h-screen absolute top-0 right-0 w-screen  bg-brand-omajor"></div>
    <div class="justify-center flex  items-center h-screen px-8  hero">
      <div class="md:w-1/2 w-full z-20 text-white">
       <transition
      appear
      @before-enter="beforeEnter"
      @enter="enter"
      >  
      <div>
         <h1 class="md:text-6xl sm:text-5xl xxm:text-4xl xm:text-5xl font-bold tracking-wider hero-heading">
            International Studies,
            pay nothing until admission is granted!
          </h1>   
      <h2 class="mt-10">
       Hilton Parker focuses on getting you International Education, so you can focus on learning. The best part ? You don't pay service fee until Visa is approved.
      </h2>
      </div>
      </transition>
       <transition
      appear
      @before-enter="beforeEnter"
      >   
      <div class="flex gap-10 mt-10 btn-holder">
        <div 
                        @click="apply"
                        class="w-1/2 border text-white  border-white hover:text-brand-major rounded rounded-input hover:bg-white hover:border  cursor-pointer ransition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110 duration-300 ">
                            <p class="text-center m-2   ">
                                Apply Now
                            </p>
                        </div>
        <div 
                        @click="apply"
                        class="w-1/2 border text-white  border-brand-major bg-brand-major hover:text-brand-major rounded rounded-input hover:bg-white hover:border  cursor-pointer ransition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110 duration-300 ">
                            <p class="text-center m-2   ">
                                Learn More
                            </p>
                        </div>
      </div>
      </transition>
      </div>
      <div class="md:w-1/2 sm:hidden xxm:hidden  xm:hidden md:inline-block z-20 text-black">2</div>

  </div>

  <div class="w-full absolute h-10 -mt-20" >
      <img src="../assets/images/icons/scroll.svg" alt="" class="animate-bounce mx-auto w-10">
  </div>
</div>
</template>

<script>
// @ is an alias to /src
import gsap from 'gsap'


export default {
  name: 'Hero',
  components: {
  },
  setup () {
    console.log('setup')
    const beforeEnter = (el) => {
      console.log(el, 'before enter')
      el.style.transform = 'translateY(-60px)'
      el.style.opacity = 0
    }
    const enter = (el) => {
      console.log(el, 'before enter')
      gsap.to (el, { duration : 1, y : 0, opacity : 1})
      // btnEnter()
      setTimeout(btnEnter, 1800)

    }

    const btnEnter = () => {
      gsap.to ('.btn-holder', { duration : 3, y : 0, opacity : 1})
    }
    return {
      beforeEnter,
      enter,
      btnEnter
    }
  }
}
</script>

<style scoped>
.hero{
  background-image: url('../assets/images/canada.jpg');
  background-size: cover;
  background-position: center; 
  background-repeat: no-repeat;

}

.hero-heading{
  /* font-family:  !important; */
}
</style>
