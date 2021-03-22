<template>
  <ul>
    <li class="inline-block py-3 px-4 my-4 bg-white border-2 border-gray-400 rounded">
      <input type="radio" id="optionA" name="radioBtn" value="動画" class="radio-single" v-model="radioValue" />
      <label for="optionA" class="custom-radio">動画</label>
    </li>
    <li class="inline-block py-3 px-4 my-4 bg-white border-2 border-gray-400 rounded">
      <input type="radio" id="optionB" name="radioBtn" value="写真" class="radio-single" v-model="radioValue" />
      <label for="optionB" class="custom-radio">写真</label>
    </li>
  </ul>
</template>

<script>
export default {
  el: '...',
  data: {
    radioValue: '動画'
  }
};
</script>
