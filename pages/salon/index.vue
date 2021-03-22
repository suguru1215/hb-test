<template>
  <div>
    <div id="salon-wrap" class="salon-wrap">
      <article class="bg-white">
        <div class="relative w-full overflow-hidden salon-cover">
          <div class="block w-full h-full bg"></div>
          <span
            class="hidden md:block absolute inset-0 m-auto z-0 max-w-2xl w-full h-full bg-main"
          ></span>
        </div>
        <!-- //salon-cover -->
        <div class="container max-w-full mx-auto lg:px-56 md:px-16 px-4">
          <div class="salon-head">
            <div
              class="relative flex flex-col justify-center items-center bg-white shadow rounded-full -mt-12 w-24 h-24 md:-mt-16 md:w-32 md:h-32"
            >
              <img
                class="w-full salon-head__image"
                src="~/assets/images/logo.png"
                alt=""
              />
            </div>
            <div class="mb-4">
              <div class="relative w-full">
                <span class="absolute top-0 right-0">
                  <ul class="flex flex-wrap items-center -mx-3">
                    <li class="px-3 hidden md:block">
                      <a href="#" class="block py-2 px-6 w-full btn-primary rounded"
                        >予約する</a
                      >
                    </li>
                    <li class="px-3">
                      <SalonToggle />
                    </li>
                  </ul>
                  <p class="mt-6 text-right">
                    <nuxt-link
                      to="/salon/movie"
                      class="text-blue underline"
                    >
                      動画版はこちら
                    </nuxt-link>
                  </p>
                </span>
                <h1 class="text-3xl font-bold mt-6 mb-4">Stujio 渋谷</h1>
                <p class="mb-3">髪質改善のマスターサロン</p>
                <p>
                  <span class="inline-block align-middle">
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
                <p class="mb-6">
                  <span class="inline-block align-middle">
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
                <ul class="tag-lists">
                  <li><a href="#">似合わせカット</a></li>
                  <li><a href="#">髪質改善</a></li>
                  <li><a href="#">こだわりのトリートメント</a></li>
                </ul>
              </div>
            </div>
            <div class="bg-white">
              <div class="flex flex-wrap justify-between">
                <button
                  class="w-1/4 text-black py-2 md:py-4 px-2 md:px-6 block hover:text-gray-600 focus:outline-none tab"
                  @click="isSelect('1')" v-bind:class="{'active': isActive === '1'}"
                >
                    トップ
                </button>
                <button
                  class="w-1/4 text-black py-2 md:py-4 px-2 md:px-6 block hover:text-gray-600 focus:outline-none tab"
                  @click="isSelect('2')" v-bind:class="{'active': isActive === '2'}"
                >
                  スタイル
                </button>
                <button
                  class="w-1/4 text-black py-2 md:py-4 px-2 md:px-6 block hover:text-gray-600 focus:outline-none tab"
                  @click="isSelect('3')" v-bind:class="{'active': isActive === '3'}"
                >
                  メニュー
                </button>
                <button
                  class="w-1/4 text-black py-2 md:py-4 px-2 md:px-6 block hover:text-gray-600 focus:outline-none tab"
                  @click="isSelect('4')" v-bind:class="{'active': isActive === '4'}"
                >
                  スタッフ
                </button>
              </div>
            </div>
          </div>
          <!-- //salon-head -->
        </div>
        <!-- //container -->
      </article>

      <article class="salon-contents">
        <div
          class="container max-w-full mx-auto lg:px-56 md:px-16 px-0 mt-2 md:mt-12"
        >
          <article
            class="tab-content"
            v-if="isActive === '1'"
          >
            <section class="px-0 md:px-8 py-6 bg-white rounded-lg">
              <h3 class="text-lg font-bold mb-4 md:mb-6 px-4 md:px-0">スタイル</h3>
              <ul
                class="flex flex-wrap md:flex-nowrap relative md:overflow-scroll"
              >
                <li class="relative w-4/12 z-0 style-item">
                  <StyleToggle />
                  <nuxt-link
                    to="style"
                    class="block w-full h-full hover:opacity-80"
                    append
                  >
                    <img src="~/assets/images/thumb_01.jpg" alt="" />
                  </nuxt-link>
                </li>
                <li class="relative w-4/12 z-0 style-item">
                  <StyleToggle />
                  <nuxt-link
                    to="style"
                    class="block w-full h-full hover:opacity-80"
                    append
                  >
                    <img src="~/assets/images/thumb_02.jpg" alt="" />
                  </nuxt-link>
                </li>
                <li class="relative w-4/12 z-0 style-item">
                  <StyleToggle />
                  <nuxt-link
                    to="style"
                    class="block w-full h-full hover:opacity-80"
                    append
                  >
                    <img src="~/assets/images/thumb_03.jpg" alt="" />
                  </nuxt-link>
                </li>
                <li class="relative w-4/12 z-0 style-item">
                  <StyleToggle />
                  <nuxt-link
                    to="style"
                    class="block w-full h-full hover:opacity-80"
                    append
                  >
                    <img src="~/assets/images/thumb_04.jpg" alt="" />
                  </nuxt-link>
                </li>
                <li class="relative w-4/12 z-0 style-item">
                  <StyleToggle />
                  <nuxt-link
                    to="style"
                    class="block w-full h-full hover:opacity-80"
                    append
                  >
                    <img src="~/assets/images/thumb_05.jpg" alt="" />
                  </nuxt-link>
                </li>
                <li class="relative w-4/12 z-0 style-item">
                  <StyleToggle />
                  <nuxt-link
                    to="style"
                    class="block w-full h-full hover:opacity-80"
                    append
                  >
                    <img src="~/assets/images/thumb_06.jpg" alt="" />
                  </nuxt-link>
                </li>
                <li class="relative w-4/12 z-0 style-item">
                  <StyleToggle />
                  <nuxt-link
                    to="style"
                    class="block w-full h-full hover:opacity-80"
                    append
                  >
                    <img src="~/assets/images/thumb_07.jpg" alt="" />
                  </nuxt-link>
                </li>
                <li class="relative w-4/12 z-0 style-item">
                  <StyleToggle />
                  <nuxt-link
                    to="style"
                    class="block w-full h-full hover:opacity-80"
                    append
                  >
                    <img src="~/assets/images/thumb_08.jpg" alt="" />
                  </nuxt-link>
                </li>
                <li class="relative w-4/12 z-0 style-item">
                  <StyleToggle />
                  <nuxt-link
                    to="style"
                    class="block w-full h-full hover:opacity-80"
                    append
                  >
                    <img src="~/assets/images/thumb_09.jpg" alt="" />
                  </nuxt-link>
                </li>
              </ul>
              <p class="text-center mt-6">
                <span
                  class="block font-bold text-beige-900 cursor-pointer"
                  @click="isSelect('2')" v-bind:class="{'active': isActive === '2'}"
                  >すべてのスタイルを見る</span
                >
              </p>
            </section>
            <!-- //section-contents -->

            <section
              class="px-4 md:px-8 py-6 bg-white rounded-lg mt-2 md:mt-8"
            >
              <h3 class="text-lg font-bold mb-4 md:mb-6">サロンの雰囲気</h3>
              <ul class="md:flex flex-wrap relative -mx-2 hidden">
                <li class="w-96 md:w-1/3 px-2">
                  <img src="~/assets/images/ambience_01.jpg" alt="" />
                </li>
                <li class="w-96 md:w-1/3 px-2">
                  <img src="~/assets/images/ambience_02.jpg" alt="" />
                </li>
                <li class="w-96 md:w-1/3 px-2">
                  <img src="~/assets/images/ambience_01.jpg" alt="" />
                </li>
              </ul>
              <!-- //PC -->
              <div class="flex flex-col items-center md:hidden">
                <div class="flex flex-col items-center">
                  <div
                    class="swiper swiper-salon flex overflow-x-scroll w-full -mx-1"
                  >
                    <img
                      class="w-full h-1/2 object-cover bg-gray px-1"
                      src="~/assets/images/ambience_01.jpg"
                      id="slide1"
                    />
                    <img
                      class="w-full h-1/2 object-cover bg-gray px-1"
                      src="~/assets/images/ambience_02.jpg"
                      id="slide2"
                    />
                    <img
                      class="w-full h-1/2 object-cover bg-gray px-1"
                      src="~/assets/images/ambience_01.jpg"
                      id="slide3"
                    />
                  </div>
                </div>
                <div class="flex mt-2">
                  <a
                    href="#slide1"
                    class="w-2 h-2 mx-1 bg-gray rounded-full"
                  ></a>
                  <a
                    href="#slide2"
                    class="w-2 h-2 mx-1 bg-gray rounded-full"
                  ></a>
                  <a
                    href="#slide3"
                    class="w-2 h-2 mx-1 bg-gray rounded-full"
                  ></a>
                </div>
              </div>
              <!-- //SP -->
            </section>
            <!-- //section-contents -->

            <section
              class="px-4 md:px-8 py-6 bg-white rounded-lg mt-2 md:mt-8"
            >
              <h3 class="text-lg font-bold mb-4 md:mb-6">こだわり</h3>
              <ul class="flex flex-wrap relative -mx-2">
                <li class="w-full md:w-1/3 px-2">
                  <div class="flex">
                    <div
                      class="relative md:w-full h-auto overflow-hidden commit-thumb"
                    >
                      <img src="~/assets/images/commit_01.jpg" alt="" />
                    </div>
                    <div class="flex flex-col pl-4 md:hidden">
                      <h3 class="text-sm font-bold mb-1">
                        水分量を増やして潤いある髪に
                      </h3>
                      <p class="text-xs">
                        水素トリートメントで、髪の内部から水素と酸素で水を発生させます。クセのない髪を導きます。
                      </p>
                    </div>
                  </div>
                </li>
                <li class="w-full md:w-1/3 px-2 mt-4 md:mt-0">
                  <div class="flex">
                    <div
                      class="relative md:w-full h-auto overflow-hidden commit-thumb"
                    >
                      <img src="~/assets/images/commit_02.jpg" alt="" />
                    </div>
                    <div class="flex flex-col pl-4 md:hidden">
                      <h3 class="text-sm font-bold mb-1">
                        水素クレンジングで汚れを除去
                      </h3>
                      <p class="text-xs">
                        毛穴に詰まった汚れを取り除いてクセのない髪を導きます。
                      </p>
                    </div>
                  </div>
                </li>
                <li class="w-full md:w-1/3 px-2 mt-4 md:mt-0">
                  <div class="flex">
                    <div
                      class="relative md:w-full h-auto overflow-hidden commit-thumb"
                    >
                      <img src="~/assets/images/commit_03.jpg" alt="" />
                    </div>
                    <div class="flex flex-col pl-4 md:hidden">
                      <h3 class="text-sm font-bold mb-1">抜群のアクセス</h3>
                      <p class="text-xs">
                        明治神宮前、渋谷駅から徒歩5分の場所で最新の髪質改善をお試しください。
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
              <p class="text-center mt-6">
                <nuxt-link
                  to="commit"
                  class="font-bold text-beige-900"
                  append
                >
                詳しく見る
                </nuxt-link>
              </p>
            </section>
            <!-- //section-contents -->

            <section
              class="px-4 md:px-8 py-6 bg-white rounded-lg mt-2 md:mt-8"
            >
              <h3 class="text-lg font-bold mb-4 md:mb-6">メニュー</h3>
              <ul class="w-full md:w-10/12 flex flex-wrap relative mx-auto">
                <li class="w-full px-0 md:px-4">
                  <div class="flex flex-wrap rounded shadow p-2 thumb-card">
                    <div class="overflow-hidden rounded-lg thumb-card__thumb">
                      <img
                        src="~/assets/images/thumb_01.jpg"
                        class="w-full object-cover object-center"
                        alt=""
                      />
                    </div>
                    <div
                      class="relative flex flex-col font-bold thumb-card__col"
                    >
                      <span class="block text-xs mb-1 text-beige-900"
                        >カット トリートメント</span
                      >
                      <h3 class="text-sm mb-1">
                        この仕上がりに驚いてください
                        ■水素トリートメント贅沢コース■
                      </h3>
                      <p class="text-xs font-normal hidden md:block">
                        カット＋カラー＋水素トリートメント<br />
                        ＊シャンプーブロー込<br />
                        ＊ロング料金なし
                      </p>
                      <p class="text-sm mt-auto mb-0 md:mt-2 md:mb-1">
                        ¥24,200（税込）
                      </p>
                      <p class="absolute bottom-0 right-0 text-xs">
                        <a href="#" class="inline-block py-2 px-6 btn-primary rounded"
                          >予約</a
                        >
                      </p>
                    </div>
                  </div>
                </li>
                <li class="w-full px-0 md:px-4 mt-6">
                  <div class="flex flex-wrap rounded shadow p-2 thumb-card">
                    <div class="overflow-hidden rounded-lg thumb-card__thumb">
                      <img
                        src="~/assets/images/thumb_02.jpg"
                        class="w-full object-cover object-center"
                        alt=""
                      />
                    </div>
                    <div
                      class="relative flex flex-col font-bold thumb-card__col"
                    >
                      <span class="block text-xs mb-1 text-beige-900"
                        >カット トリートメント</span
                      >
                      <h3 class="text-sm mb-1">
                        この仕上がりに驚いてください
                        ■水素トリートメント贅沢コース■
                      </h3>
                      <p class="text-xs font-normal hidden md:block">
                        カット＋カラー＋水素トリートメント<br />
                        ＊シャンプーブロー込<br />
                        ＊ロング料金なし
                      </p>
                      <p class="text-sm mt-auto mb-0 md:mt-2 md:mb-1">
                        ¥24,200（税込）
                      </p>
                      <p class="absolute bottom-0 right-0 text-xs">
                        <a href="#" class="inline-block py-2 px-6 btn-primary rounded"
                          >予約</a
                        >
                      </p>
                    </div>
                  </div>
                </li>
                <li class="w-full px-0 md:px-4 mt-6">
                  <div class="flex flex-wrap rounded shadow p-2 thumb-card">
                    <div class="overflow-hidden rounded-lg thumb-card__thumb">
                      <img
                        src="~/assets/images/thumb_03.jpg"
                        class="w-full object-cover object-center"
                        alt=""
                      />
                    </div>
                    <div
                      class="relative flex flex-col font-bold thumb-card__col"
                    >
                      <span class="block text-xs mb-1 text-beige-900"
                        >カット トリートメント</span
                      >
                      <h3 class="text-sm mb-1">
                        この仕上がりに驚いてください
                        ■水素トリートメント贅沢コース■
                      </h3>
                      <p class="text-xs font-normal hidden md:block">
                        カット＋カラー＋水素トリートメント<br />
                        ＊シャンプーブロー込<br />
                        ＊ロング料金なし
                      </p>
                      <p class="text-sm mt-auto mb-0 md:mt-2 md:mb-1">
                        ¥24,200（税込）
                      </p>
                      <p class="absolute bottom-0 right-0 text-xs">
                        <a href="#" class="inline-block py-2 px-6 btn-primary rounded"
                          >予約</a
                        >
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
              <p class="text-center mt-6">
                <span
                  class="block font-bold text-beige-900 cursor-pointer"
                  @click="isSelect('3')" v-bind:class="{'active': isActive === '3'}"
                  >すべてのメニューを見る</span
                >
              </p>
            </section>
            <!-- //section-contents -->

            <section
              class="px-4 md:px-8 py-6 bg-white rounded-lg mt-2 md:mt-8"
            >
              <h3 class="text-lg font-bold mb-4 md:mb-6">店舗情報</h3>
              <div class="flex flex-wrap relative -mx-2">
                <div
                  class="w-full md:w-1/3 px-2 relative overflow-hidden gmap"
                >
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1620.760555205003!2d139.7028260055259!3d35.664168697960626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188ca65c33bf11%3A0x685f25202fa06ab0!2z44K544K_44K444Kq!5e0!3m2!1sja!2sjp!4v1609991104722!5m2!1sja!2sjp"
                    width="600"
                    height="450"
                    frameborder="0"
                    style="border: 0"
                    allowfullscreen=""
                    aria-hidden="false"
                    tabindex="0"
                  ></iframe>
                </div>
                <div class="w-full md:w-2/3 px-2 mt-4 md:mt-0">
                  <dl>
                    <dt class="font-bold mb-1">TEL</dt>
                    <dd class="mb-6">
                      <p class="m-0">
                        <a
                          class="inline-block py-2 px-8 text-center text-black text-base font-bold border-2 border-gray-200 rounded"
                          href="#"
                        >
                          <span class="inline-block align-bottom">
                            <svg
                              width="24"
                              height="25"
                              viewBox="0 0 20 21"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M16.0245 13.2166L13.9079 12.975C13.3995 12.9166 12.8995 13.0916 12.5412 13.45L11.0079 14.9833C8.64955 13.7833 6.71621 11.8583 5.51621 9.49163L7.05788 7.94997C7.41621 7.59163 7.59121 7.09163 7.53288 6.5833L7.29121 4.4833C7.19121 3.64163 6.48288 3.0083 5.63288 3.0083H4.19121C3.24955 3.0083 2.46621 3.79163 2.52455 4.7333C2.96621 11.85 8.65788 17.5333 15.7662 17.975C16.7079 18.0333 17.4912 17.25 17.4912 16.3083V14.8666C17.4995 14.025 16.8662 13.3166 16.0245 13.2166Z"
                                fill="black"
                              />
                            </svg>
                          </span>
                          03-6434-0034
                        </a>
                      </p>
                    </dd>
                    <dt class="font-bold mb-1">住所</dt>
                    <dd class="mb-6">
                      <p class="m-0">
                        東京都渋谷区神宮前5-30-2　渋谷第一タカラビル101
                      </p>
                    </dd>
                    <dt class="font-bold mb-1">アクセス</dt>
                    <dd class="mb-6">
                      <p class="m-0">
                        1)【明治神宮前7番出口】出口を背に右方向。明治通りを渋谷方面に歩き1Fにファミリーマート2Fにバーミヤンがある所を左折、直進して少しのぼったところ<br />
                        2)【渋谷駅13番出口】を上がり明治通りを直進。斜め右に明治通りをそれてキャットストリートへ入り直進、右手に渋谷高校を過ぎ右折。ファミリーマートを左手に坂を上り、カフェを折り返して少し坂をくだった途中の1F、ウッドデッキの入り口。トランクホテル前
                      </p>
                    </dd>
                  </dl>
                  <div class="flex flex-wrap">
                    <dl class="w-full md:w-6/12">
                      <dt class="font-bold mb-1">営業時間</dt>
                      <dd class="mb-6">
                        <p class="m-0">
                          【平日】12:00～22:00<br />
                          【土日祝日】10:00～20:00
                        </p>
                      </dd>
                    </dl>
                    <dl class="w-full md:w-6/12">
                      <dt class="font-bold mb-1">定休日</dt>
                      <dd class="mb-6">
                        <p class="m-0">火曜日定休</p>
                      </dd>
                    </dl>
                    <dl class="w-full md:w-6/12">
                      <dt class="font-bold mb-1">対応クレジットカード</dt>
                      <dd class="mb-6">
                        <p class="m-0">VISA、Master、JCB、Amex、Diners</p>
                      </dd>
                    </dl>
                    <dl class="w-full md:w-6/12">
                      <dt class="font-bold mb-1">対応電子マネー</dt>
                      <dd class="mb-6">
                        <p class="m-0">対応なし</p>
                      </dd>
                    </dl>
                    <dl class="w-full md:w-6/12">
                      <dt class="font-bold mb-1">設備</dt>
                      <dd class="mb-6">
                        <p class="m-0">キッズスペースあり、お子様同伴可</p>
                      </dd>
                    </dl>
                    <dl class="w-full md:w-6/12">
                      <dt class="font-bold mb-1">接客</dt>
                      <dd class="mb-6">
                        <p class="m-0">
                          男性スタッフが多い、マンツーマン施術
                        </p>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </section>
            <!-- //section-contents -->

            <section class="px-8 py-6 bg-white rounded-lg mt-2 md:mt-8">
              <h3 class="text-lg font-bold mb-4 md:mb-6">採用情報</h3>
              <p class="m-0">
                <a
                  class="block py-4 text-center text-black text-base font-bold tracking-wider border-2 border-gray-200 rounded"
                  href="#"
                  >採用情報はこちら</a
                >
              </p>
            </section>
          </article>
          <!-- //top -->

          <article
            class="tab-content"
            v-if="isActive === '2'"
          >
            <section class="px-0 md:px-8 py-6 bg-white rounded-lg">
              <h3 class="text-lg font-bold mb-4 md:mb-6 px-4 md:px-0">スタイル</h3>
              <ul class="tag-lists px-4 md:px-0 scroll">
                <li>
                  <a href="#" class="whitespace-nowrap selected">すべて</a>
                </li>
                <li>
                  <a href="#" class="whitespace-nowrap bg-gray">ショート</a>
                </li>
                <li>
                  <a href="#" class="whitespace-nowrap bg-gray">ボブ</a>
                </li>
                <li>
                  <a href="#" class="whitespace-nowrap bg-gray">ミディアム</a>
                </li>
                <li>
                  <a href="#" class="whitespace-nowrap bg-gray">ロング</a>
                </li>
              </ul>
              <ul class="flex flex-wrap relative mt-4">
                <li class="relative w-4/12 z-0 style-item">
                  <StyleToggle />
                  <nuxt-link
                    to="style"
                    class="block w-full h-full hover:opacity-80"
                    append
                  >
                    <img src="~/assets/images/thumb_01.jpg" alt="" />
                  </nuxt-link>
                </li>
                <li class="relative w-4/12 z-0 style-item">
                  <StyleToggle />
                  <nuxt-link
                    to="style"
                    class="block w-full h-full hover:opacity-80"
                    append
                  >
                    <img src="~/assets/images/thumb_02.jpg" alt="" />
                  </nuxt-link>
                </li>
                <li class="relative w-4/12 z-0 style-item">
                  <StyleToggle />
                  <nuxt-link
                    to="style"
                    class="block w-full h-full hover:opacity-80"
                    append
                  >
                    <img src="~/assets/images/thumb_03.jpg" alt="" />
                  </nuxt-link>
                </li>
                <li class="relative w-4/12 z-0 style-item">
                  <StyleToggle />
                  <nuxt-link
                    to="style"
                    class="block w-full h-full hover:opacity-80"
                    append
                  >
                    <img src="~/assets/images/thumb_04.jpg" alt="" />
                  </nuxt-link>
                </li>
                <li class="relative w-4/12 z-0 style-item">
                  <StyleToggle />
                  <nuxt-link
                    to="style"
                    class="block w-full h-full hover:opacity-80"
                    append
                  >
                    <img src="~/assets/images/thumb_05.jpg" alt="" />
                  </nuxt-link>
                </li>
                <li class="relative w-4/12 z-0 style-item">
                  <StyleToggle />
                  <nuxt-link
                    to="style"
                    class="block w-full h-full hover:opacity-80"
                    append
                  >
                    <img src="~/assets/images/thumb_06.jpg" alt="" />
                  </nuxt-link>
                </li>
                <li class="relative w-4/12 z-0 style-item">
                  <StyleToggle />
                  <nuxt-link
                    to="style"
                    class="block w-full h-full hover:opacity-80"
                    append
                  >
                    <img src="~/assets/images/thumb_07.jpg" alt="" />
                  </nuxt-link>
                </li>
                <li class="relative w-4/12 z-0 style-item">
                  <StyleToggle />
                  <nuxt-link
                    to="style"
                    class="block w-full h-full hover:opacity-80"
                    append
                  >
                    <img src="~/assets/images/thumb_08.jpg" alt="" />
                  </nuxt-link>
                </li>
                <li class="relative w-4/12 z-0 style-item">
                  <StyleToggle />
                  <nuxt-link
                    to="style"
                    class="block w-full h-full hover:opacity-80"
                    append
                  >
                    <img src="~/assets/images/thumb_09.jpg" alt="" />
                  </nuxt-link>
                </li>
                <li class="relative w-4/12 z-0 style-item">
                  <StyleToggle />
                  <nuxt-link
                    to="style"
                    class="block w-full h-full hover:opacity-80"
                    append
                  >
                    <img src="~/assets/images/thumb_01.jpg" alt="" />
                  </nuxt-link>
                </li>
                <li class="relative w-4/12 z-0 style-item">
                  <StyleToggle />
                  <nuxt-link
                    to="style"
                    class="block w-full h-full hover:opacity-80"
                    append
                  >
                    <img src="~/assets/images/thumb_02.jpg" alt="" />
                  </nuxt-link>
                </li>
                <li class="relative w-4/12 z-0 style-item">
                  <StyleToggle />
                  <nuxt-link
                    to="style"
                    class="block w-full h-full hover:opacity-80"
                    append
                  >
                    <img src="~/assets/images/thumb_03.jpg" alt="" />
                  </nuxt-link>
                </li>
                <li class="relative w-4/12 z-0 style-item">
                  <StyleToggle />
                  <nuxt-link
                    to="style"
                    class="block w-full h-full hover:opacity-80"
                    append
                  >
                    <img src="~/assets/images/thumb_04.jpg" alt="" />
                  </nuxt-link>
                </li>
                <li class="relative w-4/12 z-0 style-item">
                  <StyleToggle />
                  <nuxt-link
                    to="style"
                    class="block w-full h-full hover:opacity-80"
                    append
                  >
                    <img src="~/assets/images/thumb_05.jpg" alt="" />
                  </nuxt-link>
                </li>
                <li class="relative w-4/12 z-0 style-item">
                  <StyleToggle />
                  <nuxt-link
                    to="style"
                    class="block w-full h-full hover:opacity-80"
                    append
                  >
                    <img src="~/assets/images/thumb_06.jpg" alt="" />
                  </nuxt-link>
                </li>
                <li class="relative w-4/12 z-0 style-item">
                  <StyleToggle />
                  <nuxt-link
                    to="style"
                    class="block w-full h-full hover:opacity-80"
                    append
                  >
                    <img src="~/assets/images/thumb_07.jpg" alt="" />
                  </nuxt-link>
                </li>
                <li class="relative w-4/12 z-0 style-item">
                  <StyleToggle />
                  <nuxt-link
                    to="style"
                    class="block w-full h-full hover:opacity-80"
                    append
                  >
                    <img src="~/assets/images/thumb_08.jpg" alt="" />
                  </nuxt-link>
                </li>
                <li class="relative w-4/12 z-0 style-item">
                  <StyleToggle />
                  <nuxt-link
                    to="style"
                    class="block w-full h-full hover:opacity-80"
                    append
                  >
                    <img src="~/assets/images/thumb_09.jpg" alt="" />
                  </nuxt-link>
                </li>
                <li class="relative w-4/12 z-0 style-item">
                  <StyleToggle />
                  <nuxt-link
                    to="style"
                    class="block w-full h-full hover:opacity-80"
                    append
                  >
                    <img src="~/assets/images/thumb_01.jpg" alt="" />
                  </nuxt-link>
                </li>
                <li class="relative w-4/12 z-0 style-item">
                  <StyleToggle />
                  <nuxt-link
                    to="style"
                    class="block w-full h-full hover:opacity-80"
                    append
                  >
                    <img src="~/assets/images/thumb_02.jpg" alt="" />
                  </nuxt-link>
                </li>
                <li class="relative w-4/12 z-0 style-item">
                  <StyleToggle />
                  <nuxt-link
                    to="style"
                    class="block w-full h-full hover:opacity-80"
                    append
                  >
                    <img src="~/assets/images/thumb_03.jpg" alt="" />
                  </nuxt-link>
                </li>
                <li class="relative w-4/12 z-0 style-item">
                  <StyleToggle />
                  <nuxt-link
                    to="style"
                    class="block w-full h-full hover:opacity-80"
                    append
                  >
                    <img src="~/assets/images/thumb_04.jpg" alt="" />
                  </nuxt-link>
                </li>
                <li class="relative w-4/12 z-0 style-item">
                  <StyleToggle />
                  <nuxt-link
                    to="style"
                    class="block w-full h-full hover:opacity-80"
                    append
                  >
                    <img src="~/assets/images/thumb_05.jpg" alt="" />
                  </nuxt-link>
                </li>
                <li class="relative w-4/12 z-0 style-item">
                  <StyleToggle />
                  <nuxt-link
                    to="style"
                    class="block w-full h-full hover:opacity-80"
                    append
                  >
                    <img src="~/assets/images/thumb_06.jpg" alt="" />
                  </nuxt-link>
                </li>
                <li class="relative w-4/12 z-0 style-item">
                  <StyleToggle />
                  <nuxt-link
                    to="style"
                    class="block w-full h-full hover:opacity-80"
                    append
                  >
                    <img src="~/assets/images/thumb_07.jpg" alt="" />
                  </nuxt-link>
                </li>
              </ul>
            </section>
            <!-- //section-content -->
          </article>
          <!-- //style -->

          <article
            class="tab-content"
            v-if="isActive === '3'"
          >
            <section
              class="px-4 md:px-8 py-6 bg-white rounded-lg mt-2 md:mt-8"
            >
              <h3 class="text-lg font-bold mb-4 md:mb-6">おすすめメニュー</h3>
              <ul class="w-full md:w-10/12 flex flex-wrap relative mx-auto">
                <li class="w-full px-0 md:px-4">
                  <div class="flex flex-wrap rounded shadow p-2 thumb-card">
                    <div class="overflow-hidden rounded-lg thumb-card__thumb">
                      <img
                        src="~/assets/images/thumb_01.jpg"
                        class="w-full object-cover object-center"
                        alt=""
                      />
                    </div>
                    <div
                      class="relative flex flex-col font-bold thumb-card__col"
                    >
                      <span class="block text-xs mb-1 text-beige-900"
                        >カット トリートメント</span
                      >
                      <h3 class="text-sm mb-1">
                        この仕上がりに驚いてください
                        ■水素トリートメント贅沢コース■
                      </h3>
                      <p class="text-xs font-normal hidden md:block">
                        カット＋カラー＋水素トリートメント<br />
                        ＊シャンプーブロー込<br />
                        ＊ロング料金なし
                      </p>
                      <p class="text-sm mt-auto mb-0 md:mt-2 md:mb-1">
                        ¥24,200（税込）
                      </p>
                      <p class="absolute bottom-0 right-0 text-xs">
                        <a href="#" class="inline-block py-2 px-6 btn-primary rounded"
                          >予約</a
                        >
                      </p>
                    </div>
                  </div>
                </li>
                <li class="w-full px-0 md:px-4 mt-6">
                  <div class="flex flex-wrap rounded shadow p-2 thumb-card">
                    <div class="overflow-hidden rounded-lg thumb-card__thumb">
                      <img
                        src="~/assets/images/thumb_02.jpg"
                        class="w-full object-cover object-center"
                        alt=""
                      />
                    </div>
                    <div
                      class="relative flex flex-col font-bold thumb-card__col"
                    >
                      <span class="block text-xs mb-1 text-beige-900"
                        >カット トリートメント</span
                      >
                      <h3 class="text-sm mb-1">
                        この仕上がりに驚いてください
                        ■水素トリートメント贅沢コース■
                      </h3>
                      <p class="text-xs font-normal hidden md:block">
                        カット＋カラー＋水素トリートメント<br />
                        ＊シャンプーブロー込<br />
                        ＊ロング料金なし
                      </p>
                      <p class="text-sm mt-auto mb-0 md:mt-2 md:mb-1">
                        ¥24,200（税込）
                      </p>
                      <p class="absolute bottom-0 right-0 text-xs">
                        <a href="#" class="inline-block py-2 px-6 btn-primary rounded"
                          >予約</a
                        >
                      </p>
                    </div>
                  </div>
                </li>
                <li class="w-full px-0 md:px-4 mt-6">
                  <div class="flex flex-wrap rounded shadow p-2 thumb-card">
                    <div class="overflow-hidden rounded-lg thumb-card__thumb">
                      <img
                        src="~/assets/images/thumb_03.jpg"
                        class="w-full object-cover object-center"
                        alt=""
                      />
                    </div>
                    <div
                      class="relative flex flex-col font-bold thumb-card__col"
                    >
                      <span class="block text-xs mb-1 text-beige-900"
                        >カット トリートメント</span
                      >
                      <h3 class="text-sm mb-1">
                        この仕上がりに驚いてください
                        ■水素トリートメント贅沢コース■
                      </h3>
                      <p class="text-xs font-normal hidden md:block">
                        カット＋カラー＋水素トリートメント<br />
                        ＊シャンプーブロー込<br />
                        ＊ロング料金なし
                      </p>
                      <p class="text-sm mt-auto mb-0 md:mt-2 md:mb-1">
                        ¥24,200（税込）
                      </p>
                      <p class="absolute bottom-0 right-0 text-xs">
                        <a href="#" class="inline-block py-2 px-6 btn-primary rounded"
                          >予約</a
                        >
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </section>
            <!-- //section-contents -->

            <section
              class="px-4 md:px-8 py-6 bg-white rounded-lg mt-2 md:mt-8"
            >
              <h3 class="text-lg font-bold mb-4 md:mb-6">ベーシックメニュー</h3>
              <ul class="w-full md:w-10/12 flex flex-wrap relative mx-auto">
                <li class="w-full px-0 md:px-4">
                  <div class="flex flex-wrap rounded shadow thumb-card">
                    <div
                      class="relative flex flex-col p-2 font-bold thumb-card__base"
                    >
                      <span class="block text-xs mb-1 text-beige-900">カット</span>
                      <h3 class="text-sm mb-1">カット</h3>
                      <p class="text-xs font-normal">＊シャンプーブロー込</p>
                      <p class="text-sm mt-2 mb-1">¥6,480（税込）</p>
                      <p class="absolute bottom-2 right-2 text-xs">
                        <a href="#" class="inline-block py-2 px-6 btn-primary rounded"
                          >予約</a
                        >
                      </p>
                    </div>
                  </div>
                </li>
                <li class="w-full px-0 md:px-4 mt-6">
                  <div class="flex flex-wrap rounded shadow thumb-card">
                    <div
                      class="relative flex flex-col p-2 font-bold thumb-card__base"
                    >
                      <span class="block text-xs mb-1 text-beige-900">カラー</span>
                      <h3 class="text-sm mb-1">ワンメイクカラー</h3>
                      <p class="text-xs font-normal">＊シャンプーブロー込</p>
                      <p class="text-sm mt-2 mb-1">¥7,560〜¥8,640（税込）</p>
                      <p class="absolute bottom-2 right-2 text-xs">
                        <a href="#" class="inline-block py-2 px-6 btn-primary rounded"
                          >予約</a
                        >
                      </p>
                    </div>
                  </div>
                </li>
                <li class="w-full px-0 md:px-4 mt-6">
                  <div class="flex flex-wrap rounded shadow thumb-card">
                    <div
                      class="relative flex flex-col p-2 font-bold thumb-card__base"
                    >
                      <span class="block text-xs mb-1 text-beige-900">カラー</span>
                      <h3 class="text-sm mb-1">リタッチカラー</h3>
                      <p class="text-xs font-normal">＊シャンプーブロー込</p>
                      <p class="text-sm mt-2 mb-1">¥6,480〜¥8,640（税込）</p>
                      <p class="absolute bottom-2 right-2 text-xs">
                        <a href="#" class="inline-block py-2 px-6 btn-primary rounded"
                          >予約</a
                        >
                      </p>
                    </div>
                  </div>
                </li>
                <li class="w-full px-0 md:px-4 mt-6">
                  <div class="flex flex-wrap rounded shadow thumb-card">
                    <div
                      class="relative flex flex-col p-2 font-bold thumb-card__base"
                    >
                      <span class="block text-xs mb-1 text-beige-900">カット</span>
                      <h3 class="text-sm mb-1">カット</h3>
                      <p class="text-xs font-normal">＊シャンプーブロー込</p>
                      <p class="text-sm mt-2 mb-1">¥6,480（税込）</p>
                      <p class="absolute bottom-2 right-2 text-xs">
                        <a href="#" class="inline-block py-2 px-6 btn-primary rounded"
                          >予約</a
                        >
                      </p>
                    </div>
                  </div>
                </li>
                <li class="w-full px-0 md:px-4 mt-6">
                  <div class="flex flex-wrap rounded shadow thumb-card">
                    <div
                      class="relative flex flex-col p-2 font-bold thumb-card__base"
                    >
                      <span class="block text-xs mb-1 text-beige-900">カラー</span>
                      <h3 class="text-sm mb-1">ワンメイクカラー</h3>
                      <p class="text-xs font-normal">＊シャンプーブロー込</p>
                      <p class="text-sm mt-2 mb-1">¥7,560〜¥8,640（税込）</p>
                      <p class="absolute bottom-2 right-2 text-xs">
                        <a href="#" class="inline-block py-2 px-6 btn-primary rounded"
                          >予約</a
                        >
                      </p>
                    </div>
                  </div>
                </li>
                <li class="w-full px-0 md:px-4 mt-6">
                  <div class="flex flex-wrap rounded shadow thumb-card">
                    <div
                      class="relative flex flex-col p-2 font-bold thumb-card__base"
                    >
                      <span class="block text-xs mb-1 text-beige-900">カラー</span>
                      <h3 class="text-sm mb-1">リタッチカラー</h3>
                      <p class="text-xs font-normal">＊シャンプーブロー込</p>
                      <p class="text-sm mt-2 mb-1">¥6,480〜¥8,640（税込）</p>
                      <p class="absolute bottom-2 right-2 text-xs">
                        <a href="#" class="inline-block py-2 px-6 btn-primary rounded"
                          >予約</a
                        >
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </section>
            <!-- //section-contents -->
          </article>
          <!-- //menu -->

          <article
            class="tab-content"
            v-if="isActive === '4'"
          >
            <section class="px-4 md:px-8 py-6 bg-white rounded-lg">
              <h3 class="text-lg font-bold mb-4 md:mb-6">スタッフ</h3>
              <ul class="w-full md:w-10/12 flex flex-wrap relative mx-auto">
                <li class="w-full px-0 md:px-4">
                  <nuxt-link
                    to="staff"
                    class="block w-full h-full"
                    append
                  >
                    <div class="flex flex-wrap rounded shadow p-2 thumb-card">
                      <div
                        class="overflow-hidden rounded-lg thumb-card__thumb staff-thumb"
                      >
                        <img
                          src="~/assets/images/staff_01.jpg"
                          class="w-full object-cover object-center staff"
                          alt=""
                        />
                      </div>
                      <div
                        class="relative flex flex-col font-bold thumb-card__col"
                      >
                        <span class="block text-xs mb-1 text-beige-900">店長</span>
                        <h3 class="text-base mb-1">樋口 希世　Kiyo Higuchi</h3>
                        <p class="text-xs font-normal">
                          宮崎出身 O型<br />
                          子供の頃から美容室という場所が大好きで、そんな大好きな場所で日々過ごせる事に幸せを感じています☆
                        </p>
                        <p class="text-xs font-normal my-2">
                          ※指名料金：¥1,080（税込）
                        </p>
                        <p class="text-xs text-right">
                          <a href="#" class="inline-block py-2 px-6 btn-primary rounded"
                            >指名予約</a
                          >
                        </p>
                      </div>
                    </div>
                  </nuxt-link>
                </li>
                <li class="w-full px-0 md:px-4 mt-6">
                  <nuxt-link
                    to="staff"
                    class="block w-full h-full"
                    append
                  >
                    <div class="flex flex-wrap rounded shadow p-2 thumb-card">
                      <div
                        class="overflow-hidden rounded-lg thumb-card__thumb staff-thumb"
                      >
                        <img
                          src="~/assets/images/staff_02.jpg"
                          class="w-full object-cover object-center staff"
                          alt=""
                        />
                      </div>
                      <div
                        class="relative flex flex-col font-bold thumb-card__col"
                      >
                        <span class="block text-xs mb-1 text-beige-900">店長</span>
                        <h3 class="text-base mb-1">樋口 希世　Kiyo Higuchi</h3>
                        <p class="text-xs font-normal">
                          宮崎出身 O型<br />
                          子供の頃から美容室という場所が大好きで、そんな大好きな場所で日々過ごせる事に幸せを感じています☆
                        </p>
                        <p class="text-xs font-normal my-2">
                          ※指名料金：¥1,080（税込）
                        </p>
                        <p class="text-xs text-right">
                          <a href="#" class="inline-block py-2 px-6 btn-primary rounded"
                            >指名予約</a
                          >
                        </p>
                      </div>
                    </div>
                  </nuxt-link>
                </li>
                <li class="w-full px-0 md:px-4 mt-6">
                  <nuxt-link
                    to="staff"
                    class="block w-full h-full"
                    append
                  >
                    <div class="flex flex-wrap rounded shadow p-2 thumb-card">
                      <div
                        class="overflow-hidden rounded-lg thumb-card__thumb staff-thumb"
                      >
                        <img
                          src="~/assets/images/staff_03.jpg"
                          class="w-full object-cover object-center staff"
                          alt=""
                        />
                      </div>
                      <div
                        class="relative flex flex-col font-bold thumb-card__col"
                      >
                        <span class="block text-xs mb-1 text-beige-900">店長</span>
                        <h3 class="text-base mb-1">樋口 希世　Kiyo Higuchi</h3>
                        <p class="text-xs font-normal">
                          宮崎出身 O型<br />
                          子供の頃から美容室という場所が大好きで、そんな大好きな場所で日々過ごせる事に幸せを感じています☆
                        </p>
                        <p class="text-xs font-normal my-2">
                          ※指名料金：¥1,080（税込）
                        </p>
                        <p class="text-xs text-right">
                          <a href="#" class="inline-block py-2 px-6 btn-primary rounded"
                            >指名予約</a
                          >
                        </p>
                      </div>
                    </div>
                  </nuxt-link>
                </li>
                <li class="w-full px-0 md:px-4 mt-6">
                  <nuxt-link
                    to="staff"
                    class="block w-full h-full"
                    append
                  >
                    <div class="flex flex-wrap rounded shadow p-2 thumb-card">
                      <div
                        class="overflow-hidden rounded-lg thumb-card__thumb staff-thumb"
                      >
                        <img
                          src="~/assets/images/staff_04.jpg"
                          class="w-full object-cover object-center staff"
                          alt=""
                        />
                      </div>
                      <div
                        class="relative flex flex-col font-bold thumb-card__col"
                      >
                        <span class="block text-xs mb-1 text-beige-900">店長</span>
                        <h3 class="text-base mb-1">樋口 希世　Kiyo Higuchi</h3>
                        <p class="text-xs font-normal">
                          宮崎出身 O型<br />
                          子供の頃から美容室という場所が大好きで、そんな大好きな場所で日々過ごせる事に幸せを感じています☆
                        </p>
                        <p class="text-xs font-normal my-2">
                          ※指名料金：¥1,080（税込）
                        </p>
                        <p class="text-xs text-right">
                          <a href="#" class="inline-block py-2 px-6 btn-primary rounded"
                            >指名予約</a
                          >
                        </p>
                      </div>
                    </div>
                  </nuxt-link>
                </li>
                <li class="w-full px-0 md:px-4 mt-6">
                  <nuxt-link
                    to="staff"
                    class="block w-full h-full"
                    append
                  >
                    <div class="flex flex-wrap rounded shadow p-2 thumb-card">
                      <div
                        class="overflow-hidden rounded-lg thumb-card__thumb staff-thumb"
                      >
                        <img
                          src="~/assets/images/staff_05.jpg"
                          class="w-full object-cover object-center staff"
                          alt=""
                        />
                      </div>
                      <div
                        class="relative flex flex-col font-bold thumb-card__col"
                      >
                        <span class="block text-xs mb-1 text-beige-900">店長</span>
                        <h3 class="text-base mb-1">樋口 希世　Kiyo Higuchi</h3>
                        <p class="text-xs font-normal">
                          宮崎出身 O型<br />
                          子供の頃から美容室という場所が大好きで、そんな大好きな場所で日々過ごせる事に幸せを感じています☆
                        </p>
                        <p class="text-xs font-normal mt-4 mb-2 md:my-2">
                          ※指名料金：¥1,080（税込）
                        </p>
                        <p class="text-xs text-right">
                          <a href="#" class="inline-block py-2 px-6 btn-primary rounded"
                            >指名予約</a
                          >
                        </p>
                      </div>
                    </div>
                  </nuxt-link>
                </li>
              </ul>
            </section>
            <!-- //section-contents -->
          </article>
          <!-- //staff -->

          <Relation />

          <div
            class="fixed bottom-0 right-0 left-0 pt-8 pb-6 px-4 salon-fixed md:hidden"
          >
            <p class="text-center"><a href="#" class="block py-2 btn-primary rounded">予約する</a></p>
          </div>
          <!-- //Fixed -->
        </div>
      </article>
      <!-- //salon-block -->
    </div>
  </div>
</template>

<script>
import Relation from "~/components/pages/Relation/Relation.vue";
import SalonToggle from "~/components/ui/Button/SalonToggle.vue";
import StyleToggle from "~/components/ui/Button/StyleToggle.vue";

export default {
  components: {
    Relation,
    SalonToggle,
    StyleToggle
  },
  data: function() {
    return {
      isActive: '1'
    }
  },
  methods: {
    isSelect: function (num) {
      this.isActive = num;
    }
  }
};
</script>
