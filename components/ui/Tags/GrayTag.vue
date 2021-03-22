<template>
  <span class="inline-block rounded py-2 px-3 bg-gray-700 text-black font-black leading-5" :style="tagStyle">
    <slot />
  </span>
</template>

<script>
export default {
  computed: {
    tagStyle: {
      get() {
        let tagTxtColor = "#000";
        if (this.white) {
          tagTxtColor = "#fff";
        }
        return `color: ${tagTxtColor};`;
      },
    },
  },
  name: "GrayTag",
  props: {
    primary: {
      type: Boolean,
      required: false,
      default: false,
    },
    white: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
};
</script>
