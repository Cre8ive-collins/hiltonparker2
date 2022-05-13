<template>
    <div class="w-screen">
      <notice-apply v-if="startApplication" @close="startApplication = !startApplication"/>
        <div class="w-full flex py-5 px-12 fixed top-o left-0 bg-black z-10">
            <!-- <h3>LOGO</h3> -->
            <img src="../../assets/logo.png" alt="" class=" w-32">
        </div>

        <hr class=" border-brand-major">

        <div class="flex gap-4 h-1/2 mt-28 px-14">
            <div class="w-1/2 gap-12 flex pt-20 relative">
              <div class=" h-44 absolute boxPosition z-10 rounded-lg grid gap-4 content-center p-5 ...">
                       <div class="flex w-full text-black p-2">
                           <h1 class=" my-auto text-4xl">&#10064;</h1>
                           <h1 class=" mx-3 text-4xl my-auto ">1K+</h1>
                           <h1 class="text-lg ml-3">Satisfied <br> Customers</h1>
                       </div>
                       <div class="flex w-full text-black px-2">
                           <h1 class=" my-auto text-4xl">&#10063;</h1>
                           <h1 class=" mx-3 text-4xl my-auto ">100%</h1>
                           <h1 class="text-lg ml-3 ">Approval <br> Rate</h1>
                       </div>
                    </div>
                <div class="w-2/3 bg-white h-96 relative mx-auto shadow-xl shadow-orange-500/40 ">
                    <img src="../../assets/images/1.svg" alt="" class="absolute bottom-0 wider ">
                    <!-- <div class="absolute bg-red-500 h-96 w-full -z-1 downer"></div> -->
                </div>
            </div>
             <div class="w-1/2  relative">
                <img src="../../assets/img/bgglyph.svg" alt="" class="w-20 absolute -z-1 bgglyphPosition spin-slow animate-spin-slow">
                <img src="../../assets/img/bgglyph.svg" alt="" class="w-20 absolute -z-1  spin-slow animate-spin-slow">
                    <!-- <div class="w-44 h-44 absolute boxPosition shadow-lg shadow-orange-500/40 rounded-lg grid gap-4 content-center ...">
                        <div class="text-black">
                            <h1 class="font-bold Ww-full text-center">100%</h1>
                            <h1 class="font-bold text-center">APPROVAL RATE</h1>
                        </div>
                    </div> -->
                <div class="px-5  h-full pt-32  text-black  grid gap-4 content-center ">
                    <div>
                         <h1 class="text-3xl">International Studies &nbsp; <span class="text-4xl">&#127891;</span> </h1>
                    <h1 class="text-6xl my-3 relative"> 
                        pay  <span class="uppercase font-bold">Nothing</span>   </h1>
                    <h1 class="text-3xl mt-4 relative">until   <span class="uppercase  font-bold">Admission</span>   is granted!  </h1>
                    <p class="mt-5">Hilton Parker focuses on getting you International Education, so you can focus on learning. The best part ? You don't pay service fee until Visa is approved.</p>
                </div>
                 <div class="flex w-full gap-10 mt-10 ">
                 <div class="relative w-1/2">
                    <div @click="apply" class="p-1  text-white bg-black   hover:text-brand-major rounded rounded-input hover:bg-white hover:border  cursor-pointer ransition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110 duration-300 ">
                            <p class="text-center m-2   ">Get Started</p>
                    </div>
                    <div class="w-full p-6 absolute bg-green-500 downer2 -z-1"></div>
                 </div>
                 <div class="relative w-1/2">
                    <div @click="apply" class="  text-white bg-black  p-1 hover:text-brand-major rounded rounded-input hover:bg-white hover:border  cursor-pointer ransition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110 duration-300 ">
                            <p class="text-center m-2   ">Learn More</p>
                    </div>
                    <div class="w-full p-6 absolute bg-red-500 downer2 -z-1"></div>
                 </div>
                    </div>
                 </div>
            </div>
        </div>

        <!-- TESTIMONIAL SECTION  -->
  <div class=" h-20" id="testimonials"></div>

  <div class="md:flex w-screen justify-center align-middle">
    <div class="bg-black md:w-2/3 px-14 h-80 py-10 w-full text-white"> 
        <h2 class="md:text-3xl text-2xl text-center md:text-left font-bold my-5">Meet Tobi Amusan</h2>
        <p class="text-center md:text-left ">
          When my dad told me about the Canadian visa processing, I thought he
          was joking. As time went by, the admission came out and then my visa was
          granted.
          </p>
           <div class="flex cursor-pointer mt-5 transition ease-in-out delay-150  hover:translate-x-5 hover:scale-10  duration-200">
            <span class="mt-2 mr-2 text-xs hidden md:flex ">Create your own success Stories </span>  
            <img src="../../assets/images/icons/go.svg" alt="" class="bg-blue-500 p-3 rounded-full bg-opacity-30  w-10 md:m-0 mx-auto cursor-pointer "> 
          </div> 
        
     </div>
    <div class=" md:w-1/3 w-full h-80 testimonialimage relative"> 
      <div class="bg-black z-10 absolute top-0 h-full w-full bg-opacity-50"></div>
      <img src="../../assets/images/canada.jpg" alt="ghghghgh" class="w-full h-full">
      <img src="../../assets/images/icons/play.svg" alt="" class="absolute chaer bg-black p-3 rounded-full   w-10 md:m-0 mx-auto cursor-pointer animate-ping"> 
    </div>
  </div>

  <!-- <div class="md:flex w-full px-8 my-14 ">
    <div class="w-1/2 hidden md:block"></div>
    <div class="md:w-1/2 w-full">
      <h2 class="md:text-3xl text-2xl text-center md:text-left font-bold my-5  w-full">1,000+ Happy Clients </h2>
          <p class="text-center md:text-left ">
            Since launching in 2020, over 1,000 people have used Hilton Parker Services to secure admission outside Nigeria. Avoid unneccessary delays </p>
           <div class="flex cursor-pointer mt-5 transition ease-in-out delay-150  hover:translate-x-5 hover:scale-10  duration-200">
            <span class="mt-2 mr-2 text-xs hidden md:flex ">Create your own success Stories </span>  
            <img src="../../assets/images/icons/go.svg" alt="" class="bg-blue-500 p-3 rounded-full bg-opacity-30  w-10 md:m-0 mx-auto cursor-pointer "> 
          </div> 
    </div>
  </div> -->
  <!-- END TESTIMONIAL SECTION  -->

  <div class="w-full pt-14 px-14">
      <h3 class="text-xl w-full text-black text-center">Here's how it works</h3>
      <h1 class="text-3xl mt-3 w-full text-black text-center font-bold">Apply in 3 easy steps</h1>
      <div class="mt-10 flex w-full gap-5 text-black">
          <div class="md:w-1/3 w-full border  rounded-lg bg-gray-300 h p-5 relative">
            <div class="absolute bg-blue-500 bg-opacity-30  downel w-full p-5 -z-1">
           <img src="../../assets/images/icons/successrate.svg" alt="" class="bg-green-500 p-3 rounded-full bg-opacity-30 md:m-0 mx-auto cursor-pointer">
          <h2 class="md:text-xl text-center md:text-left font-bold my-5 "> Get accepted and get your terms!</h2>
          <p class="text-center md:text-left mb-10 ">Our typical acceptance time is 1-2 business days, but you could be accepted within an hour! Once you get accepted, our immigration officer would be in touch with you then you’re ready to start your process.</p>
          <router-link to="/apply">
            <div class="flex cursor-pointer transition ease-in-out delay-150  hover:translate-x-5 hover:scale-10  duration-200">
              <img src="../../assets/images/icons/go.svg" alt="" class="bg-green-500 p-3 rounded-full bg-opacity-30  w-10 md:m-0 mx-auto cursor-pointer "> 
            <span class="mt-2 ml-2 text-xs hidden md:flex ">Start you application without any tests </span>  
            </div>        
          </router-link> 
            </div>
            <img src="../../assets/images/icons/exam.svg" alt="" class="bg-blue-500 p-3 rounded-full bg-opacity-30  md:m-0 mx-auto cursor-pointer">
            <h2 class="md:text-xl text-center md:text-left font-bold my-5">Apply Online in less than 5 Minutes</h2>
            <p class="text-center md:text-left mb-10 ">Our application is fast and simple. Not sure what career is best for you? Use our live chat feature to chat with a career counselor.</p>
            <router-link to="/apply">
                <div class="flex cursor-pointer transition ease-in-out delay-150  hover:translate-x-5 hover:scale-10  duration-200">
                    <img src="../../assets/images/icons/go.svg" alt="" class="bg-blue-500 p-3 rounded-full bg-opacity-30  w-10 md:m-0 mx-auto cursor-pointer "> 
                    <span class="mt-2 ml-2 text-xs hidden md:flex ">Start you application without any tests </span>  
                </div>        
            </router-link>
         </div>
          <div class="md:w-1/3 w-full border  rounded-lg bg-gray-300 h p-5 relative">
            <div class="absolute bg-green-500 bg-opacity-30  downel w-full p-5 -z-1">
           <img src="../../assets/images/icons/successrate.svg" alt="" class="bg-green-500 p-3 rounded-full bg-opacity-30 md:m-0 mx-auto cursor-pointer">
          <h2 class="md:text-xl text-center md:text-left font-bold my-5 "> Get accepted and get your terms!</h2>
          <p class="text-center md:text-left mb-10 ">Our typical acceptance time is 1-2 business days, but you could be accepted within an hour! Once you get accepted, our immigration officer would be in touch with you then you’re ready to start your process.</p>
          <router-link to="/apply">
            <div class="flex cursor-pointer transition ease-in-out delay-150  hover:translate-x-5 hover:scale-10  duration-200">
              <img src="../../assets/images/icons/go.svg" alt="" class="bg-green-500 p-3 rounded-full bg-opacity-30  w-10 md:m-0 mx-auto cursor-pointer "> 
            <span class="mt-2 ml-2 text-xs hidden md:flex ">Start you application without any tests </span>  
            </div>        
          </router-link> 
            </div>
            <img src="../../assets/images/icons/successrate.svg" alt="" class="bg-green-500 p-3 rounded-full bg-opacity-30 md:m-0 mx-auto cursor-pointer">
          <h2 class="md:text-xl text-center md:text-left font-bold my-5 "> Get accepted and get your terms!</h2>
          <p class="text-center md:text-left mb-10 ">Our typical acceptance time is 1-2 business days, but you could be accepted within an hour! Once you get accepted, our immigration officer would be in touch with you then you’re ready to start your process.</p>
          <router-link to="/apply">
            <div class="flex cursor-pointer transition ease-in-out delay-150  hover:translate-x-5 hover:scale-10  duration-200">
              <img src="../../assets/images/icons/go.svg" alt="" class="bg-green-500 p-3 rounded-full bg-opacity-30  w-10 md:m-0 mx-auto cursor-pointer "> 
            <span class="mt-2 ml-2 text-xs hidden md:flex ">Start you application without any tests </span>  
            </div>        
          </router-link> 
         </div>
          <div class="md:w-1/3  w-full border  rounded-lg craw bg-gray-300 h p-5 relative">
            <div class="absolute bg-yellow-500 bg-opacity-30  downel w-full p-5 -z-1">
            <img src="../../assets/images/icons/successrate.svg" alt="" class="bg-green-500 p-3 rounded-full bg-opacity-30 md:m-0 mx-auto cursor-pointer">
          <h2 class="md:text-xl text-center md:text-left font-bold my-5 "> Get accepted and get your terms!</h2>
          <p class="text-center md:text-left mb-10 ">Our typical acceptance time is 1-2 business days, but you could be accepted within an hour! Once you get accepted, our immigration officer would be in touch with you then you’re ready to start your process.</p>
          <router-link to="/apply">
            <div class="flex cursor-pointer transition ease-in-out delay-150  hover:translate-x-5 hover:scale-10  duration-200">
              <img src="../../assets/images/icons/go.svg" alt="" class="bg-green-500 p-3 rounded-full bg-opacity-30  w-10 md:m-0 mx-auto cursor-pointer "> 
            <span class="mt-2 ml-2 text-xs hidden md:flex ">Start you application without any tests </span>  
            </div>        
          </router-link> 
            </div>
           <img src="../../assets/images/icons/successrate.svg" alt="" class="bg-yellow-500 p-3 rounded-full bg-opacity-30 md:m-0 mx-auto cursor-pointer">
          <h2 class="md:text-xl text-center md:text-left font-bold my-5">Get a great education</h2>
          <p class="text-center md:text-left mb-10 ">All of our partner schools provide top notch education, and you get work permit on getting admission to enable you earn while you learn..</p>
          <router-link to="/apply">
            <div class="flex cursor-pointer transition ease-in-out delay-150  hover:translate-x-5 hover:scale-10  duration-200">
              <img src="../../assets/images/icons/go.svg" alt="" class="bg-yellow-500 p-3 rounded-full bg-opacity-30  w-10 md:m-0 mx-auto cursor-pointer "> 
              <span class="mt-2 ml-2 text-xs hidden md:flex  ">Visa approved </span>  
            </div>        
          </router-link>     
         </div>
      </div>
  </div>

        <div class="w-full text-black mt-10 pt-10 flex justify-center">
            <div class="w-1/2">
                <h1 class="text-3xl w-full font-bold text-center">Your success story is our priority</h1>
                <p class="mt-5 text-center">All of our partner schools provide top notch education, and you get work permit on getting admission to enable you earn while you learn.</p>
                <!-- <div class="flex mx-auto cursor-pointer mt-5 transition ease-in-out delay-150  hover:translate-x-5 hover:scale-10  duration-200">
                    <span class="mt-2 mr-2 text-xs hidden md:flex ">View Success Stories </span>  
                    <img src="../../assets/images/icons/go.svg" alt="" class="bg-blue-500 p-3 rounded-full bg-opacity-30  w-10 md:m-0 mx-auto cursor-pointer "> 
                </div>  -->
            </div>
        </div>

         <div class=" h-20" id="benefits"></div>

  <div class="md:flex gap-5 justify-center text-black   p-8">
    <div class="md:w-1/4 w-full py-5">
        <h2 class="text-2xl font-bold text-center md:text-left  my-5">Major Benefits of Hilton Parker Services</h2>
        <p class="text-center md:text-left ">Hilton Parker Services provides plenty benefits but here's just a few of the benefits we offer</p>
          <div class="relative w-1/2 mt-5">
                    <div @click="apply" class=" p-1 text-white bg-black   hover:text-brand-major rounded rounded-input hover:bg-white hover:border  cursor-pointer ransition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110 duration-300 ">
                            <p class="text-center m-2   ">Get Started</p>
                    </div>
                    <div class="w-full p-6 absolute bg-green-500 downer2 -z-1"></div>
        </div>
    </div>
    <div class="md:w-3/4 w-full   ">
      <div class="md:flex gap-4   my-5 ">
        <div class="md:w-1/2 w-full  relative  rounded-lg bg-gray-300 h p-5">
        <div class="absolute bg-blue-500 bg-opacity-30 rounded-lg downel w-full p-5 -z-1">
           <img src="../../assets/images/icons/successrate.svg" alt="" class="bg-green-500 p-3 rounded-full bg-opacity-30 md:m-0 mx-auto cursor-pointer">
          <h2 class="md:text-xl text-center md:text-left font-bold my-5 ">Work Permit</h2>
          <p class="text-center md:text-left mb-10 ">Guaranteed Work Permit After Visa is Approved</p>
          <router-link to="/apply">
            <div class="flex cursor-pointer transition ease-in-out delay-150  hover:translate-x-5 hover:scale-10  duration-200">
              <img src="../../assets/images/icons/go.svg" alt="" class="bg-green-500 p-3 rounded-full bg-opacity-30  w-10 md:m-0 mx-auto cursor-pointer "> 
            <span class="mt-2 ml-2 text-xs hidden md:flex ">Start you application without any tests </span>  
            </div>        
          </router-link> 
            </div>
          <img src="../../assets/images/icons/exam.svg" alt="" class="bg-blue-500 p-3 rounded-full bg-opacity-30  md:m-0 mx-auto cursor-pointer">
          <h2 class="md:text-xl text-center md:text-left font-bold my-5">No Test</h2>
          <p class="text-center md:text-left mb-10 ">No English Test or Entrance Exams Needed</p>
            <router-link to="/apply">
          <div class="flex cursor-pointer transition ease-in-out delay-150  hover:translate-x-5 hover:scale-10  duration-200">
            <img src="../../assets/images/icons/go.svg" alt="" class="bg-blue-500 p-3 rounded-full bg-opacity-30  w-10 md:m-0 mx-auto cursor-pointer "> 
            <span class="mt-2 ml-2 text-xs hidden md:flex ">Start you application without any tests </span>  
          </div>        
            </router-link>
          </div>
       
        <div class="md:w-1/2 relative w-full  rounded-lg bg-gray-300 p-5 md:mt-0 mt-5">
        <div class="absolute bg-green-500 bg-opacity-30 rounded-lg  downel w-full p-5 -z-1">
           <img src="../../assets/images/icons/successrate.svg" alt="" class="bg-green-500 p-3 rounded-full bg-opacity-30 md:m-0 mx-auto cursor-pointer">
          <h2 class="md:text-xl text-center md:text-left font-bold my-5 ">Work Permit</h2>
          <p class="text-center md:text-left mb-10 ">Guaranteed Work Permit After Visa is Approved</p>
          <router-link to="/apply">
            <div class="flex cursor-pointer transition ease-in-out delay-150  hover:translate-x-5 hover:scale-10  duration-200">
              <img src="../../assets/images/icons/go.svg" alt="" class="bg-green-500 p-3 rounded-full bg-opacity-30  w-10 md:m-0 mx-auto cursor-pointer "> 
            <span class="mt-2 ml-2 text-xs hidden md:flex ">Start you application without any tests </span>  
            </div>        
          </router-link> 
            </div>
          <img src="../../assets/images/icons/successrate.svg" alt="" class="bg-green-500 p-3 rounded-full bg-opacity-30 md:m-0 mx-auto cursor-pointer">
          <h2 class="md:text-xl text-center md:text-left font-bold my-5 ">Work Permit</h2>
          <p class="text-center md:text-left mb-10 ">Guaranteed Work Permit After Visa is Approved</p>
          <router-link to="/apply">
            <div class="flex cursor-pointer transition ease-in-out delay-150  hover:translate-x-5 hover:scale-10  duration-200">
              <img src="../../assets/images/icons/go.svg" alt="" class="bg-green-500 p-3 rounded-full bg-opacity-30  w-10 md:m-0 mx-auto cursor-pointer "> 
            <span class="mt-2 ml-2 text-xs hidden md:flex ">Start you application without any tests </span>  
            </div>        
          </router-link>        
          </div>
      </div>
      <div class="md:flex gap-4 border  my-5 ">
        <div class="md:w-1/2 w-full relative rounded-lg bg-gray-300 p-5">
         <div class="absolute bg-red-500 bg-opacity-30 rounded-lg downel w-full p-5 -z-1">
           <img src="../../assets/images/icons/successrate.svg" alt="" class="bg-yellow-500 p-3 rounded-full bg-opacity-30 md:m-0 mx-auto cursor-pointer">
          <h2 class="md:text-xl text-center md:text-left font-bold my-5">99.9% Approval</h2>
          <p class="text-center md:text-left mb-10 ">Hilton Parker does not charge administrative fees untill the student's visa application is successful.</p>
          <router-link to="/apply">
            <div class="flex cursor-pointer transition ease-in-out delay-150  hover:translate-x-5 hover:scale-10  duration-200">
              <img src="../../assets/images/icons/go.svg" alt="" class="bg-blue-500 p-3 rounded-full bg-opacity-30  w-10 md:m-0 mx-auto cursor-pointer "> 
              <span class="mt-2 ml-2 text-xs hidden md:flex  ">Visa approved </span>  
            </div>        
          </router-link>   
            </div>
          <img src="../../assets/images/icons/accomodation.svg" alt="" class="bg-red-500 p-3 rounded-full bg-opacity-30 md:m-0 mx-auto cursor-pointer">
          <h2 class="md:text-xl text-center md:text-left font-bold my-5">Accomodation Support</h2>
          <p class="text-center md:text-left mb-10 ">We have on ground associate ready to recieve our studentss upon arrival</p>
        <router-link to="/apply">
          <div class="flex cursor-pointer transition ease-in-out delay-150  hover:translate-x-5 hover:scale-10  duration-200">
            <img src="../../assets/images/icons/go.svg" alt="" class="bg-red-500 p-3 rounded-full bg-opacity-30  w-10 md:m-0 mx-auto cursor-pointer "> 
            <span class="mt-2 ml-2 text-xs hidden md:flex ">Get accomodation support</span>  
          </div>        
            </router-link>        
            </div>
        <div class="md:w-1/2 w-full relative border rounded-lg bg-gray-300 p-5 md:mt-0 mt-5">
        <div class="absolute bg-yellow-500 bg-opacity-30 rounded-lg downel w-full p-5 -z-1">
           <img src="../../assets/images/icons/successrate.svg" alt="" class="bg-yellow-500 p-3 rounded-full bg-opacity-30 md:m-0 mx-auto cursor-pointer">
          <h2 class="md:text-xl text-center md:text-left font-bold my-5">99.9% Approval</h2>
          <p class="text-center md:text-left mb-10 ">Hilton Parker does not charge administrative fees untill the student's visa application is successful.</p>
          <router-link to="/apply">
            <div class="flex cursor-pointer transition ease-in-out delay-150  hover:translate-x-5 hover:scale-10  duration-200">
              <img src="../../assets/images/icons/go.svg" alt="" class="bg-blue-500 p-3 rounded-full bg-opacity-30  w-10 md:m-0 mx-auto cursor-pointer "> 
              <span class="mt-2 ml-2 text-xs hidden md:flex  ">Visa approved </span>  
            </div>        
          </router-link>   
            </div>
          <img src="../../assets/images/icons/successrate.svg" alt="" class="bg-yellow-500 p-3 rounded-full bg-opacity-30 md:m-0 mx-auto cursor-pointer">
          <h2 class="md:text-xl text-center md:text-left font-bold my-5">99.9% Approval</h2>
          <p class="text-center md:text-left mb-10 ">Hilton Parker does not charge administrative fees untill the student's visa application is successful.</p>
          <router-link to="/apply">
            <div class="flex cursor-pointer transition ease-in-out delay-150  hover:translate-x-5 hover:scale-10  duration-200">
              <img src="../../assets/images/icons/go.svg" alt="" class="bg-yellow-500 p-3 rounded-full bg-opacity-30  w-10 md:m-0 mx-auto cursor-pointer "> 
              <span class="mt-2 ml-2 text-xs hidden md:flex  ">Visa approved </span>  
            </div>        
          </router-link>        
          </div>
      </div>
    </div>

  </div>

  <div class="w-full text-black mt-10 pt-10 flex justify-center">
            <div class="w-1/2">
                <h1 class="text-3xl w-full font-bold text-center">1,000+ Happy Clients
                </h1>
                <p class="mt-5 text-center">Since launching in 2020, over 1,000 people have used Hilton Parker Services to secure admission outside Nigeria. Avoid unneccessary delays</p>
            </div>
        </div>

          <div class="flex w-full bg-black mt-8 py-20 px-8">
          <div class="w-1/2">
            <h2 class="text-white font-extrabold text-4xl">Be the first to get information about promotions and other informations </h2>
          </div>
          <div class="w-1/2 flex">
            <div class="w-full flex">
                <input type="text" class="w-3/4 rounded-l-xl p-3 my-auto " placeholder="Sign up for our Newsletter">
                <input type="submit" value="Submit" class="w-1/4 bg-brand-major text-white border-brand-major rounded-r-xl p-3 my-auto ">
            </div>
          </div>
        </div>

