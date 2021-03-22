<template>
  <div>
    <div class="salon-wrap">
      <div class="container max-w-full mx-auto lg:px-56 md:px-16 px-4">
        <h2 class="text-xl font-bold mt-20">マイページ</h2>
        <section class="section-content px-4 md:px-0 mt-6">
          <div class="block md:flex md:flex-wrap md:justify-between">
            <h3 class="text-base font-normal mb-4">
              最近ブックマークしたサロン
            </h3>
            <p class="text-base m-0 hidden md:block">
              <a href="#" class="font-bold text-beige-900">すべてを見る</a>
            </p>
          </div>
          <div class="flex justify-between -mx-2 overflow-scroll">
            <div class="w-full lg:w-1/3 px-2 mb-4 md:mb-0 salon-card">
              <nuxt-link
                to="/salon"
                class="block w-full h-full text-black"
              >
                <div
                  class="bg-white rounded-lg overflow-hidden shadow relative"
                >
                  <img
                    class="h-48 w-full object-cover object-center"
                    src="~/assets/images/thumb_cover.jpg"
                    alt=""
                  />
                  <div class="px-4 py-3 h-auto card-col">
                    <div class="flex flex-wrap justify-between">
                      <h3 class="text-xl font-bold mb-3 card-title">Stujio</h3>
                      <svg
                        width="25"
                        height="24"
                        viewBox="0 0 25 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M17.9771 3H7.94491C6.84137 3 5.94851 3.9 5.94851 5L5.93848 21L12.961 18L19.9835 21V5C19.9835 3.9 19.0806 3 17.9771 3ZM17.9771 18L12.961 15.82L7.94491 18V5H17.9771V18Z"
                          fill="#323232"
                        />
                      </svg>
                    </div>
                    <p class="text-sm mb-4">髪質改善のマスターズ</p>
                    <p class="text-sm mb-2">
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
                    <ul class="tag-lists text-sm mt-4">
                      <li><a href="#">似合わせカット</a></li>
                      <li><a href="#">髪質改善</a></li>
                      <li><a href="#">こだわりのトリートメント</a></li>
                    </ul>
                  </div>
                </div>
              </nuxt-link>
            </div>
            <!-- //card -->
            <div class="w-full lg:w-1/3 px-2 mb-4 md:mb-0 salon-card">
              <nuxt-link
                to="/salon"
                class="block w-full h-full text-black"
              >
                <div
                  class="bg-white rounded-lg overflow-hidden shadow relative"
                >
                  <img
                    class="h-48 w-full object-cover object-center"
                    src="~/assets/images/thumb_cover.jpg"
                    alt=""
                  />
                  <div class="px-4 py-3 h-auto card-col">
                    <div class="flex flex-wrap justify-between">
                      <h3 class="text-xl font-bold mb-3 card-title">Stujio</h3>
                      <svg
                        width="25"
                        height="24"
                        viewBox="0 0 25 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M17.9771 3H7.94491C6.84137 3 5.94851 3.9 5.94851 5L5.93848 21L12.961 18L19.9835 21V5C19.9835 3.9 19.0806 3 17.9771 3ZM17.9771 18L12.961 15.82L7.94491 18V5H17.9771V18Z"
                          fill="#323232"
                        />
                      </svg>
                    </div>
                    <p class="text-sm mb-4">髪質改善のマスターズ</p>
                    <p class="text-sm mb-2">
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
                    <ul class="tag-lists text-sm mt-4">
                      <li><a href="#">似合わせカット</a></li>
                      <li><a href="#">髪質改善</a></li>
                      <li><a href="#">こだわりのトリートメント</a></li>
                    </ul>
                  </div>
                </div>
              </nuxt-link>
            </div>
            <!-- //card -->
            <div class="w-full lg:w-1/3 px-2 mb-4 md:mb-0 salon-card">
              <nuxt-link
                to="/salon"
                class="block w-full h-full text-black"
              >
                <div
                  class="bg-white rounded-lg overflow-hidden shadow relative"
                >
                  <img
                    class="h-48 w-full object-cover object-center"
                    src="~/assets/images/thumb_cover.jpg"
                    alt=""
                  />
                  <div class="px-4 py-3 h-auto card-col">
                    <div class="flex flex-wrap justify-between">
                      <h3 class="text-xl font-bold mb-3 card-title">Stujio</h3>
                      <svg
                        width="25"
                        height="24"
                        viewBox="0 0 25 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M17.9771 3H7.94491C6.84137 3 5.94851 3.9 5.94851 5L5.93848 21L12.961 18L19.9835 21V5C19.9835 3.9 19.0806 3 17.9771 3ZM17.9771 18L12.961 15.82L7.94491 18V5H17.9771V18Z"
                          fill="#323232"
                        />
                      </svg>
                    </div>
                    <p class="text-sm mb-4">髪質改善のマスターズ</p>
                    <p class="text-sm mb-2">
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
                    <ul class="tag-lists text-sm mt-4">
                      <li><a href="#">似合わせカット</a></li>
                      <li><a href="#">髪質改善</a></li>
                      <li><a href="#">こだわりのトリートメント</a></li>
                    </ul>
                  </div>
                </div>
              </nuxt-link>
            </div>
            <!-- //card -->
          </div>
          <!-- //cards -->
          <p class="text-sm text-right mt-4 block md:hidden">
            <a href="#" class="font-bold text-beige-900">すべてを見る</a>
          </p>
        </section>
        <!-- //section-content -->

        <section class="section-content px-0 mt-12">
          <div class="block md:flex md:flex-wrap md:justify-between">
            <h3 class="text-base font-normal mb-4 px-4 md:px-0">
              最近ブックマークしたスタイル
            </h3>
            <p class="text-base m-0 hidden md:block">
              <a href="#" class="font-bold text-beige-900">すべてを見る</a>
            </p>
          </div>
          <ul class="flex flex-wrap relative -mx-2">
            <li class="relative w-4/12 md:w-1/5 px-2">
              <span
                class="absolute hidden md:inline-block rounded p-1 top-3 right-5 bg-black cursor-pointer"
              >
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.2676 3.82617H7.26758C6.16758 3.82617 5.27758 4.72617 5.27758 5.82617L5.26758 21.8262L12.2676 18.8262L19.2676 21.8262V5.82617C19.2676 4.72617 18.3676 3.82617 17.2676 3.82617Z"
                    fill="#D6B798"
                  />
                </svg>
              </span>
              <img src="~/assets/images/thumb_01.jpg" alt="" />
            </li>
            <li class="relative w-4/12 md:w-1/5 px-2">
              <span
                class="absolute hidden md:inline-block rounded p-1 top-3 right-5 bg-black cursor-pointer"
              >
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.2676 3.82617H7.26758C6.16758 3.82617 5.27758 4.72617 5.27758 5.82617L5.26758 21.8262L12.2676 18.8262L19.2676 21.8262V5.82617C19.2676 4.72617 18.3676 3.82617 17.2676 3.82617Z"
                    fill="#D6B798"
                  />
                </svg>
              </span>
              <img src="~/assets/images/thumb_02.jpg" alt="" />
            </li>
            <li class="relative w-4/12 md:w-1/5 px-2">
              <span
                class="absolute hidden md:inline-block rounded p-1 top-3 right-5 bg-black cursor-pointer"
              >
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.2676 3.82617H7.26758C6.16758 3.82617 5.27758 4.72617 5.27758 5.82617L5.26758 21.8262L12.2676 18.8262L19.2676 21.8262V5.82617C19.2676 4.72617 18.3676 3.82617 17.2676 3.82617Z"
                    fill="#D6B798"
                  />
                </svg>
              </span>
              <img src="~/assets/images/thumb_03.jpg" alt="" />
            </li>
            <li class="relative w-4/12 md:w-1/5 px-2">
              <span
                class="absolute hidden md:inline-block rounded p-1 top-3 right-5 bg-black cursor-pointer"
              >
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.2676 3.82617H7.26758C6.16758 3.82617 5.27758 4.72617 5.27758 5.82617L5.26758 21.8262L12.2676 18.8262L19.2676 21.8262V5.82617C19.2676 4.72617 18.3676 3.82617 17.2676 3.82617Z"
                    fill="#D6B798"
                  />
                </svg>
              </span>
              <img src="~/assets/images/thumb_04.jpg" alt="" />
            </li>
            <li class="relative w-4/12 md:w-1/5 px-2">
              <span
                class="absolute hidden md:inline-block rounded p-1 top-3 right-5 bg-black cursor-pointer"
              >
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.2676 3.82617H7.26758C6.16758 3.82617 5.27758 4.72617 5.27758 5.82617L5.26758 21.8262L12.2676 18.8262L19.2676 21.8262V5.82617C19.2676 4.72617 18.3676 3.82617 17.2676 3.82617Z"
                    fill="#D6B798"
                  />
                </svg>
              </span>
              <img src="~/assets/images/thumb_05.jpg" alt="" />
            </li>
            <li class="relative w-4/12 md:w-1/5 px-2 block md:hidden">
              <span
                class="absolute hidden md:inline-block rounded p-1 top-3 right-5 bg-black cursor-pointer"
              >
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.2676 3.82617H7.26758C6.16758 3.82617 5.27758 4.72617 5.27758 5.82617L5.26758 21.8262L12.2676 18.8262L19.2676 21.8262V5.82617C19.2676 4.72617 18.3676 3.82617 17.2676 3.82617Z"
                    fill="#D6B798"
                  />
                </svg>
              </span>
              <img src="~/assets/images/thumb_01.jpg" alt="" />
            </li>
            <li class="relative w-4/12 md:w-1/5 px-2 block md:hidden">
              <span
                class="absolute hidden md:inline-block rounded p-1 top-3 right-5 bg-black cursor-pointer"
              >
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.2676 3.82617H7.26758C6.16758 3.82617 5.27758 4.72617 5.27758 5.82617L5.26758 21.8262L12.2676 18.8262L19.2676 21.8262V5.82617C19.2676 4.72617 18.3676 3.82617 17.2676 3.82617Z"
                    fill="#D6B798"
                  />
                </svg>
              </span>
              <img src="~/assets/images/thumb_02.jpg" alt="" />
            </li>
            <li class="relative w-4/12 md:w-1/5 px-2 block md:hidden">
              <span
                class="absolute hidden md:inline-block rounded p-1 top-3 right-5 bg-black cursor-pointer"
              >
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.2676 3.82617H7.26758C6.16758 3.82617 5.27758 4.72617 5.27758 5.82617L5.26758 21.8262L12.2676 18.8262L19.2676 21.8262V5.82617C19.2676 4.72617 18.3676 3.82617 17.2676 3.82617Z"
                    fill="#D6B798"
                  />
                </svg>
              </span>
              <img src="~/assets/images/thumb_03.jpg" alt="" />
            </li>
            <li class="relative w-4/12 md:w-1/5 px-2 block md:hidden">
              <span
                class="absolute hidden md:inline-block rounded p-1 top-3 right-5 bg-black cursor-pointer"
              >
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.2676 3.82617H7.26758C6.16758 3.82617 5.27758 4.72617 5.27758 5.82617L5.26758 21.8262L12.2676 18.8262L19.2676 21.8262V5.82617C19.2676 4.72617 18.3676 3.82617 17.2676 3.82617Z"
                    fill="#D6B798"
                  />
                </svg>
              </span>
              <img src="~/assets/images/thumb_04.jpg" alt="" />
            </li>
          </ul>
          <p class="text-sm text-right mt-4 pr-4 block md:hidden">
            <a href="#" class="font-bold text-beige-900">すべてを見る</a>
          </p>
        </section>
        <!-- //section-content -->
      </div>
      <!-- //container -->
    </div>
  </div>
</template>

<script>
export default {
  components: {

  }
};
</script>
