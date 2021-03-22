<template>
  <div>
    <Hero />
    <article class="tag-recommend mt-8 md:mt-16">
      <section class="section-content">
        <div class="container max-w-full mx-auto lg:px-56 md:px-16 px-4">
          <div
            class="rounded-lg shadow-lg bg-white p-4 md:p-6 md:py-10 md:px-14"
          >
            <div class="flex flex-wrap justify-between">
              <h2 class="text-base md:text-xl mb-4 whitespace-nowrap">
                おすすめの得意メニュー
              </h2>
              <p class="text-sm md:text-base m-0 whitespace-nowrap">
                <a href="commitment_search.html" class="font-bold text-beige-900"
                  >もっと見る</a
                >
              </p>
            </div>
            <TagLists />
          </div>
        </div>
      </section>
      <!-- //commit -->
    </article>

    <article class="salon-recommend mt-8 md:mt-16">
      <div class="container max-w-full mx-auto lg:px-56 md:px-16 px-4">
        <h2 class="text-lg md:text-xl mb-4">
          サロンの得意なメニューから探す
        </h2>
        <section class="section-content">
          <h3 class="text-base md:text-lg mb-4">
            <span class="font-bold text-beige-900 mr-1">#パーマ</span>が得意なサロン
          </h3>
          <div class="flex justify-between -mx-2 overflow-scroll">
            <SalonCardS />
            <SalonCardS />
            <SalonCardS />
          </div>
          <!-- //cards -->
        </section>
        <!-- //section-content -->

        <section class="section-content mt-8 md:mt-12">
          <h3 class="text-base md:text-lg mb-4 font-normal">
            <span class="font-bold text-beige-900 mr-1">#こだわりのトリートメント</span
            >が得意なサロン
          </h3>
          <div class="flex justify-between -mx-2 overflow-scroll">
            <SalonCardS />
            <SalonCardS />
            <SalonCardS />
          </div>
          <!-- //cards -->
        </section>
        <!-- //section-content -->

        <section class="section-content mt-8 md:mt-12">
          <h3 class="text-base md:text-lg mb-4 font-normal">
            <span class="font-bold text-beige-900 mr-1">#ノンダメージ</span>が得意なサロン
          </h3>
          <div class="flex justify-between -mx-2 overflow-scroll">
            <SalonCardS />
            <SalonCardS />
            <SalonCardS />
          </div>
          <!-- //cards -->
        </section>
        <!-- //section-content -->
      </div>
    </article>
  </div>
</template>

<script>
import Hero from "~/components/pages/Hero/Hero.vue";
import TagLists from "~/components/ui/TagLists/TagLists.vue";
import SalonCardS from "~/components/ui/Cards/SalonCardS.vue";

export default {
  components: {
    Hero,
    TagLists,
    SalonCardS
  }
};
</script>
