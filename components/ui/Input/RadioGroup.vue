<template>
  <ul>
    <slot v-bind="slotProps">
      <app-radio
        v-for="(radioItem, index) in radioItems"
        :key="index"
        :name="name"
        :radioItem="radioItem"
        :id="`radio${name}${index}`"
        :checked="radioItem.value === value"
        @change="onchange"
      />
    </slot>
  </ul>
</template>

<script>
import Radio from "./Radio.vue";
export default {
  components: {
    "app-radio": Radio
  },
  model: {
    prop: "value",
    event: "change"
  },
  props: {
    radioItems: Array,
    value: String,
    name: String
  },
  methods: {
    onchange(val) {
      this.$emit("change", val);
    }
  },
  computed: {
    slotProps() {
      return {
        name: this.$props.name,
        radioItems: this.$props.radioItems,
        value: this.$props.value,
        onchange: this.onchange
      };
    }
  }
};
</script>
