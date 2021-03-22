<template>
  <div>
    <div class="salon-wrap">
      <div class="container max-w-full mx-auto lg:px-56 md:px-16 px-4 mt-16 md:mt-24">
        <section
          class="bg-white w-full md:w-10/12 lg:w-8/12 mx-auto py-8 px-6 md:px-12 lg:px-20 mt-6 md:mt-8 rounded-lg"
        >
          <div>
            <h3 class="block text-lg mb-2">メールアドレス</h3>
            <div class="w-full">
              <input
                class="w-full text-base border-2 border-gray-300 bg-white h-12 px-4 rounded-lg focus:outline-none search-input"
                type="email"
                name="email"
                placeholder="入力してください"
              />
            </div>
          </div>
          <div class="mt-6">
            <h3 class="block text-lg mb-2">パスワード</h3>
            <div class="w-full">
              <input
                class="w-full text-base border-2 border-gray-300 bg-white h-12 px-4 rounded-lg focus:outline-none search-input"
                type="email"
                name="email"
                placeholder="入力してください"
              />
              <span class="block text-sm mt-2"
                >数字と大文字をそれぞれ1文字ずつ含めて、8文字以上で入力してください。</span
              >
            </div>
          </div>
          <p class="text-center mt-6">
            <a
              href="#"
              class="block mx-auto w-full md:w-96 bg-black border-2 border-black hover:bg-blue-dark text-white font-bold py-3 px-4 rounded"
              >ログイン</a
            >
          </p>
          <p class="text-base text-center my-6">または</p>
          <ul>
            <li>
              <a
                href="#"
                class="flex flex-wrap items-center text-center mx-auto w-full md:w-96 bg-white border-2 border-accent text-black font-bold py-3 px-4 rounded"
                ><span class="block flex-1"><img
                  src="~/assets/images/social/icon_fb.png"
                  alt=""
                  class="w-6 h-6"
                /></span>
                <span class="block m-auto">Facebookでログイン</span>
                <span class="block flex-1"></span>
              </a>
            </li>
            <li class="mt-4">
              <a
                href="#"
                class="flex flex-wrap items-center text-center mx-auto w-full md:w-96 bg-white border-2 border-accent text-black font-bold py-3 px-4 rounded"
                ><span class="block flex-1"
                  ><img
                  src="~/assets/images/social/icon_g.png"
                  alt=""
                  class="w-6 h-6"
                /></span>
                <span class="block m-auto">Googleでログイン</span>
                <span class="block flex-1"></span>
              </a>
            </li>
            <li class="mt-4">
              <a
                href="#"
                class="flex flex-wrap items-center justify-between text-center mx-auto w-full md:w-96 bg-white border-2 border-accent text-black font-bold py-3 px-4 rounded"
                ><span class="block flex-1"
                  ><img src="~/assets/images/social/icon_line.png" alt="" class="w-6 h-6 flex-1"
                /></span>
                <span class="block m-auto">LINEでログイン</span>
                <span class="block flex-1"></span>
              </a>
            </li>
          </ul>
          <p class="text-base mx-auto w-full md:w-96 mt-4">
            アカウント登録は
            <nuxt-link
              to="/register"
              class="text-beige-900 underline"
            >
            こちら
            </nuxt-link>
          </p>
        </section>
        <!-- //section-contents -->
      </div>
      <!-- //container -->
    </div>
  </div>
</template>
