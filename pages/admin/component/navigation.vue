<template>
  <div>
    <div class="container h-full my-24 mx-auto">
      <div class="w-full px-4 md:px-0">
        <h2 class="text-2xl md:text-5xl font-black text-blue text-left mb-4">Navigation</h2>

        <div class="mt-12">
          <h2 class="text-xl font-black text-blue text-left mb-4">SP</h2>
          <div class="flex flex-wrap -mx-4">
            <div class="w-full md:w-4/12 px-4 my-6">
              <HeaderDefault />
            </div>
            <div class="w-full md:w-4/12 px-4 my-6">
              <div>
                <HeaderSub>よくある質問</HeaderSub>
              </div>
              <div class="mt-6">
                <HeaderSub>サロン管理</HeaderSub>
              </div>
            </div>
            <div class="w-full md:w-4/12 px-4 my-6">
              <HeaderBack>よくある質問</HeaderBack>
            </div>
            <div class="w-full md:w-4/12 px-4 my-6">
              <HeaderClose>検索条件</HeaderClose>
            </div>
            <div class="w-full md:w-4/12 px-4 my-6">
              <HeaderEnd>はじめに</HeaderEnd>
            </div>
          </div>
        </div>

        <div class="mt-12">
          <h2 class="text-xl font-black text-blue text-left mb-4">PC</h2>
          <div class="flex flex-wrap -mx-4">
            <div class="w-full px-4 my-6">
              <HeaderDefault />
            </div>
            <div class="w-full px-4 my-6">
              <div>
                <HeaderSub>よくある質問</HeaderSub>
              </div>
              <div class="mt-6">
                <HeaderSub>サロン管理</HeaderSub>
              </div>
            </div>
            <div class="w-full px-4 my-6">
              <HeaderBack>よくある質問</HeaderBack>
            </div>
            <div class="w-full px-4 my-6">
              <HeaderClose>検索条件</HeaderClose>
            </div>
            <div class="w-full px-4 my-6">
              <HeaderEnd>はじめに</HeaderEnd>
            </div>
          </div>
        </div>

        <div class="mt-12">
          <div class="bg-lightblue py-6 px-4 md:py-8 md:px-6">
            <h2 class="text-xl font-black text-blue text-left mb-4">Sidebar</h2>
            <Sidebar />
          </div>
        </div>

        <div class="w-full mt-20">
          <p class="text-center">
            <a
              href="/hub"
              class="block md:inline-block text-center font-bold min-w-80 md:min-w-295 lg:min-w-335 bg-black text-white py-2 px-6 rounded"
              >戻る</a
            >
          </p>
        </div>
      </div>
      <!-- //w-full -->
    </div>
  </div>
</template>


<script>
import HeaderDefault from "~/components/layouts/Admin/Headers/HeaderDefault.vue";
import HeaderSub from "~/components/layouts/Admin/Headers/HeaderSub.vue";
import HeaderBack from "~/components/layouts/Admin/Headers/HeaderBack.vue";
import HeaderClose from "~/components/layouts/Admin/Headers/HeaderClose.vue";
import HeaderEnd from "~/components/layouts/Admin/Headers/HeaderEnd.vue";
import Sidebar from "~/components/layouts/Admin/Sidebar/Sidebar.vue";

export default {
  components: {
    HeaderDefault,
    HeaderSub,
    HeaderBack,
    HeaderClose,
    HeaderEnd,
    Sidebar
  },
};
</script>
