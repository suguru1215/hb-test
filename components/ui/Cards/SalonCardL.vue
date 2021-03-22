<template>
  <div class="w-full mb-8">
    <div
      class="bg-white rounded-lg overflow-hidden shadow relative"
    >
      <div class="flex flex-col items-center">
        <div class="flex flex-col items-center">
          <div class="swiper flex overflow-x-scroll w-full">
            <img
              class="w-full h-1/2 object-cover bg-gray"
              src="~/assets/images/thumbs.jpg"
              id="slide1"
            />
            <img
              class="w-full h-1/2 object-cover bg-gray"
              src="~/assets/images/ambience_01.jpg"
              id="slide2"
            />
            <img
              class="w-full h-1/2 object-cover bg-gray"
              src="~/assets/images/thumbs.jpg"
              id="slide3"
            />
          </div>
        </div>
      </div>
      <div
        class="relative py-2 px-4 md:py-4 md:px-6 h-auto card-col"
      >
        <div class="flex flex-wrap justify-between">
          <h3 class="text-xl font-bold mb-3 card-title">
            <nuxt-link
              to="/salons"
              class="block w-full h-full text-black"
            >
              Stujio 渋谷
            </nuxt-link>
          </h3>
          <span class="relative bookmark">
            <a href="#" class="inline-block p-2 rounded">
              <svg
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.9775 3H7.94534C6.8418 3 5.94894 3.9 5.94894 5L5.9389 21L12.9614 18L19.9839 21V5C19.9839 3.9 19.081 3 17.9775 3ZM17.9775 18L12.9614 15.82L7.94534 18V5H17.9775V18Z"
                  fill="#323232"
                />
              </svg>
            </a>
          </span>
        </div>
        <p class="text-sm mb-3">髪質改善のマスターズサロン</p>
        <p class="text-sm mb-2">
          <span class="inline-block align-bottom">
            <svg
              width="21"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.6495 4.58333C12.5766 4.58333 13.3351 3.83333 13.3351 2.91667C13.3351 2 12.5766 1.25 11.6495 1.25C10.7225 1.25 9.96395 2 9.96395 2.91667C9.96395 3.83333 10.7225 4.58333 11.6495 4.58333ZM8.53121 7.41667L6.37367 18.175C6.26411 18.6833 6.66865 19.1667 7.1996 19.1667H7.26703C7.66314 19.1667 8.00025 18.9 8.09296 18.5167L9.45827 12.5L11.2281 14.1667V18.3333C11.2281 18.7917 11.6074 19.1667 12.0709 19.1667C12.5344 19.1667 12.9137 18.7917 12.9137 18.3333V13.6333C12.9137 13.175 12.7283 12.7417 12.3912 12.425L11.1438 11.25L11.6495 8.75C12.5513 9.78333 13.8576 10.525 15.3241 10.7583C15.8297 10.8333 16.2849 10.4333 16.2849 9.925C16.2849 9.51667 15.9814 9.175 15.5685 9.10833C14.2874 8.9 13.2255 8.15 12.6609 7.16667L11.8181 5.83333C11.3461 5.09167 10.4022 4.79167 9.58469 5.13333L6.35681 6.48333C5.73315 6.75 5.32861 7.35 5.32861 8.025V10C5.32861 10.4583 5.70787 10.8333 6.1714 10.8333C6.63493 10.8333 7.01419 10.4583 7.01419 10V8L8.53121 7.41667Z"
                fill="black"
              />
            </svg>
          </span>
          渋谷駅より徒歩5分
        </p>
        <p class="text-sm mb-6">
          <span class="inline-block align-bottom">
            <svg
              width="21"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.272 7.75V14.625C18.272 15.3813 17.6583 16 16.9083 16H5.99925C5.62425 16 5.31743 15.6906 5.31743 15.3125C5.31743 14.9344 5.62425 14.625 5.99925 14.625H16.9083V7.75C16.9083 7.37188 17.2152 7.0625 17.5902 7.0625C17.9652 7.0625 18.272 7.37188 18.272 7.75ZM5.31743 13.25C4.18561 13.25 3.27197 12.3288 3.27197 11.1875V7.0625C3.27197 5.92125 4.18561 5 5.31743 5H13.4992C14.6311 5 15.5447 5.92125 15.5447 7.0625V11.875C15.5447 12.6312 14.9311 13.25 14.1811 13.25H5.31743ZM7.36288 9.125C7.36288 10.2663 8.27652 11.1875 9.40834 11.1875C10.5402 11.1875 11.4538 10.2663 11.4538 9.125C11.4538 7.98375 10.5402 7.0625 9.40834 7.0625C8.27652 7.0625 7.36288 7.98375 7.36288 9.125Z"
                fill="black"
              />
            </svg>
          </span>
          カット料金 5,000円〜
        </p>
        <ul class="relative tag-lists text-sm">
          <li><a href="#" class="active">似合わせカット</a></li>
          <li><a href="#">髪質改善</a></li>
          <li><a href="#">こだわりのショートカット</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>
