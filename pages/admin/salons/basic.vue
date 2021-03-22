<template>
  <div class="px-4 md:px-0">
    <div>
      <h3 class="text-lg font-bold mb-4">トップキャッチ</h3>
      <div class="w-full -mx-2">
        <div class="w-full px-2">
          <input
            class="w-full text-base border-2 border-gray-100 bg-white h-12 px-4 rounded-lg focus:outline-none search-input"
            type="text"
            name="text"
            placeholder="例）似合わせカットが得意なサロン"
          />
        </div>
      </div>
    </div>
    <div class="mt-6">
      <h3 class="text-lg font-bold mb-4">最寄り駅</h3>
      <div class="w-full -mx-2">
        <div class="w-full md:w-2/4 px-2">
          <input
            class="w-full text-base border-2 border-gray-100 bg-white h-12 px-4 rounded-lg focus:outline-none search-input"
            type="text"
            name="text"
            placeholder="例）京橋"
          />
        </div>
      </div>
    </div>
    <div class="mt-6">
      <h3 class="text-lg font-bold mb-4">最寄り駅からの徒歩時間</h3>
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
      <h3 class="text-lg font-bold mb-4">カットメニューの平均価格</h3>
      <span class="text-sm block mb-2"
        >カットのみの平均価格を入力してください</span
      >
      <div class="w-full -mx-2">
        <div class="w-full md:w-2/4 px-2">
          <input
            class="w-full text-base border-2 border-gray-100 bg-white h-12 px-4 rounded-lg focus:outline-none search-input"
            type="text"
            name="text"
            placeholder="¥5,000"
          />
        </div>
      </div>
    </div>
    <div class="mt-6">
      <h3 class="text-lg font-bold mb-4">サロンロゴ</h3>
      <div class="w-full -mx-2">
        <div class="w-full md:w-2/4 px-2">
          <input
            class="hidden w-full text-base border-2 border-gray-100 bg-white h-12 px-4 rounded-lg focus:outline-none search-input"
            type="file"
          />
          <span
            class="w-full relative text-gray-600 flex flex-col justify-center items-center bg-white p-8 rounded file-box"
          >
            <svg
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.5 7.5V10.49C19.5 10.49 17.51 10.5 17.5 10.49V7.5H14.5C14.5 7.5 14.51 5.51 14.5 5.5H17.5V2.5H19.5V5.5H22.5V7.5H19.5ZM16.5 11.5V8.5H13.5V5.5H5.5C4.4 5.5 3.5 6.4 3.5 7.5V19.5C3.5 20.6 4.4 21.5 5.5 21.5H17.5C18.6 21.5 19.5 20.6 19.5 19.5V11.5H16.5ZM5.5 19.5L8.5 15.5L10.5 18.5L13.5 14.5L17.5 19.5H5.5Z"
                fill="black"
                fill-opacity="0.6"
              />
            </svg>
            写真を追加
          </span>
        </div>
      </div>
    </div>
    <div class="w-full mt-6">
      <h3 class="flex flex-wrap items-center text-lg font-bold mb-4">
        <span class="block mr-2">トップビジュアル</span>
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
        <div class="w-full px-2">
          <input
            class="w-full text-base border-2 border-gray-100 bg-white h-12 px-4 rounded-lg focus:outline-none mt-2 search-input"
            type="text"
            name="text"
            placeholder="https://www.youtube.com/"
          />
        </div>
      </div>
    </div>
    <div class="mt-6">
      <h3 class="text-lg font-bold mb-4">サロンの雰囲気</h3>
      <div class="w-full flex flex-wrap -mx-2">
        <div class="w-full md:w-2/4 px-2 mb-4">
          <input
            class="hidden w-full text-base border-2 border-gray-100 bg-white h-12 px-4 rounded-lg focus:outline-none search-input"
            type="file"
          />
          <span
            class="w-full relative text-gray-600 flex flex-col justify-center items-center bg-white p-8 rounded file-box"
          >
            <svg
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.5 7.5V10.49C19.5 10.49 17.51 10.5 17.5 10.49V7.5H14.5C14.5 7.5 14.51 5.51 14.5 5.5H17.5V2.5H19.5V5.5H22.5V7.5H19.5ZM16.5 11.5V8.5H13.5V5.5H5.5C4.4 5.5 3.5 6.4 3.5 7.5V19.5C3.5 20.6 4.4 21.5 5.5 21.5H17.5C18.6 21.5 19.5 20.6 19.5 19.5V11.5H16.5ZM5.5 19.5L8.5 15.5L10.5 18.5L13.5 14.5L17.5 19.5H5.5Z"
                fill="black"
                fill-opacity="0.6"
              />
            </svg>
            写真を追加
          </span>
        </div>
        <div class="w-full md:w-2/4 px-2 mb-4">
          <input
            class="hidden w-full text-base border-2 border-gray-100 bg-white h-12 px-4 rounded-lg focus:outline-none search-input"
            type="file"
          />
          <span
            class="w-full relative text-gray-600 flex flex-col justify-center items-center bg-white p-8 rounded file-box"
          >
            <svg
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.5 7.5V10.49C19.5 10.49 17.51 10.5 17.5 10.49V7.5H14.5C14.5 7.5 14.51 5.51 14.5 5.5H17.5V2.5H19.5V5.5H22.5V7.5H19.5ZM16.5 11.5V8.5H13.5V5.5H5.5C4.4 5.5 3.5 6.4 3.5 7.5V19.5C3.5 20.6 4.4 21.5 5.5 21.5H17.5C18.6 21.5 19.5 20.6 19.5 19.5V11.5H16.5ZM5.5 19.5L8.5 15.5L10.5 18.5L13.5 14.5L17.5 19.5H5.5Z"
                fill="black"
                fill-opacity="0.6"
              />
            </svg>
            写真を追加
          </span>
        </div>
        <div class="w-full md:w-2/4 px-2">
          <input
            class="hidden w-full text-base border-2 border-gray-100 bg-white h-12 px-4 rounded-lg focus:outline-none search-input"
            type="file"
          />
          <span
            class="w-full relative text-gray-600 flex flex-col justify-center items-center bg-white p-8 rounded file-box"
          >
            <svg
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.5 7.5V10.49C19.5 10.49 17.51 10.5 17.5 10.49V7.5H14.5C14.5 7.5 14.51 5.51 14.5 5.5H17.5V2.5H19.5V5.5H22.5V7.5H19.5ZM16.5 11.5V8.5H13.5V5.5H5.5C4.4 5.5 3.5 6.4 3.5 7.5V19.5C3.5 20.6 4.4 21.5 5.5 21.5H17.5C18.6 21.5 19.5 20.6 19.5 19.5V11.5H16.5ZM5.5 19.5L8.5 15.5L10.5 18.5L13.5 14.5L17.5 19.5H5.5Z"
                fill="black"
                fill-opacity="0.6"
              />
            </svg>
            写真を追加
          </span>
        </div>
      </div>
    </div>
    <div class="mt-6">
      <h3 class="flex flex-wrap items-center text-lg font-bold mb-4">
        <span class="block mr-2">リクルートページリンク</span>
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
            placeholder="例）似合わせカットが得意なサロン"
          />
        </div>
      </div>
    </div>
    <p class="text-center mt-12">
      <a
        href="#"
        class="block text-center w-full md:w-96 h-12 bg-black hover:bg-blue-dark text-white font-bold py-2 px-4 rounded leading-7 md:mx-auto"
        >保存</a
      >
    </p>
  </div>
</template>

<script>
export default {
  layout: 'adminback',
  head() {
    return {
      title: '基本情報設定',
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
        title: '基本情報設定'
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
