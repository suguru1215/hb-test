<template>
  <select
    v-model="selected"
    class="w-full md:w-96 text-base text-black border-2 border-gray-400 bg-white py-3 px-4 rounded-lg focus:outline-none appearance-none select-box"
  >
    <option>選択してください</option>
    <option>A</option>
    <option>B</option>
    <option>C</option>
  </select>
</template>

<script>
export default {
  el: '...',
  data: {
    selected: ''
  }
};
</script>
