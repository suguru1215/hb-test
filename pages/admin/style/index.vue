<template>
  <div class="mx-auto px-4 md:px-0">
    <div class="flex flex-wrap items-center justify-between mb-4">
      <h2 class="text-2xl font-bold">スタイル設定</h2>
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
      <h3 class="text-lg font-bold mb-4">ショート</h3>
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
            <nuxt-link
              to="single"
              class="thumb-card__link"
              append
            >
              <div class="flex flex-wrap items-center w-full">
                <div
                  class="ml-2 overflow-hidden thumb-card__thumb"
                >
                  <img
                    src="~/assets/images/admin/photo_02.jpg"
                    class="w-full object-cover object-center"
                    alt=""
                  />
                </div>
                <div
                  class="relative flex flex-col font-bold thumb-card__col"
                >
                  <h3 class="text-base font-bold mb-2">
                    大人可愛いミディ
                  </h3>
                  <div class="flex justify-between items-end mt-auto">
                    <p class="text-sm font-normal">山田 恵</p>
                    <p class="text-sm">
                      <span
                        class="inline-block bg-beige-400 font-bold text-center text-white py-1 w-16 rounded"
                        >表示</span
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
            <nuxt-link
              to="single"
              class="thumb-card__link"
              append
            >
              <div class="flex flex-wrap items-center w-full">
                <div
                  class="ml-2 overflow-hidden thumb-card__thumb"
                >
                  <img
                    src="~/assets/images/admin/photo_02.jpg"
                    class="w-full object-cover object-center"
                    alt=""
                  />
                </div>
                <div
                  class="relative flex flex-col font-bold thumb-card__col"
                >
                  <h3 class="text-base font-bold mb-2">
                    大人可愛いミディ
                  </h3>
                  <div class="flex justify-between items-end mt-auto">
                    <p class="text-sm font-normal">山田 恵</p>
                    <p class="text-sm">
                      <span
                        class="inline-block bg-beige-400 font-bold text-center text-white py-1 w-16 rounded"
                        >表示</span
                      >
                    </p>
                  </div>
                </div>
              </div>
            </nuxt-link>
          </div>
        </li>
      </ul>
      <div class="flex flex-wrap items-center mt-4 mb-12">
        <p
          class="text-sm inline-block bg-gray-300 font-bold text-center text-white py-1 w-16 rounded"
        >
          非表示
        </p>
        <h3 class="text-base font-normal ml-2">ショート</h3>
        <select
          class="text-sm text-black border-2 border-gray-100 bg-transparent px-4 py-2 ml-auto rounded-lg focus:outline-none"
          name="prefectures"
          id="prefectures"
        >
          <option value="1件">1件</option>
        </select>
      </div>
      <h3 class="text-lg font-bold mb-4">ボブ</h3>
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
            <nuxt-link
              to="single"
              class="thumb-card__link"
              append
            >
              <div class="flex flex-wrap items-center w-full">
                <div
                  class="ml-2 overflow-hidden thumb-card__thumb"
                >
                  <img
                    src="~/assets/images/admin/photo_02.jpg"
                    class="w-full object-cover object-center"
                    alt=""
                  />
                </div>
                <div
                  class="relative flex flex-col font-bold thumb-card__col"
                >
                  <h3 class="text-base font-bold mb-2">
                    大人可愛いミディ
                  </h3>
                  <div class="flex justify-between items-end mt-auto">
                    <p class="text-sm font-normal">山田 恵</p>
                    <p class="text-sm">
                      <span
                        class="inline-block bg-beige-400 font-bold text-center text-white py-1 w-16 rounded"
                        >表示</span
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
            <nuxt-link
              to="single"
              class="thumb-card__link"
              append
            >
              <div class="flex flex-wrap items-center w-full">
                <div
                  class="ml-2 overflow-hidden thumb-card__thumb"
                >
                  <img
                    src="~/assets/images/admin/photo_02.jpg"
                    class="w-full object-cover object-center"
                    alt=""
                  />
                </div>
                <div
                  class="relative flex flex-col font-bold thumb-card__col"
                >
                  <h3 class="text-base font-bold mb-2">
                    大人可愛いミディ
                  </h3>
                  <div class="flex justify-between items-end mt-auto">
                    <p class="text-sm font-normal">山田 恵</p>
                    <p class="text-sm">
                      <span
                        class="inline-block bg-beige-400 font-bold text-center text-white py-1 w-16 rounded"
                        >表示</span
                      >
                    </p>
                  </div>
                </div>
              </div>
            </nuxt-link>
          </div>
        </li>
      </ul>
      <div class="flex flex-wrap items-center mt-4 mb-12">
        <p
          class="text-sm inline-block bg-gray-300 font-bold text-center text-white py-1 w-16 rounded"
        >
          非表示
        </p>
        <h3 class="text-base font-normal ml-2">ボブ</h3>
        <select
          class="text-sm text-black border-2 border-gray-100 bg-transparent px-4 py-2 ml-auto rounded-lg focus:outline-none"
          name="prefectures"
          id="prefectures"
        >
          <option value="1件">1件</option>
        </select>
      </div>
      <h3 class="text-lg font-bold mb-4">ミディアム</h3>
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
            <nuxt-link
              to="single"
              class="thumb-card__link"
              append
            >
              <div class="flex flex-wrap items-center w-full">
                <div
                  class="ml-2 overflow-hidden thumb-card__thumb"
                >
                  <img
                    src="~/assets/images/admin/photo_02.jpg"
                    class="w-full object-cover object-center"
                    alt=""
                  />
                </div>
                <div
                  class="relative flex flex-col font-bold thumb-card__col"
                >
                  <h3 class="text-base font-bold mb-2">
                    大人可愛いミディ
                  </h3>
                  <div class="flex justify-between items-end mt-auto">
                    <p class="text-sm font-normal">山田 恵</p>
                    <p class="text-sm">
                      <span
                        class="inline-block bg-beige-400 font-bold text-center text-white py-1 w-16 rounded"
                        >表示</span
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
            <nuxt-link
              to="single"
              class="thumb-card__link"
              append
            >
              <div class="flex flex-wrap items-center w-full">
                <div
                  class="ml-2 overflow-hidden thumb-card__thumb"
                >
                  <img
                    src="~/assets/images/admin/photo_02.jpg"
                    class="w-full object-cover object-center"
                    alt=""
                  />
                </div>
                <div
                  class="relative flex flex-col font-bold thumb-card__col"
                >
                  <h3 class="text-base font-bold mb-2">
                    大人可愛いミディ
                  </h3>
                  <div class="flex justify-between items-end mt-auto">
                    <p class="text-sm font-normal">山田 恵</p>
                    <p class="text-sm">
                      <span
                        class="inline-block bg-beige-400 font-bold text-center text-white py-1 w-16 rounded"
                        >表示</span
                      >
                    </p>
                  </div>
                </div>
              </div>
            </nuxt-link>
          </div>
        </li>
      </ul>
      <div class="flex flex-wrap items-center mt-4 mb-12">
        <p
          class="text-sm inline-block bg-gray-300 font-bold text-center text-white py-1 w-16 rounded"
        >
          非表示
        </p>
        <h3 class="text-base font-normal ml-2">ミディアム</h3>
        <select
          class="text-sm text-black border-2 border-gray-100 bg-transparent px-4 py-2 ml-auto rounded-lg focus:outline-none"
          name="prefectures"
          id="prefectures"
        >
          <option value="1件">1件</option>
        </select>
      </div>
      <h3 class="text-lg font-bold mb-4">ロング</h3>
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
            <nuxt-link
              to="single"
              class="thumb-card__link"
              append
            >
              <div class="flex flex-wrap items-center w-full">
                <div
                  class="ml-2 overflow-hidden thumb-card__thumb"
                >
                  <img
                    src="~/assets/images/admin/photo_02.jpg"
                    class="w-full object-cover object-center"
                    alt=""
                  />
                </div>
                <div
                  class="relative flex flex-col font-bold thumb-card__col"
                >
                  <h3 class="text-base font-bold mb-2">
                    大人可愛いミディ
                  </h3>
                  <div class="flex justify-between items-end mt-auto">
                    <p class="text-sm font-normal">山田 恵</p>
                    <p class="text-sm">
                      <span
                        class="inline-block bg-beige-400 font-bold text-center text-white py-1 w-16 rounded"
                        >表示</span
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
            <nuxt-link
              to="single"
              class="thumb-card__link"
              append
            >
              <div class="flex flex-wrap items-center w-full">
                <div
                  class="ml-2 overflow-hidden thumb-card__thumb"
                >
                  <img
                    src="~/assets/images/admin/photo_02.jpg"
                    class="w-full object-cover object-center"
                    alt=""
                  />
                </div>
                <div
                  class="relative flex flex-col font-bold thumb-card__col"
                >
                  <h3 class="text-base font-bold mb-2">
                    大人可愛いミディ
                  </h3>
                  <div class="flex justify-between items-end mt-auto">
                    <p class="text-sm font-normal">山田 恵</p>
                    <p class="text-sm">
                      <span
                        class="inline-block bg-beige-400 font-bold text-center text-white py-1 w-16 rounded"
                        >表示</span
                      >
                    </p>
                  </div>
                </div>
              </div>
            </nuxt-link>
          </div>
        </li>
      </ul>
      <div class="flex flex-wrap items-center mt-4">
        <p
          class="text-sm inline-block bg-gray-300 font-bold text-center text-white py-1 w-16 rounded"
        >
          非表示
        </p>
        <h3 class="text-base font-normal ml-2">ロング</h3>
        <select
          class="text-sm text-black border-2 border-gray-100 bg-transparent px-4 py-2 ml-auto rounded-lg focus:outline-none"
          name="prefectures"
          id="prefectures"
        >
          <option value="1件">1件</option>
        </select>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'admin',
  head() {
    return {
      title: 'スタイル設定',
      bodyAttrs: {
        class: 'body-admin'
      }
    }
  }
}
</script>
