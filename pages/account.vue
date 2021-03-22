<template>
  <div>
    <div class="salon-wrap">
      <div
        class="container max-w-full mx-auto lg:px-56 md:px-16 px-4 mt-16 md:mt-24"
      >
        <h2 class="text-xl font-bold mb-8">アカウント情報</h2>
        <section class="bg-transparent">
          <h3 class="text-base md:text-lg font-bold mb-4">予約内容</h3>
          <div class="w-full bg-white">
            <div class="flex md:block border-b border-black">
              <h4
                class="flex w-5/12 md:w-full text-sm py-4 px-2 md:p-2 bg-gray-300"
              >
                ID<br class="md:hidden" />（メールアドレス）
              </h4>
              <div
                class="md:flex md:flex-wrap md:justify-between w-7/12 md:w-full py-2 px-4 md:p-6 text-gray-600"
              >
                <p class="text-sm md:text-lg mb-4 md:mb-0 text-black">
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
            <div class="flex md:block border-b border-black">
              <h4
                class="flex flex-col w-5/12 md:w-full text-sm py-4 px-2 md:p-2 bg-gray-300"
              >
                パスワード
              </h4>
              <div
                class="md:flex md:flex-wrap md:justify-between w-7/12 md:w-full py-2 px-4 md:p-6 text-gray-600"
              >
                <p class="text-sm md:text-lg mb-4 md:mb-0 text-black">
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
        </section>
        <!-- //section-contents -->

        <section class="bg-transparent mt-8">
          <h3 class="text-base md:text-lg font-bold mb-4">お客様情報</h3>
          <div class="w-full bg-white border-b-1 border-black">
            <h4 class="block text-sm p-2 bg-gray-300">お名前</h4>
            <div
              class="flex flex-wrap px-4 md:px-6 mt-4 md:-mx-2 text-gray-600"
            >
              <div class="w-full md:w-3/12 md:px-2">
                <label id="" class="block text-base mb-2">姓</label>
                <input
                  class="w-full text-base border-2 border-gray-300 bg-white h-12 px-4 rounded-lg text-sm focus:outline-none search-input"
                  type="text"
                  name="text"
                  placeholder="佐藤"
                />
              </div>
              <div class="w-full md:w-3/12 md:px-2 mt-4 md:mt-0">
                <label id="" class="block text-base mb-2">名</label>
                <input
                  class="w-full text-base border-2 border-gray-300 bg-white h-12 px-4 rounded-lg text-sm focus:outline-none search-input"
                  type="text"
                  name="text"
                  placeholder="太郎"
                />
              </div>
            </div>
            <div
              class="flex flex-wrap px-4 md:px-6 md:py-4 md:-mx-2 text-gray-600 mt-4 md:mt-0"
            >
              <div class="w-full md:w-3/12 md:px-2">
                <label id="" class="block text-base mb-2">セイ</label>
                <input
                  class="w-full text-base border-2 border-gray-300 bg-white h-12 px-4 rounded-lg text-sm focus:outline-none search-input"
                  type="text"
                  name="text"
                  placeholder="サトウ"
                />
              </div>
              <div class="w-full md:w-3/12 md:px-2 mt-4 mb-6 md:mb-0 md:mt-0">
                <label id="" class="block text-base mb-2">メイ</label>
                <input
                  class="w-full text-base border-2 border-gray-300 bg-white h-12 px-4 rounded-lg text-sm focus:outline-none search-input"
                  type="text"
                  name="text"
                  placeholder="タロウ"
                />
              </div>
            </div>
          </div>
          <div class="w-full bg-white border-b-1 border-black">
            <h4 class="block text-sm p-2 bg-gray-300">性別</h4>
            <ul class="flex flex-wrap px-4 md:px-6 py-4">
              <li class="md:w-32 mr-2">
                <label
                  class="flex justify-start items-center p-2 border-2 rounded border-gray-200"
                >
                  <div
                    class="bg-white border-2 rounded border-gray-200 w-6 h-6 flex flex-shrink-0 justify-center items-center mr-2 focus-within:border-blue-500"
                  >
                    <input type="checkbox" class="opacity-0 absolute" />
                    <svg
                      class="fill-current hidden w-4 h-4 text-green-500 pointer-events-none"
                      viewBox="0 0 20 20"
                    >
                      <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
                    </svg>
                  </div>
                  <div class="select-none">女性</div>
                </label>
              </li>
              <li class="md:w-32 mr-2">
                <label
                  class="flex justify-start items-center p-2 border-2 rounded border-gray-200"
                >
                  <div
                    class="bg-white border-2 rounded border-gray-200 w-6 h-6 flex flex-shrink-0 justify-center items-center mr-2 focus-within:border-blue-500"
                  >
                    <input type="checkbox" class="opacity-0 absolute" />
                    <svg
                      class="fill-current hidden w-4 h-4 text-green-500 pointer-events-none"
                      viewBox="0 0 20 20"
                    >
                      <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
                    </svg>
                  </div>
                  <div class="select-none">男性</div>
                </label>
              </li>
              <li class="md:w-32 mr-2">
                <label
                  class="flex justify-start items-center p-2 border-2 rounded border-gray-200"
                >
                  <div
                    class="bg-white border-2 rounded border-gray-200 w-6 h-6 flex flex-shrink-0 justify-center items-center mr-2 focus-within:border-blue-500"
                  >
                    <input type="checkbox" class="opacity-0 absolute" />
                    <svg
                      class="fill-current hidden w-4 h-4 text-green-500 pointer-events-none"
                      viewBox="0 0 20 20"
                    >
                      <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
                    </svg>
                  </div>
                  <div class="select-none">選択なし</div>
                </label>
              </li>
            </ul>
          </div>
          <div class="w-full bg-white border-b-1 border-black">
            <h4 class="block text-sm p-2 bg-gray-300">ニックネーム</h4>
            <div class="px-6 py-4 -mx-2">
              <div class="w-full md:w-3/12 px-0 md:px-2">
                <input
                  class="w-full text-base border-2 border-gray-300 bg-white h-12 px-4 rounded-lg text-sm focus:outline-none search-input"
                  type="email"
                  name="email"
                  placeholder="さとう"
                />
              </div>
            </div>
          </div>
          <div class="w-full bg-white border-b-1 border-black">
            <h4 class="block text-sm p-2 bg-gray-300">電話番号</h4>
            <div class="px-6 py-4 -mx-2">
              <div class="w-full md:w-3/12 px-0 md:px-2">
                <input
                  class="w-full text-base border-2 border-gray-300 bg-white h-12 px-4 rounded-lg text-sm focus:outline-none search-input"
                  type="email"
                  name="email"
                  placeholder="080-1234-5678"
                />
              </div>
            </div>
          </div>
          <div class="w-full bg-white">
            <h4 class="block text-sm p-2 bg-gray-300">通知</h4>
            <ul class="flex flex-wrap px-6 py-4">
              <li class="w-32 mr-2">
                <label
                  class="flex justify-start items-center p-2 border-2 rounded border-gray-200"
                >
                  <div
                    class="w-6 h-6 flex flex-shrink-0 justify-center items-center mr-2 focus-within:border-blue-500"
                  >
                    <input type="radio" class="opacity-0 absolute" />
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <mask
                        id="mask0"
                        mask-type="alpha"
                        maskUnits="userSpaceOnUse"
                        x="2"
                        y="2"
                        width="20"
                        height="20"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M2 12C2 6.48 6.48 2 12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12ZM4 12C4 16.42 7.58 20 12 20C16.42 20 20 16.42 20 12C20 7.58 16.42 4 12 4C7.58 4 4 7.58 4 12Z"
                          fill="white"
                        />
                      </mask>
                      <g mask="url(#mask0)">
                        <rect width="24" height="24" fill="#979797" />
                      </g>
                    </svg>
                  </div>
                  <div class="select-none">通知オン</div>
                </label>
              </li>
              <li class="w-32 mr-2">
                <label
                  class="flex justify-start items-center p-2 border-2 rounded border-gray-200"
                >
                  <div
                    class="w-6 h-6 flex flex-shrink-0 justify-center items-center mr-2 focus-within:border-blue-500"
                  >
                    <input type="radio" class="opacity-0 absolute" />
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <mask
                        id="mask0"
                        mask-type="alpha"
                        maskUnits="userSpaceOnUse"
                        x="2"
                        y="2"
                        width="20"
                        height="20"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M2 12C2 6.48 6.48 2 12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12ZM4 12C4 16.42 7.58 20 12 20C16.42 20 20 16.42 20 12C20 7.58 16.42 4 12 4C7.58 4 4 7.58 4 12Z"
                          fill="white"
                        />
                      </mask>
                      <g mask="url(#mask0)">
                        <rect width="24" height="24" fill="#979797" />
                      </g>
                    </svg>
                  </div>
                  <div class="select-none">通知オフ</div>
                </label>
              </li>
            </ul>
          </div>
          <p class="text-center mt-8 md:mt-12">
            <a
              href="#"
              class="inline-block text-center mx-auto w-full md:w-96 h-12 bg-black hover:bg-blue-dark text-white font-bold py-2 px-4 rounded leading-7"
              >保存する</a
            >
          </p>
          <p class="text-right mt-4">
            <a href="#" class="text-black">Hairbookを退会</a>
          </p>
        </section>
        <!-- //section-contents -->
      </div>
      <!-- //container -->
    </div>
  </div>
</template>