<div class="w-full text-black my-10 pt-10 flex justify-center">
            <div class="w-1/2">
                <h1 class="text-3xl w-full font-bold text-center">Reach out to us </h1>
                <h1 class=" text-4xl mt-5 text-center font-bold text-brand-major ">+234 700 4449 444</h1>
            <!-- <div class="bg-black w-48 text-center rounded-md font-bold p-3 mx-auto my-12">Get Started</div> -->
            <form @submit.prevent="contact">
              <div class="w-full mt-10">
                <input type="text" placeholder="Your Name" class="p-3 w-full rounded-md">
                <input type="text" placeholder=" Email" class="p-3 w-full rounded-md mt-5">
                <input type="text" placeholder=" Phone Number" class="p-3 w-full rounded-md mt-5">
                <textarea class="w-full mt-5 p-3 rounded-md" placeholder="Message" name="" id="" cols="30" rows="10"></textarea>
                <input type="submit" value="Send Message" class="p-3 w-full rounded-md mt-5 bg-black text-white">
              </div>
            </form>
            </div>
        </div>
          <!-- FOOTER  -->
<div class="w-full bg-black px-8 md:flex text-white gap-4 justify-center align-middle py-5">
  <div class="md:w-1/4 w-full mx-auto">
            <img src="../../assets/logo.png" alt="" class=" w-32">
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
<p class="w-full py-10 bg-black text-white text-center text-sm">&copy; 2022 Hilton Parker Services; made with &hearts; by <a href="https://collinswilson.tech" target="blank">Cre8ive_collins</a> </p>
  <!-- END FOOTER  -->

    </div>
</template>

<script setup>
const { ref }=require("@vue/reactivity")
const { useRouter }=require("vue-router")

  console.log("SET")
  let startApplication = ref(false)
  let router = useRouter()
  const apply = () => {
    router.push('/apply')
  }
  // const contact = () => {
  //   console.log('form')
  // }
</script>

<style scoped>
.chaer{
  bottom: 50%;
  right: 50%;
}
.boxPosition{
    background-color: white;
    bottom: -20%;
    left: 0%;
}
.bgglyphPosition{
    left: 85%;
}
.abspos{
    top: 20%;
    right: 20%;

}
.trapez {
    width: 0;
    height:0;
    border: 50px solid transparent;
    border-top: 0;
    /* border-right: 0; */
    /* border-left: 0; */
    border-bottom: 50px solid orange;
}
.wider{
    width: 300px;
    left: 20%;
}
.downer{
    bottom: -2%;
    right: -2%;
}
.downer2{
    bottom: -5%;
    right: -1%;
    border-radius: 5px;
}
.downel{
    left: -2%;
    bottom: -3%;
}
</style>