<template>
  <div>
    <label for="john" class="block relative my-4 pl-8 font-black cursor-pointer custom-checkbox">
      <input type="checkbox" id="john" value="John" v-model="checkedNames" />
      <span class="checkmark"></span>
      John
    </label>
  </div>
</template>

<script>
export default {
  el: "...",
  data: {
    checkedNames: [],
  },
};
</script>
