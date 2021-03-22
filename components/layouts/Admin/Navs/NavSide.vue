<template>
  <div
    class="fixed inset-0 bg-white overflow-y-auto z-20 navi"
  >
    <div class="block relative text-black bg-white pt-8">
      <ul class="space-y-2 border-b-4 py-4 border-gray">
        <li class="px-4 mb-4">
          <div class="w-full">
            <select
              class="w-full text-base text-black font-bold border-2 border-gray-100 bg-white h-12 px-4 rounded-lg focus:outline-none search-input"
              name="prefectures"
              id="prefectures"
            >
              <option value="選択してください">Beauty Salon</option>
              <option value="Beauty Salon">Beauty Salon</option>
              <option value="Beauty Salon">Beauty Salon</option>
              <option value="Beauty Salon">Beauty Salon</option>
            </select>
          </div>
        </li>
        <li class="px-4">
          <nuxt-link
            to="/admin"
            class="flex items-center justify-center text-base bg-black text-white p-2 rounded"
          >
            <svg
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.5 20V14H14.5V20H19.5V12H22.5L12.5 3L2.5 12H5.5V20H10.5Z"
                fill="white"
              />
            </svg>
            <span class="block ml-2">ホーム</span>
          </nuxt-link>
        </li>
      </ul>
      <div class="space-y-2 border-b-4 border-gray py-3">
        <a
          href="#"
          class="flex flex-wrap items-center px-4 text-black font-bold"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.0001 22C13.1001 22 14.0001 21.1 14.0001 20H10.0001C10.0001 21.1 10.8901 22 12.0001 22ZM18.0001 16V11C18.0001 7.93 16.3601 5.36 13.5001 4.68V4C13.5001 3.17 12.8301 2.5 12.0001 2.5C11.1701 2.5 10.5001 3.17 10.5001 4V4.68C7.63005 5.36 6.00005 7.92 6.00005 11V16L4.71005 17.29C4.08005 17.92 4.52005 19 5.41005 19H18.5801C19.4701 19 19.9201 17.92 19.2901 17.29L18.0001 16Z"
              fill="black"
            />
          </svg>
          <span class="block ml-2">通知</span>
        </a>
      </div>
      <!-- <ul class="space-y-2 border-b-4 border-gray font-bold">
        <li
          class="flex flex-wrap text-gray-300 border-b-1 border-gray py-3 pl-4"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 11H7V13H9V11ZM13 11H11V13H13V11ZM17 11H15V13H17V11ZM19 4H18V2H16V4H8V2H6V4H5C3.89 4 3.01 4.9 3.01 6L3 20C3 21.1 3.89 22 5 22H19C20.1 22 21 21.1 21 20V6C21 4.9 20.1 4 19 4ZM19 20H5V9H19V20Z"
              fill="#C4C4C4"
            />
          </svg>
          <span class="block ml-2">予約管理</span>
        </li>
        <li class="border-b-1 border-gray pb-3 pl-4 ml-8">
          <a
            href="#"
            class="flex flex-wrap justify-between items-center text-black pr-4"
          >
            <span class="block">カレンダー</span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.49016 3.8701L8.27016 2.1001L18.1602 12.0001L8.26016 21.9001L6.49016 20.1301L14.6202 12.0001L6.49016 3.8701Z"
                fill="black"
              />
            </svg>
          </a>
        </li>
        <li class="border-b-1 border-gray pb-3 pl-4 ml-8">
          <a
            href="#"
            class="flex flex-wrap justify-between items-center text-black pr-4"
          >
            <span class="block">予約一覧</span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.49016 3.8701L8.27016 2.1001L18.1602 12.0001L8.26016 21.9001L6.49016 20.1301L14.6202 12.0001L6.49016 3.8701Z"
                fill="black"
              />
            </svg>
          </a>
        </li>
        <li class="border-b-1 border-gray pb-3 pl-4 ml-8">
          <a
            href="#"
            class="flex flex-wrap justify-between items-center text-black pr-4"
          >
            <span class="block">お客様情報一覧</span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.49016 3.8701L8.27016 2.1001L18.1602 12.0001L8.26016 21.9001L6.49016 20.1301L14.6202 12.0001L6.49016 3.8701Z"
                fill="black"
              />
            </svg>
          </a>
        </li>
        <li class="pb-3 pl-4 ml-8">
          <a
            href="#"
            class="flex flex-wrap justify-between items-center text-black pr-4"
          >
            <span class="block">予約の基本設定</span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.49016 3.8701L8.27016 2.1001L18.1602 12.0001L8.26016 21.9001L6.49016 20.1301L14.6202 12.0001L6.49016 3.8701Z"
                fill="black"
              />
            </svg>
          </a>
        </li>
      </ul> -->
      <ul class="space-y-2 border-b-4 border-gray font-bold">
        <li
          class="flex flex-wrap text-gray-300 border-b-1 border-gray py-3 pl-4"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 6H22V4H4C2.9 4 2 4.9 2 6V17H0V20H14V17H4V6ZM23 8H17C16.45 8 16 8.45 16 9V19C16 19.55 16.45 20 17 20H23C23.55 20 24 19.55 24 19V9C24 8.45 23.55 8 23 8ZM22 17H18V10H22V17Z"
              fill="#C4C4C4"
            />
          </svg>
          <span class="block ml-2">サロンページ</span>
        </li>
        <li class="border-b-1 border-gray pb-3 pl-4 ml-8">
          <nuxt-link
            to="/admin/menu"
            class="flex flex-wrap justify-between items-center text-black pr-4"
          >
            <span class="block">メニュー</span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.49016 3.8701L8.27016 2.1001L18.1602 12.0001L8.26016 21.9001L6.49016 20.1301L14.6202 12.0001L6.49016 3.8701Z"
                fill="black"
              />
            </svg>
          </nuxt-link>
        </li>
        <li class="border-b-1 border-gray pb-3 pl-4 ml-8">
          <nuxt-link
            to="/admin/style"
            class="flex flex-wrap justify-between items-center text-black pr-4"
          >
            <span class="block">スタイル</span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.49016 3.8701L8.27016 2.1001L18.1602 12.0001L8.26016 21.9001L6.49016 20.1301L14.6202 12.0001L6.49016 3.8701Z"
                fill="black"
              />
            </svg>
          </nuxt-link>
        </li>
        <li class="border-b-1 border-gray pb-3 pl-4 ml-8">
          <nuxt-link
            to="/admin/staff"
            class="flex flex-wrap justify-between items-center text-black pr-4"
          >
            <span class="block">スタッフ</span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.49016 3.8701L8.27016 2.1001L18.1602 12.0001L8.26016 21.9001L6.49016 20.1301L14.6202 12.0001L6.49016 3.8701Z"
                fill="black"
              />
            </svg>
          </nuxt-link>
        </li>
        <li class="border-b-1 border-gray pb-3 pl-4 ml-8">
          <nuxt-link
            to="/admin/salons"
            class="flex flex-wrap justify-between items-center text-black pr-4"
          >
            <span class="block">サロンページ設定</span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.49016 3.8701L8.27016 2.1001L18.1602 12.0001L8.26016 21.9001L6.49016 20.1301L14.6202 12.0001L6.49016 3.8701Z"
                fill="black"
              />
            </svg>
          </nuxt-link>
        </li>
        <!-- <li class="pb-3 pl-4 ml-8">
          <a
            href="#"
            class="flex flex-wrap justify-between items-center text-black pr-4"
          >
            <span class="block">編集履歴</span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.49016 3.8701L8.27016 2.1001L18.1602 12.0001L8.26016 21.9001L6.49016 20.1301L14.6202 12.0001L6.49016 3.8701Z"
                fill="black"
              />
            </svg>
          </a>
        </li> -->
      </ul>
      <ul class="space-y-2 border-b-8 border-gray font-bold">
        <li
          class="flex flex-wrap text-gray-300 border-b-1 border-gray py-3 pl-4"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z"
              fill="#C4C4C4"
            />
          </svg>
          <span class="block ml-2">アカウント</span>
        </li>
        <li class="border-b-1 border-gray pb-3 pl-4 ml-8">
          <a
            href="#"
            class="flex flex-wrap justify-between items-center text-black pr-4"
          >
            <span class="block">アカウント設定</span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.49016 3.8701L8.27016 2.1001L18.1602 12.0001L8.26016 21.9001L6.49016 20.1301L14.6202 12.0001L6.49016 3.8701Z"
                fill="black"
              />
            </svg>
          </a>
        </li>
        <li class="border-b-1 border-gray pb-3 pl-4 ml-8">
          <a
            href="#"
            class="flex flex-wrap justify-between items-center text-black pr-4"
          >
            <span class="block">お知らせ</span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.49016 3.8701L8.27016 2.1001L18.1602 12.0001L8.26016 21.9001L6.49016 20.1301L14.6202 12.0001L6.49016 3.8701Z"
                fill="black"
              />
            </svg>
          </a>
        </li>
        <li class="border-b-1 border-gray pb-3 pl-4 ml-8">
          <a
            href="#"
            class="flex flex-wrap justify-between items-center text-black pr-4"
          >
            <span class="block">ヘルプ</span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.49016 3.8701L8.27016 2.1001L18.1602 12.0001L8.26016 21.9001L6.49016 20.1301L14.6202 12.0001L6.49016 3.8701Z"
                fill="black"
              />
            </svg>
          </a>
        </li>
        <li class="pb-3 pl-4 ml-8">
          <a
            href="#"
            class="flex flex-wrap justify-between items-center text-black pr-4"
          >
            <span class="block">ログアウト</span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.49016 3.8701L8.27016 2.1001L18.1602 12.0001L8.26016 21.9001L6.49016 20.1301L14.6202 12.0001L6.49016 3.8701Z"
                fill="black"
              />
            </svg>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
