<template>
  <header class="bg-white border-b-2 border-black header">
    <nav id="header" class="relative w-full text-black z-10">
    <!-- <nav id="header" class="fixed w-full top-0 text-black z-10"> -->
      <!-- <div
        class="container max-w-full mx-auto lg:px-32 md:px-16 px-4 flex flex-wrap items-center justify-between mt-0 py-2"
      > -->
      <div
        class="container max-w-full mx-auto px-4 flex flex-wrap items-center justify-between mt-0 py-3"
      >
        <div class="flex items-center">
          <a
            class="logo text-black no-underline hover:no-underline font-black text-lg lg:text-xl"
            href="#"
          >
            Hairbook
          </a>
          <span class="block min-h-full mx-2 bg-black header-line"></span>
          <span
            class="relative inline-block text-black font-black header-subttl"
            ><slot></slot></span
          >
        </div>
      </div>
    </nav>
  </header>
  <!-- //header -->
</template>
