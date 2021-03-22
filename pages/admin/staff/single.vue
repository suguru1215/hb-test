<template>
  <div class="px-4 md:px-0">
    <div>
      <h3 class="text-lg font-bold mb-4">名前（漢字）</h3>
      <div class="-mx-2">
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
    <div class="mt-6">
      <h3 class="text-lg font-bold mb-4">名前（ローマ字）</h3>
      <div class="-mx-2">
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
    <div class="mt-6">
      <h3 class="text-lg font-bold mb-4">役職</h3>
      <div class="-mx-2">
        <div class="w-full px-2">
          <input
            class="w-full text-base border-2 border-gray-100 bg-white h-12 px-4 rounded-lg focus:outline-none search-input"
            type="text"
            name="text"
            placeholder="例：店長、副店長、スタイリスト等"
          />
        </div>
      </div>
    </div>
    <div class="mt-6">
      <h3 class="text-lg font-bold mb-4">スタッフ歴</h3>
      <div class="-mx-2">
        <div class="w-full px-2">
          <select
            class="w-full md:w-2/4 text-base text-gray-400 border-2 border-gray-100 bg-white h-12 px-4 rounded-lg focus:outline-none search-input"
            name="prefectures"
            id="prefectures"
          >
            <option value="選択してください">選択してください</option>
            <option value="1年">1年</option>
            <option value="2年">2年</option>
            <option value="3年">3年</option>
            <option value="4年">4年</option>
            <option value="5年">5年</option>
            <option value="6年">6年</option>
            <option value="7年">7年</option>
            <option value="8年">8年</option>
            <option value="9年">9年</option>
            <option value="10年以上">10年以上</option>
            <option value="20年以上">20年以上</option>
          </select>
        </div>
      </div>
    </div>
    <div class="mt-6">
      <h3 class="text-lg font-bold mb-4">自己紹介</h3>
      <div class="-mx-2">
        <div class="w-full px-2">
          <textarea
            class="w-full text-base border-2 border-gray-100 bg-white h-32 px-4 py-2 rounded-lg focus:outline-none search-input"
            name="text"
            placeholder="入力してください"
          ></textarea>
        </div>
      </div>
    </div>
    <div class="mt-6">
      <h3 class="text-lg font-bold mb-4">スタッフ写真</h3>
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
      </div>
    </div>
    <div class="mt-6">
      <h3 class="text-lg font-bold mb-4">指名</h3>
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
          <div class="select-none">可</div>
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
          <div class="select-none">不可</div>
        </label>
      </div>
    </div>
    <div class="mt-6">
      <h3 class="text-lg font-bold mb-4">指名料</h3>
      <div class="-mx-2">
        <div class="w-full px-2">
          <select
            class="w-full md:w-2/4 text-base text-gray-400 border-2 border-gray-100 bg-white h-12 px-4 rounded-lg focus:outline-none search-input"
            name="prefectures"
            id="prefectures"
          >
            <option value="選択してください">選択してください</option>
            <option value="500円">500円</option>
            <option value="1,000円">1,000円</option>
            <option value="1,500円">1,500円</option>
            <option value="2,000円">2,000円</option>
            <option value="2,500円">2,500円</option>
            <option value="3,000円">3,000円</option>
            <option value="3,500円">3,500円</option>
            <option value="4,000円">4,000円</option>
            <option value="4,500円">4,500円</option>
            <option value="5,000円以上">5,000円以上</option>
          </select>
        </div>
      </div>
    </div>
    <div class="mt-6">
      <h3 class="text-lg font-bold mb-4">Facebook</h3>
      <div class="-mx-2">
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
    <div class="mt-6">
      <h3 class="text-lg font-bold mb-4">Instagram</h3>
      <div class="-mx-2">
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
    <div class="mt-6">
      <h3 class="text-lg font-bold mb-4">LINE</h3>
      <div class="-mx-2">
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
    <div class="mt-6">
      <h3 class="text-lg font-bold mb-4">このスタッフを表示する</h3>
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
import InputBox from "~/components/ui/Input/InputBox.vue";

export default {
  layout: 'adminback',
  head() {
    return {
      title: 'スタッフ情報編集',
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
        title: 'スタッフ情報編集'
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
