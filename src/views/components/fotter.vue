<template>
  <div
    class="flex bg-brand-major z-50 shadow-xl backdrop-filter backdrop-blur-lg  md:py-2 pb-1 px-4 md:px-12 fixed w-full bottom-0 text-white z-200"
  >
    <div class="flex-grow md:text-sm text-xxs pt-2">
      <b>Hilton Parker</b> <span class="opacity-50"> &copy; 2022</span>
    </div>
    <div class="w-1/3 text-center hidden md:block">
     <b> <a class="cursor-pointer" href="#" target="blank"
        > LINK
        <!-- <img
          src="@/user/assets/img/store-play-white.png"
          class="inline-block h-8"
        /> -->
      </a></b>
       <b> <a class="cursor-pointer" href="#" target="blank"
        > LINK
        <!-- <img
          src="@/user/assets/img/store-play-white.png"
          class="inline-block h-8"
        /> -->
      </a></b>
    </div>
    <div class="w-1/3 text-right text-xxs pt-3 hidden md:block">
      <b><a href="#" class="text-white">Made with &hearts;	 by</a></b>
      <span class="opacity-75">
        &bull;
        <a href="#" class="text-white"
          >Cre8ive_Collins</a
        ></span
      >
    </div>
  </div>
</template>

<script>
export default {
    name : "Foot",
  props: ["link"]
}
</script>
