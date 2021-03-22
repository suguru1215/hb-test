<template>
  <header v-if="expand" class="bg-white header">
    <nav class="md:py-3">
      <div
        class="container max-w-full mx-auto px-4 flex flex-wrap items-center justify-between mt-0 py-3 md:py-0"
      >
        <div class="relative w-wrap mx-auto flex items-center">
          <a
            class="logo text-black no-underline hover:no-underline font-bold text-lg lg:text-2xl"
            href="#"
          >
            Hairbook
          </a>
          <span class="block min-h-full mx-2 bg-black header-line"></span>
          <span
            class="inline-block text-black font-black header-subttl"
            ><slot></slot
          ></span>
          <p @click="close" class="absolute top-0 right-4 cursor-pointer">終了</p>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "end",
  data() {
    return {
      expand: true,
    };
  },
  methods: {
    close: function () {
      this.expand = false;
    },
  },
};
</script>
