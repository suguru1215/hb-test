<template>
  <div class="px-4 md:px-0">
    <div>
      <h3 class="flex flex-wrap items-center text-lg mb-4">
        <span class="block font-bold mr-2">メニュータイプ</span>
        <svg
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="12" cy="12.5" r="9" fill="white" />
          <path
            d="M11 18.5H13V16.5H11V18.5ZM12 2.5C6.48 2.5 2 6.98 2 12.5C2 18.02 6.48 22.5 12 22.5C17.52 22.5 22 18.02 22 12.5C22 6.98 17.52 2.5 12 2.5ZM12 20.5C7.59 20.5 4 16.91 4 12.5C4 8.09 7.59 4.5 12 4.5C16.41 4.5 20 8.09 20 12.5C20 16.91 16.41 20.5 12 20.5ZM12 6.5C9.79 6.5 8 8.29 8 10.5H10C10 9.4 10.9 8.5 12 8.5C13.1 8.5 14 9.4 14 10.5C14 12.5 11 12.25 11 15.5H13C13 13.25 16 13 16 10.5C16 8.29 14.21 6.5 12 6.5Z"
            fill="black"
          />
        </svg>
      </h3>
      <div class="inline-block p-2 pr-6 bg-white rounded mb-4 mr-4">
        <label class="flex justify-start items-center">
          <div
            class="bg-white w-6 h-6 flex flex-shrink-0 justify-center items-center mr-2"
          >
            <input type="radio" class="opacity-0 absolute" />
            <svg
              width="24"
              height="24"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <mask
                id="mask0"
                mask-type="alpha"
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="20"
                height="20"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0 10C0 4.48 4.48 0 10 0C15.52 0 20 4.48 20 10C20 15.52 15.52 20 10 20C4.48 20 0 15.52 0 10ZM2 10C2 14.42 5.58 18 10 18C14.42 18 18 14.42 18 10C18 5.58 14.42 2 10 2C5.58 2 2 5.58 2 10Z"
                  fill="white"
                />
              </mask>
              <g mask="url(#mask0)">
                <rect
                  x="-2"
                  y="-2"
                  width="24"
                  height="24"
                  fill="#979797"
                />
              </g>
            </svg>
          </div>
          <div class="select-none">公開</div>
        </label>
      </div>
      <div class="inline-block p-2 pr-6 bg-white rounded mb-4">
        <label class="flex justify-start items-center">
          <div
            class="bg-white w-6 h-6 flex flex-shrink-0 justify-center items-center mr-2"
          >
            <input type="radio" class="opacity-0 absolute" />
            <svg
              width="24"
              height="24"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <mask
                id="mask0"
                mask-type="alpha"
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="20"
                height="20"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0 10C0 4.48 4.48 0 10 0C15.52 0 20 4.48 20 10C20 15.52 15.52 20 10 20C4.48 20 0 15.52 0 10ZM2 10C2 14.42 5.58 18 10 18C14.42 18 18 14.42 18 10C18 5.58 14.42 2 10 2C5.58 2 2 5.58 2 10Z"
                  fill="white"
                />
              </mask>
              <g mask="url(#mask0)">
                <rect
                  x="-2"
                  y="-2"
                  width="24"
                  height="24"
                  fill="#979797"
                />
              </g>
            </svg>
          </div>
          <div class="select-none">非公開</div>
        </label>
      </div>
    </div>
    <div class="mt-6">
      <h3 class="text-lg font-bold mb-4">カテゴリー（複数選択可能）</h3>
      <div class="flex flex-wrap px-0 mt-4">
        <div class="w-full">
          <div class="table p-2 pr-6 bg-white rounded md:mr-2 mb-2">
            <label class="flex justify-start items-center">
              <div
                class="bg-white border-2 rounded border-gray-400 w-6 h-6 flex flex-shrink-0 justify-center items-center mr-2 focus-within:border-blue-500"
              >
                <input type="checkbox" class="opacity-0 absolute" />
                <svg
                  class="fill-current hidden w-4 h-4 text-green-500 pointer-events-none"
                  viewBox="0 0 20 20"
                >
                  <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
                </svg>
              </div>
              <div class="select-none">カット</div>
            </label>
          </div>
          <div class="table p-2 pr-6 bg-white rounded md:mr-2 mb-2">
            <label class="flex justify-start items-center">
              <div
                class="bg-white border-2 rounded border-gray-400 w-6 h-6 flex flex-shrink-0 justify-center items-center mr-2 focus-within:border-blue-500"
              >
                <input type="checkbox" class="opacity-0 absolute" />
                <svg
                  class="fill-current hidden w-4 h-4 text-green-500 pointer-events-none"
                  viewBox="0 0 20 20"
                >
                  <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
                </svg>
              </div>
              <div class="select-none">トリートメント</div>
            </label>
          </div>
          <div class="table p-2 pr-6 bg-white rounded md:mr-2 mb-2">
            <label class="flex justify-start items-center">
              <div
                class="bg-white border-2 rounded border-gray-400 w-6 h-6 flex flex-shrink-0 justify-center items-center mr-2 focus-within:border-blue-500"
              >
                <input type="checkbox" class="opacity-0 absolute" />
                <svg
                  class="fill-current hidden w-4 h-4 text-green-500 pointer-events-none"
                  viewBox="0 0 20 20"
                >
                  <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
                </svg>
              </div>
              <div class="select-none">カラー</div>
            </label>
          </div>
          <div class="table p-2 pr-6 bg-white rounded md:mr-2 mb-2">
            <label class="flex justify-start items-center">
              <div
                class="bg-white border-2 rounded border-gray-400 w-6 h-6 flex flex-shrink-0 justify-center items-center mr-2 focus-within:border-blue-500"
              >
                <input type="checkbox" class="opacity-0 absolute" />
                <svg
                  class="fill-current hidden w-4 h-4 text-green-500 pointer-events-none"
                  viewBox="0 0 20 20"
                >
                  <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
                </svg>
              </div>
              <div class="select-none">パーマ</div>
            </label>
          </div>
          <div class="table p-2 pr-6 bg-white rounded md:mr-2 mb-2">
            <label class="flex justify-start items-center">
              <div
                class="bg-white border-2 rounded border-gray-400 w-6 h-6 flex flex-shrink-0 justify-center items-center mr-2 focus-within:border-blue-500"
              >
                <input type="checkbox" class="opacity-0 absolute" />
                <svg
                  class="fill-current hidden w-4 h-4 text-green-500 pointer-events-none"
                  viewBox="0 0 20 20"
                >
                  <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
                </svg>
              </div>
              <div class="select-none">縮毛矯正</div>
            </label>
          </div>
          <div class="table p-2 pr-6 bg-white rounded md:mr-2 mb-2">
            <label class="flex justify-start items-center">
              <div
                class="bg-white border-2 rounded border-gray-400 w-6 h-6 flex flex-shrink-0 justify-center items-center mr-2 focus-within:border-blue-500"
              >
                <input type="checkbox" class="opacity-0 absolute" />
                <svg
                  class="fill-current hidden w-4 h-4 text-green-500 pointer-events-none"
                  viewBox="0 0 20 20"
                >
                  <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
                </svg>
              </div>
              <div class="select-none">その他</div>
            </label>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-6">
      <h3 class="text-lg font-bold mb-4">メニュー名</h3>
      <div class="w-full -mx-2">
        <div class="w-full px-2">
          <input
            class="w-full text-base border-2 border-gray-100 bg-white h-12 px-4 rounded-lg focus:outline-none search-input"
            type="text"
            name="text"
            placeholder="例）デジタルパーマ"
          />
        </div>
      </div>
    </div>
    <div class="mt-6">
      <h3 class="text-lg font-bold mb-4">料金</h3>
      <div class="w-full -mx-2">
        <div class="w-full px-2">
          <input
            class="w-full text-base border-2 border-gray-100 bg-white h-12 px-4 rounded-lg focus:outline-none search-input"
            type="text"
            name="text"
            placeholder="例）¥5,000"
          />
        </div>
      </div>
    </div>
    <div class="mt-6">
      <h3 class="text-lg font-bold mb-4">所用時間</h3>
      <div class="w-full -mx-2">
        <select
          class="w-full md:w-2/4 text-base text-gray-400 border-2 border-gray-100 bg-white h-12 px-4 mx-2 rounded-lg focus:outline-none search-input"
          name="prefectures"
          id="prefectures"
        >
          <option value="選択してください">選択してください</option>
          <option value="女性">女性</option>
          <option value="男性">男性</option>
          <option value="選択しない">選択しない</option>
        </select>
      </div>
    </div>
    <div class="mt-6">
      <label id="" class="block text-lg font-bold mb-4"
        >説明文</label
      >
      <textarea
        name="access"
        id="access"
        cols="30"
        rows="5"
        class="w-full text-base border-2 border-gray-100 bg-white p-4 rounded-lg focus:outline-none search-input"
        placeholder="入力してください"
      ></textarea>
    </div>
    <div class="mt-6">
      <h3 class="text-lg font-bold mb-2">対応可能スタッフ</h3>
      <p class="text-sm mb-4">
        このメニューに対応できるスタッフを全員選択してください。
      </p>
      <div class="flex flex-wrap px-0 mt-4">
        <div class="w-full">
          <div class="table p-2 pr-6 bg-white rounded md:mr-2 mb-2">
            <label class="flex justify-start items-center">
              <div
                class="bg-white border-2 rounded border-gray-400 w-6 h-6 flex flex-shrink-0 justify-center items-center mr-2 focus-within:border-blue-500"
              >
                <input type="checkbox" class="opacity-0 absolute" />
                <svg
                  class="fill-current hidden w-4 h-4 text-green-500 pointer-events-none"
                  viewBox="0 0 20 20"
                >
                  <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
                </svg>
              </div>
              <div class="select-none">樋口 希世</div>
            </label>
          </div>
          <div class="table p-2 pr-6 bg-white rounded md:mr-2 mb-2">
            <label class="flex justify-start items-center">
              <div
                class="bg-white border-2 rounded border-gray-400 w-6 h-6 flex flex-shrink-0 justify-center items-center mr-2 focus-within:border-blue-500"
              >
                <input type="checkbox" class="opacity-0 absolute" />
                <svg
                  class="fill-current hidden w-4 h-4 text-green-500 pointer-events-none"
                  viewBox="0 0 20 20"
                >
                  <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
                </svg>
              </div>
              <div class="select-none">樋口 希世</div>
            </label>
          </div>
          <div class="table p-2 pr-6 bg-white rounded md:mr-2 mb-2">
            <label class="flex justify-start items-center">
              <div
                class="bg-white border-2 rounded border-gray-400 w-6 h-6 flex flex-shrink-0 justify-center items-center mr-2 focus-within:border-blue-500"
              >
                <input type="checkbox" class="opacity-0 absolute" />
                <svg
                  class="fill-current hidden w-4 h-4 text-green-500 pointer-events-none"
                  viewBox="0 0 20 20"
                >
                  <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
                </svg>
              </div>
              <div class="select-none">樋口 希世</div>
            </label>
          </div>
          <div class="table p-2 pr-6 bg-white rounded md:mr-2 mb-2">
            <label class="flex justify-start items-center">
              <div
                class="bg-white border-2 rounded border-gray-400 w-6 h-6 flex flex-shrink-0 justify-center items-center mr-2 focus-within:border-blue-500"
              >
                <input type="checkbox" class="opacity-0 absolute" />
                <svg
                  class="fill-current hidden w-4 h-4 text-green-500 pointer-events-none"
                  viewBox="0 0 20 20"
                >
                  <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
                </svg>
              </div>
              <div class="select-none">樋口 希世</div>
            </label>
          </div>
          <div class="table p-2 pr-6 bg-white rounded md:mr-2 mb-2">
            <label class="flex justify-start items-center">
              <div
                class="bg-white border-2 rounded border-gray-400 w-6 h-6 flex flex-shrink-0 justify-center items-center mr-2 focus-within:border-blue-500"
              >
                <input type="checkbox" class="opacity-0 absolute" />
                <svg
                  class="fill-current hidden w-4 h-4 text-green-500 pointer-events-none"
                  viewBox="0 0 20 20"
                >
                  <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
                </svg>
              </div>
              <div class="select-none">樋口 希世</div>
            </label>
          </div>
          <div class="table p-2 pr-6 bg-white rounded md:mr-2 mb-2">
            <label class="flex justify-start items-center">
              <div
                class="bg-white border-2 rounded border-gray-400 w-6 h-6 flex flex-shrink-0 justify-center items-center mr-2 focus-within:border-blue-500"
              >
                <input type="checkbox" class="opacity-0 absolute" />
                <svg
                  class="fill-current hidden w-4 h-4 text-green-500 pointer-events-none"
                  viewBox="0 0 20 20"
                >
                  <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
                </svg>
              </div>
              <div class="select-none">樋口 希世</div>
            </label>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-4">
      <div class="flex flex-wrap items-center text-lg mb-4">
        <h3 class="block text-lg font-bold mr-2"
          >このメニューを表示する</h3
        >
        <svg
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="12" cy="12.5" r="9" fill="white" />
          <path
            d="M11 18.5H13V16.5H11V18.5ZM12 2.5C6.48 2.5 2 6.98 2 12.5C2 18.02 6.48 22.5 12 22.5C17.52 22.5 22 18.02 22 12.5C22 6.98 17.52 2.5 12 2.5ZM12 20.5C7.59 20.5 4 16.91 4 12.5C4 8.09 7.59 4.5 12 4.5C16.41 4.5 20 8.09 20 12.5C20 16.91 16.41 20.5 12 20.5ZM12 6.5C9.79 6.5 8 8.29 8 10.5H10C10 9.4 10.9 8.5 12 8.5C13.1 8.5 14 9.4 14 10.5C14 12.5 11 12.25 11 15.5H13C13 13.25 16 13 16 10.5C16 8.29 14.21 6.5 12 6.5Z"
            fill="black"
          />
        </svg>
      </div>
      <div class="w-full flex flex-wrap -mx-2">
        <div class="px-2">
          <div class="inline-block p-2 px-2 bg-white rounded">
            <label class="flex justify-start items-center">
              <div
                class="bg-white w-6 h-6 flex flex-shrink-0 justify-center items-center mr-2"
              >
                <input type="radio" class="opacity-0 absolute" />
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <mask
                    id="mask0"
                    mask-type="alpha"
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="20"
                    height="20"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0 10C0 4.48 4.48 0 10 0C15.52 0 20 4.48 20 10C20 15.52 15.52 20 10 20C4.48 20 0 15.52 0 10ZM2 10C2 14.42 5.58 18 10 18C14.42 18 18 14.42 18 10C18 5.58 14.42 2 10 2C5.58 2 2 5.58 2 10Z"
                      fill="white"
                    />
                  </mask>
                  <g mask="url(#mask0)">
                    <rect
                      x="-2"
                      y="-2"
                      width="24"
                      height="24"
                      fill="#979797"
                    />
                  </g>
                </svg>
              </div>
              <div class="select-none">はい</div>
            </label>
          </div>
        </div>
        <div class="px-2">
          <div class="inline-block p-2 px-2 bg-white rounded">
            <label class="flex justify-start items-center">
              <div
                class="bg-white w-6 h-6 flex flex-shrink-0 justify-center items-center mr-2"
              >
                <input type="radio" class="opacity-0 absolute" />
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <mask
                    id="mask0"
                    mask-type="alpha"
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="20"
                    height="20"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0 10C0 4.48 4.48 0 10 0C15.52 0 20 4.48 20 10C20 15.52 15.52 20 10 20C4.48 20 0 15.52 0 10ZM2 10C2 14.42 5.58 18 10 18C14.42 18 18 14.42 18 10C18 5.58 14.42 2 10 2C5.58 2 2 5.58 2 10Z"
                      fill="white"
                    />
                  </mask>
                  <g mask="url(#mask0)">
                    <rect
                      x="-2"
                      y="-2"
                      width="24"
                      height="24"
                      fill="#979797"
                    />
                  </g>
                </svg>
              </div>
              <div class="select-none">いいえ</div>
            </label>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-6">
      <h3 class="flex flex-wrap items-center text-lg mb-4">
        <span class="block font-bold mr-2">個別の予約リンク</span>
        <svg
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="12" cy="12.5" r="9" fill="white" />
          <path
            d="M11 18.5H13V16.5H11V18.5ZM12 2.5C6.48 2.5 2 6.98 2 12.5C2 18.02 6.48 22.5 12 22.5C17.52 22.5 22 18.02 22 12.5C22 6.98 17.52 2.5 12 2.5ZM12 20.5C7.59 20.5 4 16.91 4 12.5C4 8.09 7.59 4.5 12 4.5C16.41 4.5 20 8.09 20 12.5C20 16.91 16.41 20.5 12 20.5ZM12 6.5C9.79 6.5 8 8.29 8 10.5H10C10 9.4 10.9 8.5 12 8.5C13.1 8.5 14 9.4 14 10.5C14 12.5 11 12.25 11 15.5H13C13 13.25 16 13 16 10.5C16 8.29 14.21 6.5 12 6.5Z"
            fill="black"
          />
        </svg>
      </h3>
      <div class="w-full -mx-2">
        <div class="w-full px-2">
          <input
            class="w-full text-base border-2 border-gray-100 bg-white h-12 px-4 rounded-lg focus:outline-none search-input"
            type="text"
            name="text"
            placeholder="入力してください"
          />
        </div>
      </div>
    </div>
    <p class="relative mt-8 text-center">
      <a
        href="#"
        class="block text-center w-full md:w-56 h-12 bg-black hover:bg-blue-dark text-white font-bold py-2 px-4 mx-auto rounded leading-7"
        >保存</a
      >
    </p>
    <p class="font-bold text-center mt-6"><a href="#" class="text-red-900">メニューを削除</a></p>
  </div>
</template>

<script>
export default {
  layout: 'adminback',
  head() {
    return {
      title: 'メニュー詳細 - ベーシック',
      bodyAttrs: {
        class: 'body-admin'
      }
    }
  },
  components: {
  },
  data(){
    return {
      header: {
        title: 'メニュー詳細'
      }
    }
  },
  mounted() {
    this.updateHeader()
  },
  methods: {
    updateHeader() {
      this.$nuxt.$emit('updateHeader', this.header.title)
    }
  }
}
</script>
