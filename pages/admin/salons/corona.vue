<template>
  <div class="px-4 md:px-0">
    <h2 class="text-lg md:text-2xl font-bold mb-4 md:mb-6">
      サロンの感染予防対策
    </h2>
    <div class="flex flex-wrap px-0 mt-4">
      <div class="w-full">
        <div
          class="block md:inline-block px-2 py-3 pr-6 bg-white rounded md:mr-2 mb-2"
        >
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
            <div class="select-none">
              感染予防対策　インフォメーション表示
            </div>
          </label>
        </div>
        <p class="text-sm">
          ここにチェックを入れると、あなたのサロンが感染予防対策の取り組みを行っていることが表示されます。
        </p>
      </div>
      <div class="w-full mt-6">
        <div class="flex flex-wrap">
          <label id="" class="block text-base font-black mb-2 mr-2"
            >感染予防対策の取り組み情報</label
          >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="12" cy="12" r="9" fill="white" />
            <path
              d="M11 18H13V16H11V18ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM12 6C9.79 6 8 7.79 8 10H10C10 8.9 10.9 8 12 8C13.1 8 14 8.9 14 10C14 12 11 11.75 11 15H13C13 12.75 16 12.5 16 10C16 7.79 14.21 6 12 6Z"
              fill="black"
            />
          </svg>
        </div>
        <div class="px-2 py-3 bg-white rounded">
          <input
            class="hidden w-full text-base border-2 border-gray-100 bg-white h-12 px-4 rounded-lg focus:outline-none"
            type="file"
          />
          <span
            class="inline-block text-white bg-black py-2 px-8 rounded"
          >
            ファイルを選択
          </span>
        </div>
        <div
          class="flex flex-nowrap justify-between items-center px-4 py-3 font-black bg-white rounded mt-2"
        >
          <p class="mr-2">
            Studio_新型コロナウイルス感染予防対策への取組みについて.pdf
          </p>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.59 8L12 10.59L9.41 8L8 9.41L10.59 12L8 14.59L9.41 16L12 13.41L14.59 16L16 14.59L13.41 12L16 9.41L14.59 8ZM12 2C6.47 2 2 6.47 2 12C2 17.53 6.47 22 12 22C17.53 22 22 17.53 22 12C22 6.47 17.53 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z"
              fill="#323232"
            />
          </svg>
        </div>
      </div>
      <div class="w-full flex flex-wrap -mx-2">
        <h3 class="w-full text-lg mb-4 mt-8 px-2">表示ステータス</h3>
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
              <div class="select-none">表示</div>
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
              <div class="select-none">非表示</div>
            </label>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'adminback',
  head() {
    return {
      title: '感染予防対策詳細',
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
        title: '感染予防対策詳細'
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
