<template>
  <div class="px-4 md:px-0">
    <h2 class="text-lg md:text-2xl font-bold mb-4 md:mb-6">
      サロンの得意なメニュータグ（3つまで選択可能）
    </h2>
    <div class="flex flex-wrap px-0 mt-4">
      <div class="w-full">
        <div
          class="table p-2 pr-6 bg-white rounded md:mr-2 mb-2"
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
            <div class="select-none">似合わせカット</div>
          </label>
        </div>
        <div
          class="table p-2 pr-6 bg-white rounded md:mr-2 mb-2"
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
            <div class="select-none">ショートカット</div>
          </label>
        </div>
        <div
          class="table p-2 pr-6 bg-white rounded md:mr-2 mb-2"
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
            <div class="select-none">ボブスタイル</div>
          </label>
        </div>
        <div
          class="table p-2 pr-6 bg-white rounded md:mr-2 mb-2"
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
            <div class="select-none">カラー</div>
          </label>
        </div>
        <div
          class="table p-2 pr-6 bg-white rounded md:mr-2 mb-2"
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
            <div class="select-none">パーマ</div>
          </label>
        </div>
        <div
          class="table p-2 pr-6 bg-white rounded md:mr-2 mb-2"
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
            <div class="select-none">縮毛矯正</div>
          </label>
        </div>
        <div
          class="table p-2 pr-6 bg-white rounded md:mr-2 mb-2"
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
            <div class="select-none">髪質改善</div>
          </label>
        </div>
        <div
          class="table p-2 pr-6 bg-white rounded md:mr-2 mb-2"
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
            <div class="select-none">こだわりのトリートメント</div>
          </label>
        </div>
        <div
          class="table p-2 pr-6 bg-white rounded md:mr-2 mb-2"
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
            <div class="select-none">ヘッドスパ</div>
          </label>
        </div>
        <div
          class="table p-2 pr-6 bg-white rounded md:mr-2 mb-2"
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
            <div class="select-none">育毛ケア</div>
          </label>
        </div>
        <div
          class="table p-2 pr-6 bg-white rounded md:mr-2 mb-2"
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
            <div class="select-none">白髪ケア</div>
          </label>
        </div>
        <div
          class="table p-2 pr-6 bg-white rounded md:mr-2 mb-2"
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
            <div class="select-none">ノンダメージ</div>
          </label>
        </div>
        <div
          class="table p-2 pr-6 bg-white rounded md:mr-2 mb-2"
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
            <div class="select-none">ヘアセット</div>
          </label>
        </div>
      </div>
    </div>
    <p
      class="fixed md:relative bottom-4 inset-x-4 md:bottom-0 md:inset-x-0 text-center md:mb-8 md:mt-8 z-10"
    >
      <a
        href="#"
        class="block text-center w-full md:w-56 h-12 bg-black hover:bg-blue-dark text-white font-bold py-2 px-4 mx-auto rounded leading-7"
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
      title: '得意なメニュータグ',
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
        title: '得意なメニュータグ'
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
