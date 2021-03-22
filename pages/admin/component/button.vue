<template>
  <div class="container h-full my-24 mx-auto">
    <div class="px-4 md:px-0">
      <div class="w-full">
        <h2 class="text-2xl md:text-5xl font-black text-blue text-left mb-4">Button</h2>
        <!-- Basic -->
        <h2 class="text-2xl font-bold text-left mb-4">Basic</h2>
        <ul class="flex flex-wrap -mx-4">
          <!-- Primary -->
          <li class="px-4 my-4">
            <BasicBtn primary>LABEL</BasicBtn>
          </li>
          <!-- Secondary -->
          <li class="px-4 my-4">
            <BasicBtn second>LABEL</BasicBtn>
          </li>
          <!-- Tertiary -->
          <li class="px-4 my-4">
            <BasicBtn terti>LABEL</BasicBtn>
          </li>
          <!-- Close / Cancel -->
          <li class="px-4 my-4">
            <BasicBtn white>LABEL</BasicBtn>
          </li>
          <!-- Delete -->
          <li class="px-4 my-4">
            <BasicBtn red>LABEL</BasicBtn>
          </li>
        </ul>
        <!-- //Basic -->
      </div>

      <div class="w-full mt-12">
        <h2 class="text-2xl font-bold text-left mb-4">Small</h2>
        <ul class="flex -mx-4">
          <!-- Primary -->
          <li class="px-4 my-4">
            <SmallBtn primary>LABEL</SmallBtn>
          </li>
          <!-- Secondary -->
          <li class="px-4 my-4">
            <SmallBtn second>LABEL</SmallBtn>
          </li>
          <!-- Tertiary -->
          <li class="px-4 my-4">
            <SmallBtn terti>LABEL</SmallBtn>
          </li>
          <!-- Close / Cancel -->
          <li class="px-4 my-4">
            <SmallBtn white>LABEL</SmallBtn>
          </li>
          <!-- Delete -->
          <li class="px-4 my-4">
            <SmallBtn red>LABEL</SmallBtn>
          </li>
        </ul>
      </div>

      <div class="w-full mt-12">
        <h2 class="text-2xl font-bold text-left mb-4">基本サイズ</h2>
        <div class="flex flex-wrap -mx-4">
          <div class="w-full md:w-2/4 px-4">
            <h3 class="text-xl font-bold text-left mb-4">PC</h3>
            <h4 class="text-lg font-bold my-4">Large</h4>
            <p><BasicBtn primary>Large</BasicBtn></p>
            <h4 class="text-lg font-bold my-4">Small</h4>
            <p><SmallBtn primary>Small</SmallBtn></p>
          </div>
          <div class="w-full md:w-2/4 px-4">
            <h3 class="text-xl font-bold text-left mb-4">SP</h3>
            <h4 class="text-lg font-bold my-4">Large</h4>
            <p><BasicBtn primary>Large</BasicBtn></p>
            <h4 class="text-lg font-bold my-4">Small</h4>
            <p><SmallBtn primary>Small</SmallBtn></p>
          </div>
        </div>
      </div>

      <div class="w-full mt-12">
        <h2 class="text-2xl font-bold text-left mb-4">Filter</h2>
        <IconFilter />
      </div>

      <div class="w-full mt-20">
        <p class="text-center"><a href="/hub" class="block md:inline-block text-center font-black min-w-80 md:min-w-295 lg:min-w-335 bg-black text-white py-2 px-6 rounded">戻る</a></p>
      </div>
    </div>

  </div>
</template>

<script>
import BasicBtn from "~/components/ui/Admin/Button/BasicBtn.vue";
import SmallBtn from "~/components/ui/Admin/Button/SmallBtn.vue";
import IconFilter from "~/components/ui/Admin/Filter/IconFilter.vue";

export default {
  components: {
    BasicBtn,
    SmallBtn,
    IconFilter
  },
  layout: 'back'
};
</script>
