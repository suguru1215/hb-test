<template>
  <div>
    <div class="bg-white salon-wrap">
      <div class="container max-w-full mx-auto lg:px-56 md:px-16 px-4 mt-16 md:mt-18">
        <section class="py-8 md:py-12">
          <span
            class="inline-block text-gold font-bold border-2 border-gold px-2 rounded"
            >サロンから</span
          >
          <h2 class="text-xl md:text-3xl my-6 font-bold">
            予約日程変更のお願い
          </h2>
          <div class="text-sm md:text-base">
            <p class="mb-6">
              お誕生日を控え、そろそろ美容室に足を運ぶ時期かと思い、ご連絡いたしました。<br />
              特別な一日を素敵なヘアで笑顔で過ごして頂けたらと思います♪
            </p>

            <p class="mb-6">
              *+Reir レイール 下北沢オススメのプランメニュー+*<br />
              《1》*+スペシャルプラン+*カラー+カット+ナノスチーム3StepTr¥9,720→¥7,000<br />
              《2》*+スペシャルプラン+*オーガニックデジタルパーマ+カット+3StepTr
              ¥14,040→¥10,000<br />
              《3》*+スペシャルプラン+*オーガニック縮毛矯正+カット+3StepTr
              ¥15,120→¥11,000
            </p>

            <p class="mb-6">
              経験豊富なスタッフが、季節×トレンドを盛り込み、<br />
              理想のイメージに合わせたご提案させていただきます。
            </p>

            <p class="mb-6">
              毎回使えて、何度でも同じ料金のオススメのプランメニューもご用意しておりますので、<br />
              クーポン、セットメニューをご覧くださいませ。
            </p>

            <p class="mb-6">
              幸せが、たくさん訪れる最高の一年になりますよう...☆<br />
              お会いできます事をスタッフ一同、心よりお待ちいたしております。
            </p>

            <p>
              【Rｅｉｒ レイール下北沢】<br />
              住所:東京都世田谷区北沢2-18-2 パインクレスト２F<br />
              TEL:03-6805-2877<br />
              各線下北沢駅、下北沢駅南西口 徒歩1分<br />
              AM9:00～PM22:00
            </p>
          </div>

          <p class="text-center mt-20">
            <a
              href="#"
              class="inline-block text-center mx-auto w-full md:w-96 h-12 bg-black hover:bg-blue-dark text-white font-bold py-2 px-4 rounded leading-7 tracking-wider"
              >マイページで予約を確認する</a
            >
          </p>
        </section>
        <!-- //section-contents -->
      </div>
      <!-- //container -->
    </div>
  </div>
</template>

<script>
export default {
  layout: 'back',
  head() {
    return {
      title: 'お知らせ'
    }
  },
  components: {

  },
  data(){
    return {
      header: {
        title: 'お知らせ'
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
