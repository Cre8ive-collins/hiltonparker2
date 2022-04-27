<template>
  <NavBar/>
<div>
  <!-- HERO  -->
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
                                Get Started
                            </p>
                        </div>
          <a href="#more" class="w-1/2">
        <div class=" border text-white  border-brand-major bg-brand-major hover:text-brand-major rounded rounded-input hover:bg-white hover:border  cursor-pointer ransition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110 duration-300 ">
          <p class="text-center m-2   ">Learn More</p>
        </div>
        </a>

      </div>
      </transition>
      </div>
      <div class="md:w-1/2 sm:hidden xxm:hidden  xm:hidden md:inline-block z-20 text-black"></div>

  </div>

  <div class="w-full absolute h-10 -mt-20" >
     <a href="#more"><img src="../assets/images/icons/scroll.svg" alt="" class="animate-bounce mx-auto w-10 cursor-pointer"></a> 
  </div>

  <!-- END HERO  -->

  <!-- SECTION TWO (2) -->
  <div class=" h-20" id="more"></div>
    <div class="justify-center px-8 flex my-10" id="">
     <div class="md:w-2/3 w-full p-2 md:flex">
      <div class="md:w-1/3 w-full py-5">
        <img src="../assets/images/icons/subherosuccess.svg" alt="" class="  mx-auto  cursor-pointer">
      </div>
      <div class="md:w-2/3 w-full"> 
          <h2 class="md:text-3xl text-2xl text-center md:text-left font-extrabold my-5  w-full">Your success is our priority</h2>
          <p class="text-center md:text-left ">All of our partner schools provide top notch education, and you get work permit on getting admission to enable you earn while you learn</p>
           <div class="flex cursor-pointer mt-5 transition ease-in-out delay-150  hover:translate-x-5 hover:scale-10  duration-200">
            <span class="mt-2 mr-2 text-xs hidden md:flex ">Success Stories </span>  
            <img src="../assets/images/icons/go.svg" alt="" class="bg-blue-500 p-3 rounded-full bg-opacity-30  w-10 md:m-0 mx-auto cursor-pointer "> 
          </div> 
      </div>
     </div>
  </div>


  <div class=" h-20" id="benefits"></div>

  <div class="md:flex justify-center my-10   p-8">
    <div class="md:w-1/4 w-full py-5">
        <h2 class="text-2xl font-extrabold text-center md:text-left  my-5">4 Benefits of Hilton Parker Services</h2>
        <p class="text-center md:text-left ">Hilton Parker Services provides plenty benefits but here's just a few of the benefits we offer</p>
        <div @click="apply" class="mx-auto md:mx-0 w-1/2 border text-white bg-brand-major mt-5 hover:text-brand-major rounded rounded-input hover:bg-white hover:border-brand-major  cursor-pointer transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110 duration-300 ">
          <p class="text-center m-2"> Get Started </p>
        </div>
    </div>
    <div class="md:w-3/4 w-full border  ">
      <div class="md:flex gap-4 border  my-5 ">
        <div class="md:w-1/2 w-full border  rounded-lg bg-gray-300 h p-5">
          <img src="../assets/images/icons/exam.svg" alt="" class="bg-blue-500 p-3 rounded-full bg-opacity-30  md:m-0 mx-auto cursor-pointer">
          <h2 class="md:text-xl text-center md:text-left font-bold my-5">No Test</h2>
          <p class="text-center md:text-left mb-10 ">No English Test or Entrance Exams Needed</p>
            <router-link to="/apply">
          <div class="flex cursor-pointer transition ease-in-out delay-150  hover:translate-x-5 hover:scale-10  duration-200">
            <img src="../assets/images/icons/go.svg" alt="" class="bg-blue-500 p-3 rounded-full bg-opacity-30  w-10 md:m-0 mx-auto cursor-pointer "> 
            <span class="mt-2 ml-2 text-xs hidden md:flex ">Start you application without any tests </span>  
          </div>        
            </router-link>
          </div>
       
        <div class="md:w-1/2 w-full border rounded-lg bg-gray-300 p-5 md:mt-0 mt-5">
          <img src="../assets/images/icons/successrate.svg" alt="" class="bg-green-500 p-3 rounded-full bg-opacity-30 md:m-0 mx-auto cursor-pointer">
          <h2 class="md:text-xl text-center md:text-left font-bold my-5 ">Work Permit</h2>
          <p class="text-center md:text-left mb-10 ">Guaranteed Work Permit After Visa is Approved</p>
          <router-link to="/apply">
            <div class="flex cursor-pointer transition ease-in-out delay-150  hover:translate-x-5 hover:scale-10  duration-200">
              <img src="../assets/images/icons/go.svg" alt="" class="bg-green-500 p-3 rounded-full bg-opacity-30  w-10 md:m-0 mx-auto cursor-pointer "> 
            <span class="mt-2 ml-2 text-xs hidden md:flex ">Start you application without any tests </span>  
            </div>        
          </router-link>        
          </div>
      </div>
      <div class="md:flex gap-4 border  my-5 ">
        <div class="md:w-1/2 w-full rounded-lg bg-gray-300 p-5">
          <img src="../assets/images/icons/accomodation.svg" alt="" class="bg-red-500 p-3 rounded-full bg-opacity-30 md:m-0 mx-auto cursor-pointer">
          <h2 class="md:text-xl text-center md:text-left font-bold my-5">Accomodation Support</h2>
          <p class="text-center md:text-left mb-10 ">We have on ground associate ready to recieve our studentss upon arrival</p>
        <router-link to="/apply">
          <div class="flex cursor-pointer transition ease-in-out delay-150  hover:translate-x-5 hover:scale-10  duration-200">
            <img src="../assets/images/icons/go.svg" alt="" class="bg-red-500 p-3 rounded-full bg-opacity-30  w-10 md:m-0 mx-auto cursor-pointer "> 
            <span class="mt-2 ml-2 text-xs hidden md:flex ">Get accomodation support</span>  
          </div>        
            </router-link>        
            </div>
        <div class="md:w-1/2 w-full border rounded-lg bg-gray-300 p-5 md:mt-0 mt-5">
          <img src="../assets/images/icons/successrate.svg" alt="" class="bg-yellow-500 p-3 rounded-full bg-opacity-30 md:m-0 mx-auto cursor-pointer">
          <h2 class="md:text-xl text-center md:text-left font-bold my-5">99.9% Approval</h2>
          <p class="text-center md:text-left mb-10 ">Hilton Parker does not charge administrative fees untill the student's visa application is successful.</p>
          <router-link to="/apply">
            <div class="flex cursor-pointer transition ease-in-out delay-150  hover:translate-x-5 hover:scale-10  duration-200">
              <img src="../assets/images/icons/go.svg" alt="" class="bg-blue-500 p-3 rounded-full bg-opacity-30  w-10 md:m-0 mx-auto cursor-pointer "> 
              <span class="mt-2 ml-2 text-xs hidden md:flex  ">Visa approved </span>  
            </div>        
          </router-link>        
          </div>
      </div>
    </div>

  </div>

  <!-- END SECTION TWO (2) -->

  <!-- TESTIMONIAL SECTION  -->
  <div class=" h-20" id="testimonials"></div>

  <div class="md:flex w-screen justify-center align-middle">
    <div class="bg-brand-major md:w-2/3 px-8 h-80 py-10 w-full text-white"> 
         <h2 class="md:text-3xl text-2xl text-center md:text-left font-extrabold my-5">Meet Tobi Amusan</h2>
        <p class="text-center md:text-left ">
          When my dad told me about the Canadian visa processing, I thought he
          was joking. As time went by, the admission came out and then my visa was
          granted.
          </p>
           <div class="flex cursor-pointer mt-5 transition ease-in-out delay-150  hover:translate-x-5 hover:scale-10  duration-200">
            <span class="mt-2 mr-2 text-xs hidden md:flex ">Create your own success Stories </span>  
            <img src="../assets/images/icons/go.svg" alt="" class="bg-blue-500 p-3 rounded-full bg-opacity-30  w-10 md:m-0 mx-auto cursor-pointer "> 
          </div> 
        
     </div>
    <div class=" md:w-1/3 w-full h-80 testimonialimage relative"> 
      <div class="bg-brand-major z-10 absolute top-0 h-full w-full bg-opacity-50"></div>
      <img src="../assets/images/canada.jpg" alt="ghghghgh" class="w-full h-full">
      <img src="../assets/images/icons/play.svg" alt="" class="absolute bottom-[50%] right-[50%] bg-brand-major p-3 rounded-full   w-10 md:m-0 mx-auto cursor-pointer animate-ping"> 
    </div>
  </div>

  <div class="md:flex w-full px-8 my-14 ">
    <div class="w-1/2 hidden md:block"></div>
    <div class="md:w-1/2 w-full">
      <h2 class="md:text-3xl text-2xl text-center md:text-left font-bold my-5  w-full">1,000+ Happy Clients </h2>
          <p class="text-center md:text-left ">
            Since launching in 2020, over 1,000 people have used Hilton Parker Services to secure admission outside Nigeria. Avoid unneccessary delays </p>
           <div class="flex cursor-pointer mt-5 transition ease-in-out delay-150  hover:translate-x-5 hover:scale-10  duration-200">
            <span class="mt-2 mr-2 text-xs hidden md:flex ">Create your own success Stories </span>  
            <img src="../assets/images/icons/go.svg" alt="" class="bg-blue-500 p-3 rounded-full bg-opacity-30  w-10 md:m-0 mx-auto cursor-pointer "> 
          </div> 
    </div>
  </div>
  <!-- END TESTIMONIAL SECTION  -->

    <!-- SECTION FOUR (4) -->
  <div class="md:flex justify-center my-10   p-8">
    <div class="md:w-1/4 w-full py-5">
        <h2 class="md:text-3xl text-2xl text-center md:text-left font-bold my-5">Apply in 3 easy steps</h2>
        <p class="text-center md:text-left ">Here's how it works!</p>
        <div @click="apply" class="mx-auto md:mx-0 w-1/2 border text-white bg-brand-major mt-5 hover:text-brand-major rounded rounded-input hover:bg-white hover:border-brand-major  cursor-pointer transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110 duration-300 ">
          <p class="text-center m-2"> Get Started </p>
        </div>
    </div>
    <div class="md:w-3/4 w-full border  ">
      <div class="md:flex gap-4 border  my-5 ">
        <div class="md:w-1/2 w-full border  rounded-lg bg-gray-300 h p-5">
          <img src="../assets/images/icons/exam.svg" alt="" class="bg-blue-500 p-3 rounded-full bg-opacity-30  md:m-0 mx-auto cursor-pointer">
          <h2 class="md:text-xl text-center md:text-left font-bold my-5">Apply Online in less than 5 Minutes</h2>
          <p class="text-center md:text-left mb-10 ">Our application is fast and simple. Not sure what career is best for you? Use our live chat feature to chat with a career counselor.</p>
            <router-link to="/apply">
          <div class="flex cursor-pointer transition ease-in-out delay-150  hover:translate-x-5 hover:scale-10  duration-200">
            <img src="../assets/images/icons/go.svg" alt="" class="bg-blue-500 p-3 rounded-full bg-opacity-30  w-10 md:m-0 mx-auto cursor-pointer "> 
            <span class="mt-2 ml-2 text-xs hidden md:flex ">Start you application without any tests </span>  
          </div>        
            </router-link>
          </div>
       
        <div class="md:w-1/2 w-full border rounded-lg bg-gray-300 p-5 md:mt-0 mt-5">
          <img src="../assets/images/icons/successrate.svg" alt="" class="bg-green-500 p-3 rounded-full bg-opacity-30 md:m-0 mx-auto cursor-pointer">
          <h2 class="md:text-xl text-center md:text-left font-bold my-5 "> Get accepted and get your terms!</h2>
          <p class="text-center md:text-left mb-10 ">Our typical acceptance time is 1-2 business days, but you could be accepted within an hour! Once you get accepted, our immigration officer would be in touch with you then you’re ready to start your process.</p>
          <router-link to="/apply">
            <div class="flex cursor-pointer transition ease-in-out delay-150  hover:translate-x-5 hover:scale-10  duration-200">
              <img src="../assets/images/icons/go.svg" alt="" class="bg-green-500 p-3 rounded-full bg-opacity-30  w-10 md:m-0 mx-auto cursor-pointer "> 
            <span class="mt-2 ml-2 text-xs hidden md:flex ">Start you application without any tests </span>  
            </div>        
          </router-link>        
          </div>
      </div>
      <div class="md:flex gap-4 border  my-5 ">
        <div class="md:w-1/2 w-full  p-5">
          <!-- <img src="../assets/images/icons/accomodation.svg" alt="" class="bg-red-500 p-3 rounded-full bg-opacity-30 md:m-0 mx-auto cursor-pointer">
          <h2 class="md:text-xl text-center md:text-left font-bold my-5">Accomodation Support</h2>
          <p class="text-center md:text-left mb-10 ">We have on ground associate ready to recieve our studentss upon arrival</p>
        <router-link to="/apply">
          <div class="flex cursor-pointer transition ease-in-out delay-150  hover:translate-x-5 hover:scale-10  duration-200">
            <img src="../assets/images/icons/go.svg" alt="" class="bg-red-500 p-3 rounded-full bg-opacity-30  w-10 md:m-0 mx-auto cursor-pointer "> 
            <span class="mt-2 ml-2 text-xs hidden md:flex ">Get accomodation support</span>  
          </div>        
            </router-link>         -->
            </div>
        <div class="md:w-1/2 w-full border rounded-lg  bg-gray-300 p-5 md:mt-0 mt-5">
          <img src="../assets/images/icons/successrate.svg" alt="" class="bg-yellow-500 p-3 rounded-full bg-opacity-30 md:m-0 mx-auto cursor-pointer">
          <h2 class="md:text-xl text-center md:text-left font-bold my-5">Get a great education</h2>
          <p class="text-center md:text-left mb-10 ">All of our partner schools provide top notch education, and you get work permit on getting admission to enable you earn while you learn..</p>
          <router-link to="/apply">
            <div class="flex cursor-pointer transition ease-in-out delay-150  hover:translate-x-5 hover:scale-10  duration-200">
              <img src="../assets/images/icons/go.svg" alt="" class="bg-blue-500 p-3 rounded-full bg-opacity-30  w-10 md:m-0 mx-auto cursor-pointer "> 
              <span class="mt-2 ml-2 text-xs hidden md:flex  ">Visa approved </span>  
            </div>        
          </router-link>        
          </div>
      </div>
    </div>

  </div>

  <!-- END SECTION FOUR (4) -->

  <!-- FAQ -->
  <!-- <div class="hidden md:flex h-10 bg-brand-major"></div> -->
  <!-- <div class="md:flex w-full px-8 bg-brand-major">
      <div class="justify-center  flex my-10 w-full" id="">
     <div class="md:w-2/3 w-full p-2 md:flex ">
      <div class=" w-full"> 
          <h2 class="md:text-xl text-center font-bold my-5  w-full text-white">Have questions</h2>
          <p class="text-center text-4xl text-white  ">
              +234 700 4449 444
            </p>
          <h2 class="text-gray-300 text-center font-bold my-5  w-full">Reach out to us</h2>
      </div>
     </div>
  </div>
  </div> -->
  <!-- END FAQ  -->

  <!-- FOOTER  -->
