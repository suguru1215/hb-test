<template>
  <header v-if="expand" class="bg-white header">
    <nav class="md:py-3">
      <div
        class="container max-w-full mx-auto px-4 flex flex-wrap items-center justify-between mt-0 py-3 md:py-0"
      >
        <div class="relative w-wrap mx-auto flex items-center">
          <h1 class="mx-auto font-normal text-lg"><slot></slot></h1>
          <p @click="close" class="absolute right-4 cursor-pointer">
            <i class="mdi mdi-close text-3xl"></i>
          </p>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
  export default {
    name: "close",
    data () {
      return {
        expand: true
      }
    },
    methods: {
      close: function() {
        this.expand = false
      }
    }
  }
</script>
