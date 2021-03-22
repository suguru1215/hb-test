<template>
  <li class="table w-full md:w-96 py-3 px-4 my-4 bg-white border-2 border-gray-400 rounded">
    <input
      type="radio"
      class="radio-single"
      :id="id"
      :name="name"
      :value="radioItem.value"
      :checked="checked"
      @change="$emit('change', radioItem.value);"
    />
    <label :for="id" class="custom-radio">{{ radioItem.label }}</label>
  </li>
</template>

<script>
export default {
  name: "AppRadio",
  props: {
    id: String,
    name: String,
    radioItem: Object,
    checked: Boolean
  },
  data() {
    return {};
  }
};
</script>
