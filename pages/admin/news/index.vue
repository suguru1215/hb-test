<template>
  <div class="px-4 md:px-0">
    <h2 class="text-xl font-bold mb-6">お知らせ</h2>
    <ul>
      <li class="w-full mb-1 md:mb-4">
        <nuxt-link
          to="single"
          class="block text-black"
          append
        >
          <div class="bg-white shadow rounded py-3 px-4 md:py-4 md:px-6">
            <h3 class="text-sm md:text-lg font-bold mb-2">
              お知らせタイトル
            </h3>
            <p class="text-xs mb-2">
              お知らせ本文。お知らせ本文。お知らせ本文。お知らせ本文。お知らせ本文。お知らせ本文。お知らせ本文。お知らせ本文。お知らせ本文。
            </p>
            <p class="text-2xs text-gray-500">約7時間前</p>
          </div>
        </nuxt-link>
      </li>
      <li class="w-full mb-1 md:mb-4">
        <nuxt-link
          to="single"
          class="block text-black"
          append
        >
          <div class="bg-white shadow rounded py-3 px-4 md:py-4 md:px-6">
            <h3 class="text-sm md:text-lg font-bold mb-2">
              お知らせタイトル
            </h3>
            <p class="text-xs mb-2">
              お知らせ本文。お知らせ本文。お知らせ本文。お知らせ本文。お知らせ本文。お知らせ本文。お知らせ本文。お知らせ本文。お知らせ本文。
            </p>
            <p class="text-2xs text-gray-500">約7時間前</p>
          </div>
        </nuxt-link>
      </li>
      <li class="w-full mb-1 md:mb-4">
        <nuxt-link
          to="single"
          class="block text-black"
          append
        >
          <div class="bg-white shadow rounded py-3 px-4 md:py-4 md:px-6">
            <h3 class="text-sm md:text-lg font-bold mb-2">
              お知らせタイトル
            </h3>
            <p class="text-xs mb-2">
              お知らせ本文。お知らせ本文。お知らせ本文。お知らせ本文。お知らせ本文。お知らせ本文。お知らせ本文。お知らせ本文。お知らせ本文。
            </p>
            <p class="text-2xs text-gray-500">約7時間前</p>
          </div>
        </nuxt-link>
      </li>
      <li class="w-full mb-1 md:mb-4">
        <nuxt-link
          to="single"
          class="block text-black"
          append
        >
          <div class="bg-white shadow rounded py-3 px-4 md:py-4 md:px-6">
            <h3 class="text-sm md:text-lg font-bold mb-2">
              お知らせタイトル
            </h3>
            <p class="text-xs mb-2">
              お知らせ本文。お知らせ本文。お知らせ本文。お知らせ本文。お知らせ本文。お知らせ本文。お知らせ本文。お知らせ本文。お知らせ本文。
            </p>
            <p class="text-2xs text-gray-500">約7時間前</p>
          </div>
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  layout: 'admin',
  head() {
    return {
      title: 'サロンページ設定',
      bodyAttrs: {
        class: 'body-admin'
      }
    }
  }
}
</script>
