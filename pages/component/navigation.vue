<template>
  <div>
    <div class="container h-full my-24 mx-auto">
      <div class="w-full px-4 md:px-0">
        <h2 class="text-2xl md:text-5xl font-black text-blue text-left mb-4">
          Navigation
        </h2>

        <div class="mt-12">
          <h2 class="text-xl font-black text-blue text-left mb-4">SP</h2>
          <div class="flex flex-wrap -mx-4">
            <div class="w-full md:w-4/12 px-4 my-6">
              <HeaderDefault />
            </div>
          </div>
        </div>

        <div class="w-full mt-20">
          <p class="text-center">
            <a
              href="/"
              class="block md:inline-block text-center font-black min-w-80 md:min-w-295 lg:min-w-335 bg-black text-white py-2 px-6 rounded"
              >トップに戻る</a
            >
          </p>
        </div>
      </div>
      <!-- //w-full -->
    </div>
  </div>
</template>

<script>
import HeaderDefault from "~/components/layouts/Headers/HeaderDefault.vue";

export default {
  components: {
    HeaderDefault
  }
};
</script>
