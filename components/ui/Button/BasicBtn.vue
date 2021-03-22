<template>
  <button
    class="min-w-80 md:min-w-295 lg:min-w-335 text-base font-black py-3 px-6 border-2 rounded"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: "MyButton"
};
</script>
