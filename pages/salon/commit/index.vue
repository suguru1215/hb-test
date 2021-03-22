<template>
  <div>
    <div class="salon-wrap">
      <article class="salon-contents">
        <div
          class="container max-w-full mx-auto lg:px-56 md:px-16 px-0 mt-10 md:mt-24"
        >
          <section class="px-0 md:px-8 py-6 bg-white rounded-lg">
            <div class="px-4 md:px-0">
              <h3 class="text-base mb-2 text-beige-900 font-bold">
                水分量を増やして潤いある髪に
              </h3>
              <h2 class="text-xl md:text-3xl mb-4 md:mb-6 font-bold">
                水素トリートメントで、髪の内部から水素と酸素で水を発生させます。
              </h2>
            </div>
            <ul class="w-full flex flex-wrap relative md:-mx-4">
              <li class="w-full px-0 md:w-2/4 md:px-4">
                <img src="~/assets/images/commit_01.jpg" alt="" />
              </li>
              <li class="w-full md:w-2/4 px-4 mt-4 md:mt-0">
                <p>
                  45.1％の日本人女性がくせ毛に悩んでいると言われています。縮毛矯正が髪の内部結合を切断し再結合するのに対し、水素トリートメント『ミネコラパーフェクト』は髪の結合を変えずに潤いで満たした"素髪"を取り戻します。
                </p>
              </li>
            </ul>
          </section>
          <!-- //section-contents -->

          <section class="px-0 md:px-8 py-6 bg-white rounded-lg mt-2 md:mt-8">
            <div class="px-4 md:px-0">
              <h3 class="text-base mb-2 text-beige-900 font-bold">
                水素クレンジングで汚れを除去
              </h3>
              <h2 class="text-xl md:text-3xl mb-4 md:mb-6 font-bold">
                毛穴に詰まった汚れを取り除いてクセのない髪を導きます。
              </h2>
            </div>
            <ul class="w-full flex flex-wrap relative md:-mx-4">
              <li class="w-full px-0 md:w-2/4 md:px-4">
                <img src="~/assets/images/commit_02.jpg" alt="" />
              </li>
              <li class="w-full md:w-2/4 px-4 mt-4 md:mt-0">
                <p>
                  油溶性の汚れを落とさずにいると、毛穴に詰まった汚れのせいでいびつな、うねりのある髪になってしまいますが多くの方が、油溶性の汚れを落としていません。シャンプー前に100％ホホバオイルが配合された水素クレンジングで油溶性の汚れを除去します。
                </p>
              </li>
            </ul>
          </section>
          <!-- //section-contents -->

          <section class="px-0 md:px-8 py-6 bg-white rounded-lg mt-2 md:mt-8">
            <div class="px-4 md:px-0">
              <h3 class="text-base mb-2 text-beige-900 font-bold">
                抜群のアクセス
              </h3>
              <h2 class="text-xl md:text-3xl mb-4 md:mb-6 font-bold">
                明治神宮前、渋谷駅徒歩5分の場所で最新の髪質改善をお試しください。
              </h2>
            </div>
            <ul class="w-full flex flex-wrap relative md:-mx-4">
              <li class="w-full px-0 md:w-2/4 md:px-4">
                <img src="~/assets/images/commit_03.jpg" alt="" />
              </li>
              <li class="w-full md:w-2/4 px-4 mt-4 md:mt-0">
                <p>
                  明治神宮前駅7番出口、渋谷駅13番出口から徒歩5分。
                  閑静な場所にあることからナチュラルで落ち着いたお客様に多くご来店いただいています。髪質改善、トリートメント効果でお悩みの方はぜひスタジオへお越しください。
                </p>
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
      title: 'こだわり詳細'
    }
  },
  components: {
    Relation
  },
  data(){
    return {
      header: {
        title: 'こだわり詳細'
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
