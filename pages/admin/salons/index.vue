<template>
  <div class="mx-auto">
    <div class="px-4 md:px-0">
      <h2 class="text-xl font-bold md:text-2xl mb-4 md:mb-6">
        サロンページ設定
      </h2>
      <div>
        <h3 class="text-lg font-bold mb-4">店舗名</h3>
        <div class="bg-white py-2 px-4">
          <p>Beauty salon</p>
        </div>
      </div>
      <div class="mt-6">
        <h3 class="text-lg font-bold mb-4">予約方法</h3>
        <div class="block p-2 pr-6 bg-white rounded mb-4">
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
            <div class="select-none">電話予約のみ</div>
          </label>
        </div>
        <div class="block p-2 pr-6 bg-white rounded mb-4">
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
            <div class="select-none">予約リンクを設定する</div>
          </label>
        </div>
        <input
          class="w-full text-base border-2 border-gray-100 bg-white h-12 px-4 rounded-lg focus:outline-none search-input"
          type="text"
          name="text"
          placeholder="https://"
        />
      </div>
      <div class="mt-6">
        <h3 class="text-lg font-bold mb-4">ページ公開</h3>
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
        <a
          href="#"
          class="flex justify-center items-center text-center w-full bg-black hover:bg-blue-dark text-white font-bold py-4 px-4 rounded leading-7 md:mr-auto mt-3 md:mt-0"
        >
          <svg
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.5 6C16.29 6 19.67 8.13 21.32 11.5C19.67 14.87 16.29 17 12.5 17C8.71 17 5.33 14.87 3.68 11.5C5.33 8.13 8.71 6 12.5 6ZM12.5 4C7.5 4 3.23 7.11 1.5 11.5C3.23 15.89 7.5 19 12.5 19C17.5 19 21.77 15.89 23.5 11.5C21.77 7.11 17.5 4 12.5 4ZM12.5 9C13.88 9 15 10.12 15 11.5C15 12.88 13.88 14 12.5 14C11.12 14 10 12.88 10 11.5C10 10.12 11.12 9 12.5 9ZM12.5 7C10.02 7 8 9.02 8 11.5C8 13.98 10.02 16 12.5 16C14.98 16 17 13.98 17 11.5C17 9.02 14.98 7 12.5 7Z"
              fill="white"
            />
          </svg>
          <span class="block ml-2">プレビューを確認する</span>
        </a>
      </div>
      <div class="mt-6">
        <h3 class="text-lg font-bold mb-4">現在のプラン</h3>
        <div class="flex justify-between items-center">
          <p>無料プラン</p>
          <p>
            <a href="#" class="text-beige-900 font-bold underline"
              >有料プランにアップグレード</a
            >
          </p>
        </div>
      </div>
    </div>
    <div class="mt-12">
      <ul>
        <li>
          <nuxt-link
            to="basic"
            class="flex justify-between items-center text-black bg-white px-4 py-2 md:py-4"
            append
            >
            <p class="block font-bold">基本情報</p>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.49016 3.86998L8.27016 2.09998L18.1602 12L8.26016 21.9L6.49016 20.13L14.6202 12L6.49016 3.86998Z"
                fill="black"
              />
            </svg>
          </nuxt-link>
        </li>
        <li>
          <nuxt-link
            to="info"
            class="flex justify-between items-center text-black bg-white px-4 py-2 md:py-4"
            append
          >
            <p class="block font-bold">店舗情報</p>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.49016 3.86998L8.27016 2.09998L18.1602 12L8.26016 21.9L6.49016 20.13L14.6202 12L6.49016 3.86998Z"
                fill="black"
              />
            </svg>
          </nuxt-link>
        </li>
        <li>
          <nuxt-link
            to="commit"
            class="flex justify-between items-center text-black bg-white px-4 py-2 md:py-4"
            append
          >
            <p class="block font-bold">こだわり</p>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.49016 3.86998L8.27016 2.09998L18.1602 12L8.26016 21.9L6.49016 20.13L14.6202 12L6.49016 3.86998Z"
                fill="black"
              />
            </svg>
          </nuxt-link>
        </li>
        <li>
          <nuxt-link
            to="menutag"
            class="flex justify-between items-center text-black bg-white px-4 py-2 md:py-4"
            append
          >
            <p class="block font-bold">得意なメニュータグ</p>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.49016 3.86998L8.27016 2.09998L18.1602 12L8.26016 21.9L6.49016 20.13L14.6202 12L6.49016 3.86998Z"
                fill="black"
              />
            </svg>
          </nuxt-link>
        </li>
        <li>
          <nuxt-link
            to="corona"
            class="flex justify-between items-center text-black bg-white px-4 py-2 md:py-4"
            append
          >
            <p class="block font-bold">感染予防対策</p>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.49016 3.86998L8.27016 2.09998L18.1602 12L8.26016 21.9L6.49016 20.13L14.6202 12L6.49016 3.86998Z"
                fill="black"
              />
            </svg>
          </nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'admin',
  head() {
    return {
      title: 'サロンページ設定',
      bodyAttrs: {
        class: 'body-admin'
      }
    }
  }
}
</script>
