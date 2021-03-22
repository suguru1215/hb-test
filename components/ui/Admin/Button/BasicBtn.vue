<template>
  <button class="min-w-80 md:min-w-295 lg:min-w-335 text-base font-black py-2 px-6 rounded" :style="btnStyle">
    <slot />
  </button>
</template>


<script>
export default {
  computed: {
    btnStyle: {
      get() {
        let buttonBgColor = "#000";
        let buttonColor = "#fff";
        let buttonBorder = "#000";
        if (this.second) {
          buttonBgColor = "#efefef";
          buttonColor = "#000";
          buttonBorder = "#efefef";
        }
        if (this.terti) {
          buttonBgColor = "#fff";
          buttonColor = "#000";
          buttonBorder = "#efefef";
        }
        if (this.white) {
          buttonBgColor = "#fff";
          buttonColor = "#000";
          buttonBorder = "#fff";
        }
        if (this.red) {
          buttonBgColor = "#d01010";
          buttonColor = "#fff";
          buttonBorder = "#d01010";
        }
        return `background-color: ${buttonBgColor}; color: ${buttonColor}; border: solid 2px ${buttonBorder};`;
      },
    },
  },
  name: "MyButton",
  props: {
    primary: {
      type: Boolean,
      required: false,
      default: false,
    },
    second: {
      type: Boolean,
      required: false,
      default: false,
    },
    terti: {
      type: Boolean,
      required: false,
      default: false,
    },
    white: {
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
