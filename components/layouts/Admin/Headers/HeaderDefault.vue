<template>
  <header class="lg:hidden header">
    <nav id="header" class="fixed w-full bg-white border-b-2 border-black top-0 text-black z-10">
      <div
        class="container max-w-full mx-auto lg:px-32 md:px-16 px-4 flex flex-wrap items-center justify-between mt-0 py-2"
      >
        <h1>
          <a
            class="logo text-black no-underline hover:no-underline font-bold text-lg lg:text-xl"
            href="#"
          >
            Beauty Salon
          </a>
        </h1>
        <div
          class="flex items-center absolute right-4 top-3 lg:top-0 lg:relative"
        >
          <a href="#" class="block mr-6">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.9996 22C13.0996 22 13.9996 21.1 13.9996 20H9.99956C9.99956 21.1 10.8896 22 11.9996 22ZM17.9996 16V11C17.9996 7.93 16.3596 5.36 13.4996 4.68V4C13.4996 3.17 12.8296 2.5 11.9996 2.5C11.1696 2.5 10.4996 3.17 10.4996 4V4.68C7.62956 5.36 5.99956 7.92 5.99956 11V16L4.70956 17.29C4.07956 17.92 4.51956 19 5.40956 19H18.5796C19.4696 19 19.9196 17.92 19.2896 17.29L17.9996 16Z"
                fill="black"
              />
            </svg>
          </a>
          <div
            class="relative z-50 cursor-pointer hamburger"
            :class="{ active: isMenu }"
            @click="isMenu = !isMenu"
          >
            <span class="line" />
            <span class="line center" />
            <span class="line" />
          </div>
          <NavSide v-if="isMenu" />
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isMenu: false,
    };
  },
};
</script>
