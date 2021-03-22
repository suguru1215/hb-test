<template>
  <header class="site-header top">
    <nav id="header" class="fixed w-full bg-white border-black border-b-2 top-0 z-999">
      <div
        class="container max-w-full mx-auto lg:px-56 md:px-16 px-4 flex flex-wrap items-center justify-between mt-0 py-2"
      >
        <div class="flex items-center">
          <nuxt-link
            to="/"
            class="logo text-black no-underline hover:no-underline font-bold text-lg lg:text-2xl"
          >
            Hairbook
          </nuxt-link>
        </div>
        <div
          class="flex items-center absolute right-4 top-2 lg:right-0 lg:top-0 lg:relative"
        >
          <nuxt-link
            to="/login"
            class="text-beige-900 font-bold mr-6 hidden lg:block"
          >
            ログイン
          </nuxt-link>
          <div
            id="nav-content"
            class="absolute md:w-56 top-full right-0 rounded-lg shadow mt-4 md:mt-0 bg-white py-2 px-0 overflow-y-auto z-20"
            v-show="!show"
          >
            <h4 class="text-black text-base font-bold py-3 px-6">
              ゲストさん
            </h4>
            <ul>
              <li class="text-sm">
                <nuxt-link
                  to="/mypage/bookmark"
                  class="block text-black py-3 px-6 hover:bg-beige-100"
                >
                  ブックマーク
                </nuxt-link>
              </li>
              <li class="text-sm">
                <a href="#" class="block text-black py-3 px-6 hover:bg-beige-100"
                  >ヘルプ</a
                >
              </li>
              <li class="text-sm">
                <nuxt-link
                  to="/login"
                  class="block text-black py-3 px-6 hover:bg-beige-100"
                >
                  ログイン
                </nuxt-link>
              </li>
              <li class="text-sm">
                <nuxt-link
                  to="/register"
                  class="block text-black py-3 px-6 hover:bg-beige-100"
                >
                  アカウント登録
                </nuxt-link>
              </li>
            </ul>
          </div>
          <button
            id="nav-toggle"
            class="items-center p-1 text-pink-800 hover:text-gray-900 focus:outline-none focus:shadow-outline transform transition duration-300 ease-in-out"
            @click="show=!show"
          >
            <svg
              class="fill-black h-6 w-6"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      show: true
    };
  }
};
</script>
