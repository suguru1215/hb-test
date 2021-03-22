<template>
  <span class="inline-block bg-transparent py-1 px-3 font-black border-3 leading-5 rounded" :style="tagStyle">
    <slot />
  </span>
</template>

<script>
export default {
  computed: {
    tagStyle: {
      get() {
        let tagColor = "#000";
        let tagBorder = "#000";
        if (this.gray) {
          tagColor = "#a8a8a8";
          tagBorder = "#a8a8a8";
        }
        if (this.red) {
          tagColor = "#d01010";
          tagBorder = "#d01010";
        }
        return `color: ${tagColor}; border-color: ${tagBorder};`;
      },
    },
  },
  name: "MyTag",
  props: {
    primary: {
      type: Boolean,
      required: false,
      default: false,
    },
    gray: {
      type: Boolean,
      required: false,
      default: false,
    },
    red: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
};
</script>