<div class="w-full bg-brand-major px-8 md:flex text-white gap-4 justify-center align-middle py-5">
  <div class="md:w-1/4 w-full mx-auto">
    <h1>LOGO</h1>
  </div>
  <div class="md:w-1/4 w-full mx-auto p">
    <h4 class="font-bold ">Contact Adress </h4>
    <!-- <hr class="my-5"> -->
    <p class="mt-10"> 1 Rahman Adeboyejo St, Lekki Phase I, Lagos</p>
    <p class="my-5">+234 700 4449 444</p>
  </div>
  <div class="md:w-1/4 w-full mx-auto">
     <h4 class="font-bold">More </h4>
    <!-- <hr class="my-5"> -->
    <p class="mt-10">Agents</p>
    <router-link to="staff">
      <p class="mt-5">Staff Login</p>
    </router-link>
    <p class="mt-5">Brochure</p>
  </div>
  <div class="md:w-1/4 w-full mx-auto">
     <h4 class="font-bold">Connect with us </h4>
    <!-- <hr class="my-5"> -->
    <p class="mt-10"> Facebook</p>
    <p class="my-5">Instagram</p>
    <p class="my-5">Twitter</p>
  </div>
</div>
<p class="w-full py-10 bg-brand-major text-white text-center text-sm">&copy; 2022 Hilton Parker Services; made with &hearts; by <a href="https://collinswilson.tech" target="blank">Cre8ive_collins</a> </p>
  <!-- END FOOTER  -->
</div>
</template>

<script>
// @ is an alias to /src
import NavBar from "./components/Navbar.vue"
import gsap from 'gsap'
import { useRouter } from 'vue-router'



export default {
  name: 'Hero',
  components: {
    NavBar
  },

   data() {
      return {
          router : useRouter(),
      }
  },


  methods: {
      apply(){
          this.showSidebar = false
          this.router.push('/apply')
      }
      
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
      setTimeout(btnEnter, 1000)

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

};

.testimonialimage{
  border: 3px solid red !important;
   background-image: url('../assets/images/canada.jpg');
  background-size: cover;
  background-position: center; 
  background-repeat: no-repeat;
}


</style>
