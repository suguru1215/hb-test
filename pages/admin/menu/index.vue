<template>
  <div class="mx-auto px-4 md:px-0">
    <div class="flex flex-wrap items-center justify-between mb-4">
      <h2 class="text-2xl font-bold">未完了な設定</h2>
      <p
        class="fixed md:relative bottom-4 inset-x-4 md:bottom-0 md:inset-x-0 text-right z-10"
      >
        <a
          href="#"
          class="block text-center w-full md:w-56 h-12 bg-black hover:bg-blue-dark text-white font-bold py-2 px-4 ml-auto rounded leading-7"
          >新規登録</a
        >
      </p>
    </div>
    <div>
      <h3 class="text-xl mb-4">おすすめメニュー</h3>
      <ul class="w-full flex flex-wrap relative mx-auto">
        <li class="w-full reserve-menu">
          <div
            class="flex flex-wrap items-center bg-white rounded shadow py-3 px-2 thumb-card"
          >
            <select
              class="text-sm text-black border-2 border-gray-100 bg-white h-12 px-4 rounded-lg focus:outline-none search-input"
              name="prefectures"
              id="prefectures"
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
            <nuxt-link to="single-reco" class="thumb-card__link" append>
              <div class="flex flex-wrap items-center w-full">
                <div class="ml-2 overflow-hidden thumb-card__thumb">
                  <img
                    src="~/assets/images/admin/photo_01.jpg"
                    class="w-full object-cover object-center"
                    alt=""
                  />
                </div>
                <div class="relative flex flex-col font-bold thumb-card__col">
                  <h3 class="text-base font-bold mb-2">
                    ■人気No.1■<br />うるツヤ☆ビューティープラン￥13500→￥8100
                  </h3>
                  <div
                    class="flex flex-wrap justify-between items-center mt-auto"
                  >
                    <p class="font-bold">
                      ¥8,100<span class="font-normal">（税込）</span>
                    </p>
                    <p class="text-sm text-right">
                      <a
                        href="#"
                        class="inline-block bg-beige-100 font-bold text-center text-white py-1 w-16 rounded"
                        >表示</a
                      >
                    </p>
                  </div>
                </div>
              </div>
            </nuxt-link>
          </div>
        </li>
        <li class="w-full mt-3 reserve-menu">
          <div
            class="flex flex-wrap items-center bg-white rounded shadow py-3 px-2 thumb-card"
          >
            <select
              class="text-sm text-black border-2 border-gray-100 bg-white h-12 px-4 rounded-lg focus:outline-none search-input"
              name="prefectures"
              id="prefectures"
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
            <nuxt-link to="single-reco" class="thumb-card__link" append>
              <div class="flex flex-wrap items-center w-full">
                <div class="ml-2 overflow-hidden thumb-card__thumb">
                  <img
                    src="~/assets/images/admin/photo_02.jpg"
                    class="w-full object-cover object-center"
                    alt=""
                  />
                </div>
                <div class="relative flex flex-col font-bold thumb-card__col">
                  <h3 class="text-base font-bold mb-2">
                    ■人気No.1■<br />うるツヤ☆ビューティープラン￥13500→￥8100
                  </h3>
                  <p class="text-sm text-right mt-auto">
                    <a
                      href="#"
                      class="inline-block bg-beige-100 font-bold text-center text-white py-1 w-16 rounded"
                      >表示</a
                    >
                  </p>
                </div>
              </div>
            </nuxt-link>
          </div>
        </li>
        <li class="w-full mt-3 reserve-menu">
          <div
            class="flex flex-wrap items-center bg-white rounded shadow py-3 px-2 thumb-card"
          >
            <select
              class="text-sm text-black border-2 border-gray-100 bg-white h-12 px-4 rounded-lg focus:outline-none search-input"
              name="prefectures"
              id="prefectures"
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
            <nuxt-link to="single-reco" class="thumb-card__link" append>
              <div class="flex flex-wrap items-center w-full">
                <div class="ml-2 overflow-hidden thumb-card__thumb">
                  <img
                    src="~/assets/images/admin/photo_02.jpg"
                    class="w-full object-cover object-center"
                    alt=""
                  />
                </div>
                <div class="relative flex flex-col font-bold thumb-card__col">
                  <h3 class="text-base font-bold mb-2">
                    ■人気No.1■<br />うるツヤ☆ビューティープラン￥13500→￥8100
                  </h3>
                  <p class="text-sm text-right mt-auto">
                    <a
                      href="#"
                      class="inline-block bg-beige-100 font-bold text-center text-white py-1 w-16 rounded"
                      >表示</a
                    >
                  </p>
                </div>
              </div>
            </nuxt-link>
          </div>
        </li>
      </ul>
      <div class="flex flex-wrap items-center mt-8 mb-4">
        <p
          class="text-sm inline-block bg-gray-300 font-bold text-center text-white py-1 w-16 rounded"
        >
          非表示
        </p>
        <h3 class="text-base font-normal ml-2">おすすめ</h3>
        <select
          class="text-sm text-black border-2 border-gray-100 bg-transparent px-4 py-2 ml-auto rounded-lg focus:outline-none"
          name="prefectures"
          id="prefectures"
        >
          <option value="1">1</option>
        </select>
      </div>
      <ul class="w-full flex flex-wrap relative mx-auto">
        <li class="w-full reserve-menu">
          <div
            class="flex flex-wrap items-center bg-white rounded shadow py-3 px-2 thumb-card"
          >
            <select
              class="text-sm text-black border-2 border-gray-100 bg-white h-12 px-4 rounded-lg focus:outline-none search-input"
              name="prefectures"
              id="prefectures"
            >
              <option value=""></option>
            </select>
            <nuxt-link
              to="single-reco"
              class="thumb-card__link"
              append
            >
              <div class="flex flex-wrap items-center w-full">
                <div class="ml-2 overflow-hidden thumb-card__thumb">
                  <img
                    src="~/assets/images/admin/thumb_01.jpg"
                    class="w-full object-cover object-center"
                    alt=""
                  />
                </div>
                <div class="relative flex flex-col font-bold thumb-card__col">
                  <h3 class="text-base font-bold mb-2">
                    ■人気No.1■<br />うるツヤ☆ビューティープラン￥13500→￥8100
                  </h3>
                  <p class="text-sm text-right mt-auto">
                    <a
                      href="#"
                      class="inline-block bg-gray-300 font-bold text-center text-white py-1 w-16 rounded"
                      >非表示</a
                    >
                  </p>
                </div>
              </div>
            </nuxt-link>
          </div>
        </li>
        <li class="w-full mt-3 reserve-menu">
          <div
            class="flex flex-wrap items-center bg-white rounded shadow py-3 px-2 thumb-card"
          >
            <select
              class="text-sm text-black border-2 border-gray-100 bg-white h-12 px-4 rounded-lg focus:outline-none search-input"
              name="prefectures"
              id="prefectures"
            >
              <option value=""></option>
            </select>
            <nuxt-link
              to="single-reco"
              class="thumb-card__link"
              append
            >
              <div class="flex flex-wrap items-center w-full">
                <div class="ml-2 overflow-hidden thumb-card__thumb">
                  <img
                    src="~/assets/images/admin/thumb_01.jpg"
                    class="w-full object-cover object-center"
                    alt=""
                  />
                </div>
                <div class="relative flex flex-col font-bold thumb-card__col">
                  <h3 class="text-base font-bold mb-2">
                    ■人気No.1■<br />うるツヤ☆ビューティープラン￥13500→￥8100
                  </h3>
                  <p class="text-sm text-right mt-auto">
                    <a
                      href="#"
                      class="inline-block bg-gray-300 font-bold text-center text-white py-1 w-16 rounded"
                      >非表示</a
                    >
                  </p>
                </div>
              </div>
            </nuxt-link>
          </div>
        </li>
      </ul>
    </div>
    <div class="mt-12">
      <h3 class="text-xl mb-4">ベーシックメニュー</h3>
      <div>
        <h4 class="font-normal mb-2">カット</h4>
        <ul class="w-full flex flex-wrap relative mx-auto">
          <li class="w-full reserve-menu">
            <div
              class="flex flex-wrap items-center bg-white rounded shadow py-3 px-2 thumb-card"
            >
              <select
                class="text-sm text-black border-2 border-gray-100 bg-white h-12 px-4 rounded-lg focus:outline-none search-input"
                name="prefectures"
                id="prefectures"
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
              <nuxt-link to="single-basic" class="thumb-card__link" append>
                <div class="relative flex flex-col font-bold pl-2">
                  <h3 class="text-base font-bold mb-2">
                    カット（S・B込）〜60分〜
                  </h3>
                  <div
                    class="flex flex-wrap justify-between items-center mt-auto"
                  >
                    <p class="font-bold">
                      ¥8,100<span class="font-normal">（税込）</span>
                    </p>
                    <p class="text-sm text-right">
                      <a
                        href="#"
                        class="inline-block bg-beige-100 font-bold text-center text-white py-1 w-16 rounded"
                        >表示</a
                      >
                    </p>
                  </div>
                </div>
              </nuxt-link>
            </div>
          </li>
          <li class="w-full mt-3 reserve-menu">
            <div
              class="flex flex-wrap items-center bg-white rounded shadow py-3 px-2 thumb-card"
            >
              <select
                class="text-sm text-black border-2 border-gray-100 bg-white h-12 px-4 rounded-lg focus:outline-none search-input"
                name="prefectures"
                id="prefectures"
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
              <nuxt-link to="single-basic" class="thumb-card__link" append>
                <div class="relative flex flex-col font-bold pl-2">
                  <h3 class="text-base font-bold mb-2">
                    カット（S・B込）〜60分〜
                  </h3>
                  <div
                    class="flex flex-wrap justify-between items-center mt-auto"
                  >
                    <p class="font-bold">
                      ¥8,100<span class="font-normal">（税込）</span>
                    </p>
                    <p class="text-sm text-right">
                      <a
                        href="#"
                        class="inline-block bg-beige-100 font-bold text-center text-white py-1 w-16 rounded"
                        >表示</a
                      >
                    </p>
                  </div>
                </div>
              </nuxt-link>
            </div>
          </li>
        </ul>
        <div class="flex flex-wrap items-center mt-8 mb-4">
          <p
            class="text-sm inline-block bg-gray-300 font-bold text-center text-white py-1 w-16 rounded"
          >
            非表示
          </p>
          <h3 class="text-base font-normal ml-2">カット</h3>
          <select
            class="text-sm text-black border-2 border-gray-100 bg-transparent px-4 py-2 ml-auto rounded-lg focus:outline-none"
            name="prefectures"
            id="prefectures"
          >
            <option value="1">1</option>
          </select>
        </div>
        <ul class="w-full flex flex-wrap relative mx-auto">
          <li class="w-full reserve-menu">
            <div
              class="flex flex-wrap items-center bg-white rounded shadow py-3 px-2 thumb-card"
            >
              <select
                class="text-sm text-black border-2 border-gray-100 bg-white h-12 px-4 rounded-lg focus:outline-none search-input"
                name="prefectures"
                id="prefectures"
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
              <nuxt-link to="single-basic" class="thumb-card__link" append>
                <div class="relative flex flex-col font-bold pl-2">
                  <h3 class="text-base font-bold mb-2">
                    カット（S・B込）〜60分〜
                  </h3>
                  <div
                    class="flex flex-wrap justify-between items-center mt-auto"
                  >
                    <p class="font-bold">
                      ¥8,100<span class="font-normal">（税込）</span>
                    </p>
                    <p class="text-sm text-right">
                      <a
                        href="#"
                        class="inline-block bg-beige-100 font-bold text-center text-white py-1 w-16 rounded"
                        >表示</a
                      >
                    </p>
                  </div>
                </div>
              </nuxt-link>
            </div>
          </li>
        </ul>
      </div>
      <div class="mt-8">
        <h4 class="font-normal mb-2">カラー</h4>
        <ul class="w-full flex flex-wrap relative mx-auto">
          <li class="w-full reserve-menu">
            <div
              class="flex flex-wrap items-center bg-white rounded shadow py-3 px-2 thumb-card"
            >
              <select
                class="text-sm text-black border-2 border-gray-100 bg-white h-12 px-4 rounded-lg focus:outline-none search-input"
                name="prefectures"
                id="prefectures"
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
              <nuxt-link to="single-basic" class="thumb-card__link" append>
                <div class="relative flex flex-col font-bold pl-2">
                  <h3 class="text-base font-bold mb-2">
                    カット（S・B込）〜60分〜
                  </h3>
                  <div
                    class="flex flex-wrap justify-between items-center mt-auto"
                  >
                    <p class="font-bold">
                      ¥8,100<span class="font-normal">（税込）</span>
                    </p>
                    <p class="text-sm text-right">
                      <a
                        href="#"
                        class="inline-block bg-beige-100 font-bold text-center text-white py-1 w-16 rounded"
                        >表示</a
                      >
                    </p>
                  </div>
                </div>
              </nuxt-link>
            </div>
          </li>
          <li class="w-full mt-3 reserve-menu">
            <div
              class="flex flex-wrap items-center bg-white rounded shadow py-3 px-2 thumb-card"
            >
              <select
                class="text-sm text-black border-2 border-gray-100 bg-white h-12 px-4 rounded-lg focus:outline-none search-input"
                name="prefectures"
                id="prefectures"
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
              <nuxt-link to="single-basic" class="thumb-card__link" append>
                <div class="relative flex flex-col font-bold pl-2">
                  <h3 class="text-base font-bold mb-2">
                    カット（S・B込）〜60分〜
                  </h3>
                  <div
                    class="flex flex-wrap justify-between items-center mt-auto"
                  >
                    <p class="font-bold">
                      ¥8,100<span class="font-normal">（税込）</span>
                    </p>
                    <p class="text-sm text-right">
                      <a
                        href="#"
                        class="inline-block bg-beige-100 font-bold text-center text-white py-1 w-16 rounded"
                        >表示</a
                      >
                    </p>
                  </div>
                </div>
              </nuxt-link>
            </div>
          </li>
        </ul>
        <div class="flex flex-wrap items-center mt-8 mb-4">
          <p
            class="text-sm inline-block bg-gray-300 font-bold text-center text-white py-1 w-16 rounded"
          >
            非表示
          </p>
          <h3 class="text-base font-normal ml-2">カラー</h3>
          <select
            class="text-sm text-black border-2 border-gray-100 bg-transparent px-4 py-2 ml-auto rounded-lg focus:outline-none"
            name="prefectures"
            id="prefectures"
          >
            <option value="1">1</option>
          </select>
        </div>
        <ul class="w-full flex flex-wrap relative mx-auto">
          <li class="w-full reserve-menu">
            <div
              class="flex flex-wrap items-center bg-white rounded shadow py-3 px-2 thumb-card"
            >
              <select
                class="text-sm text-black border-2 border-gray-100 bg-white h-12 px-4 rounded-lg focus:outline-none search-input"
                name="prefectures"
                id="prefectures"
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
              <nuxt-link to="single-basic" class="thumb-card__link" append>
                <div class="relative flex flex-col font-bold pl-2">
                  <h3 class="text-base font-bold mb-2">
                    カット（S・B込）〜60分〜
                  </h3>
                  <div
                    class="flex flex-wrap justify-between items-center mt-auto"
                  >
                    <p class="font-bold">
                      ¥8,100<span class="font-normal">（税込）</span>
                    </p>
                    <p class="text-sm text-right">
                      <a
                        href="#"
                        class="inline-block bg-beige-100 font-bold text-center text-white py-1 w-16 rounded"
                        >表示</a
                      >
                    </p>
                  </div>
                </div>
              </nuxt-link>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'admin',
  head() {
    return {
      title: "メニュー設定",
      bodyAttrs: {
        class: 'body-admin'
      }
    };
  },
};
</script>
