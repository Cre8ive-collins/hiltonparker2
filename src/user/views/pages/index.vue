<template>
    <div class="text-black">
        <!-- HERO  -->
        <div class=" relative">
            <div class="w-full p-5  fixed top-0 z-50 bg-brand-primary">
                <div class="flex w-full">
                    <span class="w-1/2">LOGO</span>
                    <div class="md:flex hidden w-1/2  justify-end text-right text-brand-white font-bold text-lg ">
                        <span class="w-1/3">Benefit</span>
                        <span class="w-1/3">How it Works</span>
                        <span class="w-1/3">Testimonials</span>
                    </div>
                </div>
            </div>
            
            <div class="md:flex block z-30 relative w-full h-screenx bg-white bg-opacity-10 rounded-r-custome hero text-red-500 content-center justify-center">
                <div class="absolute md:flex flex   left-0 right-0 md:w-28 w-20  mx-auto   gap-5  z-50 bottom-10 cursor-pointer" >
                    <div @click="$refs.carousel.goTo(0)" class="md:w-5 w-2 rounded-full h-2 md:h-5 text-red-500" :class="activeSlide == 0 ? 'bg-brand-secondaryx' : 'bg-white'"></div>
                    <div @click="$refs.carousel.goTo(1)" class="md:w-5 w-2 rounded-full h-2 md:h-5  text-red-500" :class="activeSlide == 1 ? 'bg-brand-secondaryx' : 'bg-white'"></div>
                    <div @click="$refs.carousel.goTo(2)" class="md:w-5 w-2 rounded-full h-2 md:h-5  text-red-500" :class="activeSlide == 2 ? 'bg-brand-secondaryx' : 'bg-white'"></div>
                </div>
                <div class="absolute w-10 h-10 flex z-50 top-[50%] left-8 md:left-20 cursor-pointer" @click="$refs.carousel.goToPrev()">
                    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="32" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 20 20"><path fill="#2ec4b6" d="m4 10l9 9l1.4-1.5L7 10l7.4-7.5L13 1z"/></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="32" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 20 20"><path fill="#2ec4b6" d="m4 10l9 9l1.4-1.5L7 10l7.4-7.5L13 1z"/></svg>
                </div>
                <div class="absolute flex w-10 h-10 z-50 top-[50%] right-8 md:right-20 cursor-pointer" @click="$refs.carousel.goToNext()">
                    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="32" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 20 20"><path fill="#2ec4b6" d="M7 1L5.6 2.5L13 10l-7.4 7.5L7 19l9-9z"/></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="32" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 20 20"><path fill="#2ec4b6" d="M7 1L5.6 2.5L13 10l-7.4 7.5L7 19l9-9z"/></svg>
                </div>
                <div class="h-screenx rounded-r-custome absolute top-0 right-0 w-screen  bg-brand-omajor bg-opacity-50"></div>
                <agile @after-change="change" ref="carousel" :autoplaySpeed="7000" :autoplay="true" :fade="false" :navButtons="false" :mobileFirst="false" class="w-screen md:px-12 px-5">
                    <div class="md:px-5 px-2 slider relative  w-full  h-screenx   text-white  grid gap-4 content-center   ">
                        <div class="bg-brand-white md:p-20 p-5 bg-opacity-50 rounded-lg md:w-3/4 w-full mx-auto text-black">
                            <h1 class="md:text-4xl text-xl text-center  relative">International Studies &nbsp; <span class="md:text-4xl text-3xl">&#127891;</span> </h1>
                            <h1 class="md:text-7xl  text-2xl text-center  md:my-5 mt-5 relative"> pay <span class="absolute rounded w-32  md:w-96 bg-brand-secondaryx  bottom-0  h-1 "></span> <span class="uppercase font-bold ">Nothing</span>   </h1>
                            <h1 class="md:text-4xl mt-4 text-center  leading-relaxed text-2xl relative">until <span class=" relative uppercase  font-bold">  <span class="absolute w-36 md:w-56 rounded bg-brand-secondaryx  bottom-0 h-1  "></span> Admission</span>   is granted!  </h1>
                            <p class="mt-5 text-center mx-auto relative text-1">Hilton Parker focuses on getting you International Education, so you can focus on learning. The best part ? You don't pay service fee until Visa is approved.</p>
                            <div @click="apply" class=" w-1/2 mx-auto mt-14 p-2  text-white bg-brand-secondaryx   hover:text-brand-major rounded rounded-input    cursor-pointer ransition ease-in-out delay-75  duration-300 ">
                                <p class="text-center p-1 text-xs md:text-base">Get Started</p>
                            </div>
                        </div>
                    </div>
                    <div class="px-5 slider  relative  w-full  h-screenx   text-white  grid gap-4 content-center   ">
                        <div class="bg-brand-white md:p-20 p-5 bg-opacity-50 rounded-lg md:w-3/4 w-full mx-auto text-black ">
                            <h1 class="md:text-4xl text-xl text-center  relative">Admission Processing  &nbsp; <span class="md:text-4xl text-3xl">&#127891;</span> </h1>
                            <h1 class="md:text-7xl  text-2xl text-center  md:my-5 mt-5 relative"> pay <span class="absolute rounded w-32  md:w-96 bg-brand-secondaryx  bottom-0 h-1 "></span> <span class="uppercase font-bold ">Nothing</span>   </h1>
                            <h1 class="md:text-4xl mt-4 text-center  leading-relaxed text-2xl relative">until <span class=" relative uppercase  font-bold">  <span class="absolute w-36 md:w-56  rounded bg-brand-secondaryx  bottom-0 h-1  "></span> Admission</span>   is granted!  </h1>
                            <p class="mt-5 text-center mx-auto relative text-1">Hilton Parker focuses on getting you International Education, so you can focus on learning. The best part ? You don't pay service fee until Visa is approved.</p>
                            <div @click="apply" class=" w-1/2 mx-auto mt-14 p-2  text-white bg-brand-secondaryx   hover:text-brand-major rounded rounded-input    cursor-pointer ransition ease-in-out delay-75  duration-300 ">
                                <p class="text-center p-1 text-xs md:text-base">Get Started</p>
                            </div>
                       </div>
                    </div>
                    <div class="px-5 slider  relative  w-full  h-screenx   text-white  grid gap-4 content-center   ">
                        <div class="bg-brand-white md:p-20 p-5 bg-opacity-50 rounded-lg md:w-3/4 w-full mx-auto text-black">
                            <h1 class="md:text-4xl text-xl text-center  relative">Visa Application  &nbsp; <span class="md:text-4xl text-3xl">&#127891;</span> </h1>
                            <h1 class="md:text-7xl  text-2xl text-center  md:my-5 mt-5 relative"> pay <span class="absolute rounded w-32 md:w-96 bg-brand-secondaryx  bottom-0 h-1 "></span> <span class="uppercase font-bold ">Nothing</span>   </h1>
                            <h1 class="md:text-4xl mt-4 text-center  leading-relaxed text-2xl relative">until <span class=" relative uppercase  font-bold">  <span class="absolute w-36 md:w-56  rounded bg-brand-secondaryx  bottom-0 h-1  "></span> Admission</span>   is granted!  </h1>
                            <p class="mt-5 text-center  mx-auto relative text-1">Hilton Parker focuses on getting you International Education, so you can focus on learning. The best part ? You don't pay service fee until Visa is approved.</p>
                            <div @click="apply" class=" w-1/2 mx-auto mt-14 p-2  text-white bg-brand-secondaryx   hover:text-brand-major rounded rounded-input    cursor-pointer ransition ease-in-out delay-75  duration-300 ">
                                <p class="text-center p-1 text-xs md:text-base">Get Started</p>
                            </div>
                        </div>
                    </div>
                </agile>
                   <!-- <div class="px-5 md:w-1/2 w-full  h-full   text-white  grid gap-4 content-center mx-auto  ">
                        <div>
                            <h1 class="md:text-4xl text-xl text-center  relative">International Studies &nbsp; <span class="md:text-4xl text-3xl">&#127891;</span> </h1>
                            <h1 class="md:text-7xl  text-4xl text-center  md:my-5 mt-5 relative"> pay <span class="absolute rounded w-48  md:w-80 bg-brand-secondaryx  bottom-0 h-2 "></span> <span class="uppercase font-bold ">Nothing</span>   </h1>
                            <h1 class="md:text-4xl mt-4 text-center  leading-relaxed text-4xl relative">until <span class=" relative uppercase  font-bold">  <span class="absolute w-48 rounded bg-brand-secondaryx  bottom-0 h-2  "></span> Admission</span>   is granted!  </h1>
                            <p class="mt-5 text-center  relative text-1">Hilton Parker focuses on getting you International Education, so you can focus on learning. The best part ? You don't pay service fee until Visa is approved.</p>
                        </div>
                     <div class="flex w-full mt-10 border bg-white relative rounded-md ">
                         <div class="relative w-3/4 ">
                             <input type="text" placeholder="Enter your best email" class="px-5 w-full h-full">
                         </div>
                     <div class="relative md:w-1/4 w-1/4 border md:mx-0">
                        <div @click="apply" class=" p-1 md:p-2  text-white bg-brand-secondaryx   hover:text-brand-major rounded rounded-input    cursor-pointer ransition ease-in-out delay-75  duration-300 ">
                            <p class="text-center p-1 text-xs md:text-base">Get Started</p>
                        </div>
                     </div>
                     
                        </div>
                     </div> -->
            </div>
            <div class=" z-20  md:-bottom-5 -bottom-2 absolute w-full h-screenx bg-brand-white rounded-r-custome"></div>
            <div class=" z-10  md:-bottom-10 -bottom-5 absolute w-full h-screenx   bg-brand-omajor rounded-r-custome"></div>
        </div>
        <!-- END HERO  -->

        <!-- 4 WHAT WE OFFER  -->
        <div class="w-full mt-40">
            <h2 class=" text-lg  uppercase text-brand-major font-bold w-full text-center">What we offer </h2>
            <h1 class="text-center w-full md:text-3xl  text-2xl mb-20">OUR SERVICES INCLUDES</h1>
        </div>
        <div class="w-full  gap-5 mb-20  container relative mx-auto md:flex block">
            <div class="md:w-1/4 w-full bordermod  border-black p-5">
                <h2 class=" text-lg  uppercase text-brand-major font-bold w-full text-center">admission processing </h2>
                <p class="mt-5 text-black w-full ">
                    We process undergraduate and post-gradyate admission for our clients. We have an affiliation with some international renowned schools in Canada 
                </p>
            </div>
            <div class="md:w-1/4 w-full bordermod  border-black p-5">
                <h2 class=" text-lg  uppercase text-brand-major font-bold w-full text-center">visa application </h2>
                <p class="mt-5 text-black w-full ">
                    No Service Fee until Visa is approved. We will guide you with the needed requirements for visa application.
                </p>
            </div>
            <div class="md:w-1/4 w-full bordermod   border-black p-5">
                <h2 class=" text-lg  uppercase text-brand-major font-bold w-full text-center">Work Permit </h2>
                <p class="mt-5 text-black w-full ">
                    Yor study permit also allows you to work while living in canada. Hence, it's called a "study and work" programme
                </p>
            </div>
            
            <div class="md:w-1/4 w-full bordermod   border-black p-5">
                <h2 class=" text-lg  uppercase text-brand-major font-bold w-full text-center">loan access </h2>
                <p class="mt-5 text-black w-full ">
                    We assist successful applicants with access to Canadian loans which enable them cater for their academic needs while schooling in Canada                
                </p>
            </div>
            
        </div>
        <!--END 4 WHAT WE OFFER  -->

        <div class="spacer">
        </div>
        <!-- HOW IT WORKS  -->
        <div class="container mx-auto">
            <div class="flex w-full p-5">
                <div class="md:w-1/2 w-full">
                    <h1 class="font-bold text-xl md:text-3xl uppercase">
                       Here's  How it  Works 
                    </h1>  
                </div>
                <div class="w-1/2 md:flex hidden justify-end">
                    <div class="w-1/4  justify-end flex">
                        <div class="w-14 h-8 bg-brand-secondaryx mx-auto rounded-l-md"></div>
                        <div class="w-14 h-8 bg-brand-major mx-auto rounded-r-md"></div>
                    </div>
                </div>
            </div>
            <div class="md:flex w-full">
                <div class="md:w-1/3 p-5">
                    <div class="w-15 h-15 mb-8">
                        <img src="../../assets/images/canada.jpg" alt="ghghghgh" class="w-full h-full">
                    </div>
                    <h2 class="text-xl text-brand-major font-bold">Apply Online</h2>
                     <p class="mt-5 text-black w-full ">
                         Our application is fast and simple. Not sure what career is best for you? Use our live chat feature to chat with a career counselor.
                    </p>  
                </div>
                <div class="md:w-1/3 p-5">
                    <div class="w-15 h-15 mb-8">
                        <img src="../../assets/images/canada.jpg" alt="ghghghgh" class="w-full h-full">
                    </div>
                    <h2 class="text-xl text-brand-major font-bold">Get Accepted</h2>
                     <p class="mt-5 text-black w-full ">
                         Our typical acceptance time is 1-2 business days, but you could be accepted within an hour!
                    </p> 
                </div>
                <div class="md:w-1/3 p-5">
                     <div class="w-15 h-15 mb-8">
                        <img src="../../assets/images/canada.jpg" alt="ghghghgh" class="w-full h-full">
                    </div>
                    <h2 class="text-xl text-brand-major font-bold">Great Education</h2>
                     <p class="mt-5 text-black w-full ">
                         All of our partner schools provide top notch education, and you get work permit on getting admission
                    </p> 
                </div>
            </div>
        </div>
        <!-- END HOW IT WORKS  -->
        <div class="spacer"></div>

        <!-- BENEFITS  -->
        <div class="container mx-auto P-5">
            <div class="w-full">
                <h2 class=" text-lg  uppercase text-brand-major font-bold w-full">What you'LL ENJOY</h2>
                <h1 class=" w-full md:text-3xl  text-2xl ">OUR BENEFITS</h1>
            </div>
            <div class="md:flex gap-5 mt-10">
                  <div class="md:w-1/3 md:mt-0 mt-5 shadow-md  shadow-brand-secondaryx p-10 bg-brand-primary">
                     <div class=" grid content-center h-full ">
                       <svg class=" mx-auto" width="72" height="72" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M25.3334 2.66663H12C10.5294 2.66663 9.33337 3.86263 9.33337 5.33329V12.7813L3.05737 19.0573C2.87096 19.2438 2.74402 19.4813 2.6926 19.7399C2.64117 19.9985 2.66758 20.2666 2.76847 20.5102C2.86936 20.7538 3.04022 20.962 3.25943 21.1085C3.47864 21.255 3.73637 21.3332 4.00004 21.3333V28C4.00004 28.3536 4.14052 28.6927 4.39057 28.9428C4.64061 29.1928 4.97975 29.3333 5.33337 29.3333H26.6667C27.0203 29.3333 27.3595 29.1928 27.6095 28.9428C27.8596 28.6927 28 28.3536 28 28V5.33329C28 3.86263 26.804 2.66663 25.3334 2.66663ZM14.6667 26.6666H6.66671V19.2186L10.6667 15.2186L14.6667 19.2186V26.6666ZM25.3334 26.6666H17.3334V21.3333C17.5973 21.3339 17.8555 21.256 18.0751 21.1096C18.2948 20.9632 18.4659 20.7549 18.5669 20.511C18.6679 20.2671 18.6942 19.9988 18.6424 19.7399C18.5906 19.4811 18.4631 19.2435 18.276 19.0573L12 12.7813V5.33329H25.3334V26.6666Z" fill="white"/>
                            <path d="M25.3334 2.66663H12C10.5294 2.66663 9.33337 3.86263 9.33337 5.33329V12.7813L3.05737 19.0573C2.87096 19.2438 2.74402 19.4813 2.6926 19.7399C2.64117 19.9985 2.66758 20.2666 2.76847 20.5102C2.86936 20.7538 3.04022 20.962 3.25943 21.1085C3.47864 21.255 3.73637 21.3332 4.00004 21.3333V28C4.00004 28.3536 4.14052 28.6927 4.39057 28.9428C4.64061 29.1928 4.97975 29.3333 5.33337 29.3333H26.6667C27.0203 29.3333 27.3595 29.1928 27.6095 28.9428C27.8596 28.6927 28 28.3536 28 28V5.33329C28 3.86263 26.804 2.66663 25.3334 2.66663ZM14.6667 26.6666H6.66671V19.2186L10.6667 15.2186L14.6667 19.2186V26.6666ZM25.3334 26.6666H17.3334V21.3333C17.5973 21.3339 17.8555 21.256 18.0751 21.1096C18.2948 20.9632 18.4659 20.7549 18.5669 20.511C18.6679 20.2671 18.6942 19.9988 18.6424 19.7399C18.5906 19.4811 18.4631 19.2435 18.276 19.0573L12 12.7813V5.33329H25.3334V26.6666Z" fill="white"/>
                            <path d="M14.6668 8H17.3335V10.6667H14.6668V8ZM20.0002 8H22.6668V10.6667H20.0002V8ZM20.0002 13.3747H22.6668V16H20.0002V13.3747ZM20.0002 18.6667H22.6668V21.3333H20.0002V18.6667ZM9.3335 20H12.0002V22.6667H9.3335V20Z" fill="white"/>
                        </svg>
                        <p class="text-center mt-5">Accomodation support,  We have on ground associate ready to recieve our studentss upon arrival</p>
                    </div>
                </div>
                <div class="md:w-1/3 md:mt-0 mt-5 p-10 bg-brand-white shadow-md  shadow-brand-major ">
                      <div class="grid content-center h-full ">
                        <svg class=" mx-auto" width="72" height="72" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M20 6.66663C20 6.13619 20.2107 5.62748 20.5858 5.25241C20.9609 4.87734 21.4696 4.66663 22 4.66663C22.5304 4.66663 23.0391 4.87734 23.4142 5.25241C23.7893 5.62748 24 6.13619 24 6.66663V20.202L22 23.202L20 20.202V6.66663ZM22 5.99996C21.8232 5.99996 21.6536 6.0702 21.5286 6.19522C21.4036 6.32025 21.3333 6.48982 21.3333 6.66663V19.798L22 20.798L22.6667 19.798V6.66663C22.6667 6.48982 22.5964 6.32025 22.4714 6.19522C22.3464 6.0702 22.1768 5.99996 22 5.99996Z" fill="#F69615"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M23.3333 9.33333H20.6667V8H23.3333V9.33333ZM2.66667 1.33333C2.31304 1.33333 1.97391 1.47381 1.72386 1.72386C1.47381 1.97391 1.33333 2.31304 1.33333 2.66667V21.3333C1.33333 21.687 1.47381 22.0261 1.72386 22.2761C1.97391 22.5262 2.31304 22.6667 2.66667 22.6667H16C16.3536 22.6667 16.6928 22.5262 16.9428 22.2761C17.1929 22.0261 17.3333 21.687 17.3333 21.3333V2.66667C17.3333 2.31304 17.1929 1.97391 16.9428 1.72386C16.6928 1.47381 16.3536 1.33333 16 1.33333H2.66667ZM0 2.66667C0 1.95942 0.280951 1.28115 0.781048 0.781048C1.28115 0.280951 1.95942 0 2.66667 0H16C16.7072 0 17.3855 0.280951 17.8856 0.781048C18.3857 1.28115 18.6667 1.95942 18.6667 2.66667V21.3333C18.6667 22.0406 18.3857 22.7189 17.8856 23.219C17.3855 23.719 16.7072 24 16 24H2.66667C1.95942 24 1.28115 23.719 0.781048 23.219C0.280951 22.7189 0 22.0406 0 21.3333V2.66667Z" fill="#F69615"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M9.33355 6.00004C9.33355 5.82323 9.40379 5.65366 9.52881 5.52864C9.65384 5.40361 9.82341 5.33337 10.0002 5.33337H15.3336C15.5104 5.33337 15.6799 5.40361 15.805 5.52864C15.93 5.65366 16.0002 5.82323 16.0002 6.00004C16.0002 6.17685 15.93 6.34642 15.805 6.47145C15.6799 6.59647 15.5104 6.66671 15.3336 6.66671H10.0002C9.82341 6.66671 9.65384 6.59647 9.52881 6.47145C9.40379 6.34642 9.33355 6.17685 9.33355 6.00004ZM9.33355 8.66671C9.33355 8.4899 9.40379 8.32033 9.52881 8.1953C9.65384 8.07028 9.82341 8.00004 10.0002 8.00004H15.3336C15.5104 8.00004 15.6799 8.07028 15.805 8.1953C15.93 8.32033 16.0002 8.4899 16.0002 8.66671C16.0002 8.84352 15.93 9.01309 15.805 9.13811C15.6799 9.26314 15.5104 9.33337 15.3336 9.33337H10.0002C9.82341 9.33337 9.65384 9.26314 9.52881 9.13811C9.40379 9.01309 9.33355 8.84352 9.33355 8.66671ZM9.33355 14.6667C9.33355 14.4899 9.40379 14.3203 9.52881 14.1953C9.65384 14.0703 9.82341 14 10.0002 14H15.3336C15.5104 14 15.6799 14.0703 15.805 14.1953C15.93 14.3203 16.0002 14.4899 16.0002 14.6667C16.0002 14.8435 15.93 15.0131 15.805 15.1381C15.6799 15.2631 15.5104 15.3334 15.3336 15.3334H10.0002C9.82341 15.3334 9.65384 15.2631 9.52881 15.1381C9.40379 15.0131 9.33355 14.8435 9.33355 14.6667ZM9.33355 17.3334C9.33355 17.1566 9.40379 16.987 9.52881 16.862C9.65384 16.7369 9.82341 16.6667 10.0002 16.6667H15.3336C15.5104 16.6667 15.6799 16.7369 15.805 16.862C15.93 16.987 16.0002 17.1566 16.0002 17.3334C16.0002 17.5102 15.93 17.6798 15.805 17.8048C15.6799 17.9298 15.5104 18 15.3336 18H10.0002C9.82341 18 9.65384 17.9298 9.52881 17.8048C9.40379 17.6798 9.33355 17.5102 9.33355 17.3334ZM4.00022 14.6667V16.6667H6.00022V14.6667H4.00022ZM3.33355 13.3334H6.66688C6.84369 13.3334 7.01326 13.4036 7.13829 13.5286C7.26331 13.6537 7.33355 13.8232 7.33355 14V17.3334C7.33355 17.5102 7.26331 17.6798 7.13829 17.8048C7.01326 17.9298 6.84369 18 6.66688 18H3.33355C3.15674 18 2.98717 17.9298 2.86215 17.8048C2.73712 17.6798 2.66688 17.5102 2.66688 17.3334V14C2.66688 13.8232 2.73712 13.6537 2.86215 13.5286C2.98717 13.4036 3.15674 13.3334 3.33355 13.3334V13.3334ZM7.80488 5.52871C7.92987 5.65373 8.00008 5.82326 8.00008 6.00004C8.00008 6.17682 7.92987 6.34636 7.80488 6.47137L4.66688 9.60937L2.86222 7.80471C2.79854 7.74321 2.74776 7.66965 2.71282 7.58831C2.67788 7.50697 2.65949 7.41949 2.65872 7.33097C2.65795 7.24246 2.67482 7.15467 2.70834 7.07274C2.74186 6.99081 2.79136 6.91637 2.85395 6.85378C2.91655 6.79118 2.99098 6.74168 3.07291 6.70816C3.15485 6.67464 3.24263 6.65777 3.33115 6.65854C3.41967 6.65931 3.50715 6.6777 3.58849 6.71264C3.66982 6.74758 3.74339 6.79837 3.80488 6.86204L4.66688 7.72404L6.86222 5.52871C6.98724 5.40373 7.15677 5.33352 7.33355 5.33352C7.51033 5.33352 7.67987 5.40373 7.80488 5.52871V5.52871Z" fill="#F69615"/>
                        </svg>
                        <p class="text-center mt-5">No English Test or Entrance Exams Needed</p>
                    </div>
                </div>
                <div class="md:w-1/3  md:mt-0 mt-5 p-10 bg-brand-white shadow-md  shadow-brand-major ">
                    <div class=" grid content-center h-full ">
                        <svg class="mx-auto" width="72" height="72" viewBox="0 0 26 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M23.3333 14.6667V8.66667L17.3333 2H3.33333C2.97971 2 2.64057 2.14048 2.39052 2.39052C2.14048 2.64057 2 2.97971 2 3.33333V27.3333C2 27.687 2.14048 28.0261 2.39052 28.2761C2.64057 28.5262 2.97971 28.6667 3.33333 28.6667H11.3333" stroke="#F69615" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M16.6667 2V8.66667H23.3333M14 24.6667L18 28L24 20.6667L14 24.6667Z" stroke="#F69615" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <p class="text-center mt-5">Guaranteed Work Permit After Visa is Approved</p>
                    </div>
                </div>
              
            </div>
            <div class="md:flex gap-5 mt-10">
                <div class="md:w-1/3 md:mt-0 mt-5 p-10 bg-brand-white shadow-md  shadow-brand-major ">
                      <div class="grid content-center h-full ">
                        <svg class=" mx-auto" width="72" height="72" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M20 6.66663C20 6.13619 20.2107 5.62748 20.5858 5.25241C20.9609 4.87734 21.4696 4.66663 22 4.66663C22.5304 4.66663 23.0391 4.87734 23.4142 5.25241C23.7893 5.62748 24 6.13619 24 6.66663V20.202L22 23.202L20 20.202V6.66663ZM22 5.99996C21.8232 5.99996 21.6536 6.0702 21.5286 6.19522C21.4036 6.32025 21.3333 6.48982 21.3333 6.66663V19.798L22 20.798L22.6667 19.798V6.66663C22.6667 6.48982 22.5964 6.32025 22.4714 6.19522C22.3464 6.0702 22.1768 5.99996 22 5.99996Z" fill="#F69615"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M23.3333 9.33333H20.6667V8H23.3333V9.33333ZM2.66667 1.33333C2.31304 1.33333 1.97391 1.47381 1.72386 1.72386C1.47381 1.97391 1.33333 2.31304 1.33333 2.66667V21.3333C1.33333 21.687 1.47381 22.0261 1.72386 22.2761C1.97391 22.5262 2.31304 22.6667 2.66667 22.6667H16C16.3536 22.6667 16.6928 22.5262 16.9428 22.2761C17.1929 22.0261 17.3333 21.687 17.3333 21.3333V2.66667C17.3333 2.31304 17.1929 1.97391 16.9428 1.72386C16.6928 1.47381 16.3536 1.33333 16 1.33333H2.66667ZM0 2.66667C0 1.95942 0.280951 1.28115 0.781048 0.781048C1.28115 0.280951 1.95942 0 2.66667 0H16C16.7072 0 17.3855 0.280951 17.8856 0.781048C18.3857 1.28115 18.6667 1.95942 18.6667 2.66667V21.3333C18.6667 22.0406 18.3857 22.7189 17.8856 23.219C17.3855 23.719 16.7072 24 16 24H2.66667C1.95942 24 1.28115 23.719 0.781048 23.219C0.280951 22.7189 0 22.0406 0 21.3333V2.66667Z" fill="#F69615"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M9.33355 6.00004C9.33355 5.82323 9.40379 5.65366 9.52881 5.52864C9.65384 5.40361 9.82341 5.33337 10.0002 5.33337H15.3336C15.5104 5.33337 15.6799 5.40361 15.805 5.52864C15.93 5.65366 16.0002 5.82323 16.0002 6.00004C16.0002 6.17685 15.93 6.34642 15.805 6.47145C15.6799 6.59647 15.5104 6.66671 15.3336 6.66671H10.0002C9.82341 6.66671 9.65384 6.59647 9.52881 6.47145C9.40379 6.34642 9.33355 6.17685 9.33355 6.00004ZM9.33355 8.66671C9.33355 8.4899 9.40379 8.32033 9.52881 8.1953C9.65384 8.07028 9.82341 8.00004 10.0002 8.00004H15.3336C15.5104 8.00004 15.6799 8.07028 15.805 8.1953C15.93 8.32033 16.0002 8.4899 16.0002 8.66671C16.0002 8.84352 15.93 9.01309 15.805 9.13811C15.6799 9.26314 15.5104 9.33337 15.3336 9.33337H10.0002C9.82341 9.33337 9.65384 9.26314 9.52881 9.13811C9.40379 9.01309 9.33355 8.84352 9.33355 8.66671ZM9.33355 14.6667C9.33355 14.4899 9.40379 14.3203 9.52881 14.1953C9.65384 14.0703 9.82341 14 10.0002 14H15.3336C15.5104 14 15.6799 14.0703 15.805 14.1953C15.93 14.3203 16.0002 14.4899 16.0002 14.6667C16.0002 14.8435 15.93 15.0131 15.805 15.1381C15.6799 15.2631 15.5104 15.3334 15.3336 15.3334H10.0002C9.82341 15.3334 9.65384 15.2631 9.52881 15.1381C9.40379 15.0131 9.33355 14.8435 9.33355 14.6667ZM9.33355 17.3334C9.33355 17.1566 9.40379 16.987 9.52881 16.862C9.65384 16.7369 9.82341 16.6667 10.0002 16.6667H15.3336C15.5104 16.6667 15.6799 16.7369 15.805 16.862C15.93 16.987 16.0002 17.1566 16.0002 17.3334C16.0002 17.5102 15.93 17.6798 15.805 17.8048C15.6799 17.9298 15.5104 18 15.3336 18H10.0002C9.82341 18 9.65384 17.9298 9.52881 17.8048C9.40379 17.6798 9.33355 17.5102 9.33355 17.3334ZM4.00022 14.6667V16.6667H6.00022V14.6667H4.00022ZM3.33355 13.3334H6.66688C6.84369 13.3334 7.01326 13.4036 7.13829 13.5286C7.26331 13.6537 7.33355 13.8232 7.33355 14V17.3334C7.33355 17.5102 7.26331 17.6798 7.13829 17.8048C7.01326 17.9298 6.84369 18 6.66688 18H3.33355C3.15674 18 2.98717 17.9298 2.86215 17.8048C2.73712 17.6798 2.66688 17.5102 2.66688 17.3334V14C2.66688 13.8232 2.73712 13.6537 2.86215 13.5286C2.98717 13.4036 3.15674 13.3334 3.33355 13.3334V13.3334ZM7.80488 5.52871C7.92987 5.65373 8.00008 5.82326 8.00008 6.00004C8.00008 6.17682 7.92987 6.34636 7.80488 6.47137L4.66688 9.60937L2.86222 7.80471C2.79854 7.74321 2.74776 7.66965 2.71282 7.58831C2.67788 7.50697 2.65949 7.41949 2.65872 7.33097C2.65795 7.24246 2.67482 7.15467 2.70834 7.07274C2.74186 6.99081 2.79136 6.91637 2.85395 6.85378C2.91655 6.79118 2.99098 6.74168 3.07291 6.70816C3.15485 6.67464 3.24263 6.65777 3.33115 6.65854C3.41967 6.65931 3.50715 6.6777 3.58849 6.71264C3.66982 6.74758 3.74339 6.79837 3.80488 6.86204L4.66688 7.72404L6.86222 5.52871C6.98724 5.40373 7.15677 5.33352 7.33355 5.33352C7.51033 5.33352 7.67987 5.40373 7.80488 5.52871V5.52871Z" fill="#F69615"/>
                        </svg>
                        <p class="text-center mt-5">No service charge until visa approval</p>
                    </div>
                </div>
                <div class="md:w-1/3  md:mt-0 mt-5 p-10 bg-brand-white shadow-md  shadow-brand-major ">
                    <div class=" grid content-center h-full ">
                        <svg class="mx-auto" width="72" height="72" viewBox="0 0 26 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M23.3333 14.6667V8.66667L17.3333 2H3.33333C2.97971 2 2.64057 2.14048 2.39052 2.39052C2.14048 2.64057 2 2.97971 2 3.33333V27.3333C2 27.687 2.14048 28.0261 2.39052 28.2761C2.64057 28.5262 2.97971 28.6667 3.33333 28.6667H11.3333" stroke="#F69615" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M16.6667 2V8.66667H23.3333M14 24.6667L18 28L24 20.6667L14 24.6667Z" stroke="#F69615" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <p class="text-center mt-5">Flexible tuition fee payment plans</p>
                    </div>
                </div>
                <div class="md:w-1/3 md:mt-0 mt-5 shadow-md  shadow-brand-secondaryx p-10 bg-brand-primary">
                     <div class=" grid content-center h-full ">
                       <svg class=" mx-auto" width="72" height="72" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M25.3334 2.66663H12C10.5294 2.66663 9.33337 3.86263 9.33337 5.33329V12.7813L3.05737 19.0573C2.87096 19.2438 2.74402 19.4813 2.6926 19.7399C2.64117 19.9985 2.66758 20.2666 2.76847 20.5102C2.86936 20.7538 3.04022 20.962 3.25943 21.1085C3.47864 21.255 3.73637 21.3332 4.00004 21.3333V28C4.00004 28.3536 4.14052 28.6927 4.39057 28.9428C4.64061 29.1928 4.97975 29.3333 5.33337 29.3333H26.6667C27.0203 29.3333 27.3595 29.1928 27.6095 28.9428C27.8596 28.6927 28 28.3536 28 28V5.33329C28 3.86263 26.804 2.66663 25.3334 2.66663ZM14.6667 26.6666H6.66671V19.2186L10.6667 15.2186L14.6667 19.2186V26.6666ZM25.3334 26.6666H17.3334V21.3333C17.5973 21.3339 17.8555 21.256 18.0751 21.1096C18.2948 20.9632 18.4659 20.7549 18.5669 20.511C18.6679 20.2671 18.6942 19.9988 18.6424 19.7399C18.5906 19.4811 18.4631 19.2435 18.276 19.0573L12 12.7813V5.33329H25.3334V26.6666Z" fill="white"/>
                            <path d="M25.3334 2.66663H12C10.5294 2.66663 9.33337 3.86263 9.33337 5.33329V12.7813L3.05737 19.0573C2.87096 19.2438 2.74402 19.4813 2.6926 19.7399C2.64117 19.9985 2.66758 20.2666 2.76847 20.5102C2.86936 20.7538 3.04022 20.962 3.25943 21.1085C3.47864 21.255 3.73637 21.3332 4.00004 21.3333V28C4.00004 28.3536 4.14052 28.6927 4.39057 28.9428C4.64061 29.1928 4.97975 29.3333 5.33337 29.3333H26.6667C27.0203 29.3333 27.3595 29.1928 27.6095 28.9428C27.8596 28.6927 28 28.3536 28 28V5.33329C28 3.86263 26.804 2.66663 25.3334 2.66663ZM14.6667 26.6666H6.66671V19.2186L10.6667 15.2186L14.6667 19.2186V26.6666ZM25.3334 26.6666H17.3334V21.3333C17.5973 21.3339 17.8555 21.256 18.0751 21.1096C18.2948 20.9632 18.4659 20.7549 18.5669 20.511C18.6679 20.2671 18.6942 19.9988 18.6424 19.7399C18.5906 19.4811 18.4631 19.2435 18.276 19.0573L12 12.7813V5.33329H25.3334V26.6666Z" fill="white"/>
                            <path d="M14.6668 8H17.3335V10.6667H14.6668V8ZM20.0002 8H22.6668V10.6667H20.0002V8ZM20.0002 13.3747H22.6668V16H20.0002V13.3747ZM20.0002 18.6667H22.6668V21.3333H20.0002V18.6667ZM9.3335 20H12.0002V22.6667H9.3335V20Z" fill="white"/>
                        </svg>
                        <p class="text-center mt-5">99.9% Approval</p>
                    </div>
                </div>
            </div>
        </div>

        <!-- END BENEFITS  -->
        <div class="spacer"></div>
        <!-- TESTIMONIAL  -->
        <div class="h-screeni w-full bg-brand-white">
            <div class="md:flex w-full h-full">
                <div class="md:w-1/2 bg-brand-white">
                    <div class="w-full h-full testimonialimage relative"> 
                        <div class="bg-brand-secondaryx z-10 absolute top-0 h-full w-full bg-opacity-50"></div>
                        <img src="../../assets/images/canada.jpg" alt="ghghghgh" class="w-full h-full">
                        <img src="../../assets/images/icons/play.svg" alt="" class="absolute chaer bg-brand-secondaryx p-3 rounded-full   w-10 md:m-0 mx-auto cursor-pointer animate-ping"> 
                    </div>
                </div>
                <div class="md:w-1/2 grid content-center bg-brand-major p-5">
                     <h2 class="md:text-3xl text-2xl text-center  w-full  font-bold my-5">Meet Tobi Amusan</h2>
                    <p class="text-center ">
                    When my dad told me about the Canadian visa processing, I thought he
                    was joking. As time went by, the admission came out and then my visa was
                    granted.
                    </p>

                    <div class="w-1/2 bg-brand-secondaryx p-2 mt-10 mx-auto text-white">
                        <p class="w-full text-center">Get Started </p>
                    </div>
                </div>
            </div>
        </div>

        <!-- MORE TESTIMONIALS  -->

        <div class="h-screeni">
            <agile @after-change="change" ref="carousel2" :autoplaySpeed="7000" :autoplay="true" :fade="false" :navButtons="false" :mobileFirst="false" class="w-screen h-screeni md:px-12 px-5 ">
                <div class="h-screeni w-full md:flex  p-5  items-center">
                    <div class="md:w-1/2 relative">
                        <h2 class="md:text-3xl text-2xl   w-full  font-bold my-5">Tobi Amusan</h2>
                        <p class="t ">
                        When my dad told me about the Canadian visa processing, I thought he
                        was joking. As time went by, the admission came out and then my visa was
                        granted. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam, fuga. Quis, ut non. Ab quasi minima officiis consequuntur inventore possimus incidunt dolor perspiciatis illum! Expedita unde consequuntur at accusamus debitis!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem temporibus consectetur velit sequi minima nihil facilis saepe dolorum, veniam itaque sapiente, dolor odio. Quo odit architecto sunt voluptatibus numquam repudiandae.
                        </p>
                        <div class="w-1/2 bg-brand-secondaryx p-2 mt-10  text-white">
                            <p class="w-full text-center">Get Started </p>
                        </div>

                        <div class="bg-brand-secondaryx flex gap-5 p-3  absolute -bottom-48">
                            <div class="h-10 w-10 bg-white" @click="$refs.carousel2.goToPrev()"></div>
                            <div class="h-10 w-10 bg-white" @click="$refs.carousel2.goToNext()"></div>
                        </div>
                    </div>
                    <div class="w-1/2 md:flex hidden items-center justify-center relative">
                        <div class="absolute rounded-full h-96 bg-brand-primary  w-96"></div>
                        <div class="absolute rounded-full h-80 bg-white w-80"></div>
                        <div class="absolute rounded-full h-72 bg-brand-secondaryx w-72"></div>
                        <div class="absolute rounded-full h-64 bg-brand-omajor w-64 p-5">
                            <img src="../../assets/images/canada.jpg" alt="ghghghgh" class="w-full h-full rounded-full">
                        </div>
                    </div>
                </div>
                <div class="h-screeni w-full md:flex  p-5  items-center">
                    <div class="md:w-1/2 relative">
                        <h2 class="md:text-3xl text-2xl   w-full  font-bold my-5">Oluremi Tinubu</h2>
                        <p class="t ">
                        When my dad told me about the Canadian visa processing, I thought he
                        was joking. As time went by, the admission came out and then my visa was
                        granted. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam, fuga. Quis, ut non. Ab quasi minima officiis consequuntur inventore possimus incidunt dolor perspiciatis illum! Expedita unde consequuntur at accusamus debitis!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem temporibus consectetur velit sequi minima nihil facilis saepe dolorum, veniam itaque sapiente, dolor odio. Quo odit architecto sunt voluptatibus numquam repudiandae.
                        </p>
                        <div class="w-1/2 bg-brand-secondaryx p-2 mt-10  text-white">
                            <p class="w-full text-center">Get Started </p>
                        </div>

                        <div class="bg-brand-secondaryx  flex gap-5 p-3  absolute -bottom-48">
                           <div class="h-10 w-10 bg-white" @click="$refs.carousel2.goToPrev()"></div>
                            <div class="h-10 w-10 bg-white" @click="$refs.carousel2.goToNext()"></div>
                        </div>
                    </div>
                    <div class="md:w-1/2 md:flex hidden items-center justify-center relative">
                        <div class="absolute rounded-full h-96 bg-brand-primary  w-96"></div>
                        <div class="absolute rounded-full h-80 bg-white w-80"></div>
                        <div class="absolute rounded-full h-72 bg-brand-secondaryx w-72"></div>
                        <div class="absolute rounded-full h-64 bg-brand-omajor w-64 p-5">
                            <img src="../../assets/images/canada.jpg" alt="ghghghgh" class="w-full h-full rounded-full">
                        </div>
                    </div>
                </div>
                <div class="h-screeni w-full md:flex  p-5  items-center">
                    <div class="md:w-1/2 relative">
                        <h2 class="md:text-3xl text-2xl   w-full  font-bold my-5">John Doe</h2>
                        <p class="t ">
                        When my dad told me about the Canadian visa processing, I thought he
                        was joking. As time went by, the admission came out and then my visa was
                        granted. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam, fuga. Quis, ut non. Ab quasi minima officiis consequuntur inventore possimus incidunt dolor perspiciatis illum! Expedita unde consequuntur at accusamus debitis!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem temporibus consectetur velit sequi minima nihil facilis saepe dolorum, veniam itaque sapiente, dolor odio. Quo odit architecto sunt voluptatibus numquam repudiandae.
                        </p>
                        <div class="w-1/2 bg-brand-secondaryx p-2 mt-10  text-white">
                            <p class="w-full text-center">Get Started </p>
                        </div>

                        <div class="bg-brand-secondaryx  flex gap-5 p-3  absolute -bottom-48">
                            <div class="h-10 w-10 bg-white" @click="$refs.carousel2.goToPrev()"></div>
                            <div class="h-10 w-10 bg-white" @click="$refs.carousel2.goToNext()"></div>
                        </div>
                    </div>
                    <div class="w-1/2 md:flex hidden items-center justify-center relative">
                        <div class="absolute rounded-full h-96 bg-brand-primary  w-96"></div>
                        <div class="absolute rounded-full h-80 bg-white w-80"></div>
                        <div class="absolute rounded-full h-72 bg-brand-secondaryx w-72"></div>
                        <div class="absolute rounded-full h-64 bg-brand-omajor w-64 p-5">
                            <img src="../../assets/images/canada.jpg" alt="ghghghgh" class="w-full h-full rounded-full">
                        </div>
                    </div>
                </div>
            </agile>
        </div>
        <!-- END TESTIMONIAL -->

        <div class="spacer"></div>
        <!-- FOOTER  -->
        <div class="w-screen bg-orange-600 p-5">
            <div class="md:flex">
                <div class="md:w-1/6">
                    LOGO
                </div>
                <div class="md:w-2/6  mt-5 md:mt-0 flex">
                    <div class="w-1/2">1</div>
                    <div class="w-1/2">2</div>
                </div>
                <div class="md:w-3/6 mt-5 md:mt-0">
                    <h2 class="text-lg fint-bold">Subscribe to our Newsletter</h2>
                    <div class="bg-white md:w-3/4 flex mt-10 rounded-md">
                        <input type="text" placeholder="Enter your email " class="p-2 w-3/4 rounded-l-md">
                        <button class="bg-brand-secondaryx w-1/4 rounded-r-md">Submit</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="w-screen bg-orange-800 md:p-5 p-2">
            <div class="flex">
                <h1 class="w-1/2  text-xs"> &copy; 2020, Hilton parker Services </h1>
                <h1 class="w-1/2 text-xs text-right">Made with &hearts; by Cre8ive_Collins</h1>
            </div>
        </div>

    </div>
</template>

<script setup>
import { ref } from '@vue/reactivity';
import { VueAgile as agile } from 'vue-agile'
let activeSlide = ref();
const change = (e) => {
    activeSlide.value = e.currentSlide
}




</script>

<style scoped>
.lefter{
    left: 0;
    right: 0;
}
.rounded-r-custome{
    border-radius: 0 0 600px 0;
}




.wider{
   max-width: 100%;
    max-height: 100%;
        display: block;
}

.hero{
  background-image: url('../../assets/images/bg.jpeg');
  background-size: cover;
  background-position: center; 
  background-repeat: no-repeat;

}
.bordermod{
    border-right: 1.5px solid black;
}
.chaer{
  bottom: 50%;
  right: 50%;
}
.h-screeni{
    height: 85vh;
    /* border: 2px solid red; */
}
@media only screen and (max-width: 768px) {
  /* For mobile phones: */
 .rounded-r-custome{
    border-radius: 0 0 100px 100px;
    }
 .h-screeni{
     height: 100%;
 }
 .bordermod{
     border-right: none;
     border-bottom: 1.5px solid black;
     margin-bottom: 10px ;
 }
}
</style>