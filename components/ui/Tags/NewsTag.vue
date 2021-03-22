<template>
  <span class="inline-block font-black" :style="tagStyle">
    <slot />
  </span>
</template>

<script>
export default {
  computed: {
    tagStyle: {
      get() {
        let tagColor = "#a8a8a8";
        if (this.gold) {
          tagColor = "#b68b62";
        }
        return `color: ${tagColor};`;
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
    gold: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
};
</script>
