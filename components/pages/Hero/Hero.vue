<template>
  <div class="max-w-full mt-16 md:mt-24">
    <div
      class="container max-w-full mx-auto lg:px-56 md:px-16 px-4 hero-inner"
    >
      <div
        class="relative p-6 md:py-10 md:px-14 bg-white rounded-xl searchform"
      >
        <form action="#">
          <div class="flex-wrap -mx-4 mb-3 hidden md:flex">
            <div class="w-7/12 px-4">
              <div class="w-full mb-1">
                <label id="" class="block text-lg font-bold"
                  >エリア・駅</label
                >
              </div>
              <div class="flex flex-wrap -mx-1">
                <div class="relative w-3/12 text-gray-600 px-1">
                  <input
                    class="w-full border-2 border-gray-300 bg-white h-12 px-4 rounded-lg text-base focus:outline-none search-input"
                    type="text"
                    name="text"
                    placeholder="都道府県"
                  />
                </div>
                <div class="relative w-full md:w-5/12 text-gray-600 px-1">
                  <input
                    class="w-full border-2 border-gray-300 bg-white h-12 px-4 rounded-lg text-base focus:outline-none search-input"
                    type="text"
                    name="text"
                    placeholder="キーワード"
                  />
                </div>
                <div class="relative w-4/12 text-gray-600 px-1">
                  <input
                    class="w-full border-2 border-gray-300 bg-white h-12 px-4 rounded-lg text-base focus:outline-none search-input"
                    type="text"
                    name="text"
                    placeholder="現在地から検索"
                  />
                </div>
              </div>
            </div>
            <div class="w-5/12 px-4">
              <div class="w-full mb-1">
                <label id="" class="block text-lg font-bold"
                  >サロンの得意なメニュー</label
                >
              </div>
              <div class="relative mx-auto mb-0 text-gray-600">
                <a
                  href="commitment_search.html"
                  class="block w-full border-2 border-gray-300 text-gray-300 bg-white h-12 px-4 rounded-lg text-base focus:outline-none leading-10 cursor-pointer search-input"
                  >例）似合わせカット</a
                >
              </div>
            </div>
          </div>
          <!-- //PC -->

          <div class="flex flex-wrap -mx-4 mb-2">
            <div
              class="relative px-4 w-full mb-2 text-gray-600 block md:hidden"
            >
              <input
                class="w-full border-2 border-gray-300 bg-white h-12 px-4 rounded-lg text-base focus:outline-none search-input"
                type="search"
                name="search"
                placeholder="エリア・こだわり"
              />
            </div>
          </div>
          <div class="flex flex-wrap -mx-4 mb-4">
            <div class="w-full px-4 mb-1 hidden md:block">
              <label id="" class="block text-lg font-bold"
                >キーワード</label
              >
            </div>
            <div class="relative px-4 w-full mb-2 text-gray-600">
              <input
                class="w-full border-2 border-gray-300 bg-white h-12 px-4 rounded-lg text-base focus:outline-none search-input"
                type="search"
                name="search"
                placeholder="キーワード"
              />
            </div>
          </div>
          <!-- //SP -->

          <button
            class="block mx-auto w-full md:w-96 h-12 bg-black hover:bg-blue-dark text-white font-bold py-2 px-4 rounded"
          >
            検索する
          </button>
        </form>
      </div>
    </div>
  </div>
</template>
