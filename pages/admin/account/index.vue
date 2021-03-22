<template>
  <div class="px-4 md:px-0">
    <h2 class="text-lg md:text-2xl font-bold mb-4 md:mb-6">アカウント設定</h2>
    <div class="bg-transparent">
      <div class="w-full bg-white border-b-1 border-black">
        <div class="flex md:block">
          <h4
            class="flex w-5/12 md:w-full text-base py-4 px-2 md:p-2 bg-gray-300"
          >
            種類
          </h4>
          <div
            class="flex flex-wrap md:justify-between items-center w-7/12 md:w-full py-2 px-4 md:p-6 text-gray-600"
          >
            <p class="text-sm md:text-lg mb-0 text-black">店舗</p>
          </div>
        </div>
      </div>
      <div class="w-full bg-white border-b-1 border-black">
        <div class="flex md:block">
          <h4
            class="flex w-5/12 md:w-full text-base py-4 px-2 md:p-2 bg-gray-300"
          >
            ユーザー名
          </h4>
          <div
            class="md:flex md:flex-wrap md:justify-between w-7/12 md:w-full py-2 px-4 md:p-6 text-gray-600"
          >
            <p class="text-sm md:text-lg mb-2 md:mb-0 text-black">
              BeautySalon
            </p>
            <p class="text-right">
              <a
                href="#"
                class="inline-block bg-gray text-black font-bold text-sm py-1 px-6 rounded"
                >変更</a
              >
            </p>
          </div>
        </div>
      </div>
      <div class="w-full bg-white border-b-1 border-black">
        <div class="flex md:block">
          <h4
            class="flex w-5/12 md:w-full text-base py-4 px-2 md:p-2 bg-gray-300"
          >
            ID<br class="md:hidden" />（メールアドレス）
          </h4>
          <div
            class="md:flex md:flex-wrap md:justify-between w-7/12 md:w-full py-2 px-4 md:p-6 text-gray-600"
          >
            <p class="text-sm md:text-lg mb-2 md:mb-0 text-black">
              ABCDEFG@gmail.com
            </p>
            <p class="text-right">
              <a
                href="#"
                class="inline-block bg-gray text-black font-bold text-sm py-1 px-6 rounded"
                >変更</a
              >
            </p>
          </div>
        </div>
      </div>
      <div class="w-full bg-white">
        <div class="flex md:block">
          <h4
            class="flex flex-col w-5/12 md:w-full text-base py-4 px-2 md:p-2 bg-gray-300"
          >
            パスワード
          </h4>
          <div
            class="md:flex md:flex-wrap md:justify-between w-7/12 md:w-full py-2 px-4 md:p-6 text-gray-600"
          >
            <p class="text-sm md:text-lg mb-2 md:mb-0 text-black">
              *****************
            </p>
            <p class="text-right">
              <a
                href="#"
                class="inline-block bg-gray text-black font-bold text-sm py-1 px-6 rounded"
                >変更</a
              >
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-transparent mt-8">
      <div class="w-full bg-white border-b-1 border-black">
        <h4 class="block text-base p-2 bg-gray-300">サロン店舗の住所</h4>
        <div
          class="flex flex-wrap px-4 py-4 md:px-6 md:-mx-2 text-gray-600"
        >
          <label id="" class="w-full block text-sm mb-2">都道府県</label>
          <select
            class="w-full md:w-5/12 text-base text-gray-400 border-2 border-gray-100 bg-white h-12 px-4 rounded-lg focus:outline-none search-input"
            name="prefectures"
            id="prefectures"
          >
            <option value="選択してください">選択してください</option>
          </select>
          <label id="" class="w-full block text-sm mb-2 mt-4"
            >市区町村/番地</label
          >
          <input
            class="w-full text-base border-2 border-gray-100 bg-white h-12 px-4 rounded-lg focus:outline-none search-input"
            type="text"
            name="text"
            placeholder="入力してください"
          />
          <label id="" class="w-full block text-sm mb-2 mt-4"
            >建物名</label
          >
          <input
            class="w-full text-base border-2 border-gray-100 bg-white h-12 px-4 rounded-lg focus:outline-none search-input"
            type="text"
            name="text"
            placeholder="入力してください"
          />
        </div>
      </div>
      <div class="w-full bg-white border-b-1 border-black">
        <h4 class="block text-base p-2 bg-gray-300">
          サロン店舗の電話番号
        </h4>
        <div class="px-6 py-4 -mx-2">
          <div class="w-full md:w-5/12 px-0 md:px-2">
            <input
              class="w-full text-base border-2 border-gray-100 bg-white h-12 px-4 rounded-lg focus:outline-none search-input"
              type="email"
              name="email"
              placeholder="080-1234-5678"
            />
          </div>
        </div>
      </div>
      <p class="text-right mt-8">
        <a href="#" class="text-sm md:text-base text-black"
          >Hairbookを退会</a
        >
      </p>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'アカウント設定',
      bodyAttrs: {
        class: 'body-admin'
      }
    }
  }
}
</script>
