<template>
  <div>
    <div class="salon-wrap">
      <article class="bg-white pb-6 md:py-12">
        <div class="container max-w-full mx-auto lg:px-56 md:px-16 px-4">
          <p class="text-right mt-auto block md:hidden py-6">
            <a href="#" class="inline-flex py-3 px-4 leading-4 btn-primary rounded">
              <span class="inline-block align-top mr-2">
                <svg
                  width="14"
                  height="18"
                  viewBox="0 0 14 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 0H2C0.9 0 0.0100002 0.9 0.0100002 2L0 18L7 15L14 18V2C14 0.9 13.1 0 12 0ZM12 15L7 12.82L2 15V2H12V15Z"
                    fill="white"
                  />
                </svg>
              </span>
              <span class="inline-block">保存</span>
            </a>
          </p>
          <div class="flex flex-wrap -mx-4">
            <div class="w-9/12 md:w-2/12 px-4 mx-auto">
              <div id="style-img">
                <img src="~/assets/images/thumb_04.jpg" alt="" class="w-full" />
                <div class="thumb-list">
                  <ul class="flex w-full justify-center mt-4">
                    <li class="w-1/3 mx-2 overflow-hidden active">
                      <img
                        class="cursor-pointer h-100 object-cover active"
                        src="~/assets/images/thumb_04.jpg"
                        alt=""
                      />
                    </li>
                    <li class="w-1/3 mx-2 overflow-hidden">
                      <img
                        class="cursor-pointer h-100 object-cover"
                        src="~/assets/images/thumb_05.jpg"
                        alt=""
                      />
                    </li>
                    <li class="w-1/3 mx-2 overflow-hidden">
                      <img
                        class="cursor-pointer h-100 object-cover"
                        src="~/assets/images/thumb_04.jpg"
                        alt=""
                      />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="w-full md:w-10/12 flex flex-col px-4 mt-6 md:mt-0">
              <h3 class="text-xl font-bold pb-3 mb-3 border-b border-grey-light">
                『ミネコラパーフェクト』
              </h3>
              <dl
                class="text-sm flex flex-wrap pb-3 mb-3 border-b border-grey-light"
              >
                <dt class="w-32 font-normal">イメージ</dt>
                <dd>ナチュラル</dd>
              </dl>
              <dl
                class="text-sm flex flex-wrap pb-3 mb-3 border-b border-grey-light"
              >
                <dt class="w-32 font-normal">長さ</dt>
                <dd>ロング</dd>
              </dl>
              <dl
                class="text-sm flex flex-wrap pb-3 mb-3 border-b border-grey-light"
              >
                <dt class="w-32 font-normal">カラー</dt>
                <dd>ブラウン</dd>
              </dl>
              <p class="text-sm">
                ハーフドライ後、クリームをもみ込み、くしゅくしゅゆるパーマを出し毛先の動きをつけます☆
                前髪をかるく流したら完成！<br />
                重ためショートにふんわりなゆるパーマをかけ、くしゃっと柔らかさをプラス♪
              </p>
              <p class="text-sm text-right mt-auto hidden md:block">
                <a
                  href="#"
                  class="inline-block py-3 px-4 leading-4 btn-primary rounded"
                >
                  <span class="inline-block align-top mr-2">
                    <svg
                      width="14"
                      height="18"
                      viewBox="0 0 14 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 0H2C0.9 0 0.0100002 0.9 0.0100002 2L0 18L7 15L14 18V2C14 0.9 13.1 0 12 0ZM12 15L7 12.82L2 15V2H12V15Z"
                        fill="white"
                      />
                    </svg>
                  </span>
                  保存
                </a>
              </p>
            </div>
          </div>
        </div>
        <!-- //container -->
      </article>

      <article class="salon-contents">
        <div
          class="container max-w-full mx-auto lg:px-56 md:px-16 px-0 mt-0 md:mt-12"
        >
          <section class="px-4 md:px-8 py-6 bg-white rounded-lg mt-2 md:mt-0">
            <h3 class="text-lg font-bold mb-4 md:mb-6">スタッフ</h3>
            <ul class="w-full md:w-10/12 flex flex-wrap relative mx-auto">
              <li class="w-full px-0 md:px-4">
                <nuxt-link
                  to="staff"
                  class="block"
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
            </ul>
          </section>
          <!-- //section-contents -->

          <section class="px-4 md:px-8 py-6 bg-white rounded-lg mt-2 md:mt-8">
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
                      <a href="#" class="block py-2 px-6 btn-primary rounded">予約</a>
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
                      <a href="#" class="block py-2 px-6 btn-primary rounded">予約</a>
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </section>
          <!-- //section-contents -->

          <Relation />

        </div>
      </article>
      <!-- //salon-block -->
    </div>
  </div>
</template>

<script>
import Relation from "~/components/pages/Relation/Relation.vue";

export default {
  layout: 'back',
  head() {
    return {
      title: 'スタイル詳細'
    }
  },
  components: {
    Relation
  },
  data(){
    return {
      header: {
        title: 'スタイル詳細'
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
