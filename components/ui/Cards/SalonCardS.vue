<template>
  <div class="w-full lg:w-1/3 px-2 mb-4 md:mb-0 salon-card">
    <div
      class="bg-white rounded-lg overflow-hidden shadow relative"
    >
      <img
        class="h-44 w-full object-cover object-center"
        src="~/assets/images/thumb_cover.jpg"
        alt=""
      />
      <div class="px-4 py-3 h-auto card-col">
        <div class="flex flex-wrap justify-between">
            <h3 class="text-xl font-bold mb-3 card-title">
              <nuxt-link
                to="/salon"
                class="block w-full h-full text-black"
              >
                Stujio
              </nuxt-link>
            </h3>
          <CardToggle />
        </div>
        <p class="text-sm mb-2">髪質改善のマスターズ</p>
        <p class="text-sm mb-1">
          <span class="inline-block align-bottom">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.25 4.58333C12.1667 4.58333 12.9167 3.83333 12.9167 2.91667C12.9167 2 12.1667 1.25 11.25 1.25C10.3333 1.25 9.58333 2 9.58333 2.91667C9.58333 3.83333 10.3333 4.58333 11.25 4.58333ZM8.16667 7.41667L6.03333 18.175C5.925 18.6833 6.325 19.1667 6.85 19.1667H6.91667C7.30833 19.1667 7.64167 18.9 7.73333 18.5167L9.08333 12.5L10.8333 14.1667V18.3333C10.8333 18.7917 11.2083 19.1667 11.6667 19.1667C12.125 19.1667 12.5 18.7917 12.5 18.3333V13.6333C12.5 13.175 12.3167 12.7417 11.9833 12.425L10.75 11.25L11.25 8.75C12.1417 9.78333 13.4333 10.525 14.8833 10.7583C15.3833 10.8333 15.8333 10.4333 15.8333 9.925C15.8333 9.51667 15.5333 9.175 15.125 9.10833C13.8583 8.9 12.8083 8.15 12.25 7.16667L11.4167 5.83333C10.95 5.09167 10.0167 4.79167 9.20833 5.13333L6.01667 6.48333C5.4 6.75 5 7.35 5 8.025V10C5 10.4583 5.375 10.8333 5.83333 10.8333C6.29167 10.8333 6.66667 10.4583 6.66667 10V8L8.16667 7.41667Z"
                fill="black"
              />
            </svg>
          </span>
          渋谷駅より徒歩5分
        </p>
        <p class="text-sm">
          <span class="inline-block align-bottom">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 7.75V14.625C18 15.3813 17.3864 16 16.6364 16H5.72727C5.35227 16 5.04545 15.6906 5.04545 15.3125C5.04545 14.9344 5.35227 14.625 5.72727 14.625H16.6364V7.75C16.6364 7.37188 16.9432 7.0625 17.3182 7.0625C17.6932 7.0625 18 7.37188 18 7.75ZM5.04545 13.25C3.91364 13.25 3 12.3288 3 11.1875V7.0625C3 5.92125 3.91364 5 5.04545 5H13.2273C14.3591 5 15.2727 5.92125 15.2727 7.0625V11.875C15.2727 12.6312 14.6591 13.25 13.9091 13.25H5.04545ZM7.09091 9.125C7.09091 10.2663 8.00455 11.1875 9.13636 11.1875C10.2682 11.1875 11.1818 10.2663 11.1818 9.125C11.1818 7.98375 10.2682 7.0625 9.13636 7.0625C8.00455 7.0625 7.09091 7.98375 7.09091 9.125Z"
                fill="black"
              />
            </svg>
          </span>
          カット料金 5,000円〜
        </p>
        <ul class="tag-lists text-sm">
          <li><a href="#">似合わせカット</a></li>
          <li><a href="#">髪質改善</a></li>
          <li><a href="#">こだわりのトリートメント</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import CardToggle from "~/components/ui/Button/CardToggle";

export default {
  components: {
    CardToggle
  }
}
</script>
