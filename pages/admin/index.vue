<template>
  <div class="mx-auto px-4 md:px-0">
    <h2 class="text-2xl font-bold mb-4">未完了な設定</h2>
    <p>
      まだ設定が終わっていない項目があります。設定を終わらせてしまいましょう！
    </p>
    <h3
      class="flex flex-wrap items-center text-lg mt-6 mb-4 text-black"
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4 6H22V4H4C2.9 4 2 4.9 2 6V17H0V20H14V17H4V6ZM23 8H17C16.45 8 16 8.45 16 9V19C16 19.55 16.45 20 17 20H23C23.55 20 24 19.55 24 19V9C24 8.45 23.55 8 23 8ZM22 17H18V10H22V17Z"
          fill="#111"
        />
      </svg>
      <span class="block ml-2">サロンページ</span>
    </h3>
    <ul>
      <li>
        <a
          href="#"
          class="flex flex-wrap items-center py-3 px-4 bg-white text-black rounded"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="12" cy="12" r="12" fill="#F2F2F2" />
            <path
              d="M10.1818 14.5373L7.79545 12.3433L7 13.0746L10.1818 16L17 9.73134L16.2045 9L10.1818 14.5373Z"
              fill="black"
            />
          </svg>
          <span class="block ml-2">サロンページを公開する</span>
        </a>
      </li>
      <li class="mt-2">
        <a
          href="#"
          class="flex flex-wrap items-center py-3 px-4 bg-white text-black rounded"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="12" cy="12" r="12" fill="#F2F2F2" />
            <path
              d="M10.1818 14.5373L7.79545 12.3433L7 13.0746L10.1818 16L17 9.73134L16.2045 9L10.1818 14.5373Z"
              fill="black"
            />
          </svg>
          <span class="block ml-2">サロンページを公開する</span>
        </a>
      </li>
      <li class="mt-2">
        <a
          href="#"
          class="flex flex-wrap items-center py-3 px-4 bg-white text-black rounded"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="12" cy="12" r="12" fill="#F2F2F2" />
            <path
              d="M10.1818 14.5373L7.79545 12.3433L7 13.0746L10.1818 16L17 9.73134L16.2045 9L10.1818 14.5373Z"
              fill="black"
            />
          </svg>
          <span class="block ml-2">サロンページを公開する</span>
        </a>
      </li>
    </ul>
    <div class="mt-12">
      <div class="flex flex-wrap justify-between mb-4">
        <h2 class="text-2xl font-bold">お知らせ</h2>
        <p><a href="#" class="text-sm text-black">すべてを見る</a></p>
      </div>
      <ul>
        <li class="w-full">
          <a href="#" class="block text-black">
            <div class="bg-white shadow rounded py-4 px-5 md:px-6">
              <span
                class="inline-block text-sm md:text-base font-black border-2 border-black px-2 py-1 md:py-0 rounded leading-4 md:leading-7"
                >運営から</span
              >
              <h3 class="text-base md:text-lg mt-2 mb-1">
                HairBookメンテナンスのお知らせ
              </h3>
              <p class="text-xs">
                マイページに新機能を追加するためメンテナンスを行...
              </p>
            </div>
          </a>
        </li>
      </ul>
    </div>
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
