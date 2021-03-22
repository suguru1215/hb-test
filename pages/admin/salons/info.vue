<template>
  <div class="px-4 md:px-0">
    <div class="w-full">
      <div class="flex flex-wrap items-center mb-2">
        <label id="" class="block text-base font-bold"
          >電話番号</label
        >
      </div>
      <input
        class="w-full text-base border-2 border-gray-100 bg-white h-12 px-4 rounded-lg focus:outline-none search-input"
        type="text"
        name="text"
        placeholder="入力してください"
      />
    </div>
    <div class="w-full mt-6">
      <div class="flex flex-wrap items-center mb-2">
        <h3 class="block text-base font-bold">住所</h3>
      </div>
      <label id="" class="block text-sm mb-2">都道府県</label>
      <select
        class="w-full text-base text-gray-400 border-2 border-gray-100 bg-white h-12 px-4 rounded-lg focus:outline-none search-input"
        name="prefectures"
        id="prefectures"
      >
        <option value="選択してください">選択してください</option>
      </select>
      <label id="" class="block text-sm mb-2 mt-4"
        >市区町村/番地</label
      >
      <input
        class="w-full text-base border-2 border-gray-100 bg-white h-12 px-4 rounded-lg focus:outline-none search-input"
        type="text"
        name="text"
        placeholder="入力してください"
      />
      <label id="" class="block text-sm mb-2 mt-4">建物名</label>
      <input
        class="w-full text-base border-2 border-gray-100 bg-white h-12 px-4 rounded-lg focus:outline-none search-input"
        type="text"
        name="text"
        placeholder="入力してください"
      />
    </div>
    <div class="w-full mt-6">
      <div class="flex flex-wrap items-center mb-2">
        <label id="" class="block text-base font-bold"
          >アクセス</label
        >
      </div>
      <textarea
        name="access"
        id="access"
        cols="30"
        rows="5"
        class="w-full text-base border-2 border-gray-100 bg-white p-4 rounded-lg focus:outline-none search-input"
        placeholder="最寄駅からの経路を入力してください"
      ></textarea>
    </div>
    <div class="w-full mt-4">
      <div class="flex flex-wrap items-center mb-2">
        <label id="" class="block text-base font-bold"
          >営業時間</label
        >
      </div>
      <input
        class="w-full text-base border-2 border-gray-100 bg-white h-12 px-4 rounded-lg focus:outline-none search-input"
        type="text"
        name="text"
        placeholder="入力してください"
      />
    </div>
    <div class="w-full mt-6">
      <div class="flex flex-wrap items-center mb-2">
        <label id="" class="block text-base font-bold"
          >定休日</label
        >
      </div>
      <input
        class="w-full text-base border-2 border-gray-100 bg-white h-12 px-4 rounded-lg focus:outline-none search-input"
        type="text"
        name="text"
        placeholder="入力してください"
      />
    </div>
    <div class="w-full mt-6">
      <div class="flex flex-wrap items-center mb-2">
        <h3 id="" class="block text-base font-bold">
          対応クレジットカード
        </h3>
      </div>
      <div
        class="table md:inline-block p-2 pr-6 bg-white rounded md:mr-2 mb-2"
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
          <div class="select-none">VISA</div>
        </label>
      </div>
      <div
        class="table md:inline-block p-2 pr-6 bg-white rounded md:mr-2 mb-2"
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
          <div class="select-none">Mastercard</div>
        </label>
      </div>
      <div
        class="table md:inline-block p-2 pr-6 bg-white rounded md:mr-2 mb-2"
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
          <div class="select-none">JCB</div>
        </label>
      </div>
      <div
        class="table md:inline-block p-2 pr-6 bg-white rounded md:mr-2 mb-2"
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
          <div class="select-none">AMERICAN EXPRESS</div>
        </label>
      </div>
      <div
        class="table md:inline-block p-2 pr-6 bg-white rounded md:mr-2 mb-2"
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
          <div class="select-none">Diners Club INTERNATIONAL</div>
        </label>
      </div>
    </div>
    <div class="w-full mt-6">
      <div class="flex flex-wrap items-center mb-2">
        <h3 id="" class="block text-base font-bold">
          対応電子マネー
        </h3>
      </div>
      <div
        class="table md:inline-block p-2 pr-6 bg-white rounded md:mr-2 mb-2"
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
          <div class="select-none">交通系IC</div>
        </label>
      </div>
      <div
        class="table md:inline-block p-2 pr-6 bg-white rounded md:mr-2 mb-2"
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
          <div class="select-none">ID</div>
        </label>
      </div>
      <div
        class="table md:inline-block p-2 pr-6 bg-white rounded md:mr-2 mb-2"
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
          <div class="select-none">QuickPay</div>
        </label>
      </div>
      <div
        class="table md:inline-block p-2 pr-6 bg-white rounded md:mr-2 mb-2"
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
          <div class="select-none">LINE Pay</div>
        </label>
      </div>
      <div
        class="table md:inline-block p-2 pr-6 bg-white rounded md:mr-2 mb-2"
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
          <div class="select-none">au Pay</div>
        </label>
      </div>
      <div
        class="table md:inline-block p-2 pr-6 bg-white rounded md:mr-2 mb-2"
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
          <div class="select-none">Pay Pay</div>
        </label>
      </div>
      <div
        class="table md:inline-block p-2 pr-6 bg-white rounded md:mr-2 mb-2"
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
          <div class="select-none">メルカリ Pay</div>
        </label>
      </div>
      <div
        class="table md:inline-block p-2 pr-6 bg-white rounded md:mr-2 mb-2"
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
          <div class="select-none">Ali Pay</div>
        </label>
      </div>
      <div
        class="table md:inline-block p-2 pr-6 bg-white rounded md:mr-2 mb-2"
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
          <div class="select-none">Apple Pay</div>
        </label>
      </div>
      <div
        class="table md:inline-block p-2 pr-6 bg-white rounded md:mr-2 mb-2"
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
          <div class="select-none">楽天 Pay</div>
        </label>
      </div>
    </div>
    <div class="w-full mt-6">
      <div class="flex flex-wrap items-center mb-2">
        <h3 id="" class="block text-base font-bold">設備</h3>
      </div>
      <div
        class="table md:inline-block p-2 pr-6 bg-white rounded md:mr-2 mb-2"
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
          <div class="select-none">キッズスペースあり</div>
        </label>
      </div>
      <div
        class="table md:inline-block p-2 pr-6 bg-white rounded md:mr-2 mb-2"
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
          <div class="select-none">お子さま同伴可</div>
        </label>
      </div>
      <div
        class="table md:inline-block p-2 pr-6 bg-white rounded md:mr-2 mb-2"
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
          <div class="select-none">カード支払いOK</div>
        </label>
      </div>
      <div
        class="table md:inline-block p-2 pr-6 bg-white rounded md:mr-2 mb-2"
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
          <div class="select-none">禁煙</div>
        </label>
      </div>
      <div
        class="table md:inline-block p-2 pr-6 bg-white rounded md:mr-2 mb-2"
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
          <div class="select-none">喫煙</div>
        </label>
      </div>
      <div
        class="table md:inline-block p-2 pr-6 bg-white rounded md:mr-2 mb-2"
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
          <div class="select-none">分煙</div>
        </label>
      </div>
      <div
        class="table md:inline-block p-2 pr-6 bg-white rounded md:mr-2 mb-2"
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
          <div class="select-none">個室あり</div>
        </label>
      </div>
      <div
        class="table md:inline-block p-2 pr-6 bg-white rounded md:mr-2 mb-2"
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
          <div class="select-none">半個室あり</div>
        </label>
      </div>
    </div>
    <div class="w-full mt-6">
      <div class="flex flex-wrap items-center mb-2">
        <h3 id="" class="block text-base font-bold">
          対応クレジットカード
        </h3>
      </div>
      <div
        class="table md:inline-block p-2 pr-6 bg-white rounded md:mr-2 mb-2"
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
          <div class="select-none">女性スタイリストが多い</div>
        </label>
      </div>
      <div
        class="table md:inline-block p-2 pr-6 bg-white rounded md:mr-2 mb-2"
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
          <div class="select-none">男性スタイリストが多い</div>
        </label>
      </div>
      <div
        class="table md:inline-block p-2 pr-6 bg-white rounded md:mr-2 mb-2"
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
          <div class="select-none">マンツーマン施術</div>
        </label>
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
      title: '店舗情報設定',
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
        title: '店舗情報設定'
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
